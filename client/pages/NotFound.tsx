import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  const quickLinks = [
    { label: "Accueil", href: "/", icon: <Home className="w-4 h-4" /> },
    { label: "Services", href: "/services", icon: <Leaf className="w-4 h-4" /> },
    { label: "Contact", href: "/contact", icon: <Search className="w-4 h-4" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-roline-light  via-background to-roline-light/50  relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(13,92,76,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(13,92,76,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="container mx-auto px-4 py-16 sm:py-20 md:py-28 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <div className="relative mb-6 sm:mb-8">
              <span className="text-[120px] sm:text-[160px] md:text-[200px] font-bold text-primary/5 leading-none select-none font-display">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary animate-pulse" />
                </div>
              </div>
            </div>

            {/* Message */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4 font-display">
              Page Non Trouvée
            </h1>
            <p className="text-foreground/70 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-md mx-auto">
              Oups ! La page que vous recherchez semble avoir été déplacée ou n'existe plus.
              Ne vous inquiétez pas, nous pouvons vous aider à trouver ce que vous cherchez.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                Retour à l'Accueil
              </Link>
              <button
                onClick={() => window.history.back()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-background  text-primary border-2 border-primary/20 rounded-xl font-semibold hover:bg-primary/5 transition-all text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                Page Précédente
              </button>
            </div>

            {/* Quick Links */}
            <div className="pt-8 sm:pt-10 border-t border-border/30">
              <p className="text-sm text-foreground/50 mb-4">Liens rapides</p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-background  rounded-full border border-border/50 text-foreground/70 hover:text-primary hover:border-primary/30 hover:shadow-md transition-all text-sm"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Attempted Path */}
            <div className="mt-8 sm:mt-10 p-3 sm:p-4 bg-muted/30 rounded-lg">
              <p className="text-xs sm:text-sm text-foreground/50">
                Chemin demandé : <code className="text-primary font-mono">{location.pathname}</code>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
