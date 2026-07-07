import { Helmet } from "react-helmet-async";
import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import ServiceCards from "@/components/home/ServiceCards";
import FullCycleAI from "@/components/home/FullCycleAI";
import PartnersClients from "@/components/home/PartnersClients";
import SEOQuestions from "@/components/home/SEOQuestions";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Grow Plus Technologies | Top IT Companies & Best SME in UAE 🇦🇪</title>
        <meta
          name="description"
          content="Grow Plus Technologies is a Dubai-based AI, IT consulting, cloud, automation, digital transformation, SEO, and digital marketing partner for SMEs and UAE businesses."
        />
        <meta
          name="keywords"
          content="AI company in Dubai, Best AI companies in UAE, Top IT consulting firms Dubai, AI automation services for SMEs UAE, Digital transformation consultant Dubai, Hire AI consultant Dubai, Cloud migration services UAE, Business process automation company Dubai, SME technology partner UAE, UAE certified AI company, SEO services UAE, Digital marketing services Dubai, Grow Plus Technologies Dubai, Grow Plus Technologies AI company, GP Technologies UAE, GP Technologies UAE not Canada, Grow Plus Technologies reviews, gptechnologies.ae, Technology partners UAE, Apptunix technology partner, IDC Technologies partner, Apptunix UAE, IDC Technologies UAE"
        />
        <link rel="canonical" href="https://gptechnologies.ae" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gptechnologies.ae/" />
        <meta property="og:title" content="Top IT Companies in UAE | Best local SME Technology Partner" />
        <meta property="og:description" content="GP Technologies is a premier UAE Certified AI company and a top local IT expert for SMEs in Dubai." />
        <meta property="og:image" content="https://gptechnologies.ae/gp-logo-square.png?v=3" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://gptechnologies.ae/" />
        <meta name="twitter:title" content="Top UAE Local IT Companies | Grow Plus Technologies" />
        <meta name="twitter:description" content="Discover why GP Technologies is a top SME in UAE and a leading partner for innovative IT solutions." />
        <meta name="twitter:image" content="https://gptechnologies.ae/gp-logo-square.png?v=3" />

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
                  "name": "How much does AI automation cost in UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI automation cost in the UAE depends on the workflow, number of integrations, data readiness, and support needs. SMEs can often start with focused automations before scaling to larger AI systems."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is AI automation worth it for small businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI automation is worth it when it removes repetitive work, improves response time, reduces errors, or helps small teams serve more customers without adding the same level of manual effort."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does digital transformation take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A focused digital transformation roadmap can begin producing results within weeks, while larger modernization programs may take several months depending on systems, teams, and business complexity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries benefit most from AI in UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Retail, logistics, finance, real estate, government services, healthcare, education, and manufacturing can all benefit from AI through automation, forecasting, analytics, and better customer experiences."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I know if my business needs automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your business may need automation if teams repeat the same tasks daily, approvals move slowly, data is copied between systems, customer replies are delayed, or reporting depends on manual spreadsheets."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the UAE Certified AI Company badge?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A UAE Certified AI Company badge signals alignment with recognized AI practices, responsible technology adoption, and a commitment to trusted AI services in the UAE market."
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
      <SEOQuestions />
      <ImpactStats />
      <CTASection />
    </>
  );
};

export default Index;
