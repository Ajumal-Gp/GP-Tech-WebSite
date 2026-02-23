import { FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa6";
import { Mail, Phone } from "lucide-react";

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/grow-plus-technologies/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/gp.technologies/", label: "Instagram" },
  { icon: FaYoutube, href: "https://www.youtube.com/@Sadeem_Energy", label: "YouTube" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@sadeem_energy?_r=1&_t=ZS-93dbHfqEq3E", label: "TikTok" },
];

const TopUtilityBar = () => {
  return (
    <div className="bg-foreground text-primary-foreground py-2">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>

        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="mailto:info@gptechnologies.ae"
            className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">info@gptechnologies.ae</span>
          </a>
          <a
            href="tel:+971425990011"
            className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+971 425 990 11</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <social.icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopUtilityBar;
