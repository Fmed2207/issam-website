import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

export default function SEO({
  title,
  description,
  keywords,
  image = "https://roline.ma/og-image.jpg",
  url,
  type = "website",
}: SEOProps) {
  const fullTitle = `${title} | Roline Smart Hydroponics`;
  const canonicalUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to set or create meta tag
    const setMetaTag = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Standard meta tags
    setMetaTag("description", description);
    if (keywords) {
      setMetaTag("keywords", keywords);
    }

    // Open Graph tags
    setMetaTag("og:title", fullTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:image", image, true);
    setMetaTag("og:url", canonicalUrl, true);
    setMetaTag("og:type", type, true);
    setMetaTag("og:site_name", "Roline Smart Hydroponics", true);
    setMetaTag("og:locale", "fr_MA", true);

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", image);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Cleanup on unmount - reset to default title
    return () => {
      document.title = "Roline Smart Hydroponics | Expert en Agriculture Intelligente au Maroc";
    };
  }, [fullTitle, description, keywords, image, canonicalUrl, type]);

  return null; // This component doesn't render anything
}
