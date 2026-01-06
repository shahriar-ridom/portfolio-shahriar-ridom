"use client";

import { useState, useMemo } from "react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import type { Skill } from "@prisma/client";

interface SkillsTabsProps {
  skills: Skill[];
}

const getSkillLevelLabel = (level: number) => {
  if (level >= 80)
    return {
      label: "Core Stack",
      color: "text-green-400 bg-green-400/10 border-green-400/20",
    };
  if (level >= 50)
    return {
      label: "Competent",
      color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    };
  return {
    label: "Exploring",
    color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  };
};

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.05,
    },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export function SkillsTabs({ skills }: SkillsTabsProps) {
  const [activeTab, setActiveTab] = useState<"FRONTEND" | "BACKEND" | "DEVOPS">(
    "FRONTEND"
  );

  const currentSkills = useMemo(
    () =>
      skills
        .filter((s) => s.category === activeTab)
        .sort((a, b) => b.level - a.level),
    [skills, activeTab]
  );

  return (
    <div className="relative bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white">Technical Arsenal</h3>
          <p className="text-muted-foreground text-sm mt-1">
            Tools I use to bring ideas to life.
          </p>
        </div>

        <div className="flex items-center rounded-full bg-white/5 p-1 border border-white/5">
          {(["FRONTEND", "BACKEND", "DEVOPS"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-medium transition-all relative z-0",
                activeTab === tab
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              )}
            >
              {activeTab === tab && (
                <m.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 border border-white/10 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.charAt(0) + tab.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 min-h-[300px]">
        <AnimatePresence mode="wait">
          <m.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 gap-3"
          >
            {currentSkills.length > 0 ? (
              currentSkills.map((skill) => {
                const Icon = getIcon(skill.iconName);
                const { label, color } = getSkillLevelLabel(skill.level);

                return (
                  <m.div
                    key={skill.id}
                    variants={itemVariants}
                    className="group relative flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-black/40 rounded-lg border border-white/5 group-hover:border-primary/50 group-hover:text-primary transition-colors text-zinc-400">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex flex-col">
                        <span className="font-semibold text-zinc-100 tracking-tight">
                          {skill.name}
                        </span>
                        <span className="text-xs text-zinc-500 hidden sm:block">
                          {activeTab === "FRONTEND"
                            ? "UI & Interactivity"
                            : activeTab === "BACKEND"
                            ? "Server & Data"
                            : "Infrastructure"}
                        </span>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "px-2.5 py-1 rounded-md text-[10px] font-medium tracking-wide uppercase border",
                        color
                      )}
                    >
                      {label}
                    </div>
                  </m.div>
                );
              })
            ) : (
              <m.div
                variants={itemVariants}
                className="text-zinc-500 text-center py-10"
              >
                No tools added to this stack yet.
              </m.div>
            )}
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
