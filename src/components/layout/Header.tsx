import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Brain, BarChart3, Bot, Shield, Cloud, Wifi, Glasses, Map, Megaphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gpLogo from "@/assets/gp-logo.png";

const serviceItems = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Cognitive solutions and machine learning architectures.",
    details: [
      {
        title: "AI Strategy & Consulting",
        description: "Roadmaps, feasibility studies, and implementation plans aligned with business goals.",
      },
      {
        title: "Machine Learning Solutions",
        description: "Predictive models, intelligent classification, and automation-ready decision systems.",
      },
      {
        title: "Enterprise AI Assistants",
        description: "Secure chatbots, knowledge assistants, and RAG systems for internal teams and customers.",
      },
      {
        title: "Computer Vision",
        description: "Image recognition, inspection workflows, and visual intelligence for operations.",
      },
      {
        title: "Natural Language Processing",
        description: "Document understanding, summarization, semantic search, and multilingual AI workflows.",
      },
      {
        title: "AI Integration",
        description: "Connecting AI capabilities with existing software, data systems, and business processes.",
      },
    ],
    href: "/services"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Predictive modeling and real-time business intelligence.",
    details: [
      {
        title: "Business Intelligence",
        description: "Executive dashboards, KPI tracking, and operational reporting for faster decisions.",
      },
      {
        title: "Predictive Analytics",
        description: "Forecasting models for demand, risk, performance, and customer behavior.",
      },
      {
        title: "Data Engineering",
        description: "Reliable pipelines, data warehouses, and integrations across business platforms.",
      },
      {
        title: "Data Governance",
        description: "Data quality, ownership, access control, lineage, and compliance-ready reporting.",
      },
      {
        title: "Real-Time Insights",
        description: "Live monitoring systems that turn business activity into actionable intelligence.",
      },
      {
        title: "Advanced Visualization",
        description: "Clear, interactive visuals for complex data, trends, and executive communication.",
      },
    ],
    href: "/services"
  },
  {
    icon: Bot,
    title: "Automation & Robotics",
    description: "Intelligent process automation and industrial robotics.",
    details: [
      {
        title: "Robotic Process Automation",
        description: "Automating repetitive office workflows across finance, HR, operations, and support.",
      },
      {
        title: "Industrial Robotics",
        description: "Robotic systems integration for production, inspection, handling, and precision tasks.",
      },
      {
        title: "Workflow Automation",
        description: "End-to-end digital workflows that reduce manual effort and approval delays.",
      },
      {
        title: "AI-Powered Automation",
        description: "Automation enhanced with decision intelligence, document processing, and predictions.",
      },
      {
        title: "Process Optimization",
        description: "Mapping bottlenecks and redesigning processes before automating them.",
      },
      {
        title: "System Integration",
        description: "Connecting bots, applications, APIs, sensors, and enterprise tools into one flow.",
      },
    ],
    href: "/services"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced digital immunity and infrastructure protection.",
    details: [
      {
        title: "Security Assessment",
        description: "Risk reviews, vulnerability checks, and security posture assessments.",
      },
      {
        title: "Infrastructure Protection",
        description: "Network, endpoint, cloud, and identity safeguards for critical environments.",
      },
      {
        title: "Compliance Support",
        description: "Controls, documentation, and readiness support for security standards and audits.",
      },
      {
        title: "Threat Monitoring",
        description: "Detection, alerting, and response workflows for active security visibility.",
      },
      {
        title: "Data Protection",
        description: "Encryption, access control, backup strategy, and secure data handling practices.",
      },
      {
        title: "Security Awareness",
        description: "Training and practical guidance to reduce human-risk exposure across teams.",
      },
    ],
    href: "/services"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Multi-cloud strategy and resilient architecture.",
    details: [
      {
        title: "Cloud Strategy",
        description: "Architecture planning, migration roadmaps, and cloud operating models.",
      },
      {
        title: "Migration & Modernization",
        description: "Moving applications, workloads, and data to scalable cloud platforms.",
      },
      {
        title: "DevOps Enablement",
        description: "CI/CD, infrastructure as code, monitoring, and release automation.",
      },
      {
        title: "Cloud Security",
        description: "Secure configuration, identity control, network protection, and compliance guardrails.",
      },
      {
        title: "Cost Optimization",
        description: "Cloud spend visibility, right-sizing, and performance-aware cost controls.",
      },
      {
        title: "Backup & Resilience",
        description: "Disaster recovery, high availability, and business continuity architecture.",
      },
    ],
    href: "/services"
  },
  {
    icon: Wifi,
    title: "Internet of Things",
    description: "Smart connectivity and industrial IoT solutions.",
    details: [
      {
        title: "IoT Architecture",
        description: "Device, network, platform, and data architecture for connected operations.",
      },
      {
        title: "Smart Monitoring",
        description: "Real-time asset, facility, environment, and equipment monitoring solutions.",
      },
      {
        title: "Sensor Integration",
        description: "Connecting sensors, gateways, PLCs, and edge devices into usable systems.",
      },
      {
        title: "Edge Computing",
        description: "Local processing for faster decisions, lower latency, and resilient operations.",
      },
      {
        title: "IoT Dashboards",
        description: "Operational dashboards for device status, alerts, analytics, and trends.",
      },
      {
        title: "Predictive Maintenance",
        description: "Data-driven maintenance alerts that reduce downtime and improve asset life.",
      },
    ],
    href: "/services"
  },
  {
    icon: Glasses,
    title: "AR & VR Solutions",
    description: "Immersive augmented and virtual reality experiences.",
    details: [
      {
        title: "VR Training",
        description: "Immersive simulations for technical training, safety, onboarding, and field practice.",
      },
      {
        title: "AR Field Assistance",
        description: "Guided overlays, remote expert support, and interactive maintenance workflows.",
      },
      {
        title: "3D Product Experiences",
        description: "Interactive demonstrations for products, facilities, machinery, and presentations.",
      },
      {
        title: "Virtual Showrooms",
        description: "Immersive environments for sales, education, real estate, and customer engagement.",
      },
      {
        title: "Mixed Reality Prototypes",
        description: "Rapid concepts for spatial interfaces, industrial use cases, and experience design.",
      },
      {
        title: "Immersive Analytics",
        description: "Spatial visualization of complex operational, geospatial, and engineering data.",
      },
    ],
    href: "/services"
  },
  {
    icon: Map,
    title: "GIS & 3D Modeling",
    description: "Spatial data analysis and high-fidelity 3D environments.",
    details: [
      {
        title: "GIS Mapping",
        description: "Location intelligence, map layers, spatial analysis, and operational geodata systems.",
      },
      {
        title: "3D City Modeling",
        description: "High-fidelity urban, infrastructure, and facility models for planning and visualization.",
      },
      {
        title: "Digital Twins",
        description: "Interactive digital replicas for assets, facilities, cities, and operational monitoring.",
      },
      {
        title: "Spatial Analytics",
        description: "Insights from location patterns, mobility, infrastructure, and environmental data.",
      },
      {
        title: "BIM & Asset Visualization",
        description: "Model integration for engineering, construction, facilities, and maintenance teams.",
      },
      {
        title: "Simulation Environments",
        description: "Scenario modeling for planning, safety, logistics, and smart-city operations.",
      },
    ],
    href: "/services"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Full-funnel digital growth, creative production, and brand visibility strategies.",
    details: [
      {
        title: "Social Media Marketing",
        description: "Content planning, platform management, community growth, and engagement campaigns.",
      },
      {
        title: "Performance Marketing",
        description: "Paid media campaigns focused on leads, conversions, ROAS, and measurable growth.",
      },
      {
        title: "SEO",
        description: "Technical SEO, content optimization, keyword strategy, and search visibility improvement.",
      },
      {
        title: "Influencer Marketing",
        description: "Creator partnerships, campaign planning, influencer outreach, and performance tracking.",
      },
      {
        title: "Production",
        description: "Photo, video, motion, and campaign assets built for digital channels and brand storytelling.",
      },
      {
        title: "Branding & Creative",
        description: "Brand identity, campaign concepts, creative direction, and visual communication systems.",
      },
    ],
    href: "/services"
  }
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services", hasDropdown: true },
  { label: "About Us", path: "/about-us/" },
  { label: "News", path: "/news" },
  { label: "Contact Us", path: "/contact-us/" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const location = useLocation();
  const activeService = serviceItems[activeServiceIndex];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transform-gpu ${isScrolled
        ? "bg-white border-b border-black/5 shadow-sm pt-0 pb-0"
        : "bg-white pt-0 pb-0"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container px-6">
        <nav className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={gpLogo}
              alt="GP Technologies Logo"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsDropdownOpen(false)}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 relative group ${location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <span className="relative">
                    {item.label}
                    <motion.span
                      className="absolute -bottom-1.5 left-0 h-[1.5px] bg-primary"
                      initial={false}
                      animate={{
                        width: location.pathname === item.path ? "100%" : "0%"
                      }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </span>
                  {item.hasDropdown && (
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:text-primary transition-colors" />
                    </motion.div>
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {item.hasDropdown && isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-full -left-48 mt-4 w-[1080px] bg-white border border-black/5 shadow-2xl rounded-[24px] p-8 overflow-hidden z-[100]"
                    >
                      <div className="grid grid-cols-[300px_1fr] gap-8">
                        <div>
                          <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary mb-5">
                            Our Services
                          </h4>
                          <div className="space-y-1">
                            {serviceItems.map((service, idx) => (
                              <button
                                key={service.title}
                                type="button"
                                onMouseEnter={() => setActiveServiceIndex(idx)}
                                onFocus={() => setActiveServiceIndex(idx)}
                                className={`w-full flex items-center justify-between gap-4 px-5 py-4 rounded-none text-left transition-all duration-200 ${
                                  activeServiceIndex === idx
                                    ? "bg-muted text-foreground"
                                    : "text-foreground hover:bg-muted/60"
                                }`}
                              >
                                <span className="flex items-center gap-3">
                                  <service.icon className="w-4 h-4 text-primary" />
                                  <span className="text-[14px] font-bold">
                                    {service.title}
                                  </span>
                                </span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="border-l border-black/5 pl-8">
                          <div className="mb-7">
                            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary">
                              What We Do
                            </span>
                            <h4 className="text-2xl font-display font-bold text-foreground mt-3 mb-2">
                              {activeService.title}
                            </h4>
                            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                              {activeService.description}
                            </p>
                          </div>

                          <div className="grid grid-cols-3 gap-x-10 gap-y-8">
                            {activeService.details.map((detail, idx) => (
                              <motion.div
                                key={`${activeService.title}-${detail.title}`}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.03, duration: 0.25 }}
                              >
                                <h5 className="text-[15px] font-semibold text-foreground mb-2 leading-snug">
                                  {detail.title}
                                </h5>
                                <p className="text-[13px] text-muted-foreground leading-relaxed">
                                  {detail.description}
                                </p>
                              </motion.div>
                            ))}
                          </div>

                          <div className="mt-8 pt-6 border-t border-black/5">
                            <Link
                              to={activeService.href}
                              className="flex items-center justify-between p-4 bg-primary/5 rounded-2xl group/all hover:bg-primary transition-all duration-500"
                            >
                              <span className="text-[12px] font-bold uppercase tracking-[0.2em] group-hover/all:text-white text-primary">
                                Explore {activeService.title}
                              </span>
                              <ArrowRight className="w-4 h-4 text-primary group-hover/all:text-white transition-transform group-hover/all:translate-x-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild className="gradient-primary text-primary-foreground font-bold px-8 h-12 text-[12px] uppercase tracking-widest rounded-full transition-shadow duration-500 hover:shadow-xl hover:shadow-primary/20">
                <Link to="/contact-us/">Get Started</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[60] lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between h-20 px-6 border-b border-black/5">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <img src={gpLogo} alt="GP Logo" className="h-10 w-auto object-contain" />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-black/5 text-foreground"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-10 space-y-8">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-4 block">Navigation</span>
                  {navItems.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 text-2xl font-display font-bold transition-all ${location.pathname === item.path ? "text-primary" : "text-foreground"
                          }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4 pt-4 border-t border-black/5">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-4 block">Our Services</span>
                  <div className="grid grid-cols-1 gap-3">
                    {serviceItems.slice(0, 4).map((service, idx) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                      >
                        <Link
                          to={service.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-4 p-4 bg-black/[0.02] rounded-2xl"
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <service.icon className="w-5 h-5" />
                          </div>
                          <span className="font-bold text-sm">{service.title}</span>
                        </Link>
                      </motion.div>
                    ))}
                    <Link
                      to="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center p-4 text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 rounded-2xl"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-black/5 bg-white">
                <Button asChild className="w-full gradient-primary text-primary-foreground font-bold h-16 rounded-[22px] text-base uppercase tracking-widest shadow-xl shadow-primary/20">
                  <Link to="/contact-us/" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
