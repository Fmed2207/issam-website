import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Wind, Building2, Sun, Layers, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

export default function Solutions() {
  const solutions = [
    {
      id: "hydroponie",
      icon: <Droplets className="w-12 h-12" />,
      title: "Hydroponie Professionnelle",
      subtitle: "Culture sans sol haute performance",
      description: "Systèmes hydroponiques avancés pour une production optimale avec une économie d'eau exceptionnelle.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      techniques: [
        { name: "NFT (Nutrient Film Technique)", description: "Film nutritif en circulation continue" },
        { name: "DWC (Deep Water Culture)", description: "Culture en eau profonde aérée" },
        { name: "Substrats inertes", description: "Perlite, coco, billes d'argile" },
        { name: "Drip System", description: "Irrigation goutte-à-goutte automatisée" },
      ],
      benefits: [
        "Économie d'eau jusqu'à 90%",
        "Vitesse de croissance accélérée",
        "Contrôle total des nutriments",
        "Production stable et prévisible",
      ],
    },
    {
      id: "aeroponie",
      icon: <Wind className="w-12 h-12" />,
      title: "Aéroponie",
      subtitle: "Technologie de pointe pour rendements maximaux",
      description: "La technique la plus avancée où les racines sont suspendues et nourries par brumisation, offrant une oxygénation optimale.",
      image: "https://images.unsplash.com/photo-1585500403309-5a4c91a5a1e4?w=800&h=500&fit=crop",
      techniques: [
        { name: "High Pressure Aeroponics", description: "Brumisation haute pression" },
        { name: "Low Pressure Aeroponics", description: "Brumisation basse pression économique" },
        { name: "Hybrid Systems", description: "Combinaison aéro-hydroponie" },
        { name: "Vertical Aeroponics", description: "Aéroponie verticale optimisée" },
      ],
      benefits: [
        "Haute productivité maximale",
        "Qualité premium des produits",
        "Croissance 50% plus rapide",
        "Absorption optimale des nutriments",
      ],
    },
    {
      id: "cea",
      icon: <Building2 className="w-12 h-12" />,
      title: "CEA – Indoor Farming",
      subtitle: "Controlled Environment Agriculture",
      description: "Environnement entièrement contrôlé pour une production constante et de haute qualité, indépendante des conditions extérieures.",
      image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&h=500&fit=crop",
      techniques: [
        { name: "Contrôle climatique total", description: "Température, humidité, CO2" },
        { name: "Éclairage LED horticole", description: "Spectre optimisé pour chaque culture" },
        { name: "Irrigation automatisée", description: "Fertigation précise et contrôlée" },
        { name: "Monitoring intelligent", description: "Capteurs et analyse en temps réel" },
      ],
      benefits: [
        "Production toute l'année (365 jours)",
        "Contrôle total de l'environnement",
        "Qualité constante garantie",
        "Indépendance climatique",
      ],
    },
    {
      id: "serres",
      icon: <Sun className="w-12 h-12" />,
      title: "Serres Modernes & Automatisées",
      subtitle: "Infrastructure agricole nouvelle génération",
      description: "Serres intelligentes intégrant les dernières technologies pour optimiser la production tout en réduisant les coûts opérationnels.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f26da8?w=800&h=500&fit=crop",
      techniques: [
        { name: "Structure métallique", description: "Acier galvanisé haute résistance" },
        { name: "Double paroi isolante", description: "Polycarbonate ou verre trempé" },
        { name: "Ventilation automatique", description: "Ouvrants motorisés et extracteurs" },
        { name: "Ombrage intelligent", description: "Écrans thermiques automatisés" },
      ],
      benefits: [
        "Économie d'énergie significative",
        "Gestion climatique optimisée",
        "Durabilité et longévité",
        "Irrigation intelligente intégrée",
      ],
    },
    {
      id: "vertical",
      icon: <Layers className="w-12 h-12" />,
      title: "Vertical Farming",
      subtitle: "Optimisation maximale de l'espace",
      description: "Culture sur plusieurs étages pour maximiser la production par mètre carré, idéale pour les environnements urbains.",
      image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&h=500&fit=crop",
      techniques: [
        { name: "Racks multi-niveaux", description: "Structures modulaires empilables" },
        { name: "LED intégrés", description: "Éclairage par niveau optimisé" },
        { name: "Irrigation verticale", description: "Distribution uniforme automatisée" },
        { name: "Automatisation robotique", description: "Récolte et maintenance automatisées" },
      ],
      benefits: [
        "Multiplication de l'espace utile",
        "Production urbaine possible",
        "Réduction des coûts logistiques",
        "Contrôle environnemental optimal",
      ],
    },
  ];

  const comparisonData = [
    { feature: "Économie d'eau", hydro: "90%", aero: "95%", cea: "85%", serre: "70%" },
    { feature: "Vitesse croissance", hydro: "+30%", aero: "+50%", cea: "+40%", serre: "+20%" },
    { feature: "Production/an", hydro: "Continue", aero: "Continue", cea: "365 jours", serre: "Saisonnière+" },
    { feature: "Investissement", hydro: "Moyen", aero: "Élevé", cea: "Élevé", serre: "Variable" },
    { feature: "Complexité", hydro: "Moyenne", aero: "Haute", cea: "Haute", serre: "Moyenne" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Solutions"
        description="Solutions agricoles innovantes: hydroponie, aéroponie, CEA, fermes indoor, serres intelligentes et vertical farming au Maroc."
        keywords="hydroponie, aéroponie, CEA, ferme indoor, serre intelligente, vertical farming, agriculture moderne"
      />
      <Header />

      <main className="flex-grow">
        <PageHero
          badge="Solutions Techniques"
          title="Technologies agricoles de pointe"
          subtitle="Découvrez nos solutions innovantes en hydroponie, aéroponie, CEA et serriculture moderne pour une agriculture performante et durable."
        />

        {/* Solutions Overview */}
        <section className="py-10 sm:py-14 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {solutions.map((solution) => (
                <a
                  key={solution.id}
                  href={`#${solution.id}`}
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 bg-roline-light/50 rounded-lg sm:rounded-xl hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 group text-xs sm:text-sm md:text-base"
                >
                  <div className="text-primary group-hover:text-secondary-foreground transition-colors [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8 md:[&>svg]:w-12 md:[&>svg]:h-12">
                    {solution.icon}
                  </div>
                  <span className="font-semibold">{solution.title}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Details */}
        <section className="py-14 sm:py-20 md:py-28 bg-gradient-to-b from-background to-roline-light/30 ">
          <div className="container mx-auto px-4">
            <div className="space-y-12 sm:space-y-16 md:space-y-24">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  id={solution.id}
                  className="scroll-mt-24"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl flex items-center justify-center text-white flex-shrink-0 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8 md:[&>svg]:w-12 md:[&>svg]:h-12">
                          {solution.icon}
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm text-secondary font-semibold block">Solution</span>
                          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-display">{solution.title}</h2>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg md:text-xl text-secondary font-medium mb-2 sm:mb-4">{solution.subtitle}</p>
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6 sm:mb-8">{solution.description}</p>

                      {/* Techniques */}
                      <div className="mb-6 sm:mb-8">
                        <h3 className="font-semibold text-primary mb-3 sm:mb-4 text-sm sm:text-base">Techniques & Technologies</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {solution.techniques.map((tech, idx) => (
                            <div key={idx} className="bg-background  rounded-lg p-3 sm:p-4 border border-border/30 shadow-sm">
                              <p className="font-medium text-primary text-xs sm:text-sm">{tech.name}</p>
                              <p className="text-[10px] sm:text-xs text-foreground/60">{tech.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h3 className="font-semibold text-primary mb-3 sm:mb-4 text-sm sm:text-base">Avantages Clés</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                          {solution.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-secondary" />
                              </div>
                              <span className="text-xs sm:text-sm text-foreground/80">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-56 sm:h-72 md:h-80 lg:h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-sm sm:text-base"
                          >
                            En savoir plus
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-14 sm:py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Comparatif
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 font-display">
                Quelle solution choisir ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                Comparez les avantages de chaque technologie pour trouver celle qui correspond à vos besoins
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[500px] sm:min-w-[600px] text-xs sm:text-sm md:text-base">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 sm:py-4 px-2 sm:px-4 font-semibold text-primary">Critère</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-semibold text-primary">Hydroponie</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-semibold text-primary">Aéroponie</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-semibold text-primary">CEA Indoor</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-semibold text-primary">Serres</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={`border-b border-border/50 ${index % 2 === 0 ? "bg-roline-light/20" : ""}`}>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 font-medium text-foreground">{row.feature}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-foreground/70">{row.hydro}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-foreground/70">{row.aero}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-foreground/70">{row.cea}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-foreground/70">{row.serre}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8 sm:mt-10">
              <p className="text-sm sm:text-base text-foreground/60 mb-4 sm:mb-6">
                Besoin d'aide pour choisir la solution adaptée à votre projet ?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                Demander une consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-14 sm:py-20 md:py-28 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="hidden sm:block absolute top-10 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="hidden sm:block absolute bottom-0 left-5 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-white/15 text-white rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-white/20">
                Nos Atouts
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-display">
                Pourquoi nos solutions ?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: "🔬",
                  title: "Technologies Éprouvées",
                  description: "Solutions testées et validées par des années d'expérience terrain",
                },
                {
                  icon: "⚡",
                  title: "Performance Optimisée",
                  description: "Rendements maximisés grâce à des systèmes de pointe",
                },
                {
                  icon: "💧",
                  title: "Économie de Ressources",
                  description: "Réduction drastique de la consommation d'eau et d'énergie",
                },
                {
                  icon: "🌱",
                  title: "Production Durable",
                  description: "Agriculture respectueuse de l'environnement",
                },
                {
                  icon: "📊",
                  title: "Monitoring Avancé",
                  description: "Suivi en temps réel de tous les paramètres",
                },
                {
                  icon: "🤖",
                  title: "Automatisation",
                  description: "Systèmes intelligents pour une gestion simplifiée",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 text-center sm:text-left"
                >
                  <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{item.icon}</span>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                  <p className="opacity-90 text-xs sm:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Prêt à adopter l'agriculture du futur ?"
          subtitle="Nos experts vous accompagnent dans le choix et l'implémentation de la solution parfaite pour votre projet."
          primaryButton={{ text: "Demander un Devis", link: "/contact" }}
          secondaryButton={{ text: "Voir nos Projets", link: "/projects" }}
        />
      </main>

      <Footer />
    </div>
  );
}
