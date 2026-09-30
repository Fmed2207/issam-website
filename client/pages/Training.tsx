import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Award, BookOpen, Calendar, CheckCircle, Video, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

export default function Training() {
  const courses = [
    {
      id: 1,
      title: "Hydroponie & Cultures Hors-Sol",
      level: "Débutant à Avancé",
      duration: "5 jours",
      format: "Présentiel + Pratique",
      price: "À partir de 4 500 DH",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      description: "Maîtrisez les fondamentaux et techniques avancées de l'hydroponie professionnelle.",
      modules: [
        "Introduction aux systèmes hydroponiques",
        "NFT, DWC, Substrats - choix et installation",
        "Gestion des solutions nutritives",
        "Monitoring et optimisation",
        "Cas pratiques et mise en situation",
      ],
      certificate: true,
    },
    {
      id: 2,
      title: "CEA & Fermes Indoor",
      level: "Intermédiaire",
      duration: "4 jours",
      format: "Présentiel + Pratique",
      price: "À partir de 5 000 DH",
      image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&h=400&fit=crop",
      description: "Apprenez à concevoir et gérer des environnements de culture entièrement contrôlés.",
      modules: [
        "Principes du CEA (Controlled Environment Agriculture)",
        "Contrôle climatique avancé",
        "Éclairage LED et spectre lumineux",
        "Automatisation et monitoring",
        "Rentabilité et business plan",
      ],
      certificate: true,
    },
    {
      id: 3,
      title: "Serriculture Moderne",
      level: "Tous niveaux",
      duration: "3 jours",
      format: "Présentiel",
      price: "À partir de 3 500 DH",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f26da8?w=600&h=400&fit=crop",
      description: "Techniques modernes de gestion des serres agricoles intelligentes.",
      modules: [
        "Types de serres et choix techniques",
        "Gestion du microclimat",
        "Systèmes d'irrigation avancés",
        "Ventilation et ombrage",
        "Maintenance préventive",
      ],
      certificate: true,
    },
    {
      id: 4,
      title: "Gestion du Microclimat & Fertigation",
      level: "Intermédiaire à Avancé",
      duration: "3 jours",
      format: "Présentiel + Pratique",
      price: "À partir de 4 000 DH",
      image: "https://images.unsplash.com/photo-1585500403309-5a4c91a5a1e4?w=600&h=400&fit=crop",
      description: "Optimisez vos cultures grâce à une maîtrise parfaite du climat et de la nutrition.",
      modules: [
        "Paramètres climatiques essentiels",
        "Capteurs et systèmes de mesure",
        "Fertigation automatisée",
        "Ajustement des recettes nutritives",
        "Résolution de problèmes courants",
      ],
      certificate: true,
    },
    {
      id: 5,
      title: "Conception de Projets Agricoles",
      level: "Avancé",
      duration: "5 jours",
      format: "Présentiel + Ateliers",
      price: "À partir de 6 000 DH",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      description: "De l'idée au projet : apprenez à concevoir et piloter des projets agricoles innovants.",
      modules: [
        "Étude de marché et faisabilité",
        "Business plan agricole",
        "Conception technique",
        "Gestion de projet",
        "Financement et subventions",
      ],
      certificate: true,
    },
  ];

  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Formation Pratique",
      description: "80% de pratique sur des installations réelles",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification",
      description: "Attestation reconnue à l'issue de la formation",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Petits Groupes",
      description: "Maximum 12 participants pour un suivi personnalisé",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Supports Inclus",
      description: "Documentation complète et accès aux ressources",
    },
  ];

  const upcomingSessions = [
    { course: "Hydroponie & Cultures Hors-Sol", date: "15-19 Janvier 2024", places: 8 },
    { course: "CEA & Fermes Indoor", date: "5-8 Février 2024", places: 6 },
    { course: "Serriculture Moderne", date: "20-22 Février 2024", places: 10 },
    { course: "Gestion du Microclimat", date: "4-6 Mars 2024", places: 12 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Formations"
        description="Formations professionnelles certifiantes en hydroponie, CEA et agriculture intelligente. Programmes pratiques au Maroc."
        keywords="formation hydroponie, cours agriculture, formation certifiante, apprentissage CEA maroc"
      />
      <Header />

      <main className="flex-grow">
        <PageHero
          badge="Formations"
          title="Formations Professionnelles Certifiantes"
          subtitle="Développez vos compétences en agriculture intelligente avec nos programmes de formation pratiques et certifiants."
          image="/icone-formation.jpg"
        />

        {/* Features */}
        <section className="py-8 sm:py-10 md:py-12 bg-background border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 bg-secondary/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 text-secondary [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-primary mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base">{feature.title}</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-foreground/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-background to-roline-light/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Nos Programmes
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 font-display">
                Catalogue des Formations
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                Des programmes adaptés à tous les niveaux, du débutant au professionnel expérimenté
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-background rounded-xl sm:rounded-2xl shadow-lg border border-border/30 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Image */}
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-auto">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary/60 to-transparent"></div>
                      {course.certificate && (
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-secondary text-secondary-foreground rounded-full text-[10px] sm:text-xs font-semibold">
                          <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          Certifiante
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-4 sm:p-6 md:p-8">
                      <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <span className="px-2.5 sm:px-3 py-1 bg-roline-light text-primary text-[10px] sm:text-xs font-medium rounded-full flex items-center gap-1">
                          <BookOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          {course.level}
                        </span>
                        <span className="px-2.5 sm:px-3 py-1 bg-roline-light text-primary text-[10px] sm:text-xs font-medium rounded-full flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          {course.duration}
                        </span>
                        <span className="px-2.5 sm:px-3 py-1 bg-roline-light text-primary text-[10px] sm:text-xs font-medium rounded-full flex items-center gap-1">
                          <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          {course.format}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3 font-display">{course.title}</h3>
                      <p className="text-foreground/70 mb-4 sm:mb-6 text-sm sm:text-base">{course.description}</p>

                      <div className="mb-4 sm:mb-6">
                        <h4 className="font-semibold text-primary mb-2 sm:mb-3 text-sm sm:text-base">Programme :</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 sm:gap-2">
                          {course.modules.map((module, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 sm:gap-2">
                              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary flex-shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-foreground/70">{module}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border/30">
                        <div>
                          <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">{course.price}</p>
                          <p className="text-xs sm:text-sm text-foreground/60">Support et certification inclus</p>
                        </div>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
                        >
                          S'inscrire
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Sessions */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Planning
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4 font-display">
                Prochaines Sessions
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto">
                Inscrivez-vous dès maintenant pour réserver votre place
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-3 sm:space-y-4">
                {upcomingSessions.map((session, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-roline-light/30 rounded-xl hover:bg-roline-light/50 transition-colors"
                  >
                    <div>
                      <h3 className="font-semibold text-primary mb-0.5 sm:mb-1 text-sm sm:text-base">{session.course}</h3>
                      <p className="text-xs sm:text-sm text-foreground/60 flex items-center gap-1.5 sm:gap-2">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        {session.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                      <span className="text-xs sm:text-sm text-secondary font-medium">
                        {session.places} places disponibles
                      </span>
                      <Link
                        to="/contact"
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary text-primary-foreground rounded-lg text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-colors ml-auto sm:ml-0"
                      >
                        Réserver
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Custom Training */}
        <section className="py-14 sm:py-20 md:py-28 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="hidden sm:block absolute top-10 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="hidden sm:block absolute bottom-0 left-5 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-white/15 text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/20">
                Sur Mesure
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-display">
                Formation Personnalisée
              </h2>
              <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6 sm:mb-8 leading-relaxed">
                Vous avez des besoins spécifiques ? Nous créons des programmes de formation sur mesure adaptés à votre entreprise, votre équipe et vos objectifs.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10">
                {["Formation en entreprise", "Programmes sur mesure", "Accompagnement individuel", "Sessions en ligne"].map((item, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/90 transition-colors text-sm sm:text-base"
              >
                Demander un devis personnalisé
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Prêt à développer vos compétences ?"
          subtitle="Rejoignez nos formations et devenez un expert en agriculture intelligente."
          primaryButton={{ text: "Voir le Planning", link: "/contact" }}
          secondaryButton={{ text: "Nous Contacter", link: "/contact" }}
        />
      </main>

      <Footer />
    </div>
  );
}
