import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "./button";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 180 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    {/* Pulsing Outer Ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-primary/40 blur-md"
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    <Button
                        onClick={scrollToTop}
                        size="icon"
                        className="relative w-10 h-10 rounded-full shadow-glow gradient-primary overflow-hidden group"
                        aria-label="Scroll to top"
                    >
                        {/* Shimmer Effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%]"
                            animate={{
                                x: ["-100%", "100%"],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        <motion.div
                            animate={{
                                y: [0, -4, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <ArrowUp className="w-5 h-5 text-primary-foreground group-hover:scale-110 transition-transform" />
                        </motion.div>
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
