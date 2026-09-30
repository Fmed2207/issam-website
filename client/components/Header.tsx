import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, Leaf, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "@/lib/i18n";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const mainMenuItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    {
      label: t("nav.services"),
      href: "/services",
      dropdown: [
        { label: t("nav.services.etudes"), href: "/services#etudes" },
        { label: t("nav.services.consulting"), href: "/services#consulting" },
        { label: t("nav.services.installation"), href: "/services#installation" },
        { label: t("nav.services.suivi"), href: "/services#suivi" },
        { label: t("nav.services.formations"), href: "/services#formations" },
      ],
    },
    {
      label: t("nav.solutions"),
      href: "/solutions",
      dropdown: [
        { label: t("nav.solutions.hydroponie"), href: "/solutions#hydroponie" },
        { label: t("nav.solutions.aeroponie"), href: "/solutions#aeroponie" },
        { label: t("nav.solutions.cea"), href: "/solutions#cea" },
        { label: t("nav.solutions.serres"), href: "/solutions#serres" },
        { label: t("nav.solutions.vertical"), href: "/solutions#vertical" },
      ],
    },
    { label: t("nav.projects"), href: "/projects" },
    { label: t("nav.training"), href: "/training" },
    { label: t("nav.blog"), href: "/blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile and tablet */}
      <div className="bg-primary text-primary-foreground text-sm hidden xl:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2.5">
            <div className="flex items-center gap-6">
              <a href="tel:+212601700202" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>+212 6 01 70 02 02</span>
              </a>
              <a href="mailto:Issam_berrhazi@hotmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Issam_berrhazi@hotmail.com</span>
              </a>
              <span className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                Casablanca, Maroc
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-primary-foreground/80">
                <Leaf className="w-4 h-4 text-secondary" />
                {t("header.expert")}
              </span>
              <span className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-4 h-4" />
                {t("header.hours")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/98 backdrop-blur-md border-b border-border/50 shadow-lg"
            : "bg-background border-b border-border/30 shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <Logo variant="full" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {mainMenuItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                      isActive(item.href)
                        ? "text-secondary bg-secondary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-56">
                      <div className="bg-background rounded-xl shadow-xl border border-border/30 py-2 overflow-hidden">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="flex items-center justify-between px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-roline-light/50 transition-colors"
                          >
                            {subItem.label}
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons + Language Switcher (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher variant="desktop" />
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-primary border border-primary/30 hover:bg-primary/5 transition-all duration-200"
              >
                {t("nav.contact")}
              </Link>
              <a
                href="https://wa.me/212601700202?text=Bonjour%20Roline%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/90 hover:shadow-lg transition-all duration-200 flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t("header.whatsapp")}
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageSwitcher variant="mobile" />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 sm:p-2.5 rounded-xl hover:bg-roline-light/50 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Full screen overlay */}
        <div
          className={`lg:hidden fixed inset-x-0 top-16 sm:top-[72px] bottom-0 bg-background overflow-y-auto transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <nav className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-1">
              {mainMenuItems.map((item) => (
                <div key={item.href}>
                  <div className="flex items-center">
                    <Link
                      to={item.href}
                      className={`flex-1 px-4 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-secondary bg-secondary/10"
                          : "text-foreground hover:text-primary hover:bg-roline-light/50"
                      }`}
                      onClick={() => !item.dropdown && setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === item.label ? null : item.label)
                        }
                        className="p-3 rounded-xl hover:bg-roline-light/50 transition-colors"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      item.dropdown && activeDropdown === item.label
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.dropdown && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-secondary/30 pl-4 pb-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <ArrowRight className="w-4 h-4 text-secondary/50" />
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 space-y-3">
              <Link
                to="/contact"
                className="block w-full px-4 py-3.5 rounded-xl text-center font-medium text-primary border-2 border-primary/30 hover:bg-primary/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("header.contactUs")}
              </Link>
              <a
                href="https://wa.me/212601700202?text=Bonjour%20Roline%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t("header.whatsappMobile")}
              </a>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-6 pt-6 border-t border-border/30">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                <a
                  href="tel:+212601700202"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t("header.callUs")}</p>
                    <p className="text-sm font-medium text-foreground">+212 6 01 70 02 02</p>
                  </div>
                </a>
                <a
                  href="mailto:Issam_berrhazi@hotmail.com"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t("header.email")}</p>
                    <p className="text-sm font-medium text-foreground truncate">Issam_berrhazi@hotmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Trust badge at bottom */}
            <div className="mt-6 pt-6 border-t border-border/30">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Leaf className="w-4 h-4 text-secondary" />
                {t("header.trustBadge")}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
