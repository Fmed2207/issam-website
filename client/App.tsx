import "./global.css";

import { Suspense, lazy, useState, useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/lib/i18n";
import SplashScreen from "@/components/SplashScreen";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Projects = lazy(() => import("./pages/Projects"));
const Training = lazy(() => import("./pages/Training"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-roline-light via-white to-roline-light/50">
    <div className="text-center">
      <div className="relative w-16 h-16 mx-auto mb-4">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
        {/* Spinning ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        {/* Inner pulse */}
        <div className="absolute inset-3 bg-secondary/20 rounded-full animate-pulse"></div>
      </div>
      <p className="text-primary font-medium animate-pulse">Chargement...</p>
    </div>
  </div>
);

const App = () => {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashComplete = useCallback(() => setSplashDone(true), []);

  return (
    <I18nProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/training" element={<Training />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </I18nProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
