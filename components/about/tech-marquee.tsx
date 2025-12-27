"use client";

import { getIcon } from "@/lib/icons";
import type { Skill } from "@prisma/client";

export function TechMarquee({ skills }: { skills: Skill[] }) {
  // Only show skills marked for marquee
  const marqueeSkills = skills.filter(s => s.showInMarquee);
  // Duplicate for infinite scroll effect
  const displaySkills = [...marqueeSkills, ...marqueeSkills];

  return (
    <div className="mt-20 lg:mt-32 w-full relative">
      <div className="text-center mb-6">
        <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
          Technologies & Tools
        </p>
      </div>
      <div className="relative w-full overflow-hidden py-10 mask-linear-fade">
        <div className="flex w-max animate-scroll gap-16 items-center hover:[animation-play-state:paused]">
          {displaySkills.map((tech, i) => {
            const Icon = getIcon(tech.iconName);
            return (
              <div
                key={`${tech.id}-${i}`}
                className="group relative flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110"
              >
                <Icon
                  className="w-10 h-10 transition-colors duration-300"
                  style={{ color: tech.color || "#ffffff" }}
                />
                <span className="text-xs text-muted-foreground group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
