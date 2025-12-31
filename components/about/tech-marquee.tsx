"use client";

import { getIcon } from "@/lib/icons";
import type { Skill } from "@prisma/client";

export function TechMarquee({ skills }: { skills: Skill[] }) {
  const marqueeSkills = skills.filter((s) => s.showInMarquee);

  if (!marqueeSkills.length) return null;

  return (
    <section className="mt-20 lg:mt-32 w-full relative overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
          Technologies & Tools
        </h3>
      </div>

      <div className="relative w-full py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-scroll gap-16 items-center hover:[animation-play-state:paused] will-change-transform">
          <ul className="flex items-center gap-16">
            {marqueeSkills.map((tech, i) => (
              <TechItem key={`original-${tech.id}-${i}`} tech={tech} />
            ))}
          </ul>

          <ul className="flex items-center gap-16" aria-hidden="true">
            {marqueeSkills.map((tech, i) => (
              <TechItem key={`duplicate-${tech.id}-${i}`} tech={tech} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TechItem({ tech }: { tech: Skill }) {
  const Icon = getIcon(tech.iconName);

  return (
    <li className="group relative flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-110">
      <div className="relative z-10 p-2 rounded-xl bg-transparent transition-colors">
        <Icon
          className="w-10 h-10 transition-all duration-300 grayscale group-hover:grayscale-0 filter"
          style={{ color: tech.color || "#ffffff" }}
        />
      </div>

      <span className="text-xs font-medium text-muted-foreground group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/50 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
        {tech.name}
      </span>
    </li>
  );
}
