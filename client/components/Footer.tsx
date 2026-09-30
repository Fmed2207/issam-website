import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Leaf,
  Send,
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Bureau d'Études", href: "/services#etudes" },
    { label: "Consulting Agricole", href: "/services#consulting" },
    { label: "Installation", href: "/services#installation" },
    { label: "Suivi Opérationnel", href: "/services#suivi" },
    { label: "Formations", href: "/training" },
  ];

  const solutions = [
    { label: "Hydroponie", href: "/solutions#hydroponie" },
    { label: "Aéroponie", href: "/solutions#aeroponie" },
    { label: "CEA & Fermes Indoor", href: "/solutions#cea" },
    { label: "Serres Intelligentes", href: "/solutions#serres" },
    { label: "Vertical Farming", href: "/solutions#vertical" },
  ];

  const company = [
    { label: "À Propos", href: "/about" },
    { label: "Nos Projets", href: "/projects" },
    { label: "Blog & Actualités", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />, href: "https://www.facebook.com/share/1anETqmYrU/", label: "Facebook" },
    { icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />, href: "https://www.instagram.com/issamberrhazi", label: "Instagram" },
    { icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, href: "https://www.linkedin.com/in/issam-berrhazi-1636ab175", label: "LinkedIn" },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: "https://x.com/FarmsManager",
      label: "X (Twitter)"
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary via-primary to-primary/95 text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements - Hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden sm:block absolute top-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="hidden sm:block absolute bottom-0 left-0 w-52 sm:w-64 lg:w-80 h-52 sm:h-64 lg:h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="container mx-auto px-4 py-10 sm:py-12 md:py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center lg:text-left max-w-lg">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 font-display">
                Restez informé
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Abonnez-vous à notre newsletter pour recevoir les dernières actualités et conseils en agriculture intelligente.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 w-full sm:w-72 md:w-80 text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  S'abonner
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-5 sm:mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Leaf className="w-5 h-5 sm:w-7 sm:h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl font-display">Roline</h3>
                  <p className="text-xs sm:text-sm text-white/70">Smart Hydroponics</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                Expert en agriculture intelligente depuis plus de 15 ans. Nous accompagnons les agriculteurs et investisseurs dans leurs projets hydroponiques, CEA et serres modernes au Maroc et à l'international.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2.5 sm:space-y-3">
              <a
                href="https://maps.google.com/maps?q=Bd+Lalla+Yacout+Casablanca+Maroc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 sm:gap-3 text-white/80 hover:text-secondary transition-colors group text-sm sm:text-base"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span>Bd Lalla Yacout & Rue Aaraar, Imm. 9, Apt 17, Casablanca</span>
              </a>
              <a
                href="tel:+212601700202"
                className="flex items-center gap-2.5 sm:gap-3 text-white/80 hover:text-secondary transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>+212 6 01 70 02 02</span>
              </a>
              <a
                href="tel:+212637919739"
                className="flex items-center gap-2.5 sm:gap-3 text-white/80 hover:text-secondary transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>+212 6 37 91 97 39</span>
              </a>
              <a
                href="mailto:Issam_berrhazi@hotmail.com"
                className="flex items-center gap-2.5 sm:gap-3 text-white/80 hover:text-secondary transition-colors text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Issam_berrhazi@hotmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 sm:gap-3 mt-5 sm:mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-5 flex items-center gap-2 font-display">
              <span className="w-6 sm:w-8 h-0.5 bg-secondary"></span>
              Services
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white/80 hover:text-secondary transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-5 flex items-center gap-2 font-display">
              <span className="w-6 sm:w-8 h-0.5 bg-secondary"></span>
              Solutions
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white/80 hover:text-secondary transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-5 flex items-center gap-2 font-display">
              <span className="w-6 sm:w-8 h-0.5 bg-secondary"></span>
              Entreprise
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white/80 hover:text-secondary transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/90 transition-colors text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                Démarrer un Projet
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-4 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-white/70 text-center sm:text-left">
              © {currentYear} Roline Smart Hydroponics. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/70">
              <Link to="/privacy" className="hover:text-secondary transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="hover:text-secondary transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
