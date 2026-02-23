import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  Brain,
  BarChart3,
  Bot,
  Shield,
  Cloud,
  Wifi,
  Glasses,
  Map,
  ArrowRight,
} from "lucide-react";

import aiServiceImg from "@/assets/services/ai-1.jpg";
import dataAnalyticsImg from "@/assets/services/DnA-4.jpg";
import automationImg from "@/assets/services/auto-1.jpg";
import cybersecurityImg from "@/assets/services/CS-1.jpg";
import cloudImg from "@/assets/services/Cloud-3.jpg";
import iotImg from "@/assets/services/iot.jpg";
import arVrImg from "@/assets/services/ar-vr-1.jpg";
import gis3dImg from "@/assets/services/3D-2.jpg";

const services = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Next-gen machine learning and cognitive computing to automate complexity.",
    image: aiServiceImg,
    id: "ai"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Architecting data-driven cultures with real-time intelligence and insights.",
    image: dataAnalyticsImg,
    id: "data"
  },
  {
    icon: Bot,
    title: "Automation & Robotics",
    description: "Intelligent RPA and industrial automation for high-velocity operations.",
    image: automationImg,
    id: "automation"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "End-to-end digital immunity and enterprise-grade asset protection.",
    image: cybersecurityImg,
    id: "security"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scalable cloud infrastructure designed for global resilience and speed.",
    image: cloudImg,
    id: "cloud"
  },
  {
    icon: Wifi,
    title: "Internet of Things",
    description: "Smart connectivity and industrial IoT solutions for real-time control.",
    image: iotImg,
    id: "iot"
  },
  {
    icon: Glasses,
    title: "AR & VR Solutions",
    description: "Immersive augmented and virtual reality experiences for enterprise.",
    image: arVrImg,
    id: "arvr"
  },
  {
    icon: Map,
    title: "GIS & 3D Modeling",
    description: "Spatial data analysis and high-fidelity 3D modeling environments.",
    image: gis3dImg,
    id: "gis"
  }
];

const ServiceCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Reactive hover without artificial delay
  const handleHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="container px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block"
          >
            Our Ecosystem
          </motion.span>
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground tracking-tight pb-2"
            >
              Enterprise-Grade <span className="text-primary italic font-light">Intelligence.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-xl font-light leading-relaxed max-w-2xl"
          >
            We deploy sophisticated technology architectures that enable businesses to scale
            with precision and visionary agility.
          </motion.p>
        </div>

        {/* Accordion Grid - Optimized with hardware acceleration */}
        <div
          ref={ref}
          className="flex flex-col lg:flex-row h-[1100px] lg:h-[650px] gap-3"
        >
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <motion.div
                key={service.id}
                layout
                initial={false}
                animate={{
                  flex: isAnyHovered ? (isHovered ? 4 : 1) : 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
                onClick={() => handleHover(index)}
                className="relative overflow-hidden rounded-[24px] lg:rounded-[40px] group cursor-pointer h-full transform-gpu will-change-[flex]"
              >
                <Link to="/services" className="block w-full h-full">
                  {/* Background Image - Optimized Transition */}
                  <div className="absolute inset-0 overflow-hidden transform-gpu">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform-gpu will-change-transform"
                      animate={{
                        scale: isHovered ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transform-gpu"
                      animate={{ opacity: isHovered ? 0.9 : 0.6 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Rotated Title (Inactive state) */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center p-4 lg:p-6"
                    animate={{
                      opacity: isHovered ? 0 : 1,
                      scale: isHovered ? 0.95 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="lg:-rotate-90 whitespace-nowrap text-lg lg:text-xl font-display font-semibold text-white/50 tracking-[0.2em] uppercase group-hover:text-white/80 transition-colors">
                      {service.title}
                    </h3>
                  </motion.div>

                  {/* Expanded Content Layer */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 z-10 pointer-events-none">
                    <motion.div
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 20
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <service.icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary mb-6" />
                      <h3 className="text-2xl lg:text-4xl font-display font-bold text-white mb-4 uppercase tracking-tight leading-[1.1] pb-1">
                        {service.title}
                      </h3>
                      <p className="text-white/70 text-base lg:text-lg mb-8 max-w-md font-light leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-3 text-primary font-bold tracking-[0.3em] uppercase text-xs lg:text-sm group/btn pointer-events-auto">
                        Explore Strategy
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                      </div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;