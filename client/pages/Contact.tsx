import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Building,
  MessageSquare,
  Linkedin,
  Facebook,
  Instagram,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    projectType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // IMPORTANT: Replace this with your actual Formspree form ID
  // Get your form ID at: https://formspree.io/forms
  const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_ID"; // e.g., "xpznqwer"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          projectType: formData.projectType,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      setSubmitError("Une erreur s'est produite. Veuillez reessayer ou nous contacter directement par email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      details: ["Bd Lalla Yacout & Rue Aaraar", "Immeuble 9, Apt 17, Casablanca"],
      action: { label: "Voir sur la carte", link: "#map" },
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telephone",
      details: ["+212 6 01 70 02 02", "+212 6 37 91 97 39"],
      action: { label: "Appeler maintenant", link: "tel:+212601700202" },
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["Issam_berrhazi@hotmail.com"],
      action: { label: "Envoyer un email", link: "mailto:Issam_berrhazi@hotmail.com" },
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      details: ["Lun - Ven: 9h00 - 18h00", "Sam: 9h00 - 13h00"],
      action: { label: "Prendre rendez-vous", link: "#form" },
    },
  ];

  const projectTypes = [
    "Hydroponie",
    "Aéroponie",
    "CEA / Ferme Indoor",
    "Serre Intelligente",
    "Vertical Farming",
    "Formation",
    "Consultation",
    "Autre",
  ];

  const faqs = [
    {
      question: "Combien coûte un projet hydroponique ?",
      answer: "Le coût varie selon la taille et la complexité du projet. Nous proposons des études personnalisées pour chaque client avec un devis détaillé.",
    },
    {
      question: "Quelle est la durée de réalisation d'un projet ?",
      answer: "En général, un projet complet prend entre 2 et 6 mois, de l'étude à la mise en service, selon l'envergure.",
    },
    {
      question: "Proposez-vous des formations pour débutants ?",
      answer: "Oui, nos formations s'adressent à tous les niveaux, du débutant souhaitant découvrir l'hydroponie au professionnel voulant se perfectionner.",
    },
    {
      question: "Intervenez-vous à l'international ?",
      answer: "Oui, nous avons réalisé des projets dans plus de 15 pays et proposons nos services à l'international.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Contact"
        description="Contactez Roline Smart Hydroponics pour vos projets d'agriculture intelligente. Équipe d'experts à Casablanca, Maroc."
        keywords="contact roline, devis hydroponie, contact agriculture maroc, casablanca"
      />
      <Header />

      <main className="flex-grow">
        <PageHero
          badge="Contact"
          title="Parlons de Votre Projet"
          subtitle="Notre équipe d'experts est à votre disposition pour répondre à vos questions et vous accompagner dans votre projet agricole."
        />

        {/* Contact Info Cards */}
        <section className="py-8 sm:py-10 md:py-12 bg-background border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-roline-light/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-roline-light/50 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center text-primary mb-2.5 sm:mb-3 md:mb-4 group-hover:bg-primary group-hover:text-white transition-colors [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-primary mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-foreground/70 text-[10px] sm:text-xs md:text-sm">{detail}</p>
                  ))}
                  <a
                    href={info.action.link}
                    className="inline-flex items-center gap-1 text-secondary font-medium text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-3 hover:gap-2 transition-all"
                  >
                    {info.action.label}
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-background to-roline-light/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
              {/* Contact Form */}
              <div id="form" className="scroll-mt-24">
                <div className="bg-background  rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10">
                  <div className="mb-5 sm:mb-6 md:mb-8">
                    <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                      Formulaire de Contact
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1.5 sm:mb-2 font-display">
                      Envoyez-nous un message
                    </h2>
                    <p className="text-foreground/70 text-sm sm:text-base">
                      Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-8 sm:py-10 md:py-12">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1.5 sm:mb-2 font-display">Message Envoyé !</h3>
                      <p className="text-foreground/70 mb-4 sm:mb-6 text-sm sm:text-base">
                        Merci pour votre message. Notre équipe vous contactera sous 24-48h.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setSubmitError(null);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            subject: "",
                            message: "",
                            projectType: "",
                          });
                        }}
                        className="px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
                      >
                        Envoyer un autre message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                      {/* Error Message */}
                      {submitError && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                          {submitError}
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-primary mb-1.5 sm:mb-2">
                            Nom complet *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary text-sm"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-primary mb-1.5 sm:mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary text-sm"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-primary mb-1.5 sm:mb-2">
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary text-sm"
                            placeholder="+212 6XX-XXXXXX"
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-primary mb-1.5 sm:mb-2">
                            Entreprise
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary text-sm"
                            placeholder="Nom de votre entreprise"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-primary mb-1.5 sm:mb-2">
                          Type de projet
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary bg-background text-sm"
                        >
                          <option value="">Sélectionnez un type de projet</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-primary mb-1.5 sm:mb-2">
                          Sujet *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary text-sm"
                          placeholder="Sujet de votre message"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-primary mb-1.5 sm:mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary resize-none text-sm"
                          placeholder="Décrivez votre projet ou votre demande..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-5 sm:px-6 py-3 sm:py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 text-sm sm:text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                            Envoyer le message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Side Content */}
              <div className="space-y-5 sm:space-y-6 md:space-y-8">
                {/* Company Info */}
                <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 text-white">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <Building className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-display">Roline Smart Hydroponics</h3>
                      <p className="text-white/80 text-xs sm:text-sm">Expert en Agriculture Intelligente</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    Basés à Casablanca, nous accompagnons les agriculteurs et investisseurs dans leurs projets d'agriculture innovante depuis plus de 15 ans. Notre expertise couvre l'hydroponie, les serres intelligentes, les fermes indoor et bien plus.
                  </p>
                  <div className="flex gap-2.5 sm:gap-3">
                    <a
                      href="https://www.facebook.com/share/1anETqmYrU/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/issamberrhazi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/issam-berrhazi-1636ab175"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://x.com/FarmsManager"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-background rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                    <h3 className="text-lg sm:text-xl font-bold text-primary font-display">Questions Fréquentes</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-border/30 pb-3 sm:pb-4 last:border-0 last:pb-0">
                        <h4 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">{faq.question}</h4>
                        <p className="text-foreground/70 text-xs sm:text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <Link
                    to="/services"
                    className="bg-background  rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                      <Building className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="font-semibold text-primary text-sm sm:text-base">Nos Services</h4>
                    <p className="text-xs sm:text-sm text-foreground/60">Découvrir</p>
                  </Link>
                  <Link
                    to="/training"
                    className="bg-background  rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="font-semibold text-primary text-sm sm:text-base">Formations</h4>
                    <p className="text-xs sm:text-sm text-foreground/60">S'inscrire</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="py-10 sm:py-12 md:py-16 bg-background scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Localisation
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1.5 sm:mb-2 font-display">
                Retrouvez-nous a Casablanca
              </h2>
              <p className="text-foreground/70 text-sm sm:text-base">Bd Lalla Yacout & Rue Aaraar, Immeuble 9, Appartement 17, Casablanca - Maroc</p>
            </div>
            <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl h-[300px] sm:h-[400px] md:h-[500px]">
              {/* Placeholder for map - In production, integrate Google Maps or similar */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.72691862702!2d-7.669705!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              {/* Location Card Overlay */}
              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-auto md:w-80 bg-background  rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-0.5 sm:mb-1 text-sm sm:text-base">Roline Smart Hydroponics</h3>
                    <p className="text-xs sm:text-sm text-foreground/70 mb-2 sm:mb-3">
                      Bd Lalla Yacout & Rue Aaraar<br />
                      Immeuble 9, Apt 17, Casablanca
                    </p>
                    <a
                      href="https://maps.google.com/maps?q=Bd+Lalla+Yacout+Casablanca+Maroc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 text-secondary font-medium text-xs sm:text-sm hover:gap-2 sm:hover:gap-3 transition-all"
                    >
                      Obtenir l'itineraire
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-secondary to-secondary/90">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-foreground mb-2 sm:mb-3 md:mb-4 font-display">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-secondary-foreground/80 mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Nos experts sont disponibles pour vous accompagner à chaque étape de votre projet agricole innovant.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="tel:+212601700202"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Appelez-nous
              </a>
              <a
                href="mailto:Issam_berrhazi@hotmail.com"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-colors text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Envoyez un email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
