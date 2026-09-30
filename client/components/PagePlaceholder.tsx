import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PagePlaceholderProps {
  title: string;
  description: string;
}

export default function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-white to-roline-light">
      <div className="text-center max-w-md px-4">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🌾</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {title}
        </h1>
        <p className="text-foreground/70 mb-8 text-lg">
          {description}
        </p>
        <p className="text-sm text-foreground/50 mb-8">
          Cette page est en cours de développement. Continuez à interagir avec notre équipe pour finaliser le contenu.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
