import { motion } from "framer-motion";
import { Award, Target, Sparkles } from "lucide-react";
import dai1 from "@/assets/services/DAI-1.jpg";
const partners = [{
  name: "DTME",
  logo: "https://dstme.com/wp-content/uploads/2020/01/dstme-logo-1-90x90.png",
  url: "https://www.dtme.com"
}, {
  name: "COMMI AI",
  logo: "https://www.getcommi.com/_next/image?url=%2Fnew_commi_logo.png&w=128&q=75",
  url: "https://www.getcommi.com/"
}, {
  name: "C1Smart",
  logo: "https://www.coreoneoffice.com/images/logo.png",
  url: "https://www.coreoneoffice.com/"
}, {
  name: "Digiverse",
  logo: "https://www.digiverse360.io/assets/imgs/logo/site-logo-white-2.png",
  url: "https://www.digiverse360.io/"
}, {
  name: "Code-Brew",
  logo: "https://www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2025/01/codebrew-black-logo.svg",
  url: "https://www.code-brew.com/"
}, {
  name: "SAP",
  logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  url: "https://www.sap.com"
}, {
  name: "IDC Technologies",
  logo: "https://www.idctechnologies.com/images/IDC-LOGO.svg",
  url: "https://www.idctechnologies.com"
}, {
  name: "Apptunix",
  logo: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-3118eef/media.apptunix.com/wp-content/uploads/2024/04/24122147/appunix_logo.svg",
  url: "https://www.apptunix.com"
}, {
  name: "Sisgain",
  logo: "https://sisgain.ae/assets/images/main_logo.webp",
  url: "https://www.sisgain.ae"
}];
const PartnersClients = () => {
  return <section className="pt-16 pb-0 bg-muted/30">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="overflow-hidden mb-3">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight pb-1"
          >
            Digital Ecosystem & <span className="text-primary italic">Partners</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-xl font-light max-w-2xl mx-auto"
        >
          Collaborating with world-class innovators to deliver state-of-the-art solutions.
        </motion.p>
      </div>

      {/* UAE AI Strategy 2031 Section */}
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7
      }} className="mb-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 p-1 max-w-5xl mx-auto">
          {/* Animated Glow Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-transparent to-primary/30 animate-pulse opacity-50" />

          <div className="relative bg-card/95 backdrop-blur-sm rounded-[22px] p-6 md:p-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
              {/* Image Container */}
              <motion.div className="relative flex-shrink-0" whileHover={{
                scale: 1.02
              }} transition={{
                duration: 0.3
              }}>
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-70" />

                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                  <img src={dai1} alt="UAE AI Strategy 2031" className="w-full h-full object-cover" />
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    2031
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-bold text-lg">UAE AI Strategy</div>
                    <div className="text-white/80 text-sm">National Vision Aligned</div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div initial={{
                  opacity: 0,
                  x: 20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  delay: 0.2
                }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-3">
                    <Award className="w-4 h-4" />
                    Official UAE National Strategy Partner
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight pb-1">
                    Driving the{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      UAE AI Strategy 2031
                    </span>
                  </h3>

                  <p className="text-muted-foreground text-base mb-5 max-w-xl">
                    Our solutions are strategically aligned with the UAE's National AI Strategy 2031,
                    contributing to the nation's ambitious goal of becoming a global AI powerhouse.
                    We deliver enterprise-grade AI, automation, and digital transformation solutions
                    that support government initiatives and private sector innovation across the Emirates.
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                      <Target className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">Smart Government Services</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                      <Target className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">AI Innovation Ecosystem</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                      <Target className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">Digital Economy Growth</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>

    {/* Partners Section - Infinite Scroll Carousel (FULL SCREEN WIDTH) */}
    <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6,
      delay: 0.2
    }} className="mt-20 mb-0 w-full">
      <h3 className="text-xl font-semibold text-foreground text-center mb-0">
        Technology Partners
      </h3>

      <div className="relative w-full overflow-hidden py-12">
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8f9fa] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8f9fa] to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex w-fit will-change-transform"
          animate={{
            x: [0, "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {/* Displaying partners 3 times to ensure no gaps ever occur even on ultra-wide screens */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <motion.a
              key={`${partner.name}-${index}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-6 flex items-center justify-center p-4 bg-background/50 backdrop-blur-sm rounded-2xl border border-primary/5 shadow-soft h-24 w-44 group cursor-pointer relative will-change-transform"
              whileHover={{
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="relative z-10 max-h-12 max-w-[80%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-out"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Custom style for pause on hover */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .py-12:hover .flex {
            animation-play-state: paused !important;
          }
        `}} />
      </div>
    </motion.div>
  </section>;
};
export default PartnersClients;