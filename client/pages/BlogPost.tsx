import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Linkedin, Facebook, Loader2 } from "lucide-react";
import { PortableText } from "@portabletext/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { getBlogPostBySlug, getRecentBlogPosts, BlogPost as BlogPostType, urlFor, formatDate } from "@/lib/sanity";

// Static fallback articles for when Sanity is not configured
const staticArticles: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
  tags: string[];
}> = {
  "avenir-agriculture-maroc": {
    title: "L'avenir de l'agriculture au Maroc : Vers une revolution hydroponique",
    excerpt: "Decouvrez comment l'hydroponie transforme le paysage agricole marocain et ouvre de nouvelles perspectives pour les agriculteurs.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    category: "Tendances",
    author: "Issam Berrhazi",
    date: "12 Decembre 2024",
    readTime: "8 min",
    tags: ["Hydroponie", "Innovation", "Maroc"],
    content: `
      <h2>L'essor de l'agriculture hydroponique au Maroc</h2>
      <p>Le Maroc, avec son climat diversifie et ses defis en matiere de ressources en eau, se trouve a un tournant crucial de son histoire agricole. L'hydroponie emerge comme une solution prometteuse pour repondre aux enjeux de securite alimentaire et de durabilite environnementale.</p>

      <h3>Les avantages de l'hydroponie dans le contexte marocain</h3>
      <p>L'agriculture hydroponique presente plusieurs avantages majeurs pour le Maroc :</p>
      <ul>
        <li><strong>Economie d'eau :</strong> Reduction de 85-90% de la consommation d'eau par rapport a l'agriculture traditionnelle</li>
        <li><strong>Production toute l'annee :</strong> Independance des conditions climatiques exterieures</li>
        <li><strong>Rendements eleves :</strong> Jusqu'a 10 fois plus de production par metre carre</li>
        <li><strong>Qualite superieure :</strong> Controle total des nutriments et de l'environnement</li>
      </ul>

      <h3>Les defis a relever</h3>
      <p>Malgre ces avantages, plusieurs defis restent a surmonter pour une adoption massive de l'hydroponie au Maroc :</p>
      <ul>
        <li>L'investissement initial eleve</li>
        <li>Le besoin en expertise technique</li>
        <li>L'acces a l'energie et son cout</li>
        <li>La sensibilisation des agriculteurs</li>
      </ul>

      <h3>Perspectives d'avenir</h3>
      <p>Le gouvernement marocain, conscient de ces enjeux, multiplie les initiatives pour encourager l'adoption de technologies agricoles modernes. Les programmes de soutien aux jeunes agriculteurs et les partenariats public-prive ouvrent de nouvelles perspectives pour le secteur.</p>

      <p>Chez Roline, nous accompagnons cette transformation en fournissant expertise, formation et solutions adaptees au contexte marocain. Notre mission est de rendre l'agriculture de demain accessible a tous.</p>
    `,
  },
  "reduire-consommation-eau": {
    title: "Comment reduire de 85% votre consommation d'eau avec l'hydroponie",
    excerpt: "Guide complet sur l'optimisation de la gestion de l'eau dans les systemes hydroponiques professionnels.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    category: "Guides Pratiques",
    author: "Equipe Roline",
    date: "8 Decembre 2024",
    readTime: "6 min",
    tags: ["Eau", "Durabilite", "Guide"],
    content: `
      <h2>L'eau : ressource precieuse en hydroponie</h2>
      <p>L'un des avantages les plus significatifs de l'hydroponie est sa capacite a economiser l'eau. Voici comment optimiser votre systeme pour atteindre une reduction de 85% de votre consommation.</p>

      <h3>Systemes de recirculation</h3>
      <p>Les systemes en circuit ferme permettent de reutiliser l'eau non absorbee par les plantes. Cette technique seule peut reduire la consommation de 70%.</p>

      <h3>Monitoring et automatisation</h3>
      <p>L'utilisation de capteurs et de systemes automatises permet d'ajuster l'irrigation en temps reel selon les besoins reels des plantes.</p>

      <h3>Choix du substrat</h3>
      <p>Certains substrats comme la fibre de coco ou la perlite ont une excellente retention d'eau tout en permettant un bon drainage.</p>
    `,
  },
  "ferme-hydroponique-casablanca": {
    title: "Etude de cas : Ferme hydroponique de 2000m2 a Casablanca",
    excerpt: "Retour d'experience sur notre projet phare : de la conception a la production de 500kg de legumes par semaine.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f26da8?w=600&h=400&fit=crop",
    category: "Etudes de Cas",
    author: "Issam Berrhazi",
    date: "5 Decembre 2024",
    readTime: "10 min",
    tags: ["Projet", "Casablanca", "Success Story"],
    content: `
      <h2>Un projet ambitieux au coeur de Casablanca</h2>
      <p>En 2023, nous avons accompagne un investisseur dans la creation d'une ferme hydroponique de 2000m2 en peripherie de Casablanca. Ce projet illustre parfaitement le potentiel de l'agriculture urbaine au Maroc.</p>

      <h3>Les objectifs du projet</h3>
      <ul>
        <li>Production de 500kg de legumes frais par semaine</li>
        <li>Approvisionnement des restaurants et hotels de la region</li>
        <li>Creation de 8 emplois permanents</li>
      </ul>

      <h3>La mise en oeuvre</h3>
      <p>Le projet a ete realise en 6 mois, de la conception a la premiere recolte. Notre equipe a assure l'etude technique, l'installation des systemes et la formation du personnel.</p>
    `,
  },
  "led-horticoles-spectre": {
    title: "Les LED horticoles : Comment choisir le bon spectre lumineux",
    excerpt: "Tout savoir sur l'eclairage LED en agriculture indoor et son impact sur la croissance des plantes.",
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&h=400&fit=crop",
    category: "Innovation",
    author: "Equipe Roline",
    date: "1 Decembre 2024",
    readTime: "7 min",
    tags: ["LED", "Indoor", "Technologie"],
    content: `
      <h2>L'importance du spectre lumineux</h2>
      <p>L'eclairage est un facteur crucial en agriculture indoor. Les LED horticoles offrent la possibilite de controler precisement le spectre lumineux pour optimiser la croissance des plantes.</p>

      <h3>Les differents spectres</h3>
      <ul>
        <li><strong>Bleu (400-500nm) :</strong> Favorise la croissance vegetative</li>
        <li><strong>Rouge (600-700nm) :</strong> Stimule la floraison et la fructification</li>
        <li><strong>Full spectrum :</strong> Imite la lumiere naturelle du soleil</li>
      </ul>
    `,
  },
  "vertical-farming-production": {
    title: "Vertical Farming : Multiplier par 10 votre production au m2",
    excerpt: "Les secrets de l'agriculture verticale pour maximiser vos rendements dans un espace limite.",
    image: "https://images.unsplash.com/photo-1585500403309-5a4c91a5a1e4?w=600&h=400&fit=crop",
    category: "Tendances",
    author: "Issam Berrhazi",
    date: "28 Novembre 2024",
    readTime: "9 min",
    tags: ["Vertical Farming", "Rendement", "Innovation"],
    content: `
      <h2>L'agriculture verticale : revolution de l'espace</h2>
      <p>Le vertical farming permet de cultiver sur plusieurs niveaux, multipliant ainsi la surface de production dans un meme espace au sol.</p>

      <h3>Les avantages du vertical farming</h3>
      <ul>
        <li>Multiplication par 10 de la production au m2</li>
        <li>Ideal pour les zones urbaines</li>
        <li>Controle total de l'environnement</li>
        <li>Production locale et fraiche</li>
      </ul>
    `,
  },
  "cea-environnement-controle": {
    title: "CEA : Controler l'environnement pour une qualite constante",
    excerpt: "Comment les fermes a environnement controle garantissent une production premium toute l'annee.",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&h=400&fit=crop",
    category: "Guides Pratiques",
    author: "Equipe Roline",
    date: "25 Novembre 2024",
    readTime: "5 min",
    tags: ["CEA", "Qualite", "Production"],
    content: `
      <h2>Qu'est-ce que le CEA ?</h2>
      <p>L'agriculture a environnement controle (CEA - Controlled Environment Agriculture) est une approche qui permet de maitriser tous les parametres de croissance des plantes.</p>

      <h3>Les parametres controles</h3>
      <ul>
        <li>Temperature et humidite</li>
        <li>Eclairage et photoperiode</li>
        <li>CO2 et circulation d'air</li>
        <li>Nutrition et irrigation</li>
      </ul>
    `,
  },
};

