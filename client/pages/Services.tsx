import { Link } from "react-router-dom";
import { ArrowRight, FileSearch, BarChart3, Settings, Wrench, Activity, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

export default function Services() {
  const services = [
    {
      id: "etudes",
      icon: <FileSearch className="w-10 h-10" />,
      number: "01",
      title: "Bureau d'Études & Ingénierie",
      subtitle: "Conception technique et scientifique de pointe",
      description: "Nous accompagnons vos projets dès la conception avec une expertise technique et scientifique de pointe pour garantir leur succès.",
      features: [
        {
          title: "Études technico-économiques",
          description: "Analyse complète pour garantir rentabilité et performance de votre projet.",
        },
        {
          title: "Analyse de rentabilité",
          description: "Projection précise des coûts et gains pour chaque culture hors-sol.",
        },
        {
          title: "Design technique sur mesure",
          description: "Solutions adaptées à votre espace, culture et objectifs spécifiques.",
        },
        {
          title: "Optimisation énergétique et climatique",
          description: "Maîtrise de l'environnement pour maximiser rendement et efficacité.",
        },
      ],
    },
    {
      id: "consulting",
      icon: <BarChart3 className="w-10 h-10" />,
      number: "02",
      title: "Consulting & Stratégie Agricole",
      subtitle: "De la vision au projet concret",
      description: "Nous vous guidons pour transformer votre vision en projet concret et durable avec des stratégies personnalisées.",
      features: [
        {
          title: "Audit technique approfondi",
          description: "Identification des points clés et axes d'amélioration de votre exploitation.",
        },
        {
          title: "Stratégies de production sur mesure",
          description: "Hydroponie, aéroponie, aquaponie, CEA et serres adaptées à vos besoins.",
        },
        {
          title: "Plans de développement personnalisés",
          description: "Optimisation de vos ressources et processus pour une croissance durable.",
        },
        {
          title: "Accompagnement complet",
          description: "Du concept initial à la réalisation et au suivi opérationnel.",
        },
      ],
    },
    {
      id: "installation",
      icon: <Wrench className="w-10 h-10" />,
      number: "03",
      title: "Installation & Mise en Route",
      subtitle: "Projets clé en main",
      description: "Nous réalisons vos projets clé en main, avec un montage professionnel et des systèmes optimisés pour une performance maximale.",
      features: [
        {
          title: "Montages hydroponiques complets",
          description: "Installation et configuration de systèmes sur mesure adaptés à vos cultures.",
        },
        {
          title: "Fermes indoor CEA clé en main",
          description: "Environnement entièrement contrôlé pour cultures 365 jours/an.",
        },
        {
          title: "Serres agricoles intelligentes",
          description: "Automatisation, contrôle climatique et fertigation intégrés.",
        },
        {
          title: "Mise en service professionnelle",
          description: "Tests, calibration et formation pour un démarrage optimal.",
        },
      ],
    },
    {
      id: "suivi",
      icon: <Activity className="w-10 h-10" />,
      number: "04",
      title: "Suivi & Gestion Opérationnelle",
      subtitle: "Performance continue",
      description: "Nous restons à vos côtés pour assurer la performance et la continuité de vos cultures avec un suivi personnalisé.",
      features: [
        {
          title: "Monitoring des performances",
          description: "Suivi digital précis et alertes proactives en temps réel.",
        },
        {
          title: "Gestion des cultures",
          description: "Optimisation des nutriments, cycles et conditions de croissance.",
        },
        {
          title: "Optimisation continue",
          description: "Ajustements basés sur les données pour maximiser rendement et qualité.",
        },
        {
          title: "Support technique dédié",
          description: "Assistance réactive pour résoudre tout problème rapidement.",
        },
      ],
    },
    {
      id: "formations",
      icon: <GraduationCap className="w-10 h-10" />,
      number: "05",
      title: "Formations Professionnelles",
      subtitle: "Maîtrisez les techniques modernes",
      description: "Programmes conçus pour professionnels et débutants souhaitant maîtriser les techniques modernes d'agriculture.",
      features: [
        {
          title: "Hydroponie et cultures hors-sol",
          description: "Maîtrisez les techniques de culture sans sol les plus avancées.",
        },
        {
          title: "CEA & Fermes indoor",
          description: "Apprenez à gérer des environnements de culture contrôlés.",
        },
        {
          title: "Serriculture moderne",
          description: "Techniques avancées de gestion des serres intelligentes.",
        },
        {
          title: "Gestion du climat et environnement",
          description: "Contrôle optimal des paramètres de croissance.",
        },
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Analyse de vos besoins et objectifs",
    },
    {
      step: "02",
      title: "Étude",
      description: "Étude technique et économique détaillée",
    },
    {
      step: "03",
      title: "Conception",
      description: "Design personnalisé de votre projet",
    },
    {
      step: "04",
      title: "Installation",
      description: "Mise en place professionnelle",
    },
    {
      step: "05",
      title: "Formation",
      description: "Transfer de compétences",
    },
    {
      step: "06",
      title: "Suivi",
      description: "Accompagnement continu",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Services"
        description="Services d'agriculture intelligente: bureau d'études, consulting, installation, suivi opérationnel et formations professionnelles au Maroc."
        keywords="services agricoles, consulting agricole, installation hydroponie, formation agriculture, bureau études agricole"
      />
      <Header />

      <main className="flex-grow">
        <PageHero
          badge="Nos Services"
          title="Des solutions complètes pour votre réussite"
          subtitle="Découvrez notre gamme de services en agriculture intelligente, du conseil technique aux formations professionnelles."
        />

        {/* Process Section */}
        <section className="py-12 sm:py-16 bg-background border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 sm:mb-3 font-display">
                Notre Processus
              </h2>
              <p className="text-sm sm:text-base text-foreground/70">Un accompagnement structuré de A à Z</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {processSteps.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                    <span className="text-base sm:text-xl font-bold text-primary font-display">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-primary text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</h3>
                  <p className="text-[10px] sm:text-xs text-foreground/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-14 sm:py-20 md:py-28 bg-gradient-to-b from-background to-roline-light/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Ce que nous offrons
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 font-display">
                Nos Services en Détail
              </h2>
              <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
                Une expertise complète pour accompagner chaque étape de votre projet agricole
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-24 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="bg-background rounded-2xl sm:rounded-3xl shadow-lg border border-border/30 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="p-5 sm:p-8 md:p-12">
                      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
                        {/* Left/Header */}
                        <div className="lg:w-1/3">
                          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                              {service.icon}
                            </div>
                            <div>
                              <span className="text-xs sm:text-sm text-secondary font-semibold">
                                Service {service.number}
                              </span>
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-display">
                                {service.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-secondary font-medium mb-3 sm:mb-4 text-sm sm:text-base">{service.subtitle}</p>
                          <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                            {service.description}
                          </p>
                        </div>

                        {/* Right/Features */}
                        <div className="lg:w-2/3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {service.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="bg-roline-light/30 rounded-xl p-4 sm:p-6 hover:bg-roline-light/50 transition-colors"
                              >
                                <h4 className="font-semibold text-primary mb-1.5 sm:mb-2 text-sm sm:text-base">
                                  {feature.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-foreground/70">
                                  {feature.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-14 sm:py-20 md:py-28 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="hidden sm:block absolute top-10 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="hidden sm:block absolute bottom-0 left-5 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10 sm:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-white/15 text-white rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-white/20">
                Pourquoi Nous Choisir
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-display">
                L'excellence à votre service
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Expertise Pointue",
                  description: "Plus de 15 ans d'expérience en agriculture innovante",
                },
                {
                  icon: "🔬",
                  title: "Approche Scientifique",
                  description: "Méthodes basées sur la recherche et les données",
                },
                {
                  icon: "🤝",
                  title: "Accompagnement Total",
                  description: "Du concept à l'exploitation, nous sommes à vos côtés",
                },
                {
                  icon: "🌍",
                  title: "Rayonnement International",
                  description: "Projets réalisés au Maroc et à l'international",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{item.icon}</span>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                  <p className="opacity-90 text-xs sm:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 sm:mb-3 font-display">
                Accès Rapide
              </h2>
              <p className="text-sm sm:text-base text-foreground/70">Naviguez directement vers le service qui vous intéresse</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-roline-light/50 text-primary rounded-full font-medium hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-xs sm:text-sm md:text-base"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Prêt à lancer votre projet ?"
          subtitle="Contactez-nous pour une consultation gratuite et découvrez comment nos services peuvent transformer votre vision en réalité."
          primaryButton={{ text: "Demander un Devis", link: "/contact" }}
          secondaryButton={{ text: "Voir nos Projets", link: "/projects" }}
        />
      </main>

      <Footer />
    </div>
  );
}
