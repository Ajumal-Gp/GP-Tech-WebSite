import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/UAE-video.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--primary) / 0.05) 1px, transparent 1px),
              linear-gradient(hsl(var(--primary) / 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Scanning line */}
        <motion.div
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          animate={{
            top: ["0%", "100%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Animated Elements - Optimized for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-2xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -10, 0],
            y: [0, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles - Reduced count for peak performance */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 will-change-transform"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8 group cursor-default"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-primary text-sm font-medium">
              Dubai's Leading Tech Innovator
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold text-primary-foreground leading-[1.2] pb-2 tracking-tight"
            >
              Shaping a Smarter UAE <br />
              Through <span className="text-primary italic font-light">Intelligent</span> Technology
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-primary-foreground/60 mb-12 leading-relaxed max-w-2xl font-light"
          >
            We're UAE Certified AI company – A UAE-based SME driving digital excellence through
            strategic innovation, fully aligned with the
            National AI Strategy 2031.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-6"
          >
            <Button
              asChild
              size="lg"
              className="gradient-primary text-primary-foreground font-bold px-10 h-16 text-lg rounded-full transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group"
            >
              <Link to="/contact-us/" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/5 border-white/10 text-primary-foreground font-semibold px-10 h-16 text-lg rounded-full backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/30"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2 hover:border-primary/50 transition-colors duration-300">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
