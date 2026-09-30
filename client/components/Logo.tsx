import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "full" | "icon" | "text";
  className?: string;
}

export default function Logo({ variant = "full", className = "" }: LogoProps) {
  if (variant === "icon") {
    return (
      <div className={`w-10 h-10 ${className}`}>
        <img
          src="/logo.png"
          alt="Roline Smart Hydroponics"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div className={className}>
        <h1 className="text-lg font-bold text-primary">Roline Smart Hydroponics</h1>
        <p className="text-xs leading-none text-secondary">L'agriculture de demain, aujourd'hui</p>
      </div>
    );
  }

  // Full variant with logo image
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img
        src="/logo.png"
        alt="Roline Smart Hydroponics - L'agriculture de demain, aujourd'hui"
        className="h-12 sm:h-14 w-auto object-contain"
      />
    </Link>
  );
}
