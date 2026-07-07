import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Eye, Award, Users } from "lucide-react";
import TechBackground from "@/components/ui/TechBackground";
import drAhmedImage from "@/assets/dr-ahmed.jpeg";
import uae2031Image from "@/assets/uae-2031.png";
const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "Pioneering cutting-edge solutions that push technological boundaries.",
  },
  {
    icon: Eye,
    title: "Vision 2031",
    description: "Aligned with UAE's National Artificial Intelligence Strategy.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering enterprise-grade solutions with uncompromising quality.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building lasting relationships through trust and collaboration.",
  },
];

const About = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: chairmanRef, inView: chairmanInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <Helmet>
        <title>About Grow Plus Technologies | Top IT Companies & Best SME in UAE</title>
        <meta
          name="description"
          content="Grow Plus Technologies, also known as GP Technologies UAE, is a Dubai-based AI company and SME technology partner operating through gptechnologies.ae since 2024."
        />
        <meta name="keywords" content="Grow Plus Technologies Dubai, Grow Plus Technologies AI company, GP Technologies UAE, GP Technologies UAE not Canada, Grow Plus Technologies reviews, gptechnologies.ae, Top IT companies in UAE, Top SME companies in UAE, Top UAE Local IT companies, Best Tech Companies in Dubai, SME companies in UAE, Digital leaders Dubai, Technology partners UAE, Apptunix technology partner, IDC Technologies partner, Apptunix UAE, IDC Technologies UAE" />
        <meta property="og:title" content="Leadership in IT & Innovation | Grow Plus Technologies" />
        <meta property="og:description" content="Discover why GP Technologies is a top SME in UAE and one of the best local IT companies in the region." />
        <meta property="og:image" content="https://gptechnologies.ae/gp-logo-square.png?v=3" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gptechnologies.ae/about-us/" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <TechBackground variant="particles" />
        <div className="container relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={headerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-semibold text-sm tracking-wide uppercase px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20"
            >
              About Us
            </motion.span>
            <motion.h1
              className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-5 mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Who Are{" "}
              <span className="text-gradient">We?</span>
            </motion.h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Grow Plus Technologies is a pioneering Dubai-based company established in 2024,
              recognized as one of the <span className="text-foreground font-medium">Top IT companies in UAE</span>.
              As a premier <span className="text-foreground font-medium">SME company in UAE</span> and a leading 
              <span className="text-foreground font-medium"> Local IT expert</span>,
              we are dedicated to driving digital excellence and delivering world-class technological solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <TechBackground variant="grid" />
        <div className="container relative z-10">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={contentInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-semibold text-sm tracking-wide uppercase px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20"
            >
              Our Values
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-5">
              What Drives Us <span className="text-gradient">Forward</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-6 shadow-soft border border-border text-center tech-card"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl gradient-primary mx-auto flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="w-7 h-7 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
                </motion.div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            ref={chairmanRef}
            initial={{ opacity: 0, y: 30 }}
            animate={chairmanInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Photo */}
                <div className="md:col-span-2 bg-gradient-to-br from-primary/20 to-secondary/20 min-h-64 flex items-center justify-center p-6">
                  <img
                    src={drAhmedImage}
                    alt="Dr. Ahmed Mohammed Al Ali"
                    className="w-48 h-48 rounded-full object-cover border-4 border-primary/30 shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8 lg:p-10">
                  <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                    Chairman's Message
                  </span>
                  <h2 className="text-2xl font-display font-bold text-foreground mt-2 mb-4">
                    Dr. Ahmed Mohammed Al Ali
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "At GP Technologies, we believe that technology should empower businesses to achieve
                    their fullest potential. Our commitment to innovation and excellence drives us to
                    deliver solutions that not only meet today's challenges but anticipate tomorrow's
                    opportunities. Together, we are building a smarter, more connected future for the UAE
                    and beyond."
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Expert in Peaceful Nuclear and Sustainable Energy</span>
                      <br />
                      CEO & Founder – Sadeem Energy and Grow Plus Technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-3 mb-6">
                Driving Digital Excellence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We are committed to empowering organizations across the UAE and the region with
                cutting-edge technological solutions. Our mission is to bridge the gap between
                innovative technology and practical business applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By aligning our efforts with the UAE's National Artificial Intelligence Strategy 2031,
                we contribute to building a knowledge-based economy powered by AI, automation, and
                digital innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                {/* UAE AI Strategy Image */}
                <img
                  src={uae2031Image}
                  alt="UAE National Strategy for Artificial Intelligence 2031"
                  className="w-full h-full object-cover bg-gradient-to-br from-primary/5 to-secondary/5 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    boxShadow: ["0 0 20px rgba(var(--primary), 0.2)", "0 0 40px rgba(var(--primary), 0.4)", "0 0 20px rgba(var(--primary), 0.2)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 gradient-primary rounded-xl opacity-50"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 gradient-secondary rounded-lg opacity-30"
                animate={{ rotate: [0, -5, 0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
