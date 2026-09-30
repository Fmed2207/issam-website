import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, ExternalLink, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "Tous les projets" },
    { id: "hydroponie", label: "Hydroponie" },
    { id: "serres", label: "Serres" },
    { id: "cea", label: "CEA Indoor" },
    { id: "vertical", label: "Vertical Farming" },
  ];

  const projects = [
    {
      id: 1,
      title: "Culture de Safran Indoor CEA",
      category: "cea",
      location: "Casablanca, Maroc",
      year: "2024",
      image: "/project-saffron-indoor.jpg",
      description: "Premier projet de culture de safran en environnement contrôlé (CEA) au Maroc. Système vertical farming avec LED horticole spécialisée pour la production de l'or rouge toute l'année.",
      results: [
        "Production 365 jours/an",
        "Qualité premium AAA",
        "Rendement 3x supérieur",
      ],
      technologies: ["Vertical Farming", "LED Spectrum optimisé", "Climat contrôlé", "Fertigation précise"],
    },
    {
      id: 2,
      title: "Ferme Hydroponique Laitues",
      category: "hydroponie",
      location: "Casablanca, Maroc",
      year: "2024",
      image: "/project-hydroponic-lettuce.png",
      description: "Installation d'une serre hydroponique moderne pour la production de laitues et légumes feuilles. Système NFT avec gestion automatisée de la nutrition.",
      results: [
        "Production de 800kg/semaine",
        "Économie d'eau de 90%",
        "Qualité constante toute l'année",
      ],
      technologies: ["Système NFT", "Serre moderne", "Monitoring digital", "Fertigation auto"],
    },
    {
      id: 3,
      title: "Serre Tomates High-Tech",
      category: "serres",
      location: "Agadir, Maroc",
      year: "2023",
      image: "/project-tomato-greenhouse.jpg",
      description: "Conception et installation d'une serre intelligente pour la production de tomates. Contrôle climatique avancé et suivi IoT en temps réel.",
      results: [
        "Augmentation rendement de 50%",
        "Certification export Europe",
        "Production 12 mois/an",
      ],
      technologies: ["Serre climat contrôlé", "Capteurs IoT", "Substrat coco", "Irrigation goutte-à-goutte"],
    },
    {
      id: 4,
      title: "Vertical Farm Multi-cultures",
      category: "vertical",
      location: "Rabat, Maroc",
      year: "2024",
      image: "/project-vertical-farm.png",
      description: "Installation d'un système de culture verticale sur plusieurs niveaux pour la production de micro-pousses, herbes aromatiques et légumes feuilles premium.",
      results: [
        "10x la production/m²",
        "Zero pesticides",
        "Fraîcheur 24h garantie",
      ],
      technologies: ["Racks verticaux", "LED horticole", "Automatisation complète", "Traçabilité"],
    },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Projets"
        description="Découvrez nos réalisations en agriculture intelligente: fermes hydroponiques, serres modernes et projets CEA au Maroc et à l'international."
        keywords="projets hydroponie, réalisations agriculture, portfolio agricole, fermes maroc"
      />
      <Header />

      <main className="flex-grow">
        <PageHero
          badge="Portfolio"
          title="Nos Projets Réalisés"
          subtitle="Découvrez une sélection de nos réalisations en agriculture intelligente au Maroc et à l'international."
        />

        {/* Filters */}
        <section className="py-4 sm:py-6 md:py-8 bg-background border-b border-border/30 sticky top-[60px] sm:top-[73px] z-40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-200 text-xs sm:text-sm md:text-base ${
                    filter === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-roline-light/50 text-foreground hover:bg-secondary hover:text-secondary-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-roline-light/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-background rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="px-2.5 sm:px-3 py-1 bg-secondary text-secondary-foreground text-[10px] sm:text-xs font-semibold rounded-full">
                        {categories.find(c => c.id === project.category)?.label}
                      </span>
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{project.title}</h3>
                      <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm opacity-90">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <p className="text-foreground/70 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center text-secondary font-medium text-xs sm:text-sm">
                      Voir les détails
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 sm:py-14 md:py-16 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="hidden sm:block absolute top-0 left-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
            <div className="hidden sm:block absolute bottom-0 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center text-white">
              {[
                { value: "200+", label: "Projets Réalisés" },
                { value: "15+", label: "Pays" },
                { value: "98%", label: "Clients Satisfaits" },
                { value: "50M+", label: "DH Investis" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-1 sm:mb-2 font-display">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Votre projet pourrait être le prochain"
          subtitle="Contactez-nous pour discuter de votre vision et découvrir comment nous pouvons la concrétiser."
          primaryButton={{ text: "Démarrer un Projet", link: "/contact" }}
          secondaryButton={{ text: "Voir nos Services", link: "/services" }}
        />
      </main>

      <Footer />

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-background rounded-xl sm:rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-48 sm:h-60 md:h-72">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-primary to-transparent">
                <span className="px-2.5 sm:px-3 py-1 bg-secondary text-secondary-foreground text-[10px] sm:text-xs font-semibold rounded-full mb-2 sm:mb-3 inline-block">
                  {categories.find(c => c.id === selectedProject.category)?.label}
                </span>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white font-display">
                  {selectedProject.title}
                </h2>
              </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-4 sm:mb-6 text-foreground/70 text-sm">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  {selectedProject.location}
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  {selectedProject.year}
                </span>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <h3 className="font-semibold text-primary mb-3 sm:mb-4 text-sm sm:text-base">Résultats Obtenus</h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {selectedProject.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground/70 text-xs sm:text-sm">
                        <span className="w-4 h-4 sm:w-5 sm:h-5 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-secondary text-[10px] sm:text-xs">&#10003;</span>
                        </span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3 sm:mb-4 text-sm sm:text-base">Technologies Utilisées</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-roline-light text-primary text-xs sm:text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-center hover:bg-primary/90 transition-colors text-sm sm:text-base"
                >
                  Projet similaire ?
                </Link>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 border border-border rounded-xl font-semibold hover:bg-roline-light/50 transition-colors text-sm sm:text-base"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
