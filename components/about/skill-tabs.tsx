"use client";

import { useState, useMemo } from "react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import type { Skill } from "@prisma/client";

interface SkillsTabsProps {
  skills: Skill[];
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      when: "beforeChildren", // Ensures container appears before items start popping in
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
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
    () => skills.filter((s) => s.category === activeTab),
    [skills, activeTab]
  );

  return (
    <div className="relative bg-black/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 shadow-2xl h-full">
      {/* Tabs */}
      <div className="flex mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex items-center rounded-full bg-[#1A1A1A] p-1 border border-white/5">
          {(["FRONTEND", "BACKEND", "DEVOPS"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all capitalize relative",
                activeTab === tab
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-white"
              )}
            >
              {activeTab === tab && (
                <m.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.toLowerCase()}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6 min-h-[400px]">
        <AnimatePresence mode="wait">
          <m.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            exit="exit"
            className="space-y-6"
          >
            {currentSkills.map((skill) => {
              const Icon = getIcon(skill.iconName);
              return (
                <m.div key={skill.id} variants={itemVariants} className="group">
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
                    <m.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-primary rounded-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
                    </m.div>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
