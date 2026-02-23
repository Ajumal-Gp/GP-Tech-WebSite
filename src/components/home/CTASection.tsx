import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      {/* Optimized Background Glows - Reduced blur for performance */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[80px] will-change-opacity" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-secondary/5 rounded-full blur-[80px] will-change-opacity" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-8 block">
              Transformation Agenda
            </span>

            <div className="overflow-hidden mb-10">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.2] pb-2"
              >
                Let's <span className="text-primary italic">Accelerate</span> <br />
                Your Digital Future.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/60 text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl font-light"
            >
              Strategic technology solutions designed for the UAE's next era of growth.
              Partner with expertise that bridges strategy and execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-8"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-bold px-12 h-16 text-lg rounded-full transition-all duration-500 group"
              >
                <Link to="/contact-us/" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-3 text-primary" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-white/10 mt-32 origin-left"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
