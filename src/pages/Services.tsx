import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Parallax, Mousewheel } from 'swiper/modules';
import { useState, useEffect, useRef } from "react";
import { useLenis } from 'lenis/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import service images
import aiServiceImg from "@/assets/services/ai-1.jpg";
import dataAnalyticsImg from "@/assets/services/DnA-4.jpg";
import automationImg from "@/assets/services/Auto-1.jpg";
import cybersecurityImg from "@/assets/services/CS-1.jpg";
import cloudComputingImg from "@/assets/services/Cloud-3.jpg";
import iotImg from "@/assets/services/iot.jpg";
import arVrImg from "@/assets/services/ar-vr-1.jpg";
import gis3dImg from "@/assets/services/3D-2.jpg";

const servicesData = [
  {
    id: "artificial-intelligence",
    chapter: "01",
    meta: "INTELLIGENT SOLUTIONS",
    title: "Artificial",
    emphasis: "Intelligence",
    description: "Harness the power of machine learning and AI to transform your business operations with predictive models and automated reasoning.",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    image: aiServiceImg,
  },
  {
    id: "data-analytics",
    chapter: "02",
    meta: "DATA STRATEGY",
    title: "Data",
    emphasis: "Analytics",
    description: "Transform raw data into actionable insights that drive strategic decisions and unlock hidden patterns in your business ecosystem.",
    features: ["Business Intelligence", "Real-time Dashboards", "Data Visualization", "Performance Metrics"],
    image: dataAnalyticsImg,
  },
  {
    id: "automation-robotics",
    chapter: "03",
    meta: "FUTURE TECH",
    title: "Automation",
    emphasis: "Robotics",
    description: "Streamline operations with intelligent automation and robotic process automation, reducing manual overhead and eliminating human error.",
    features: ["Robotic Process Automation", "Workflow Optimization", "Process Mining", "Intelligent Automation"],
    image: automationImg,
  },
  {
    id: "cybersecurity",
    chapter: "04",
    meta: "DIGITAL PROTECTION",
    title: "Cyber",
    emphasis: "Security",
    description: "Protect your digital assets with enterprise-grade security solutions, threat intelligence, and proactive defense mechanisms.",
    features: ["Threat Detection", "Security Audits", "Compliance Management", "Incident Response"],
    image: cybersecurityImg,
  },
  {
    id: "cloud-computing",
    chapter: "05",
    meta: "SCALABLE INFRASTRUCTURE",
    title: "Cloud",
    emphasis: "Computing",
    description: "Scale seamlessly with secure, reliable cloud infrastructure solutions designed for maximum performance and global availability.",
    features: ["Cloud Migration", "Multi-cloud Strategy", "Infrastructure as Code", "Cost Optimization"],
    image: cloudComputingImg,
  },
  {
    id: "internet-of-things",
    chapter: "06",
    meta: "CONNECTED SYSTEMS",
    title: "IoT",
    emphasis: "Connection",
    description: "Connect and monitor devices for smarter operations and real-time insights across your entire industrial or retail ecosystem.",
    features: ["IoT Platforms", "Sensor Integration", "Edge Computing", "Remote Monitoring"],
    image: iotImg,
  },
  {
    id: "ar-vr-solutions",
    chapter: "07",
    meta: "IMMERSIVE TECH",
    title: "AR & VR",
    emphasis: "Solutions",
    description: "Create immersive experiences with augmented and virtual reality applications that bridge the gap between physical and digital worlds.",
    features: ["Virtual Training", "AR Visualization", "Immersive Experiences", "Mixed Reality Apps"],
    image: arVrImg,
  },
  {
    id: "gis-3d-modeling",
    chapter: "08",
    meta: "SPATIAL ANALYSIS",
    title: "Gis & 3D",
    emphasis: "Modelings",
    description: "Visualize spatial data and create detailed 3D models for urban planning, precision engineering, and environmental monitoring.",
    features: ["Geospatial Analysis", "3D Visualization", "Urban Planning Tools", "Asset Mapping"],
    image: gis3dImg,
  },
];

