import { Award, Droplets, Calendar, FolderKanban } from "lucide-react";

const stats = [
  { value: "15+", label: "Années d'expérience", icon: Award },
  { value: "200+", label: "Projets réalisés", icon: FolderKanban },
  { value: "90%", label: "Économie d'eau", icon: Droplets },
  { value: "365", label: "Jours de production/an", icon: Calendar },
];

export default function StatsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden sm:block absolute top-0 left-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
        <div className="hidden sm:block absolute bottom-0 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="hidden xs:flex w-12 sm:w-14 h-12 sm:h-14 mx-auto mb-3 sm:mb-4 bg-white/10 backdrop-blur-sm rounded-xl items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                  <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-secondary" />
                </div>

                {/* Value */}
                <div className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-1 sm:mb-2 font-display tracking-tight">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-white/80 text-xs xs:text-sm sm:text-base font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
