import { createClient, SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

// IMPORTANT: Replace these with your actual Sanity project credentials
// Get them from: https://www.sanity.io/manage
export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "YOUR_PROJECT_ID", // e.g., "abc123xyz"
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true, // Set to false for real-time data during development
};

// Check if Sanity is configured
export const isSanityConfigured = sanityConfig.projectId !== "YOUR_PROJECT_ID" && sanityConfig.projectId.length > 0;

// Create the Sanity client only if configured
export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient(sanityConfig)
  : null;

// Image URL builder
const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    // Return a placeholder or empty object when Sanity is not configured
    return { url: () => "", width: () => ({ url: () => "", height: () => ({ url: () => "" }) }) };
  }
  return builder.image(source);
}

// Blog post type definition
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: SanityImageSource;
  body: any[]; // Portable Text content
  author: {
    name: string;
    image?: SanityImageSource;
  };
  categories: {
    _id: string;
    title: string;
  }[];
  publishedAt: string;
  readTime?: number;
}

// GROQ Queries
export const blogQueries = {
  // Get all published blog posts
  getAllPosts: `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    "author": author->{name, image},
    "categories": categories[]->{_id, title}
  }`,

  // Get a single post by slug
  getPostBySlug: `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    body,
    publishedAt,
    readTime,
    "author": author->{name, image},
    "categories": categories[]->{_id, title}
  }`,

  // Get posts by category
  getPostsByCategory: `*[_type == "post" && $categoryId in categories[]._ref && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    "author": author->{name, image},
    "categories": categories[]->{_id, title}
  }`,

  // Get all categories
  getAllCategories: `*[_type == "category"] {
    _id,
    title,
    description
  }`,

  // Get recent posts (for homepage)
  getRecentPosts: `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    "author": author->{name, image},
    "categories": categories[]->{_id, title}
  }`,
};

// Fetch functions
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!sanityClient) {
    return [];
  }
  return sanityClient.fetch(blogQueries.getAllPosts);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!sanityClient) {
    return null;
  }
  return sanityClient.fetch(blogQueries.getPostBySlug, { slug });
}

export async function getRecentBlogPosts(): Promise<BlogPost[]> {
  if (!sanityClient) {
    return [];
  }
  return sanityClient.fetch(blogQueries.getRecentPosts);
}

// Format date helper
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
