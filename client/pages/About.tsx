import { Link } from "react-router-dom";
import { ArrowRight, Target, Leaf, Zap, Users, Award, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

export default function About() {
  const expertiseAreas = [
    {
      number: "01",
      title: "Serres agricoles modernes et automatisées",
      description: "Conception et installation de serres intelligentes intégrant contrôle automatisé du microclimat, gestion de l'irrigation et de la fertilisation, systèmes d'éclairage optimisés et infrastructures haute performance.",
      features: [
        "Contrôle automatisé du microclimat",
        "Gestion de l'irrigation et fertigation",
        "Systèmes d'éclairage optimisés",
        "Infrastructures haute performance",
      ],
    },
    {
      number: "02",
      title: "Fermes Indoor CEA & Vertical Farming",
      description: "Solutions complètes de Controlled Environment Agriculture pour une production continue et stable toute l'année.",
      features: [
        "Systèmes verticaux modulaires",
        "Contrôle précis du climat et éclairage",
        "Optimisation énergétique",
        "Production 365 jours/an",
      ],
    },
    {
      number: "03",
      title: "Hydroponie & Aéroponie professionnelles",
      description: "Techniques avancées permettant de produire des légumes, herbes et fruits sans sol avec des rendements exceptionnels.",
      features: [
        "Économies d'eau jusqu'à 90%",
        "Croissance accélérée",
        "Qualité premium",
        "Rendement élevé",
      ],
    },
    {
      number: "04",
      title: "Culture Hors-Sol & Systèmes Soilless",
      description: "Conception de solutions adaptées aux environnements urbains, périurbains ou ruraux, avec des technologies fiables et durables.",
      features: [
        "Solutions urbaines et rurales",
        "Technologies fiables",
        "Gestion simplifiée",
        "Durabilité maximale",
      ],
    },
    {
      number: "05",
      title: "Serriculture moderne et intelligente",
      description: "Développement de serres agricoles nouvelles générations pour maximiser la productivité et la stabilité de la production.",
      features: [
        "Gestion fine du climat",
        "Ombrage et ventilation automatiques",
        "Éclairage horticole",
        "Monitoring en temps réel",
      ],
    },
  ];

  const missions = [
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Autonomie alimentaire",
      description: "Accompagner nos clients vers l'indépendance et la sécurité alimentaire.",
    },
    {
      icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Production biologique",
      description: "Des aliments biologiques de haute qualité, sains et nutritifs.",
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Optimisation",
      description: "Maximiser l'efficacité et la rentabilité de vos opérations agricoles.",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Agriculture durable",
      description: "La transition vers une agriculture moderne, intelligente et respectueuse de l'environnement.",
    },
  ];

  const values = [
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet que nous réalisons.",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Partenariat",
      description: "Nous construisons des relations durables avec nos clients.",
    },
    {
      icon: <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Durabilité",
      description: "L'environnement est au cœur de toutes nos solutions.",
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Innovation",
      description: "Nous adoptons les technologies les plus avancées.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="À Propos"
        description="Découvrez Roline Smart Hydroponics, expert en agriculture intelligente depuis plus de 15 ans. Hydroponie, CEA, serres modernes au Maroc."
        keywords="roline, agriculture intelligente, hydroponie, qui sommes nous, expertise agricole, maroc"
      />
      <Header />

      <main className="flex-grow">
        <PageHero
          badge="À Propos de Nous"
          title="Votre partenaire en agriculture intelligente"
          subtitle="Découvrez l'expertise et la mission de Roline Smart Hydroponics, leader en agriculture durable et innovante depuis plus de 15 ans."
        />

        {/* Introduction Section */}
        <section className="py-14 sm:py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  Qui sommes-nous
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight font-display">
                  Roline Smart Hydroponics
                </h2>
                <div className="space-y-3 sm:space-y-4 text-foreground/80 leading-relaxed text-base sm:text-lg">
                  <p>
                    Roline Smart Hydroponics est un <strong>bureau d'études et de conseil</strong> basé à Casablanca, Maroc, spécialisé dans l'agriculture intelligente, durable et à haut rendement.
                  </p>
                  <p>
                    Nous apportons une <strong>expertise scientifique, technique et opérationnelle</strong> pour concevoir, développer et exploiter des projets agricoles innovants, en garantissant performance, durabilité et efficacité des ressources.
                  </p>
                  <p>
                    Fort de <strong>plus de 15 ans d'expérience</strong>, notre cabinet accompagne ses clients au Maroc et à l'international à travers un processus complet et personnalisé.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/fotos-acueils.jpg"
                    alt="Roline Smart Hydroponics"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating card - Hidden on very small screens */}
                <div className="hidden xs:block absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 bg-background  rounded-xl shadow-xl p-4 sm:p-6 max-w-xs">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-primary">15+</p>
                      <p className="text-xs sm:text-sm text-foreground/60">Années d'expérience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-12 sm:py-16 bg-roline-light/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4 font-display">
                Notre accompagnement complet
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto">
                Un processus structuré pour garantir le succès de votre projet
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: "📊", title: "Études de faisabilité technico-économiques" },
                { icon: "🎯", title: "Conseil stratégique et optimisation" },
                { icon: "✏️", title: "Design sur mesure des systèmes" },
                { icon: "⚙️", title: "Installation professionnelle" },
                { icon: "🎓", title: "Formation pratique spécialisée" },
                { icon: "🤝", title: "Accompagnement opérationnel" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-background  rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 sm:gap-4"
                >
                  <span className="text-2xl sm:text-3xl">{item.icon}</span>
                  <p className="font-medium text-primary text-sm sm:text-base">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsSection />

        {/* Expertise Areas */}
        <section className="py-14 sm:py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Nos Compétences
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 font-display">
                Nos domaines d'expertise
              </h2>
              <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
                Une expertise complète couvrant tous les aspects de l'agriculture moderne
              </p>
            </div>

            <div className="space-y-5 sm:space-y-8">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className="group bg-background  rounded-2xl border border-border/40 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-5 sm:p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                      <div className="flex-shrink-0">
                        <span className="inline-block text-3xl sm:text-4xl md:text-5xl font-bold text-secondary/20 group-hover:text-secondary/40 transition-colors font-display">
                          {area.number}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3 group-hover:text-secondary transition-colors font-display">
                          {area.title}
                        </h3>
                        <p className="text-foreground/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                          {area.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {area.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="w-4 h-4 sm:w-5 sm:h-5 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-secondary text-[10px] sm:text-xs">&#10003;</span>
                              </span>
                              <span className="text-xs sm:text-sm text-foreground/70">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section className="py-14 sm:py-20 md:py-28 bg-gradient-to-br from-roline-light/60 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center justify-center">
                  <img
                    src="/icone-formation.jpg"
                    alt="Formation professionnelle"
                    className="rounded-xl shadow-lg w-full max-w-md object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  Formation
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6 font-display">
                  Formations professionnelles certifiantes
                </h2>
                <p className="text-foreground/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Nous proposons des formations complètes et certifiantes permettant aux particuliers, investisseurs et entreprises de maîtriser les bonnes pratiques et de gérer leurs projets de manière autonome.
                </p>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {[
                    "Hydroponie, aéroponie et culture hors-sol",
                    "CEA et fermes indoor verticales",
                    "Gestion du microclimat",
                    "Serriculture moderne",
                    "Conception et pilotage de projets agricoles",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-secondary text-xs sm:text-sm">&#10003;</span>
                      </span>
                      <span className="text-foreground/80 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/training"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 hover:shadow-lg active:scale-[0.98] transition-all duration-200 text-sm sm:text-base"
                >
                  Découvrir nos formations
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-14 sm:py-20 md:py-28 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="hidden sm:block absolute top-10 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="hidden sm:block absolute bottom-0 left-5 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10 sm:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-white/15 text-white rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-white/20">
                Notre Mission
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-display">
                Accompagner nos clients vers le succès
              </h2>
              <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
                Grâce à l'expertise combinée de nos spécialistes, nous garantissons des projets performants, rentables et adaptés à chaque contexte.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {missions.map((mission, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-secondary/30 rounded-xl flex items-center justify-center mb-4 sm:mb-5 text-secondary">
                    {mission.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{mission.title}</h3>
                  <p className="opacity-90 text-xs sm:text-sm leading-relaxed">{mission.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-14 sm:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4 font-display">
                Nos Valeurs
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto">
                Les principes qui guident notre travail au quotidien
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 rounded-xl hover:bg-roline-light/50 transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-secondary">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-primary mb-1 sm:mb-2 text-sm sm:text-base">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Prêt à démarrer votre projet ?"
          subtitle="Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner vers le succès."
          primaryButton={{ text: "Nous Contacter", link: "/contact" }}
          secondaryButton={{ text: "Voir nos Services", link: "/services" }}
        />
      </main>

      <Footer />
    </div>
  );
}
