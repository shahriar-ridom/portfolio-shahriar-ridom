"use client";

import { m } from "framer-motion";
import { useState } from "react";
import {
  Github,
  Linkedin,
  ArrowUp,
  type LucideIcon,
  Instagram,
  Mail,
  Check,
  Copy,
} from "lucide-react";
import { ContactForm } from "./contact-form";
import { cn } from "@/lib/utils";

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
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black pt-24 pb-10 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-primary/5 blur-[120px] rounded-full pointer-events-none translate-z-0 will-change-transform" />
      <div className="w-full max-w-300 mx-auto px-6 md:px-10 z-10 relative">
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
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="uppercase tracking-widest text-xs font-mono text-emerald-400">
                  Available for work
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 text-white">
                Let&apos;s build <br />
                <span className="text-muted-foreground">the future.</span>
              </h2>

              <p className="text-lg text-muted-foreground/80 max-w-md leading-relaxed font-light">
                I am currently looking for a team where I can contribute to
                meaningful products. Whether you have a question or just want to
                connect, my inbox is always open.
              </p>
            </div>

            <div className="flex flex-col gap-10 pt-10 lg:mt-auto">
              <div>
                <p className="text-xs text-muted-foreground/50 mb-4 uppercase tracking-widest font-mono">
                  Direct Contact
                </p>
                <button
                  onClick={handleCopyEmail}
                  className="group flex items-center gap-4 text-xl md:text-3xl font-medium text-zinc-100 hover:text-primary transition-colors text-left"
                  title="Click to copy email"
                >
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>{EMAIL}</span>

                  <div className="relative ml-2">
                    <div
                      className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300",
                        copied ? "opacity-100 scale-100" : "opacity-0 scale-50",
                      )}
                    >
                      <Check className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div
                      className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300",
                        copied
                          ? "opacity-0 scale-50"
                          : "opacity-0 group-hover:opacity-100 scale-100",
                      )}
                    >
                      <Copy className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </button>
                <div className="h-4 mt-2">
                  {copied && (
                    <span className="text-xs text-emerald-500 font-mono animate-in fade-in slide-in-from-left-2">
                      Email copied to clipboard!
                    </span>
                  )}
                </div>
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
            <span>Built with Next.js, Server Actions & Tailwind</span>
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
      className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
    >
      <Icon className="w-6 h-6 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all" />
    </a>
  );
}
