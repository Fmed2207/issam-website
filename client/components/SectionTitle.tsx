interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
            light
              ? "bg-white/20 text-white"
              : "bg-secondary/10 text-secondary"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-3xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/90" : "text-foreground/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
