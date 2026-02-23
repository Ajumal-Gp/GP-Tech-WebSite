import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const phases = [
    {
        title: "AI Strategy & Roadmapping",
        subtitle: "Discovery Phase",
        description: "We architect your intelligence infrastructure. Our strategists align AI initiatives with enterprise goals, identifying high-impact use cases.",
        color: "from-emerald-400 to-teal-500",
        features: ["Strategic Alignment", "Data Readiness Audit", "ROI Projections", "Risk Management"]
    },
    {
        title: "ML Model Development & Training",
        subtitle: "Engineering Phase",
        description: "Custom intelligence designed for your data. We develop proprietary machine learning models using state-of-the-art neural architectures.",
        color: "from-blue-400 to-indigo-500",
        features: ["Neural Architecture", "Deep Learning", "Model Validation", "Performance Tuning"]
    },
    {
        title: "Production Deployment & Operations",
        subtitle: "Execution Phase",
        description: "Bridging the gap between code and reality. We deploy high-performance MLOps pipelines that ensure your AI assets remain secure and scalable.",
        color: "from-primary/80 to-accent/80",
        features: ["MLOps Integration", "Compute Optimization", "Real-time Monitoring", "Cycle Retraining"]
    },
    {
        title: "Enterprise AI Chatbots (RAG)",
        subtitle: "Product Phase",
        description: "Next-gen conversational intelligence. Using Retrieval-Augmented Generation (RAG), we build chatbots that understand your specific business knowledge.",
        color: "from-violet-400 to-purple-500",
        features: ["Contextual Accuracy", "Knowledge Base Integration", "Multi-language Support", "Secure LLM Ops"]
    }
];

const FullCycleAI = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const { ref: headerRef, inView: headerInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

            cards.forEach((card, index) => {
                const innerCard = card.querySelector(".inner-card");
                const isLast = index === cards.length - 1;

                // Create the "Stacking" pinning effect
                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    end: isLast ? "bottom bottom" : "+=100%",
                    pin: true,
                    pinSpacing: false, // This creates the "Stacking" effect
                    scrub: true,
                });

                // Animate the card content as it stacks
                if (!isLast) {
                    gsap.to(innerCard, {
                        scale: 0.9,
                        opacity: 0,
                        scrollTrigger: {
                            trigger: card,
                            start: "bottom bottom",
                            end: "bottom top",
                            scrub: true,
                        }
                    });
                }
            });

            ScrollTrigger.refresh();
        }, containerRef);

        const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);

        return () => {
            ctx.revert();
            clearTimeout(refreshTimer);
        };
    }, []);

    return (
        <section ref={containerRef} className="bg-[#020202] relative overflow-hidden pt-32 pb-24">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-primary/20 via-primary/10 to-transparent blur-[2px]" />
                <div className="absolute top-0 left-[26%] w-[1px] h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-[4px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 rounded-full blur-[200px] opacity-30" />
            </div>

            <div className="container relative z-10 px-6">
                {/* Section Header */}
                <div ref={headerRef} className="max-w-4xl mb-24 md:mb-32 text-center md:text-left mx-auto md:mx-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-primary font-bold text-[10px] md:text-xs tracking-[0.6em] uppercase mb-6 md:mb-8 block">
                            Architecting Intelligence
                        </span>
                        <h2 className="text-4xl md:text-8xl font-display font-bold text-white leading-[1.1] pb-2 mb-8 md:mb-12 tracking-tighter">
                            Full Cycle <br />
                            <span className="text-primary italic font-light drop-shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">AI Implementation.</span>
                        </h2>
                        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl border-l border-primary/20 pl-6 md:pl-8">
                            We deliver a high-fidelity roadmap from strategic concept to
                            production-ready intelligence, anchored in enterprise-grade reliability.
                        </p>
                    </motion.div>
                </div>

                {/* Pinning Stacks */}
                <div className="relative">
                    {phases.map((phase, index) => (
                        <div
                            key={index}
                            ref={el => cardRefs.current[index] = el}
                            className="card-scroll-wrapper relative h-[100svh] flex items-center justify-center mb-0"
                        >
                            <div
                                className="inner-card w-full bg-[#050505]/95 border border-white/5 rounded-[40px] md:rounded-[56px] p-6 sm:p-10 md:p-14 lg:p-20 min-h-[450px] md:min-h-[600px] flex flex-col lg:flex-row gap-10 md:gap-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl overflow-hidden transform-gpu will-change-[transform,opacity] group"
                            >
                                {/* Visual Rank & Glow */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br ${phase.color} blur-[120px] -z-10`}
                                    style={{ filter: 'blur(120px) opacity(0.04)' }}
                                />

                                <div className="absolute top-6 right-6 md:top-12 md:right-12 flex items-center gap-4 md:gap-6">
                                    <div className={`h-12 md:h-24 w-px bg-gradient-to-b ${phase.color} opacity-40`} />
                                    <span className="text-white/5 font-display font-bold text-6xl md:text-[10rem] tracking-tighter leading-none pointer-events-none group-hover:text-white/10 transition-colors duration-700">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Content Side with Parallax */}
                                <div className="parallax-content flex-1 flex flex-col justify-center relative z-10 will-change-transform overflow-y-auto max-h-[85vh] pr-2">
                                    <span className={`text-[10px] md:text-sm font-bold tracking-[0.4em] uppercase mb-4 md:mb-8 block bg-clip-text text-transparent bg-gradient-to-r ${phase.color}`}>
                                        {phase.subtitle}
                                    </span>

                                    <h3 className="text-2xl md:text-6xl font-display font-bold text-white mb-6 md:mb-10 tracking-tight leading-[1.15] pb-1">
                                        {phase.title}
                                    </h3>

                                    <p className="text-white/50 text-base md:text-xl font-light leading-relaxed mb-8 md:mb-16 max-w-xl text-balance">
                                        {phase.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-7 gap-x-12">
                                        {phase.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 md:gap-5 text-white/80 group/feat">
                                                <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-br ${phase.color} group-hover/feat:scale-[1.7] transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]`} />
                                                <span className="text-lg md:text-2xl font-light group-hover/feat:text-white group-hover/feat:translate-x-2 transition-all duration-300">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Viewport with Parallax - Hidden on very small screens to save space */}
                                <div className="parallax-visual lg:w-[45%] hidden sm:flex items-center justify-center relative will-change-transform shrink-0">
                                    <div className="relative w-48 h-48 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center">
                                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${phase.color} opacity-[0.03] animate-pulse`} />
                                        <div className={`absolute inset-6 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-sm`} />

                                        <div className={`absolute inset-16 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]`} />
                                        <div className={`absolute inset-24 rounded-full border border-white/10 animate-[spin_30s_linear_infinite_reverse] opacity-50`} />

                                        <div className="absolute inset-20 flex items-center justify-center">
                                            <div className={`w-1/2 h-1/2 rounded-full bg-gradient-to-br ${phase.color} opacity-20 blur-3xl scale-150 animate-pulse`} />
                                            {/* Core Brand Sparkle */}
                                            <Sparkles className={`w-12 h-12 opacity-40 group-hover:opacity-100 transition-opacity duration-700 bg-clip-text text-transparent bg-gradient-to-br ${phase.color}`} />
                                        </div>

                                        {/* Fast Orbiting Satellite */}
                                        <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                                            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br ${phase.color} shadow-[0_0_40px_currentColor] border-2 border-white/20`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
        </section>
    );
};

export default FullCycleAI;
