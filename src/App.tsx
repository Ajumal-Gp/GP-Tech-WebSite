import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import TechLoader from "./components/ui/TechLoader";
import ScrollToTopOnNavigation from "./components/layout/ScrollToTopOnNavigation";
import SmoothScroll from "./components/layout/SmoothScroll";


const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatePresence mode="wait">
            {isLoading && <TechLoader />}
          </AnimatePresence>
          <Helmet>
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://gptechnologies.ae/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "About Us",
                      "item": "https://gptechnologies.ae/about-us/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Services",
                      "item": "https://gptechnologies.ae/services"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "News",
                      "item": "https://gptechnologies.ae/news"
                    },
                    {
                      "@type": "ListItem",
                      "position": 5,
                      "name": "Contact Us",
                      "item": "https://gptechnologies.ae/contact-us/"
                    }
                  ]
                }
              `}
            </script>
          </Helmet>
          <SmoothScroll>
            <BrowserRouter>
              <ScrollToTopOnNavigation />
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Index />} />
                  <Route path="/about-us/" element={<About />} />
                  <Route path="/about" element={<Navigate to="/about-us/" replace />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact-us/" element={<Contact />} />
                  <Route path="/contact" element={<Navigate to="/contact-us/" replace />} />
                  <Route path="/news" element={<News />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </SmoothScroll>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;