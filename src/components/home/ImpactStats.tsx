import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
    value: number;
    suffix?: string;
    duration?: number;
}

const Counter = ({ value, suffix = "", duration = 2 }: CounterProps) => {
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toString();
            }
        });
    }, [springValue]);

    return (
        <span className="flex items-center">
            <span ref={ref}>0</span>
            {suffix}
        </span>
    );
};

const stats = [
    {
        label: "Strategic Clients",
        value: 5,
        suffix: "+",
    },
    {
        label: "Global Partners",
        value: 15,
        suffix: "+",
    },
    {
        label: "Tech Deployments",
        value: 10,
        suffix: "+",
    },
    {
        label: "Operational Success",
        value: 100,
        suffix: "%",
    },
];

const ImpactStats = () => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section ref={containerRef} className="py-20 md:py-32 bg-background border-y border-border/50">
            <div className="container px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group will-change-[transform,opacity] flex flex-col items-center text-center sm:items-start sm:text-left"
                        >
                            <div className="overflow-hidden mb-2">
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={inView ? { y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-3xl sm:text-4xl md:text-6xl font-display font-semibold tracking-tighter text-foreground pb-1 whitespace-nowrap"
                                >
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </motion.div>
                            </div>

                            <div className="h-px w-8 bg-primary mb-6 transition-all duration-700 group-hover:w-full ease-[0.16,1,0.3,1]" />

                            <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground group-hover:text-primary transition-colors duration-500">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
