"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Code,
  Palette,
  FileJson,
  MonitorPlay,
  Database,
  Cloud,
  Server,
  GitBranch,
  Layers,
  Box,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SKILLS = {
  frontend: [
    { name: "React / Next.js", level: 95, icon: Code },
    { name: "Tailwind CSS", level: 90, icon: Palette },
    { name: "TypeScript", level: 85, icon: FileJson },
    { name: "Framer Motion", level: 80, icon: MonitorPlay },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: Server },
    { name: "PostgreSQL", level: 80, icon: Database },
    { name: "Supabase", level: 90, icon: Database },
    { name: "Redis", level: 70, icon: Layers },
  ],
  devops: [
    { name: "Docker", level: 75, icon: Box },
    { name: "AWS", level: 65, icon: Cloud },
    { name: "Git / CI/CD", level: 85, icon: GitBranch },
  ],
};

const TECH_STACK = [
  { name: "React", icon: Code, color: "#61DAFB" },
  { name: "Node.js", icon: Server, color: "#339933" },
  { name: "PostgreSQL", icon: Database, color: "#336791" },
  { name: "AWS", icon: Cloud, color: "#FF9900" },
  { name: "Docker", icon: Box, color: "#2496ED" },
  { name: "Figma", icon: Palette, color: "#F24E1E" },
  { name: "Git", icon: GitBranch, color: "#F05032" },
  { name: "Redis", icon: Layers, color: "#DC382D" },
];

export function Stack() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "devops">(
    "frontend"
  );

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 w-full max-w-[1200px] mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column: Biography */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono font-medium tracking-wide text-primary shadow-[0_0_15px_-3px_rgba(60,131,246,0.3)]">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              02. ABOUT & SKILLS
            </span>
          </div>

          <h2 className="text-foreground tracking-tight text-[32px] md:text-5xl font-bold leading-[1.1] mb-8">
            Building digital products with{" "}
            <span className="text-primary">purpose</span>.
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
            <p>
              I am a full-stack developer passionate about creating seamless
              digital experiences. With a background in design and engineering,
              I bridge the gap between aesthetics and functionality.
            </p>
            <p>
              Currently obsessed with scalable architecture and pixel-perfect
              UIs. My approach combines deep technical expertise with a keen eye
              for user interaction, ensuring that every line of code contributes
              to a delightful end-user journey.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-8 my-8">
            <div>
              <div className="text-3xl font-bold text-white mb-1 font-mono">
                5+
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                Years Exp.
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1 font-mono">
                40+
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                Projects
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1 font-mono">
                ∞
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                Coffees
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <button className="group relative flex items-center justify-center overflow-hidden rounded-full bg-primary h-12 px-8 text-primary-foreground shadow-[0_0_20px_-5px_#3c83f6] transition-all hover:bg-blue-600 hover:text-white hover:scale-105 active:scale-95">
              <Download className="mr-2 w-5 h-5" />
              <span className="text-sm font-bold tracking-wide">
                Download Resume
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:animate-shimmer"></div>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-center relative"
        >
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative bg-black/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 shadow-2xl">
            {/* Tabs */}
            <div className="flex mb-8 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex items-center rounded-full bg-[#1A1A1A] p-1 border border-white/5">
                {(["frontend", "backend", "devops"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-5 py-2 rounded-full text-sm font-medium transition-all capitalize",
                      activeTab === tab
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-muted-foreground hover:text-white"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Skill Bars */}
            <div className="space-y-6">
              {SKILLS[activeTab].map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-white group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-sm text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-600 to-primary rounded-full shadow-[0_0_10px_rgba(60,131,246,0.5)] relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Infinite Marquee Section */}
      <div className="mt-20 lg:mt-32 w-full relative">
        <div className="text-center mb-6">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
            Technologies & Tools
          </p>
        </div>
        <div className="relative w-full overflow-hidden py-10 mask-linear-fade">
          <div className="flex w-max animate-scroll gap-16 items-center hover:[animation-play-state:paused]">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col items-center gap-2 cursor-pointer transition-all duration-300"
                >
                  <Icon
                    className="w-10 h-10 text-muted-foreground group-hover:text-[var(--hover-color)] transition-colors duration-300"
                    style={
                      { "--hover-color": tech.color } as React.CSSProperties
                    }
                  />
                  <span className="text-xs text-muted-foreground group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
