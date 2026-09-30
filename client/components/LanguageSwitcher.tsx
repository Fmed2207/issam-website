import { useState, useRef, useEffect } from "react";
import { useTranslation, Locale } from "@/lib/i18n";
import { Globe } from "lucide-react";

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: "fr", label: "Français", flag: "FR" },
  { code: "en", label: "English", flag: "EN" },
  { code: "ar", label: "العربية", flag: "AR" },
];

export default function LanguageSwitcher({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = languages.find((l) => l.code === locale)!;

  if (variant === "mobile") {
    return (
      <div className="flex items-center gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              locale === lang.code
                ? "bg-secondary/20 text-secondary"
                : "text-foreground/60 hover:bg-muted"
            }`}
          >
            {lang.flag}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span>{current.flag}</span>
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-background rounded-xl shadow-xl border border-border/30 py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                locale === lang.code
                  ? "text-secondary bg-secondary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-roline-light/50"
              }`}
            >
              <span className="font-semibold w-6">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
