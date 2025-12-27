"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Profile } from "@prisma/client";

interface HeroProps {
  profile: Profile | null;
}

export function Hero({ profile }: HeroProps) {
  const fullName = profile?.fullName ?? "Shahriar Ridom";
  const title = profile?.title ?? "Web Developer";
  const bio =
    profile?.bio ??
    "Crafting immersive digital experiences in deep space. I build robust, scalable applications that merge aesthetic precision with powerful functionality.";

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] w-full max-w-[1200px] mx-auto gap-8 lg:gap-16 px-6 md:px-10 pt-24 md:pt-0">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 h-[40vh] md:h-[55vh] relative group rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 border border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60"></div>
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBaQGw1e5sPQqEGKdgPAUOJhZnCZb2AOnBUh7yHcGDbAH-QZYCnIPjljyvVDhgPy55sW5_KPyNmArlZSB00-3KsLt3w3BvOifdBgyfUjrDK7YNWV0zKmEc0Jjjkd06S7k1dcchu9hEPrvvFNMEJeXw6kS43JGafck6xesXghzZMGiADKVrzxJuQUJz3Ci6_ugh5Jt32OLzPldStDMcetvMP8R7dh8GmkUrnOUso9WzXjLC79I_0UjWQq260ZcDLS9uKKiQYEY_RBZe"
          alt={fullName}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
          priority
        />
        <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-mono text-white/90">
            Available for hire
          </span>
        </div>
      </motion.div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left space-y-6 md:pl-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-2 text-primary font-mono text-sm tracking-widest uppercase mb-2"
        >
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>Portfolio 2024</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-display font-extrabold text-foreground leading-[0.9] tracking-tighter text-[clamp(3rem,6vw,6rem)]"
        >
          {fullName.split(" ").map((word, i) => (
            <span key={i} className="block">
              {word.toUpperCase()}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="h-8 md:h-10 flex items-center"
        >
          <div className="typewriter-text font-mono text-primary text-lg md:text-2xl tracking-wide">
            {title.toUpperCase()}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="max-w-md text-base text-white/50 font-light tracking-wide leading-relaxed"
        >
          {bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-row gap-3 pt-4"
        >
          <a
            href="#projects"
            className="group relative px-5 py-3 md:px-8 bg-white text-black rounded-full font-medium overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-2">
              See My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="px-5 py-3 md:px-8 border border-white/20 hover:border-white/40 text-white rounded-full font-medium transition-colors whitespace-nowrap"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="pt-8 flex items-center gap-6"
        >
          <div className="flex -space-x-3">
            {["JS", "TS", "RC"].map((tech) => (
              <div
                key={tech}
                className="w-10 h-10 rounded-full bg-white/10 border border-background flex items-center justify-center text-xs font-mono text-white/80 backdrop-blur-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
