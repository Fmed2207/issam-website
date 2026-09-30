import { Link } from "react-router-dom";
import { FileText, Scale, AlertCircle, CheckCircle, Shield, Globe, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

export default function Terms() {
  const sections = [
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Utilisation du Site",
      content: `En accédant à ce site web, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.

Le contenu de ce site est fourni à titre informatif général et peut être modifié sans préavis. Nous nous réservons le droit de modifier ces conditions à tout moment.

Vous acceptez d'utiliser ce site uniquement à des fins légales et de manière à ne pas porter atteinte aux droits de tiers.`
    },
    {
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Propriété Intellectuelle",
      content: `Tout le contenu présent sur ce site, incluant mais non limité aux textes, graphiques, logos, images, clips audio, téléchargements numériques et compilations de données, est la propriété de Roline Smart Hydroponics ou de ses fournisseurs de contenu et est protégé par les lois marocaines et internationales sur la propriété intellectuelle.

La reproduction, distribution, modification ou utilisation de tout contenu sans autorisation écrite préalable est strictement interdite.

Le nom "Roline Smart Hydroponics" et notre logo sont des marques déposées et ne peuvent être utilisés sans notre consentement explicite.`
    },
    {
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Services et Formations",
      content: `Les descriptions de nos services et formations sont fournies à titre indicatif. Les détails spécifiques, prix et disponibilités sont communiqués sur demande et peuvent varier.

Toute commande de service ou inscription à une formation constitue un engagement contractuel soumis à nos conditions générales de vente, qui vous seront communiquées avant toute transaction.

Nous nous réservons le droit de modifier ou d'annuler des formations en cas de force majeure ou de circonstances exceptionnelles.`
    },
    {
      icon: <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Limitation de Responsabilité",
      content: `Roline Smart Hydroponics ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.

Les informations fournies sur ce site sont données de bonne foi et nous nous efforçons de les maintenir exactes et à jour. Cependant, nous ne garantissons pas leur exhaustivité ou leur exactitude.

Les liens vers des sites tiers sont fournis pour votre commodité. Nous n'avons aucun contrôle sur le contenu de ces sites et déclinons toute responsabilité à leur égard.`
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Confidentialité",
      content: `L'utilisation de vos données personnelles est régie par notre Politique de Confidentialité. En utilisant ce site, vous consentez au traitement de vos données conformément à cette politique.

Pour plus d'informations sur la façon dont nous collectons et utilisons vos données, veuillez consulter notre Politique de Confidentialité.`
    },
    {
      icon: <Scale className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Droit Applicable",
      content: `Ces conditions d'utilisation sont régies et interprétées conformément aux lois du Royaume du Maroc.

Tout litige relatif à l'utilisation de ce site sera soumis à la compétence exclusive des tribunaux de Casablanca, Maroc.

En cas de nullité d'une clause, les autres dispositions resteront en vigueur et continueront à s'appliquer.`
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Conditions d'Utilisation"
        description="Conditions générales d'utilisation du site Roline Smart Hydroponics. Informations légales et droits d'utilisation."
        keywords="conditions utilisation, CGU, mentions légales, droits"
      />
      <Header />

      <main className="flex-grow">
        <PageHero
          badge="Légal"
          title="Conditions d'Utilisation"
          subtitle="Veuillez lire attentivement ces conditions avant d'utiliser notre site web et nos services."
        />

        {/* Back Link */}
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>

        {/* Content */}
        <section className="pb-16 sm:pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Last Update */}
              <div className="mb-8 sm:mb-12 p-4 sm:p-6 bg-roline-light/50 rounded-xl sm:rounded-2xl border border-primary/10">
                <p className="text-sm sm:text-base text-foreground/70">
                  <span className="font-semibold text-primary">Dernière mise à jour :</span> Décembre 2024
                </p>
                <p className="text-sm sm:text-base text-foreground/70 mt-2">
                  Bienvenue sur le site de Roline Smart Hydroponics. En accédant à ce site, vous acceptez d'être lié par les présentes conditions d'utilisation.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-8 sm:space-y-12">
                {sections.map((section, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        {section.icon}
                      </div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary font-display pt-1.5 sm:pt-2">
                        {section.title}
                      </h2>
                    </div>
                    <div className="ml-0 sm:ml-16 text-foreground/70 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Related Links */}
              <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Link
                  to="/privacy"
                  className="p-5 sm:p-6 bg-background  rounded-xl sm:rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                      Politique de Confidentialité
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/60">
                    Découvrez comment nous protégeons vos données personnelles.
                  </p>
                </Link>
                <Link
                  to="/contact"
                  className="p-5 sm:p-6 bg-background  rounded-xl sm:rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                      Nous Contacter
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/60">
                    Des questions ? N'hésitez pas à nous contacter.
                  </p>
                </Link>
              </div>

              {/* Acceptance Notice */}
              <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-secondary/10 rounded-xl sm:rounded-2xl border border-secondary/20">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">
                      Acceptation des Conditions
                    </h4>
                    <p className="text-foreground/70 text-sm">
                      En continuant à utiliser ce site, vous confirmez que vous avez lu, compris et accepté ces conditions d'utilisation dans leur intégralité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
