import { useState, useEffect } from "react";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase("exit"), 2200);
    const doneTimer = setTimeout(() => onComplete(), 2900);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-all duration-700 ${
        phase === "exit" ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="text-center">
        {/* Logo */}
        <div
          className={`mb-6 transition-all duration-700 ${
            phase === "enter" ? "splash-logo-enter" : ""
          }`}
        >
          <img
            src="/logo.png"
            alt="Roline Smart Hydroponics"
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto object-contain"
          />
        </div>

        {/* Company Name */}
        <h1
          className="text-2xl sm:text-3xl font-bold text-primary font-display mb-2 splash-text-enter"
          style={{ animationDelay: "0.4s" }}
        >
          Roline Smart Hydroponics
        </h1>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg text-secondary font-medium splash-text-enter"
          style={{ animationDelay: "0.8s" }}
        >
          L'agriculture de demain, aujourd'hui
        </p>

        {/* Accent line */}
        <div
          className="mx-auto mt-6 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full splash-line-enter"
          style={{ animationDelay: "1.2s" }}
        />
      </div>
    </div>
  );
}
