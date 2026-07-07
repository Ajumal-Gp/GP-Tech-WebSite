import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const seoQuestions = [
  {
    question: "How much does AI automation cost in UAE?",
    answer:
      "AI automation cost in the UAE depends on the workflow, number of integrations, data readiness, and support needs. SMEs can often start with focused automations before scaling to larger AI systems.",
  },
  {
    question: "Is AI automation worth it for small businesses?",
    answer:
      "AI automation is worth it when it removes repetitive work, improves response time, reduces errors, or helps small teams serve more customers without adding the same level of manual effort.",
  },
  {
    question: "How long does digital transformation take?",
    answer:
      "A focused digital transformation roadmap can begin producing results within weeks, while larger modernization programs may take several months depending on systems, teams, and business complexity.",
  },
  {
    question: "What industries benefit most from AI in UAE?",
    answer:
      "Retail, logistics, finance, real estate, government services, healthcare, education, and manufacturing can all benefit from AI through automation, forecasting, analytics, and better customer experiences.",
  },
  {
    question: "How do I know if my business needs automation?",
    answer:
      "Your business may need automation if teams repeat the same tasks daily, approvals move slowly, data is copied between systems, customer replies are delayed, or reporting depends on manual spreadsheets.",
  },
  {
    question: "What is the UAE Certified AI Company badge?",
    answer:
      "A UAE Certified AI Company badge signals alignment with recognized AI practices, responsible technology adoption, and a commitment to trusted AI services in the UAE market.",
  },
];

const SEOQuestions = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
            Search Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
            Answers UAE Businesses Search For
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Clear answers about AI, automation, digital transformation, and digital marketing for companies looking for a technology partner in Dubai.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoQuestions.map((item) => (
            <article
              key={item.question}
              className="border border-border bg-card rounded-lg p-6 shadow-soft h-full"
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-3 leading-snug">
                {item.question}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center text-primary font-bold text-[13px] uppercase tracking-[0.2em] hover:gap-3 transition-all"
          >
            Explore Our Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SEOQuestions;
