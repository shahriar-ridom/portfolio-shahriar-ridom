"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { ContactForm } from "./contact-form";

const EMAIL = "shahriarridom.info@gmail.com";

export function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-background pt-20 pb-10 overflow-hidden"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left Column: Heading & Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full justify-between space-y-10"
          >
            <div>
              <div className="flex items-center gap-2 mb-6 text-primary/80">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="uppercase tracking-widest text-xs font-bold">
                  Contact
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
                Project <br />
                <span className="text-muted-foreground/40">in mind?</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground/60 max-w-md leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities. Drop me a line and let's create something
                specific.
              </p>
            </div>

            {/* Contact Details (Desktop) */}
            <div className="hidden lg:flex flex-col gap-8 mt-auto">
              <div>
                <p className="text-sm text-muted-foreground/40 mb-2 uppercase tracking-wider">
                  Email me at
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-2xl font-medium hover:text-primary transition-colors flex items-center gap-2 group text-foreground"
                >
                  {EMAIL}
                  <ArrowUpRight className="w-6 h-6 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </div>

              <div className="flex gap-4">
                <SocialLink href="#" icon={Github} />
                <SocialLink href="#" icon={Linkedin} />
                <SocialLink href="#" icon={Twitter} />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <ContactForm />
        </div>

        {/* Footer Meta */}
        <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/30 font-mono">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span>© {new Date().getFullYear()} Shahriar Ridom</span>
            <span className="hidden md:inline w-1 h-1 bg-white/30 rounded-full"></span>
            <span>Crafted with code & deep space vibes</span>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 text-foreground"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