// Portable Text components for rendering Sanity content
const portableTextComponents = {
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mt-8 mb-4 font-display">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-8 mb-4 font-display">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl sm:text-2xl font-semibold text-primary mt-6 mb-3 font-display">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-lg sm:text-xl font-semibold text-primary mt-4 mb-2">{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-foreground/80 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-secondary pl-4 italic text-foreground/70 my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/80">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-foreground/80">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
    number: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => <strong className="font-semibold text-primary">{children}</strong>,
    em: ({ children }: { children?: React.ReactNode }) => <em>{children}</em>,
    link: ({ value, children }: { value?: { href?: string }; children?: React.ReactNode }) => (
      <a href={value?.href} className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value?: { asset?: { _ref?: string }; alt?: string } }) => {
      if (!value?.asset) return null;
      return (
        <div className="my-8">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || "Blog image"}
            className="w-full rounded-xl shadow-lg"
          />
          {value.alt && <p className="text-sm text-foreground/60 mt-2 text-center">{value.alt}</p>}
        </div>
      );
    },
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [usingSanity, setUsingSanity] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;

      try {
        const sanityPost = await getBlogPostBySlug(slug);
        if (sanityPost) {
          setPost(sanityPost);
          setUsingSanity(true);

          // Fetch related posts
          const recent = await getRecentBlogPosts();
          setRelatedPosts(recent.filter((p) => p.slug.current !== slug).slice(0, 3));
        }
      } catch (error) {
        console.log("Using static blog data (Sanity not configured)");
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  // Use static data if Sanity is not configured
  const staticPost = slug ? staticArticles[slug] : null;

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-foreground/60">Chargement de l'article...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // If no post found in Sanity or static data
  if (!usingSanity && !staticPost) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">Article non trouve</h1>
            <p className="text-foreground/60 mb-6">L'article que vous recherchez n'existe pas ou a ete supprime.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Determine which data to display
  const displayData = usingSanity && post
    ? {
        title: post.title,
        excerpt: post.excerpt,
        image: post.mainImage ? urlFor(post.mainImage).width(1200).height(600).url() : "",
        category: post.categories?.[0]?.title || "Article",
        author: post.author?.name || "Equipe Roline",
        authorImage: post.author?.image ? urlFor(post.author.image).width(48).height(48).url() : null,
        date: formatDate(post.publishedAt),
        readTime: post.readTime ? `${post.readTime} min` : "5 min",
        tags: post.categories?.map((c) => c.title) || [],
        body: post.body,
        isPortableText: true,
      }
    : staticPost
    ? {
        title: staticPost.title,
        excerpt: staticPost.excerpt,
        image: staticPost.image,
        category: staticPost.category,
        author: staticPost.author,
        authorImage: null,
        date: staticPost.date,
        readTime: staticPost.readTime,
        tags: staticPost.tags,
        body: staticPost.content,
        isPortableText: false,
      }
    : null;

  if (!displayData) return null;

  const shareUrl = window.location.href;
  const shareText = `Decouvrez cet article : ${displayData.title}`;

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={displayData.title}
        description={displayData.excerpt}
        keywords={displayData.tags.join(", ")}
        type="article"
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 h-[400px] sm:h-[500px]">
            <img
              src={displayData.image}
              alt={displayData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30"></div>
          </div>

          <div className="relative container mx-auto px-4 pt-24 sm:pt-32 pb-12 sm:pb-16">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour
            </button>

            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm font-semibold">
                  {displayData.category}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight font-display">
                {displayData.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  {displayData.authorImage ? (
                    <img
                      src={displayData.authorImage}
                      alt={displayData.author}
                      className="w-10 h-10 rounded-full border-2 border-white/30"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <User className="w-5 h-5" />
                    </div>
                  )}
                  <span className="font-medium">{displayData.author}</span>
                </div>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {displayData.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {displayData.readTime} de lecture
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-roline-light/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Main Content */}
              <article className="lg:col-span-8">
                <div className="bg-background  rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
                  {/* Lead paragraph */}
                  <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-8 font-medium">
                    {displayData.excerpt}
                  </p>

                  {/* Article body */}
                  <div className="prose prose-lg max-w-none">
                    {displayData.isPortableText ? (
                      <PortableText value={displayData.body} components={portableTextComponents} />
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: displayData.body }} />
                    )}
                  </div>

                  {/* Tags */}
                  <div className="mt-10 pt-8 border-t border-border/30">
                    <div className="flex flex-wrap items-center gap-2">
                      <Tag className="w-4 h-4 text-foreground/60" />
                      {displayData.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-roline-light/50 text-primary text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Share buttons */}
                  <div className="mt-8 pt-8 border-t border-border/30">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="flex items-center gap-2 text-foreground/60">
                        <Share2 className="w-4 h-4" />
                        Partager :
                      </span>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:bg-[#004182] transition-colors"
                        aria-label="Partager sur LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-[#0C63D4] transition-colors"
                        aria-label="Partager sur Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                        aria-label="Partager sur X"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4 space-y-6">
                {/* Author Card */}
                <div className="bg-background  rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-primary mb-4">A propos de l'auteur</h3>
                  <div className="flex items-center gap-4">
                    {displayData.authorImage ? (
                      <img
                        src={displayData.authorImage}
                        alt={displayData.author}
                        className="w-16 h-16 rounded-full"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-roline-light flex items-center justify-center">
                        <User className="w-8 h-8 text-primary" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-primary">{displayData.author}</h4>
                      <p className="text-sm text-foreground/60">Expert en agriculture hydroponique</p>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                {(usingSanity && relatedPosts.length > 0) || (!usingSanity && Object.keys(staticArticles).length > 1) ? (
                  <div className="bg-background  rounded-2xl p-6 shadow-lg">
                    <h3 className="font-bold text-primary mb-4">Articles similaires</h3>
                    <div className="space-y-4">
                      {usingSanity
                        ? relatedPosts.map((relatedPost) => (
                            <Link
                              key={relatedPost._id}
                              to={`/blog/${relatedPost.slug.current}`}
                              className="flex gap-3 group"
                            >
                              <img
                                src={relatedPost.mainImage ? urlFor(relatedPost.mainImage).width(80).height(60).url() : ""}
                                alt={relatedPost.title}
                                className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                              />
                              <div>
                                <h4 className="text-sm font-medium text-primary line-clamp-2 group-hover:text-secondary transition-colors">
                                  {relatedPost.title}
                                </h4>
                                <span className="text-xs text-foreground/60">
                                  {formatDate(relatedPost.publishedAt)}
                                </span>
                              </div>
                            </Link>
                          ))
                        : Object.entries(staticArticles)
                            .filter(([key]) => key !== slug)
                            .slice(0, 3)
                            .map(([key, article]) => (
                              <Link
                                key={key}
                                to={`/blog/${key}`}
                                className="flex gap-3 group"
                              >
                                <img
                                  src={article.image}
                                  alt={article.title}
                                  className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                                />
                                <div>
                                  <h4 className="text-sm font-medium text-primary line-clamp-2 group-hover:text-secondary transition-colors">
                                    {article.title}
                                  </h4>
                                  <span className="text-xs text-foreground/60">{article.date}</span>
                                </div>
                              </Link>
                            ))}
                    </div>
                  </div>
                ) : null}

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Newsletter</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Recevez nos derniers articles directement dans votre boite mail.
                  </p>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary mb-3 text-sm"
                  />
                  <button className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/90 transition-colors text-sm">
                    S'abonner
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Vous avez un projet en tete ?"
          subtitle="Contactez-nous pour discuter de votre vision et decouvrir comment nous pouvons vous accompagner."
          primaryButton={{ text: "Nous Contacter", link: "/contact" }}
          secondaryButton={{ text: "Voir nos Services", link: "/services" }}
        />
      </main>

      <Footer />
    </div>
  );
}
