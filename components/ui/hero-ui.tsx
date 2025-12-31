"use client";

import { m } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Profile } from "@prisma/client";

interface HeroUiProps {
  profile: Profile | null;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function HeroUi({ profile }: HeroUiProps) {
  const fullName = profile?.fullName || "Shahriar Ridom";
  const title = profile?.title || "Senior Web Developer";
  const bio =
    profile?.bio ||
    "Crafting immersive digital experiences. I build robust, scalable applications that merge aesthetic precision with powerful functionality.";

  const imageUrl =
    profile?.imageUrl ||
    "https://lh3.googleusercontent.com/a/default-user=s1200";

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] w-full max-w-[1200px] mx-auto gap-8 lg:gap-16 px-6 md:px-10 pt-24 md:pt-0">
      {/* Image Section */}
      <m.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 h-[40vh] md:h-[55vh] relative group rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 border border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60"></div>

        <Image
          src={imageUrl}
          alt={fullName}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />

        <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-mono text-white/90">
            Available for hire
          </span>
        </div>
      </m.div>

      {/* Text Section */}
      <m.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2 flex flex-col items-start justify-center text-left space-y-6 md:pl-4"
      >
        {/* Year Badge */}
        <m.div
          variants={itemVariants}
          className="flex items-center gap-2 text-primary font-mono text-sm tracking-widest uppercase mb-2"
        >
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>Portfolio {new Date().getFullYear()}</span>
        </m.div>

        {/* Name Title */}
        <m.h1
          variants={itemVariants}
          className="font-display font-extrabold text-foreground leading-[0.9] tracking-tighter text-[clamp(3rem,6vw,6rem)]"
        >
          {fullName.split(" ").map((word, i) => (
            <span key={i} className="block">
              {word.toUpperCase()}
            </span>
          ))}
        </m.h1>

        {/* Dynamic Title */}
        <m.div
          variants={itemVariants}
          className="h-8 md:h-10 flex items-center"
        >
          <div className="font-mono text-primary text-lg md:text-2xl tracking-wide">
            {title.toUpperCase()}
          </div>
        </m.div>

        {/* Bio */}
        <m.p
          variants={itemVariants}
          className="max-w-md text-base text-white/50 font-light tracking-wide leading-relaxed"
        >
          {bio}
        </m.p>

        {/* CTA Buttons */}
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
