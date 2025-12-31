"use client";

import { m } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  ArrowUp,
  type LucideIcon,
  Instagram,
} from "lucide-react";
import { ContactForm } from "./contact-form";

const EMAIL = "shahriarridom.info@gmail.com";

const SOCIALS = [
  { name: "Github", href: "https://github.com/shahriar-ridom", icon: Github },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/shahriar-ridom",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/shahriar.ridom",
    icon: Instagram,
  },
];

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
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
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
                I&apos;m always interested in hearing about new projects and
                opportunities. Drop me a line and let&apos;s create something
                specific.
              </p>
            </div>

            <div className="flex flex-col gap-8 mt-10 lg:mt-auto">
              <div>
                <p className="text-sm text-muted-foreground/40 mb-2 uppercase tracking-wider">
                  Email me at
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-xl md:text-2xl font-medium hover:text-primary transition-colors flex items-center gap-2 group text-foreground w-fit"
                >
                  {EMAIL}
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-primary opacity-50 md:opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </div>

              <div className="flex gap-4">
                {SOCIALS.map((social) => (
                  <SocialLink key={social.name} {...social} />
                ))}
              </div>
            </div>
          </m.div>

          <div className="w-full">
            <ContactForm />
          </div>
        </div>

        <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/30 font-mono">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <span>© {new Date().getFullYear()} Shahriar Ridom</span>
            <span className="hidden md:inline w-1 h-1 bg-white/30 rounded-full"></span>
            <span>Crafted over Infinite cup of Coffee</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-primary transition-colors cursor-pointer py-2 md:py-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
  name,
}: {
  href: string;
  icon: LucideIcon;
  name: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 text-foreground group bg-black/20 backdrop-blur-sm"
    >
      <Icon className="w-5 h-5 group-hover:stroke-[2.5px]" />
    </a>
  );
}
