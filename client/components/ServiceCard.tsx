interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="group bg-background  rounded-2xl p-8 border border-border/40 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 hover:-translate-y-2">
      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-foreground/70">
              <span className="text-secondary mt-0.5 flex-shrink-0">&#10003;</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
