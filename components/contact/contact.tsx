"use client";

import { m } from "framer-motion";
import {
  Github,
  Linkedin,
  ArrowUp,
  type LucideIcon,
  Instagram,
  Mail,
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
      className="relative w-full bg-black pt-24 pb-10 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="uppercase tracking-widest text-xs font-mono text-green-400">
                  Available for work
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 text-white">
                Let's build <br />
                <span className="text-muted-foreground">the future.</span>
              </h2>

              <p className="text-lg text-muted-foreground/80 max-w-md leading-relaxed font-light">
                I am currently looking for a team where I can contribute to
                meaningful products. Whether you have a question, a job
                opportunity, or just want to connect, my inbox is always open.
              </p>
            </div>

            <div className="flex flex-col gap-10 pt-10 lg:mt-auto">
              <div>
                <p className="text-xs text-muted-foreground/50 mb-4 uppercase tracking-widest font-mono">
                  Direct Contact
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-xl md:text-3xl font-medium text-zinc-100 hover:text-primary transition-colors flex items-center gap-4 group w-fit"
                >
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  {EMAIL}
                </a>
              </div>

              <div className="flex gap-4">
                {SOCIALS.map((social) => (
                  <SocialLink key={social.name} {...social} />
                ))}
              </div>
            </div>
          </m.div>

          <div className="w-full bg-zinc-900/20 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/5">
            <ContactForm />
          </div>
        </div>

        <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground/40 font-mono">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <span>© {new Date().getFullYear()} Shahriar Ridom</span>
            <span className="hidden md:inline text-white/10">•</span>
            <span>Built with Next.js 16, React Server Actions & Tailwind</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-white transition-colors cursor-pointer py-2 px-4 rounded-full bg-white/5 hover:bg-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
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
      className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group"
    >
      <Icon className="w-6 h-6 text-zinc-400 group-hover:text-gray-800 group-hover:scale-110 transition-colors" />
    </a>
  );
}
