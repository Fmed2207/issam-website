import { Link } from "react-router-dom";
import { Video, MapPin, Calendar, CheckCircle } from "lucide-react";

interface PricingTier {
  id: string;
  title: string;
  icon: React.ReactNode;
  price: {
    min: number;
    max: number;
    currency: string;
    period: string;
  };
  description?: string;
  features?: string[];
  note?: string;
  featured?: boolean;
  badge?: string;
  ctaText: string;
  ctaLink: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: "online-consulting",
    title: "Conseil en ligne (visio)",
    icon: <Video className="w-8 h-8" />,
    price: {
      min: 30,
      max: 50,
      currency: "€",
      period: "Heure"
    },
    description: "Consultation professionnelle par visioconference",
    ctaText: "Reserver",
    ctaLink: "/contact?service=online-consulting"
  },
  {
    id: "on-site-visit",
    title: "Visite terrain",
    icon: <MapPin className="w-8 h-8" />,
    price: {
      min: 300,
      max: 400,
      currency: "€",
      period: "jour"
    },
    description: "Evaluation et diagnostic sur site",
    featured: true,
    badge: "Populaire",
    ctaText: "Demander un devis",
    ctaLink: "/contact?service=on-site-visit"
  },
  {
    id: "monthly-support",
    title: "Accompagnement mensuel",
    icon: <Calendar className="w-8 h-8" />,
    price: {
      min: 800,
      max: 2000,
      currency: "€",
      period: "mois"
    },
    features: [
      "Formation des equipes",
      "Etude de faisabilite technique & economique",
      "Installation et suivi du projet"
    ],
    note: "Tarif depend du volume et de la complexite du projet",
    ctaText: "Contacter",
    ctaLink: "/contact?service=monthly-support"
  }
];

const pricingDisclaimer = "Tarifs indicatifs – devis personnalise apres analyse du projet.";

interface PricingCardProps {
  tier: PricingTier;
}

function PricingCard({ tier }: PricingCardProps) {
  const priceDisplay = tier.price.min === tier.price.max
    ? `${tier.price.min}${tier.price.currency}`
    : `${tier.price.min}-${tier.price.max}${tier.price.currency}`;

  return (
    <div
      className={`relative bg-background  rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
        ${tier.featured
          ? 'border-2 border-[#00A651] shadow-xl md:scale-105 z-10'
          : 'border border-border/40 shadow-soft'
        }`}
    >
      {/* Featured Badge */}
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-block px-3 sm:px-4 py-1 bg-[#00A651] text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg">
            {tier.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-4 sm:mb-6">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7 md:[&>svg]:w-8 md:[&>svg]:h-8 ${
          tier.featured
            ? 'bg-[#00A651] text-white'
            : 'bg-[#00A651]/10 text-[#00A651]'
        }`}>
          {tier.icon}
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-2 font-display">
          {tier.title}
        </h3>
      </div>

      {/* Price */}
      <div className="text-center mb-4 sm:mb-6">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#00A651]">
            {priceDisplay}
          </span>
          <span className="text-foreground/60 text-sm sm:text-base md:text-lg">
            / {tier.price.period}
          </span>
        </div>
      </div>

      {/* Description or Features */}
      {tier.description && (
        <p className="text-center text-foreground/70 mb-4 sm:mb-6 text-sm sm:text-base">
          {tier.description}
        </p>
      )}

      {tier.features && tier.features.length > 0 && (
        <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A651] flex-shrink-0 mt-0.5" />
              <span className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Note */}
      {tier.note && (
        <p className="text-[10px] sm:text-xs text-foreground/60 text-center italic mb-4 sm:mb-6 px-1 sm:px-2">
          {tier.note}
        </p>
      )}

      {/* CTA Button */}
      <Link
        to={tier.ctaLink}
        className={`block w-full text-center py-3 sm:py-3.5 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base ${
          tier.featured
            ? 'bg-[#00A651] text-white hover:bg-[#008C44] shadow-lg shadow-[#00A651]/25 hover:shadow-xl hover:shadow-[#00A651]/30'
            : 'bg-[#00A651]/10 text-[#00A651] hover:bg-[#00A651] hover:text-white'
        }`}
      >
        {tier.ctaText}
      </Link>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-roline-light/50  via-background to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#00A651]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#00A651]/5 rounded-full blur-3xl"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,166,81,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,166,81,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">
            Nos Tarifs
          </span>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-foreground mb-4 font-display">
            Tarifs de Conseil & Accompagnement
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
            Des solutions flexibles adaptees a vos besoins et a l'envergure de votre projet
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-foreground/60 italic mt-10 sm:mt-12">
          {pricingDisclaimer}
        </p>
      </div>
    </section>
  );
}
