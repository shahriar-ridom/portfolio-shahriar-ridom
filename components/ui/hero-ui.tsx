"use client";

import { m } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Profile } from "@prisma/client";

interface HeroUiProps {
  profile: Profile | null;
}

// Optimized Text Stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
<<<<<<< HEAD
      delayChildren: 0.1,
=======
      delayChildren: 0.1, // Reduced delay for snappier feel
>>>>>>> origin/main
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
<<<<<<< HEAD
    transition: { duration: 0.4, ease: "easeOut" },
=======
    transition: { duration: 0.4, ease: "easeOut" }, // Faster (0.5 -> 0.4)
>>>>>>> origin/main
  },
};

export function HeroUi({ profile }: HeroUiProps) {
  const fullName = profile?.fullName || "Shahriar Ridom";
  const title = profile?.title || "Full-stack Developer";
  const bio =
    profile?.bio ||
    "I build accessible, pixel-perfect, and performant web applications. " +
      "Currently focused on mastering DevOps and System Design.";

  const imageUrl =
    profile?.imageUrl ||
    "https://lh3.googleusercontent.com/d/1X4...placeholder";

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] w-full max-w-300 mx-auto gap-8 lg:gap-16 px-6 md:px-10 pt-24 md:pt-0">
      <div className="w-full md:w-1/2 h-[40vh] md:h-[55vh] relative group rounded-3xl overflow-hidden shadow-2xl shadow-green-500/10 border border-white/5">
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />

        <Image
          src={imageUrl}
          alt={fullName}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />

        <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-mono text-white/90">
            Available for hire
          </span>
        </div>
      </div>

      <m.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2 flex flex-col items-start justify-center text-left space-y-6 md:pl-4"
      >
        <m.div
          variants={itemVariants}
          className="flex items-center gap-2 text-green-400 font-mono text-sm tracking-widest uppercase mb-2"
        >
          <span className="w-8 h-px bg-green-400" />
          <span>Portfolio {new Date().getFullYear()}</span>
        </m.div>

        <m.h1
          variants={itemVariants}
          className="font-display font-extrabold text-white leading-[0.9] tracking-tighter text-[clamp(3rem,6vw,6rem)]"
        >
          {fullName.split(" ").map((word, i) => (
            <span key={i} className="block">
              {word.toUpperCase()}
            </span>
          ))}
        </m.h1>

        <m.div
          variants={itemVariants}
          className="h-8 md:h-10 flex items-center"
        >
          <div className="font-mono text-green-400 text-lg md:text-2xl tracking-wide">
            {title.toUpperCase()}
          </div>
        </m.div>

        <m.p
          variants={itemVariants}
          className="max-w-md text-base text-white/50 font-light tracking-wide leading-relaxed"
        >
          {bio}
        </m.p>

        <m.div variants={itemVariants} className="flex flex-row gap-3 pt-4">
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
        </m.div>
      </m.div>
    </section>
  );
}
