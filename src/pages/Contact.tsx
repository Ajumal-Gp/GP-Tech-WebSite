import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send, Building2, ArrowRight } from "lucide-react";
import { FaLinkedin, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email").max(255),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Artificial Intelligence",
  "Data Analytics",
  "Automation & Robotics",
  "Cybersecurity",
  "Cloud Computing",
  "Internet of Things",
  "AR & VR Solutions",
  "GIS & 3D Modeling",
];

const officeLocations = [
  {
    icon: Building2,
    title: "Head Office",
    content: "Al Qaizi Building, Office No. 202B, Deira, Dubai, UAE",
  },
  {
    icon: MapPin,
    title: "Our Branch",
    content: "Dubai Founders HQ Campus, Trade Center Second, Sheikh Zayed Road, Dubai",
  },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    content: "+971 50 194 7777\n+971 425 990 11",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "info@gptechnologies.ae",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9:00 AM - 5:00 PM",
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/grow-plus-technologies/",
    color: "hover:bg-[#0077B5]",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    url: "https://www.instagram.com/gp.technologies/",
    color: "hover:bg-[#E4405F]",
  },
  {
    icon: FaYoutube,
    name: "YouTube",
    url: "https://www.youtube.com/@Sadeem_Energy",
    color: "hover:bg-[#FF0000]",
  },
  {
    icon: FaTiktok,
    name: "TikTok",
    url: "https://www.tiktok.com/@sadeem_energy?_r=1&_t=ZS-93dbHfqEq3E",
    color: "hover:bg-[#000000]",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxUaHph1E6kL79zPEU0rBrjJVUf1ANugettTSEeQmQ-BRr0Z7NWn12yV6vE7mtl3L-T/exec";

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {


      // Submit to Google Sheets (including service field)
      // We sanitize inputs to prevent "Formula parse error" in Google Sheets
      const sanitizeForSheets = (val: string) => {
        if (!val) return "";
        // Prepend an apostrophe if the value starts with characters that Google Sheets interprets as a formula
        return /^[-+=@]/.test(val) ? `'${val}` : val;
      };

      const formData = new URLSearchParams();
      formData.append("fullName", sanitizeForSheets(data.fullName));
      formData.append("email", sanitizeForSheets(data.email));
      formData.append("phone", sanitizeForSheets(data.phone || ""));
      formData.append("company", sanitizeForSheets(data.company || ""));
      formData.append("service", sanitizeForSheets(data.service || ""));
      formData.append("message", sanitizeForSheets(data.message));

      const googlePromise = fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      // Wait for Google Sheets submission
      await googlePromise;





      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Grow Plus Technologies</title>
        <meta
          name="description"
          content="Contact Grow Plus Technologies, also known as GP Technologies UAE, at gptechnologies.ae for AI, robotics, GIS, digital marketing, and digital solutions in Dubai."
        />
        <meta name="keywords" content="Contact technology company UAE, Best tech company Dubai contact, UAE certified AI company contact, Grow Plus Technologies location, Grow Plus Technologies Dubai, GP Technologies UAE, GP Technologies UAE not Canada, Grow Plus Technologies reviews, gptechnologies.ae, Technology partners UAE, Apptunix technology partner, IDC Technologies partner, Apptunix UAE, IDC Technologies UAE" />
        <meta property="og:title" content="Contact Grow Plus Technologies | UAE Certified AI Company" />
        <meta property="og:description" content="Get in touch with one of the best technology companies in UAE for AI and digital transformation." />
        <meta property="og:image" content="https://gptechnologies.ae/gp-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gptechnologies.ae/contact-us/" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Contact Us
            </span>
            <motion.h1
              className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-3 mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Let's Start a <span className="text-gradient">Conversation</span>
            </motion.h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ready to transform your business with cutting-edge technology?
              Get in touch with our team of experts today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl shadow-card border border-border p-8 lg:p-10">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+971 50 XXX XXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interest</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              className="min-h-32 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-primary text-primary-foreground font-semibold h-14 text-base hover:opacity-90 transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Our Locations
              </h2>

              {officeLocations.map((office, index) => (
                <motion.div
                  key={office.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-xl shadow-soft border border-border p-5 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <office.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {office.title}
                      </h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">
                        {office.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">
                Contact Details
              </h3>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-card rounded-xl shadow-soft border border-border p-5 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Media */}
              <h3 className="text-xl font-display font-bold text-foreground mt-8 mb-4">
                Get in Touch
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="bg-card rounded-xl shadow-soft border border-border p-5"
              >
                <p className="text-muted-foreground text-sm mb-4">
                  Follow us on social media for updates and insights
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 rounded-xl bg-muted flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden shadow-soft border border-border mt-8">
                <iframe
                  title="GP Technologies Office Location - Al Qaizi Building, Deira, Dubai"
                  src="https://maps.google.com/maps?q=Al+Qaizi+Building+Deira+Dubai&hl=en&z=17&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
