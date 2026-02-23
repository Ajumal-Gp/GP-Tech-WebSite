import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import intersecImg from "@/assets/News/WITEX-1.jpeg";
import partnersImg from "@/assets/News/UAE-AI-Strategy.png";
import dubaiImg from "@/assets/News/AI-seal-6.jpg";
import gitexImg from "@/assets/News/GITEX-2.jpeg";
import cybersecurityNewsImg from "@/assets/News/cybersecurity_news.png";
import roboticsNewsImg from "@/assets/News/robotics_news.png";



const newsItems = [
  {
    id: 1,
    title: "GP Technologies Attends INTERSEC to Explore Innovation and Expansion",
    excerpt:
      "GP Technologies participated in INTERSEC to explore emerging innovations and expand strategic opportunities, showcasing the latest advancements shaping the UAE’s technology and security ecosystem.",
    date: "January 2026",
    category: "Events",
    image: intersecImg,
  },
  {
    id: 4,
    title: "GP Technologies Attends GITEX to Explore Innovation and Growth",
    excerpt:
      "GP Technologies attended GITEX to explore emerging technologies, connect with global innovators, and gain insights into advancements shaping the UAE’s digital and innovation ecosystem.",
    date: "October 2025",
    category: "Events",
    image: gitexImg,
  },
  {
    id: 3,
    title: "GP Technologies Aligns with Dubai AI Standards",
    excerpt:
      "GP Technologies follows best practices aligned with the Dubai AI Seal framework and refers to the guidelines set by the Dubai Centre for Artificial Intelligence in the development of its AI-driven solutions.",
    date: "January 2026",
    category: "Compliance",
    image: dubaiImg,
  },
  {
    id: 2,
    title: "Partnering for UAE's AI Strategy 2031",
    excerpt:
      "GP Technologies announces strategic initiatives aligned with the UAE National Artificial Intelligence Strategy.",
    date: "December 2024",
    category: "Partnership",
    image: partnersImg,
  },
  {
    id: 6,
    title: "Revolutionizing Local Manufacturing with AI-Driven Robotics",
    excerpt:
      "Our latest collaboration with UAE industrial leaders is introducing advanced robotics to production lines, significantly increasing efficiency and precision through autonomous systems.",
    date: "March 2025",
    category: "Automation",
    image: roboticsNewsImg,
  },
  {
    id: 5,
    title: "New Cybersecurity Framework for UAE Government Entities",
    excerpt:
      "GP Technologies is leading the development of a comprehensive cybersecurity framework designed to protect critical national infrastructure and ensure data sovereignty.",
    date: "February 2026  ",
    category: "Security",
    image: cybersecurityNewsImg,
  },
];

const News = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <Helmet>
        <title>Latest Tech News & AI Insights Dubai | Grow Plus Technologies</title>
        <meta
          name="description"
          content="Follow the latest trends in AI, Robotics, and Digital Transformation in Dubai. Expert insights from GP Technologies, your certified AI partner in UAE."
        />
        <meta name="keywords" content="Tech news UAE, AI updates Dubai, GP Technologies news, Best technology insights UAE" />
        <meta property="og:title" content="GP Technologies News | UAE Certified AI Company" />
        <meta property="og:description" content="Latest insights into AI and technology from one of the best technology companies in UAE." />
        <meta property="og:image" content="https://gptechnologies.ae/gp-logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              News & Updates
            </span>
            <motion.h1
              className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-3 mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Latest from <span className="text-gradient">GP Technologies</span>
            </motion.h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Stay informed about our latest innovations, partnerships, and industry insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-card rounded-2xl shadow-soft border border-border overflow-hidden hover:shadow-card hover:-translate-y-2 transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-lg">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-[12px] mb-3">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {item.date}
                  </div>
                  <h2 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-primary font-bold text-[13px] uppercase tracking-wider group-hover:gap-3 transition-all">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="font-semibold px-8"
            >
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl shadow-card border border-border p-8 lg:p-12 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest tech insights and company updates.
            </p>
            <Button
              asChild
              size="lg"
              className="gradient-primary text-primary-foreground font-semibold px-8"
            >
              <Link to="/contact-us/">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default News;
