import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";
import gpLogo from "@/assets/gp-logo.png";

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/grow-plus-technologies/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/gp.technologies/", label: "Instagram" },
  { icon: FaYoutube, href: "https://www.youtube.com/@Sadeem_Energy", label: "YouTube" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@sadeem_energy?_r=1&_t=ZS-93dbHfqEq3E", label: "TikTok" },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us/" },
  { label: "Services", path: "/services" },
  { label: "News", path: "/news" },
  { label: "Contact Us", path: "/contact-us/" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img
                src={gpLogo}
                alt="GP Technologies Logo"
                className="h-16 w-auto object-contain bg-[rgb(248_249_250_/_0)] rounded-lg p-2"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering the future through intelligent technology. Dubai-based innovation leaders driving digital transformation.
            </p>
            <p className="text-primary-foreground/60 text-xs leading-relaxed">
              Grow Plus Technologies, also known as GP Technologies UAE, is the Dubai-based AI company operating at gptechnologies.ae.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {["Artificial Intelligence", "Data Analytics", "Automation & Robotics", "Cybersecurity", "Cloud Computing", "IoT", "AR & VR Solutions", "Gis & 3D Modeling"].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-primary font-semibold text-xs uppercase tracking-wider">Head Office</span>
                  <span className="text-primary-foreground/70 text-sm">
                    Al Qaizi Building, Office No. 202B, Deira, Dubai, UAE
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-primary font-semibold text-xs uppercase tracking-wider">Our Branch</span>
                  <span className="text-primary-foreground/70 text-sm">
                    Dubai Founders HQ Campus, Trade Center Second, Sheikh Zayed Road, Dubai.
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="tel:+971425990011"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  +971 425 990 11
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@gptechnologies.ae"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  info@gptechnologies.ae
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <p className="text-center text-primary-foreground/50 text-sm">
            © 2026 | GP Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
