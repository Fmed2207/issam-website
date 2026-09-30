import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButton?: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
    external?: boolean;
  };
}

export default function CTASection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Decorative elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden sm:block absolute top-10 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-0 left-5 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute top-1/2 left-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-2xl"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
      </div>

      {/* Floating decorative icon */}
      <div className="hidden md:flex absolute top-1/2 right-10 lg:right-20 -translate-y-1/2 w-16 lg:w-20 h-16 lg:h-20 bg-white/10 backdrop-blur-sm rounded-2xl items-center justify-center animate-float">
        <Leaf className="w-8 lg:w-10 h-8 lg:h-10 text-secondary" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/20 animate-fade-in">
          <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
          Passez à l'action
        </div>

        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight max-w-3xl mx-auto font-display tracking-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          {primaryButton && (
            <Link
              to={primaryButton.link}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-secondary/90 active:scale-[0.98] transition-all duration-200 group"
            >
              {primaryButton.text}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
          {secondaryButton && (
            secondaryButton.external ? (
              <a
                href={secondaryButton.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/15 backdrop-blur-sm text-white border border-white/30 rounded-xl font-semibold hover:bg-white/25 hover:border-white/50 active:scale-[0.98] transition-all duration-200"
              >
                {secondaryButton.text}
              </a>
            ) : (
              <Link
                to={secondaryButton.link}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/15 backdrop-blur-sm text-white border border-white/30 rounded-xl font-semibold hover:bg-white/25 hover:border-white/50 active:scale-[0.98] transition-all duration-200"
              >
                {secondaryButton.text}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
