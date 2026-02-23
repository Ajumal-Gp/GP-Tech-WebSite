import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Brain, BarChart3, Bot, Shield, Cloud, Wifi, Glasses, Map, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gpLogo from "@/assets/gp-logo.png";

const serviceItems = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Cognitive solutions and machine learning architectures.",
    href: "/services"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Predictive modeling and real-time business intelligence.",
    href: "/services"
  },
  {
    icon: Bot,
    title: "Automation & Robotics",
    description: "Intelligent process automation and industrial robotics.",
    href: "/services"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced digital immunity and infrastructure protection.",
    href: "/services"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Multi-cloud strategy and resilient architecture.",
    href: "/services"
  },
  {
    icon: Wifi,
    title: "Internet of Things",
    description: "Smart connectivity and industrial IoT solutions.",
    href: "/services"
  },
  {
    icon: Glasses,
    title: "AR & VR Solutions",
    description: "Immersive augmented and virtual reality experiences.",
    href: "/services"
  },
  {
    icon: Map,
    title: "GIS & 3D Modeling",
    description: "Spatial data analysis and high-fidelity 3D environments.",
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
  const location = useLocation();

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
                      className="absolute top-full -left-24 mt-4 w-[850px] bg-white border border-black/5 shadow-2xl rounded-[24px] p-10 overflow-hidden z-[100]"
                    >
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
                        <div className="col-span-full mb-6">
                          <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary mb-2">Our Specializations</h4>
                          <div className="h-px w-full bg-black/5" />
                        </div>
                        {serviceItems.map((service, idx) => (
                          <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03, duration: 0.3 }}
                            className="transform-gpu"
                          >
                            <Link
                              to={service.href}
                              className="flex items-start gap-4 p-4 rounded-2xl hover:bg-black/[0.02] transition-all duration-300 group/item"
                            >
                              <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 group-hover/item:scale-110">
                                <service.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h5 className="text-[14px] font-bold text-foreground mb-1 flex items-center gap-2 group-hover/item:text-primary transition-colors">
                                  {service.title}
                                </h5>
                                <p className="text-[12px] text-muted-foreground leading-relaxed font-light">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}

                        <div className="col-span-full mt-6 pt-6 border-t border-black/5">
                          <Link to="/services" className="flex items-center justify-between p-4 bg-primary/5 rounded-2xl group/all hover:bg-primary transition-all duration-500">
                            <span className="text-[12px] font-bold uppercase tracking-[0.2em] group-hover/all:text-white text-primary">Explore All Solutions</span>
                            <ArrowRight className="w-4 h-4 text-primary group-hover/all:text-white transition-transform group-hover/all:translate-x-2" />
                          </Link>
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
