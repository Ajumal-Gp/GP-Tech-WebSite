import { Helmet } from "react-helmet-async";
import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import ServiceCards from "@/components/home/ServiceCards";
import FullCycleAI from "@/components/home/FullCycleAI";
import PartnersClients from "@/components/home/PartnersClients";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Grow Plus Technologies | #1 AI Company & Tech Consultants in Dubai</title>
        <meta
          name="description"
          content="Grow Plus Technologies is the best AI company in Dubai, specializing in Robotic Process Automation, Machine Learning, and Enterprise Digital Transformation in UAE."
        />
        <meta
          name="keywords"
          content="Artificial Intelligence Dubai, AI Company UAE, Best Technology Companies Dubai, Tech Consultants UAE, Robotic Process Automation Dubai, RPA Solutions UAE, Digital Transformation UAE, IT consulting Dubai, Machine Learning UAE, GIS 3D Modeling Dubai"
        />
        <link rel="canonical" href="https://gptechnologies.ae" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gptechnologies.ae/" />
        <meta property="og:title" content="Best Technology Companies in UAE | UAE Certified AI Company" />
        <meta property="og:description" content="GP Technologies: Leading SME in UAE and professional UAE Certified AI company in Dubai." />
        <meta property="og:image" content="https://gptechnologies.ae/gp-logo.jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://gptechnologies.ae/" />
        <meta name="twitter:title" content="Best Technology Companies in UAE | UAE Certified AI Company" />
        <meta name="twitter:description" content="GP Technologies: Driving the future of AI and innovation as a top SME in UAE." />
        <meta name="twitter:image" content="https://gptechnologies.ae/gp-logo.jpeg" />

        {/* Aggressive Search Engine Crawling */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What AI services does GP Technologies provide in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GP Technologies provides comprehensive AI solutions including Machine Learning, Robotic Process Automation (RPA), Data Analytics, and Enterprise AI Strategy aligned with UAE's National AI Strategy 2031."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can Robotic Process Automation (RPA) help my business in the UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "RPA helps UAE businesses by automating repetitive tasks, reducing manual errors, and increasing operational velocity, allowing your team to focus on strategic growth."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is GP Technologies a certified AI company in the UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Grow Plus Technologies is a premier UAE Certified AI company and a leading SME specialized in digital transformation and innovative tech solutions."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <Hero />
      <ServiceCards />
      <FullCycleAI />
      <PartnersClients />
      <ImpactStats />
      <CTASection />
    </>
  );
};

export default Index;