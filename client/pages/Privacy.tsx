import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Database, UserCheck, Mail, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

export default function Privacy() {
  const sections = [
    {
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Collecte des Informations",
      content: `Nous collectons les informations que vous nous fournissez directement lorsque vous :
        - Remplissez un formulaire de contact
        - Vous inscrivez à notre newsletter
        - Demandez un devis ou une consultation
        - Participez à nos formations

        Les informations collectées peuvent inclure : votre nom, adresse email, numéro de téléphone, nom de votre entreprise et toute autre information que vous choisissez de nous communiquer.`
    },
    {
      icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Utilisation des Informations",
      content: `Nous utilisons les informations collectées pour :
        - Répondre à vos demandes et questions
        - Vous envoyer des informations sur nos services et formations
        - Améliorer notre site web et nos services
        - Vous contacter pour le suivi de projets
        - Vous envoyer notre newsletter (avec votre consentement)

        Nous ne vendons jamais vos données personnelles à des tiers.`
    },
    {
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Protection des Données",
      content: `Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, modification, divulgation ou destruction. Ces mesures incluent :
        - Chiffrement SSL pour toutes les transmissions de données
        - Accès restreint aux données personnelles
        - Stockage sécurisé des informations
        - Mise à jour régulière de nos systèmes de sécurité`
    },
    {
      icon: <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Vos Droits",
      content: `Conformément à la loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel au Maroc, vous disposez des droits suivants :
        - Droit d'accès à vos données personnelles
        - Droit de rectification des données inexactes
        - Droit de suppression de vos données
        - Droit d'opposition au traitement de vos données
        - Droit de retirer votre consentement à tout moment

        Pour exercer ces droits, contactez-nous à contact@roline.ma`
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Cookies",
      content: `Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil. Nous utilisons :
        - Cookies essentiels : nécessaires au fonctionnement du site
        - Cookies analytiques : pour comprendre comment vous utilisez notre site
        - Cookies de préférence : pour mémoriser vos préférences

        Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne pas fonctionner correctement.`
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Politique de Confidentialité"
        description="Politique de confidentialité de Roline Smart Hydroponics. Découvrez comment nous protégeons vos données personnelles."
        keywords="politique confidentialité, protection données, RGPD, vie privée"
      />
      <Header />

      <main className="flex-grow">
        <PageHero
          badge="Légal"
          title="Politique de Confidentialité"
          subtitle="Découvrez comment nous collectons, utilisons et protégeons vos données personnelles."
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
                  Cette politique de confidentialité explique comment Roline Smart Hydroponics collecte, utilise et protège vos informations personnelles lorsque vous utilisez notre site web et nos services.
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

              {/* Contact Section */}
              <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-br from-primary to-primary/90 rounded-xl sm:rounded-2xl text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                    <h3 className="text-lg sm:text-xl font-bold font-display">Des Questions ?</h3>
                  </div>
                  <p className="text-white/80 mb-6 text-sm sm:text-base">
                    Si vous avez des questions concernant cette politique de confidentialité ou sur la façon dont nous traitons vos données, n'hésitez pas à nous contacter.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href="mailto:contact@roline.ma"
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/90 transition-colors text-sm sm:text-base"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      contact@roline.ma
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm sm:text-base"
                    >
                      Formulaire de Contact
                    </Link>
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
