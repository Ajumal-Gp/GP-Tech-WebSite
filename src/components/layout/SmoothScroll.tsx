import { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SmoothScroll = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        // Initialize Lenis
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.0,
            touchMultiplier: 2,
        });

        // Use a single RAF source (GSAP Ticker) for Lenis
        const updateLenis = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateLenis);
        lenis.on('scroll', ScrollTrigger.update);

        // Expose lenis globally for navigation scroll
        (window as any).lenis = lenis;

        // Disable GSAP lag smoothing for perfect sync
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            (window as any).lenis = null;
            gsap.ticker.remove(updateLenis);
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;
