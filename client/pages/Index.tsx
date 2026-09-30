import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Leaf, Cpu, Droplets, Sun, BarChart3, GraduationCap, CheckCircle, ChevronRight, Users, Award, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import VideoModal from "@/components/VideoModal";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import PricingSection from "@/components/PricingSection";
import TeamSection from "@/components/TeamSection";
import { useTranslation } from "@/lib/i18n";

export default function Index() {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const services = [
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "Bureau d'Études & Ingénierie",
      description: "Études technico-économiques, analyses de rentabilité et design technique sur mesure pour vos projets agricoles.",
      link: "/services#etudes",
      color: "from-emerald-500/20 to-teal-500/20",
      iconBg: "bg-emerald-500",
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Consulting & Stratégie",
      description: "Audits techniques approfondis, stratégies de production personnalisées et accompagnement complet.",
      link: "/services#consulting",
      color: "from-blue-500/20 to-indigo-500/20",
      iconBg: "bg-blue-500",
    },
    {
      icon: <Droplets className="w-7 h-7" />,
      title: "Installation & Mise en Route",
      description: "Montages hydroponiques clé en main, fermes indoor CEA et serres agricoles intelligentes.",
      link: "/services#installation",
      color: "from-cyan-500/20 to-sky-500/20",
      iconBg: "bg-cyan-500",
    },
    {
      icon: <Sun className="w-7 h-7" />,
      title: "Suivi & Gestion Opérationnelle",
      description: "Monitoring digital, gestion des cultures et optimisation continue basée sur les données.",
      link: "/services#suivi",
      color: "from-amber-500/20 to-orange-500/20",
      iconBg: "bg-amber-500",
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "Formations Professionnelles",
      description: "Programmes certifiants en hydroponie, CEA, serriculture et gestion du microclimat.",
      link: "/training",
      color: "from-purple-500/20 to-violet-500/20",
      iconBg: "bg-purple-500",
    },
    {
      icon: <Leaf className="w-7 h-7" />,
      title: "Solutions Techniques Innovantes",
      description: "Hydroponie, aéroponie, CEA, serres modernes et vertical farming adaptées à vos besoins.",
      link: "/solutions",
      color: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500",
    },
  ];

  const expertise = [
    {
      title: "Serres Modernes",
      subtitle: "Automatisées & Intelligentes",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
    },
    {
      title: "Fermes Indoor CEA",
      subtitle: "Vertical Farming",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
    },
    {
      title: "Hydroponie",
      subtitle: "& Aéroponie",
      image: "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=600&h=400&fit=crop",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Culture de Safran Indoor",
      url: "/video-1.mp4",
    },
    {
      id: 2,
      title: "Ferme Verticale CEA",
      url: "/video-2.mp4",
    },
  ];

  const partners = [
    { name: "Partner 1", logo: "https://via.placeholder.com/150x60?text=Partner+1" },
    { name: "Partner 2", logo: "https://via.placeholder.com/150x60?text=Partner+2" },
    { name: "Partner 3", logo: "https://via.placeholder.com/150x60?text=Partner+3" },
    { name: "Partner 4", logo: "https://via.placeholder.com/150x60?text=Partner+4" },
    { name: "Partner 5", logo: "https://via.placeholder.com/150x60?text=Partner+5" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Accueil"
        description="Roline Smart Hydroponics - Leader en hydroponie, CEA, serres intelligentes et agriculture innovante au Maroc. +15 ans d'expertise, +200 projets."
        keywords="hydroponie, agriculture intelligente, serres, CEA, ferme indoor, vertical farming, Maroc, Casablanca"
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground min-h-[100vh] lg:min-h-[95vh] flex items-center overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-subtle"></div>
            <div className="absolute -bottom-20 sm:-bottom-32 -left-20 sm:-left-32 w-72 sm:w-96 lg:w-[500px] h-72 sm:h-96 lg:h-[500px] bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 bg-white/5 rounded-full blur-2xl animate-pulse-subtle"></div>
            <div className="absolute bottom-1/4 left-1/3 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-secondary/5 rounded-full blur-3xl"></div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          </div>

          {/* Floating decorative elements - Hidden on mobile */}
          <div className="hidden sm:block absolute top-32 left-20 w-3 h-3 bg-secondary/60 rounded-full animate-bounce-subtle"></div>
          <div className="hidden sm:block absolute top-48 right-32 w-4 h-4 bg-white/30 rounded-full animate-bounce-subtle" style={{ animationDelay: '0.3s' }}></div>
          <div className="hidden sm:block absolute bottom-48 left-40 w-2 h-2 bg-secondary/40 rounded-full animate-bounce-subtle" style={{ animationDelay: '0.7s' }}></div>
          <div className="hidden lg:block absolute top-1/2 right-20 w-2 h-2 bg-white/20 rounded-full animate-float"></div>

          <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="max-w-2xl">
                {/* Accent line */}
                <div className="hero-line-enter h-1 bg-secondary rounded-full mb-6 sm:mb-8"></div>

                {/* Badge */}
                <div className="hero-stagger-1 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 sm:mb-8">
                  <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
                  <span className="text-xs sm:text-sm font-medium">{t("hero.badge")}</span>
                </div>

                {/* Main Headline */}
                <h1 className="hero-stagger-2 text-4xl xs:text-5xl sm:text-6xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight font-display">
                  <span className="block">{t("hero.line1")}</span>
                  <span className="block text-secondary">{t("hero.line2")}</span>
                  <span className="block">{t("hero.line3")}</span>
                </h1>

                {/* Subheading */}
                <p className="hero-stagger-3 text-xl xs:text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mb-4 opacity-95 font-light">
                  {t("hero.subtitle")}
                </p>

                {/* Tagline */}
                <div className="hero-stagger-3 flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {[t("hero.tag1"), t("hero.tag2"), t("hero.tag3")].map((tag, i) => (
                    <span
                      key={tag}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/20 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm"
                      style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="hero-stagger-4 text-base sm:text-lg lg:text-base xl:text-lg opacity-90 mb-8 sm:mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: t("hero.description") }} />

                {/* CTA Buttons */}
                <div className="hero-stagger-5 flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
                  <Link
                    to="/services"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold shadow-lg shadow-secondary/25 hover:shadow-2xl hover:shadow-secondary/30 hover:bg-secondary/95 active:scale-[0.98] transition-all duration-300"
                  >
                    {t("hero.cta.services")}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/15 backdrop-blur-sm text-white border border-white/30 rounded-xl font-semibold hover:bg-white/25 hover:border-white/50 active:scale-[0.98] transition-all duration-300"
                  >
                    {t("hero.cta.contact")}
                  </Link>
                  <Link
                    to="/training"
                    className="hidden sm:inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 hover:border-white/40 active:scale-[0.98] transition-all duration-300"
                  >
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                    {t("hero.cta.training")}
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="hidden md:flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="text-sm opacity-80">{t("hero.trust.experience")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="text-sm opacity-80">{t("hero.trust.projects")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                    <span className="text-sm opacity-80">{t("hero.trust.satisfaction")}</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Hero Image */}
              <div className="hidden lg:block relative">
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                    <img
                      src="/hero-image.jpg"
                      alt="Expert en agriculture indoor avec culture de safran vertical farming"
                      className="w-full h-[500px] xl:h-[600px] object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-primary font-bold text-lg">Vertical Farming</p>
                        <p className="text-primary/70 text-sm">Culture de Safran CEA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center pt-1.5 sm:pt-2">
              <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/50 rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Services Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-background via-background to-roline-light/30 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Title */}
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Ce que nous offrons
              </span>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-primary mb-4 font-display">
                Nos Services Principaux
              </h2>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                Une gamme complète de solutions pour transformer vos projets agricoles en succès durables
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group relative bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/40 shadow-soft hover:shadow-soft-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 ${service.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 group-hover:text-primary transition-colors font-display">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-secondary font-medium text-sm sm:text-base opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>En savoir plus</span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Services Button */}
            <div className="text-center mt-10 sm:mt-12">
              <Link
                to="/services"
                className="btn-primary text-sm sm:text-base"
              >
                Voir tous nos services
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                  Notre Expertise
                </span>
                <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight font-display">
                  Plus de 15 ans d'expérience en agriculture innovante
                </h2>
                <p className="text-base sm:text-lg text-foreground/70 mb-8 leading-relaxed">
                  Roline Smart Hydroponics accompagne ses clients au Maroc et à l'international
                  dans la conception et la mise en place de projets agricoles innovants,
                  garantissant performance, durabilité et efficacité.
                </p>

                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {[
                    "Expertise scientifique et technique de pointe",
                    "Solutions durables et hautement performantes",
                    "Accompagnement complet de A à Z",
                    "Support opérationnel et formation continue",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 sm:gap-4">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-secondary/30">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </span>
                      <span className="text-sm sm:text-base lg:text-lg text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                  <Link
                    to="/about"
                    className="btn-primary text-sm sm:text-base"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                  <Link
                    to="/projects"
                    className="btn-outline text-sm sm:text-base"
                  >
                    Voir nos projets
                  </Link>
                </div>
              </div>

              {/* Expertise Images */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-36 xs:h-44 sm:h-48 group">
                      <img
                        src={expertise[0].image}
                        alt={expertise[0].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                        <p className="font-bold text-sm sm:text-base">{expertise[0].title}</p>
                        <p className="text-xs sm:text-sm opacity-90">{expertise[0].subtitle}</p>
                      </div>
                    </div>
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-44 xs:h-56 sm:h-64 group">
                      <img
                        src={expertise[1].image}
                        alt={expertise[1].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                        <p className="font-bold text-sm sm:text-base">{expertise[1].title}</p>
                        <p className="text-xs sm:text-sm opacity-90">{expertise[1].subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 sm:pt-8">
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-56 xs:h-72 sm:h-80 group">
                      <img
                        src={expertise[2].image}
                        alt={expertise[2].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                        <p className="font-bold text-sm sm:text-base">{expertise[2].title}</p>
                        <p className="text-xs sm:text-sm opacity-90">{expertise[2].subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-roline-light/50 via-background to-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Nos Réalisations
              </span>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-primary mb-4 font-display">
                Découvrez Notre Expertise en Action
              </h2>
              <p className="text-base sm:text-lg text-foreground/70">
                Explorez nos réalisations et nos projets innovants en agriculture indoor
              </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[9/16] sm:aspect-[9/14]">
                    <video
                      src={video.url}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                      poster=""
                    >
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-primary/90 to-transparent pointer-events-none">
                    <p className="font-bold text-white text-base sm:text-lg">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* Team Section */}
        <TeamSection />

        {/* CTA Section */}
        <CTASection
          title="Prêt à transformer votre agriculture ?"
          subtitle="Contactez notre équipe d'experts pour discuter de votre projet et découvrir comment nous pouvons vous accompagner vers le succès."
          primaryButton={{ text: "Nous Contacter", link: "/contact" }}
          secondaryButton={{ text: "Demander un Devis", link: "/contact" }}
        />
      </main>

      <Footer />
      <FloatingButtons />

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={true}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </div>
  );
}