const Services = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [canUnlock, setCanUnlock] = useState(false);
  const swiperRef = useRef<any>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (isLocked) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isLocked, lenis]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (swiperRef.current?.isEnd && canUnlock && e.deltaY > 0 && isLocked) {
        setIsLocked(false);
      }
      else if (window.scrollY === 0 && e.deltaY < 0 && !isLocked) {
        setIsLocked(true);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [canUnlock, isLocked]);

  return (
    <div className="w-full bg-black relative">
      <Helmet>
        <title>Tech Services & AI Solutions in Dubai | Grow Plus Technologies</title>
        <meta
          name="description"
          content="Leading provider of AI, Robotics, Data Analytics, Cybersecurity, and Cloud Computing in UAE. We drive enterprise excellence through intelligent technology."
        />
        <meta name="keywords" content="AI solutions Dubai, Robotics automation UAE, Cybersecurity services Dubai, GIS modeling UAE, Cloud computing Dubai, Data Analytics UAE, IoT solutions Dubai, AR VR development UAE" />
        <meta property="og:title" content="Advanced Tech Services in Dubai | Grow Plus Technologies" />
        <meta property="og:description" content="Explore GP Technologies' award-winning AI, Automation, and Digital Transformation services in the UAE." />
        <meta property="og:image" content="https://gptechnologies.ae/gp-logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Technology Consulting and AI Implementation",
              "provider": {
                "@type": "Organization",
                "name": "Grow Plus Technologies"
              },
              "areaServed": "United Arab Emirates",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Technology Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Artificial Intelligence" }},
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Analytics" }},
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automation & Robotics" }},
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity" }},
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Computing" }},
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Internet of Things (IoT)" }},
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AR & VR Solutions" }},
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GIS & 3D Modeling" }}
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <style dangerouslySetInnerHTML={{
        __html: `
        .services-swiper {
          width: 100%;
          height: calc(100svh - 5rem);
        }
        @media (min-width: 1024px) {
          .services-swiper {
            height: calc(100vh - 6rem);
          }
        }
        .services-swiper .swiper-pagination-vertical.swiper-pagination-bullets {
          right: 30px;
          z-index: 50;
        }
        .services-swiper .swiper-pagination-bullet {
          width: 2px;
          height: 24px;
          border-radius: 0;
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          margin: 12px 0 !important;
        }
        .services-swiper .swiper-pagination-bullet-active {
          height: 70px;
          background: #10b981;
        }
        .slide-image-left {
          filter: sepia(1) brightness(0.4) contrast(1.2);
          transition: filter 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .swiper-slide-active .slide-image-left {
          filter: sepia(0) brightness(0.6) contrast(1);
        }
        .slide-image-right {
          filter: hue-rotate(180deg) brightness(0.4) contrast(1.2);
          transition: filter 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .swiper-slide-active .slide-image-right {
          filter: hue-rotate(0deg) brightness(0.6) contrast(1);
        }
        .glass-card {
           background: rgba(255, 255, 255, 0.03);
           backdrop-filter: blur(25px);
           border: 1px solid rgba(255, 255, 255, 0.1);
           box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: 1023px) {
           .services-swiper .swiper-pagination-vertical.swiper-pagination-bullets {
            display: none;
          }
        }
      `}} />

      <div
        className="w-full relative overflow-hidden"
        data-lenis-prevent={isLocked ? "true" : "false"}
      >
        <Swiper
          direction="vertical"
          parallax={true}
          speed={1400}
          onSwiper={(swiper) => swiperRef.current = swiper}
          onReachEnd={() => {
            // Wait for transition to complete before allowing unlock
            setTimeout(() => setCanUnlock(true), 1500);
          }}
          onTouchEnd={(swiper, e) => {
            // For mobile touch gestures
            if (swiper.isEnd && canUnlock && isLocked) {
              // If swipe up at the end
              const touch = (e as TouchEvent).changedTouches?.[0];
              if (touch && touch.clientY < window.innerHeight / 2) {
                setIsLocked(false);
              }
            }
          }}
          mousewheel={{
            releaseOnEdges: false,
            sensitivity: 1
          }}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(swiper) => {
            // If we move away from the last slide, reset unlock state
            if (!swiper.isEnd) {
              setCanUnlock(false);
              setIsLocked(true);
            }
          }}
          onSlideChangeTransitionEnd={(swiper) => {
            // Only allow unlocking once the transition to the 8th slide is complete
            if (swiper.isEnd) {
              setCanUnlock(true);
            }
          }}
          modules={[Parallax, Pagination, Mousewheel]}
          className="services-swiper"
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id} className="bg-black overflow-hidden">
              <div className="flex h-full w-full flex-col lg:flex-row">
                {/* Left Side: Title & Meta */}
                <div className="relative h-1/2 w-full overflow-hidden lg:h-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-white/5">
                  <div
                    className="absolute inset-0 h-full w-full"
                    data-swiper-parallax="40%"
                  >
                    <img
                      src={service.image}
                      className="slide-image-left h-full w-[200%] max-w-none object-cover"
                      alt=""
                    />
                  </div>

                  <div className="relative z-10 flex h-full flex-col justify-center p-8 lg:p-24 text-white">
                    <div className="overflow-hidden mb-6">
                      <span
                        className="block text-[10px] lg:text-xs font-bold tracking-[0.5em] uppercase text-primary/90"
                        data-swiper-parallax="-200"
                      >
                        {/* Chapter {service.chapter} // {service.meta} */}
                      </span>
                    </div>

                    <div className="overflow-hidden">
                      <h2
                        className="text-4xl lg:text-8xl font-display font-bold leading-[0.85] tracking-tighter"
                        data-swiper-parallax="-400"
                      >
                        <div className="mb-2">{service.title}</div>
                        <div
                          className="text-primary italic"
                          data-swiper-parallax-x="-150"
                          data-swiper-parallax-duration="1600"
                        >
                          {service.emphasis}
                        </div>
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Right Side: Description & Glass Card */}
                <div className="relative h-1/2 w-full overflow-hidden lg:h-full lg:w-1/2">
                  <div
                    className="absolute inset-0 h-full w-full"
                    data-swiper-parallax="-40%"
                  >
                    <img
                      src={service.image}
                      className="slide-image-right h-full w-[200%] max-w-none object-cover -translate-x-1/2"
                      alt=""
                    />
                  </div>

                  <div className="relative z-10 flex h-full items-center justify-center p-4 sm:p-10 lg:p-20">
                    <div
                      className="glass-card w-full max-w-lg rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-14"
                      data-swiper-parallax="-300"
                    >
                      <p className="mb-6 lg:mb-10 text-sm sm:text-base lg:text-lg text-white/60 font-medium leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="grid grid-cols-1 gap-y-3 sm:gap-y-5 gap-x-8 mb-8 lg:mb-12">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 sm:gap-4 text-white group cursor-default">
                            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary/40 transition-colors shrink-0">
                              <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary" />
                            </div>
                            <span className="text-xs sm:text-sm font-semibold tracking-wide group-hover:text-primary transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-primary text-white hover:bg-white hover:text-black transition-all duration-700 rounded-xl lg:rounded-2xl h-12 sm:h-16 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] group shadow-xl shadow-primary/20"
                      >
                        <Link to="/contact-us/">
                          Collaborate with us
                          <ArrowRight className="ml-2 sm:ml-3 w-3 sm:w-4 h-3 sm:h-4 transition-transform group-hover:translate-x-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;