import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

export type Locale = "fr" | "en" | "ar";

const translations: Record<Locale, Record<string, string>> = {
  fr: {
    // Nav
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.services": "Services",
    "nav.solutions": "Solutions",
    "nav.projects": "Projets",
    "nav.training": "Formations",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    // Services dropdown
    "nav.services.etudes": "Bureau d'Études",
    "nav.services.consulting": "Consulting",
    "nav.services.installation": "Installation",
    "nav.services.suivi": "Suivi Opérationnel",
    "nav.services.formations": "Formations",
    // Solutions dropdown
    "nav.solutions.hydroponie": "Hydroponie",
    "nav.solutions.aeroponie": "Aéroponie",
    "nav.solutions.cea": "CEA Indoor",
    "nav.solutions.serres": "Serres Intelligentes",
    "nav.solutions.vertical": "Vertical Farming",
    // Header top bar
    "header.expert": "Expert en Agriculture Intelligente depuis 15+ ans",
    "header.hours": "Lun - Ven: 9h - 18h",
    "header.whatsapp": "WhatsApp",
    "header.contactUs": "Nous Contacter",
    "header.callUs": "Appelez-nous",
    "header.email": "Email",
    "header.trustBadge": "Expert en Agriculture Intelligente depuis 15+ ans",
    "header.whatsappMobile": "Contacter sur WhatsApp",
    // Hero
    "hero.badge": "Agriculture Intelligente au Maroc",
    "hero.line1": "Nous concevons",
    "hero.line2": "l'agriculture",
    "hero.line3": "de demain",
    "hero.subtitle": "Intelligente, durable et hautement productive",
    "hero.tag1": "Performance",
    "hero.tag2": "Durabilité",
    "hero.tag3": "Innovation",
    "hero.description": "Bienvenue chez <strong>Roline Smart Hydroponics</strong>, votre partenaire expert en agriculture intelligente. Nous concevons et développons des projets agricoles avancés intégrant hydroponie, CEA et serriculture moderne.",
    "hero.cta.services": "Nos Services",
    "hero.cta.contact": "Nous Contacter",
    "hero.cta.training": "Formations",
    "hero.trust.experience": "15+ ans d'expérience",
    "hero.trust.projects": "200+ projets réalisés",
    "hero.trust.satisfaction": "98% clients satisfaits",
    // CTA Section
    "cta.title": "Prêt à transformer votre agriculture ?",
    "cta.subtitle": "Contactez notre équipe d'experts pour discuter de votre projet et découvrir comment nous pouvons vous accompagner vers le succès.",
    "cta.primary": "Nous Contacter",
    "cta.secondary": "Demander un Devis",
    // Splash
    "splash.tagline": "L'agriculture de demain, aujourd'hui",
    // Common
    "common.loading": "Chargement...",
    "common.learnMore": "En savoir plus",
    "common.viewAll": "Voir tout",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.solutions": "Solutions",
    "nav.projects": "Projects",
    "nav.training": "Training",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    // Services dropdown
    "nav.services.etudes": "Engineering Office",
    "nav.services.consulting": "Consulting",
    "nav.services.installation": "Installation",
    "nav.services.suivi": "Operational Monitoring",
    "nav.services.formations": "Training",
    // Solutions dropdown
    "nav.solutions.hydroponie": "Hydroponics",
    "nav.solutions.aeroponie": "Aeroponics",
    "nav.solutions.cea": "CEA Indoor",
    "nav.solutions.serres": "Smart Greenhouses",
    "nav.solutions.vertical": "Vertical Farming",
    // Header top bar
    "header.expert": "Smart Agriculture Expert for 15+ years",
    "header.hours": "Mon - Fri: 9am - 6pm",
    "header.whatsapp": "WhatsApp",
    "header.contactUs": "Contact Us",
    "header.callUs": "Call us",
    "header.email": "Email",
    "header.trustBadge": "Smart Agriculture Expert for 15+ years",
    "header.whatsappMobile": "Contact on WhatsApp",
    // Hero
    "hero.badge": "Smart Agriculture in Morocco",
    "hero.line1": "We design",
    "hero.line2": "the agriculture",
    "hero.line3": "of tomorrow",
    "hero.subtitle": "Smart, sustainable and highly productive",
    "hero.tag1": "Performance",
    "hero.tag2": "Sustainability",
    "hero.tag3": "Innovation",
    "hero.description": "Welcome to <strong>Roline Smart Hydroponics</strong>, your expert partner in smart agriculture. We design and develop advanced agricultural projects integrating hydroponics, CEA and modern greenhouse technology.",
    "hero.cta.services": "Our Services",
    "hero.cta.contact": "Contact Us",
    "hero.cta.training": "Training",
    "hero.trust.experience": "15+ years experience",
    "hero.trust.projects": "200+ projects completed",
    "hero.trust.satisfaction": "98% satisfied clients",
    // CTA Section
    "cta.title": "Ready to transform your agriculture?",
    "cta.subtitle": "Contact our team of experts to discuss your project and discover how we can support your success.",
    "cta.primary": "Contact Us",
    "cta.secondary": "Request a Quote",
    // Splash
    "splash.tagline": "The agriculture of tomorrow, today",
    // Common
    "common.loading": "Loading...",
    "common.learnMore": "Learn more",
    "common.viewAll": "View all",
  },
  ar: {
    // Nav
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.solutions": "الحلول",
    "nav.projects": "المشاريع",
    "nav.training": "التكوين",
    "nav.blog": "المدونة",
    "nav.contact": "اتصل بنا",
    // Services dropdown
    "nav.services.etudes": "مكتب الدراسات",
    "nav.services.consulting": "الاستشارات",
    "nav.services.installation": "التركيب",
    "nav.services.suivi": "المتابعة التشغيلية",
    "nav.services.formations": "التكوين",
    // Solutions dropdown
    "nav.solutions.hydroponie": "الزراعة المائية",
    "nav.solutions.aeroponie": "الزراعة الهوائية",
    "nav.solutions.cea": "CEA داخلي",
    "nav.solutions.serres": "البيوت الذكية",
    "nav.solutions.vertical": "الزراعة العمودية",
    // Header top bar
    "header.expert": "خبير في الفلاحة الذكية منذ +15 سنة",
    "header.hours": "الإثنين - الجمعة: 9ص - 6م",
    "header.whatsapp": "واتساب",
    "header.contactUs": "اتصل بنا",
    "header.callUs": "اتصل بنا",
    "header.email": "البريد الإلكتروني",
    "header.trustBadge": "خبير في الفلاحة الذكية منذ +15 سنة",
    "header.whatsappMobile": "تواصل عبر واتساب",
    // Hero
    "hero.badge": "الفلاحة الذكية في المغرب",
    "hero.line1": "نصمم",
    "hero.line2": "فلاحة",
    "hero.line3": "الغد",
    "hero.subtitle": "ذكية ومستدامة وعالية الإنتاجية",
    "hero.tag1": "الأداء",
    "hero.tag2": "الاستدامة",
    "hero.tag3": "الابتكار",
    "hero.description": "مرحباً بكم في <strong>رولين سمارت هيدروبونيكس</strong>، شريككم الخبير في الفلاحة الذكية. نقوم بتصميم وتطوير مشاريع فلاحية متقدمة تدمج الزراعة المائية وتقنيات CEA والبيوت الزراعية الحديثة.",
    "hero.cta.services": "خدماتنا",
    "hero.cta.contact": "اتصل بنا",
    "hero.cta.training": "التكوين",
    "hero.trust.experience": "+15 سنة خبرة",
    "hero.trust.projects": "+200 مشروع منجز",
    "hero.trust.satisfaction": "98% عملاء راضون",
    // CTA Section
    "cta.title": "هل أنت مستعد لتحويل فلاحتك؟",
    "cta.subtitle": "تواصل مع فريق خبرائنا لمناقشة مشروعك واكتشاف كيف يمكننا مرافقتك نحو النجاح.",
    "cta.primary": "اتصل بنا",
    "cta.secondary": "طلب عرض أسعار",
    // Splash
    "splash.tagline": "فلاحة الغد، اليوم",
    // Common
    "common.loading": "جارٍ التحميل...",
    "common.learnMore": "اعرف المزيد",
    "common.viewAll": "عرض الكل",
  },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem("roline-locale");
    return (saved as Locale) || "fr";
  });

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("roline-locale", newLocale);
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLocale;
  }, []);

  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback(
    (key: string) => translations[locale]?.[key] || translations.fr[key] || key,
    [locale]
  );

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within I18nProvider");
  }
  return context;
}
