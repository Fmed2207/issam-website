import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock, Tag, Search, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { getAllBlogPosts, BlogPost, urlFor, formatDate } from "@/lib/sanity";

// Fallback static data when Sanity is not configured
const staticCategories = [
  { id: "all", label: "Tous les articles" },
  { id: "tendances", label: "Tendances" },
  { id: "etudes-cas", label: "Etudes de Cas" },
  { id: "guides", label: "Guides Pratiques" },
  { id: "innovation", label: "Innovation" },
];

const staticFeaturedArticle = {
  id: 1,
  title: "L'avenir de l'agriculture au Maroc : Vers une revolution hydroponique",
  excerpt: "Decouvrez comment l'hydroponie transforme le paysage agricole marocain et ouvre de nouvelles perspectives pour les agriculteurs. Une analyse complete des opportunites et defis de cette technologie revolutionnaire.",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
  category: "tendances",
  author: "Issam Berrhazi",
  date: "12 Decembre 2024",
  readTime: "8 min",
  slug: "avenir-agriculture-maroc",
  tags: ["Hydroponie", "Innovation", "Maroc"],
};

const staticArticles = [
  {
    id: 2,
    title: "Comment reduire de 85% votre consommation d'eau avec l'hydroponie",
    excerpt: "Guide complet sur l'optimisation de la gestion de l'eau dans les systemes hydroponiques professionnels.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    category: "guides",
    author: "Equipe Roline",
    date: "8 Decembre 2024",
    readTime: "6 min",
    slug: "reduire-consommation-eau",
    tags: ["Eau", "Durabilite", "Guide"],
  },
  {
    id: 3,
    title: "Etude de cas : Ferme hydroponique de 2000m2 a Casablanca",
    excerpt: "Retour d'experience sur notre projet phare : de la conception a la production de 500kg de legumes par semaine.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f26da8?w=600&h=400&fit=crop",
    category: "etudes-cas",
    author: "Issam Berrhazi",
    date: "5 Decembre 2024",
    readTime: "10 min",
    slug: "ferme-hydroponique-casablanca",
    tags: ["Projet", "Casablanca", "Success Story"],
  },
  {
    id: 4,
    title: "Les LED horticoles : Comment choisir le bon spectre lumineux",
    excerpt: "Tout savoir sur l'eclairage LED en agriculture indoor et son impact sur la croissance des plantes.",
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&h=400&fit=crop",
    category: "innovation",
    author: "Equipe Roline",
    date: "1 Decembre 2024",
    readTime: "7 min",
    slug: "led-horticoles-spectre",
    tags: ["LED", "Indoor", "Technologie"],
  },
  {
    id: 5,
    title: "Vertical Farming : Multiplier par 10 votre production au m2",
    excerpt: "Les secrets de l'agriculture verticale pour maximiser vos rendements dans un espace limite.",
    image: "https://images.unsplash.com/photo-1585500403309-5a4c91a5a1e4?w=600&h=400&fit=crop",
    category: "tendances",
    author: "Issam Berrhazi",
    date: "28 Novembre 2024",
    readTime: "9 min",
    slug: "vertical-farming-production",
    tags: ["Vertical Farming", "Rendement", "Innovation"],
  },
  {
    id: 6,
    title: "CEA : Controler l'environnement pour une qualite constante",
    excerpt: "Comment les fermes a environnement controle garantissent une production premium toute l'annee.",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&h=400&fit=crop",
    category: "guides",
    author: "Equipe Roline",
    date: "25 Novembre 2024",
    readTime: "5 min",
    slug: "cea-environnement-controle",
    tags: ["CEA", "Qualite", "Production"],
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [usingSanity, setUsingSanity] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const sanityPosts = await getAllBlogPosts();
        if (sanityPosts && sanityPosts.length > 0) {
          setPosts(sanityPosts);
          setUsingSanity(true);
        }
      } catch (error) {
        console.log("Using static blog data (Sanity not configured)");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const categories = staticCategories;

  // Transform Sanity posts or use static data
  const displayArticles = usingSanity
    ? posts.map((post) => ({
        id: post._id,
        title: post.title,
        excerpt: post.excerpt,
        image: post.mainImage ? urlFor(post.mainImage).width(600).height(400).url() : "",
        category: post.categories?.[0]?.title?.toLowerCase().replace(/\s+/g, "-") || "guides",
        author: post.author?.name || "Equipe Roline",
        date: formatDate(post.publishedAt),
        readTime: post.readTime ? `${post.readTime} min` : "5 min",
        slug: post.slug.current,
        tags: post.categories?.map((c) => c.title) || [],
      }))
    : staticArticles;

  const featuredArticle = displayArticles[0] || staticFeaturedArticle;
  const articles = displayArticles.slice(1);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularTags = [
    "Hydroponie",
    "CEA",
    "Serres",
    "Innovation",
    "Durabilite",
    "LED",
    "IoT",
    "Maroc",
  ];

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-foreground/60">Chargement des articles...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Blog"
        description="Articles et actualites sur l'agriculture intelligente, hydroponie, serres modernes. Guides pratiques et tendances du secteur."
        keywords="blog agriculture, actualites hydroponie, articles CEA, tendances agricoles"
        type="article"
      />
      <Header />

      <main className="flex-grow">
        <PageHero
          badge="Blog & Actualites"
          title="Ressources & Insights"
          subtitle="Explorez nos articles sur les tendances en agriculture intelligente, etudes de cas et guides pratiques."
        />

        {/* Featured Article */}
        <section className="py-8 sm:py-10 md:py-12 bg-background">
          <div className="container mx-auto px-4">
            <Link
              to={`/blog/${featuredArticle.slug}`}
              className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl group cursor-pointer block"
            >
              <div className="absolute inset-0">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-primary/95 via-primary/80 sm:via-primary/70 to-primary/40 sm:to-transparent"></div>
              </div>
              <div className="relative p-5 sm:p-8 md:p-12 lg:p-16 min-h-[320px] sm:min-h-[360px] md:min-h-[400px] flex items-end sm:items-center">
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm font-semibold">
                      Article a la Une
                    </span>
                    <span className="px-2.5 sm:px-3 py-1 bg-white/20 text-white rounded-full text-xs sm:text-sm">
                      {categories.find(c => c.id === featuredArticle.category)?.label || featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4 leading-tight font-display">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/80 text-xs sm:text-sm mb-4 sm:mb-6">
                    <span className="flex items-center gap-1.5 sm:gap-2">
                      <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {featuredArticle.author}
                    </span>
                    <span className="flex items-center gap-1.5 sm:gap-2">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1.5 sm:gap-2">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {featuredArticle.readTime} de lecture
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-primary rounded-lg sm:rounded-xl font-semibold group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors text-sm sm:text-base">
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="py-4 sm:py-6 md:py-8 bg-muted/50  border-b border-border/30 sticky top-[60px] sm:top-[73px] z-40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full font-medium transition-all duration-200 text-xs sm:text-sm ${
                      selectedCategory === cat.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-foreground hover:bg-secondary hover:text-secondary-foreground"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-auto">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full lg:w-72 xl:w-80 pl-10 sm:pl-12 pr-4 py-2 sm:py-2.5 rounded-full border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-10 sm:py-14 md:py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {filteredArticles.map((article) => (
                    <Link
                      key={article.id}
                      to={`/blog/${article.slug}`}
                      className="group bg-background  rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
                    >
                      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                          <span className="px-2.5 sm:px-3 py-1 bg-secondary text-secondary-foreground text-[10px] sm:text-xs font-semibold rounded-full">
                            {categories.find(c => c.id === article.category)?.label || article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 md:p-6">
                        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-foreground/60 mb-2 sm:mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-primary mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-foreground/70 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-foreground/60 flex items-center gap-1.5 sm:gap-2">
                            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            {article.author}
                          </span>
                          <span className="text-secondary font-medium text-xs sm:text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                            Lire
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {filteredArticles.length === 0 && (
                  <div className="text-center py-12 sm:py-16 bg-background  rounded-xl sm:rounded-2xl">
                    <p className="text-foreground/60 text-sm sm:text-base md:text-lg">Aucun article trouve pour cette recherche.</p>
                  </div>
                )}

                {/* Pagination */}
                {filteredArticles.length > 0 && (
                  <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-8 sm:mt-10">
                    <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-roline-light transition-colors">
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    {[1, 2, 3].map((page) => (
                      <button
                        key={page}
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full font-medium transition-colors text-sm sm:text-base ${
                          page === 1
                            ? "bg-primary text-primary-foreground"
                            : "border border-border/50 hover:bg-roline-light"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-roline-light transition-colors">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6 sm:space-y-8">
                {/* Popular Tags */}
                <div className="bg-background  rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg">
                  <h3 className="font-bold text-primary mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <Tag className="w-4 h-4 sm:w-5 sm:h-5" />
                    Tags Populaires
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {popularTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-roline-light/50 text-primary text-xs sm:text-sm rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-white">
                  <h3 className="font-bold text-lg sm:text-xl mb-1.5 sm:mb-2">Newsletter</h3>
                  <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">
                    Recevez nos derniers articles et actualites directement dans votre boite mail.
                  </p>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary mb-2.5 sm:mb-3 text-sm"
                  />
                  <button className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary text-secondary-foreground rounded-lg sm:rounded-xl font-semibold hover:bg-secondary/90 transition-colors text-sm">
                    S'abonner
                  </button>
                </div>

                {/* Recent Articles */}
                <div className="bg-background  rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg">
                  <h3 className="font-bold text-primary mb-3 sm:mb-4 text-sm sm:text-base">Articles Recents</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {displayArticles.slice(0, 4).map((article) => (
                      <Link key={article.id} to={`/blog/${article.slug}`} className="flex gap-2.5 sm:gap-3 cursor-pointer group">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-16 h-12 sm:w-20 sm:h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-xs sm:text-sm font-medium text-primary line-clamp-2 group-hover:text-secondary transition-colors">
                            {article.title}
                          </h4>
                          <span className="text-[10px] sm:text-xs text-foreground/60">{article.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-background  rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg">
                  <h3 className="font-bold text-primary mb-3 sm:mb-4 text-sm sm:text-base">Categories</h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {categories.filter(c => c.id !== "all").map((cat) => {
                      const count = displayArticles.filter(a => a.category === cat.id).length;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-roline-light/50 transition-colors text-left"
                        >
                          <span className="font-medium text-primary text-xs sm:text-sm">{cat.label}</span>
                          <span className="text-xs text-foreground/60 bg-roline-light px-2 sm:px-2.5 py-0.5 rounded-full">
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
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
