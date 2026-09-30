import { Leaf } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  image?: string;
}

export default function PageHero({ title, subtitle, badge, image }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-secondary/15 rounded-full blur-3xl -mr-24 sm:-mr-36 lg:-mr-48 -mt-24 sm:-mt-36 lg:-mt-48 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-white/5 rounded-full blur-3xl -ml-24 sm:-ml-36 lg:-ml-48 -mb-24 sm:-mb-36 lg:-mb-48"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 lg:w-[600px] h-72 sm:h-96 lg:h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
      </div>

      {/* Floating shapes - Hidden on mobile */}
      <div className="hidden sm:block absolute top-16 sm:top-20 left-10 sm:left-20 w-3 sm:w-4 h-3 sm:h-4 bg-secondary/40 rounded-full animate-pulse-subtle"></div>
      <div className="hidden sm:block absolute bottom-20 sm:bottom-32 right-20 sm:right-32 w-4 sm:w-6 h-4 sm:h-6 bg-white/20 rounded-full animate-pulse-subtle" style={{ animationDelay: '0.3s' }}></div>
      <div className="hidden md:block absolute top-32 sm:top-40 right-28 sm:right-40 w-2 sm:w-3 h-2 sm:h-3 bg-secondary/30 rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col ${image ? 'lg:flex-row lg:items-center lg:gap-12' : ''}`}>
          <div className={`${image ? 'lg:flex-1' : 'max-w-4xl mx-auto lg:mx-0'} text-center lg:text-left`}>
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/20 animate-fade-in">
                <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
                {badge}
              </div>
            )}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-display tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          {image && (
            <div className="hidden lg:block lg:flex-1">
              <img
                src={image}
                alt={title}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  );
}
