import { getProfile, getProjects, getSkills } from "@/app/actions";
import { Download, Globe, Code2, Zap } from "lucide-react";
import { SkillsTabs } from "./skill-tabs";
import { TechMarquee } from "./tech-marquee";
import Link from "next/link";

export async function AboutSection() {
  const [profile, skills, projects] = await Promise.all([
    getProfile().catch(() => null),
    getSkills().catch(() => []),
    getProjects().catch(() => []),
  ]);

  const projectCount: string = projects?.length.toString() || "0";

  const minimalSkills = skills?.map((s) => ({
    name: s.name,
    id: s.id,
    category: s.category,
    level: s.level,
    iconName: s.iconName,
  }));
  const marqueeSkills = skills?.map((s) => ({
    name: s.name,
    id: s.id,
    color: s.color,
    iconName: s.iconName,
    showInMarquee: s.showInMarquee,
  }));

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 w-full max-w-300 mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-mono font-medium tracking-wide text-emerald-500 shadow-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              SYSTEMS THINKING
            </span>
          </div>

          <h2 className="text-foreground tracking-tight text-[32px] md:text-5xl font-bold leading-[1.1] mb-8">
            Engineering simple solutions for{" "}
            <span className="text-primary">complex problems</span>.
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
            <p>
              I build accessible, pixel-perfect web applications with a focus on
              performance. My development philosophy is rooted in robust
              architectural patterns rather than just chasing the latest
              framework trends.
            </p>
            <p>
              Whether it&apos;s a complex dashboard or a high-conversion landing
              page, my goal is to ship code that is maintainable, type-safe, and
              scalable.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-8 my-8">
            <StatItem
              icon={<Code2 className="w-4 h-4 mb-2 text-primary" />}
              value={projectCount}
              label="Shipped Projects"
            />
            <StatItem
              icon={<Zap className="w-4 h-4 mb-2 text-blue-400" />}
              value="< 24h"
              label="Response Time"
            />
            <StatItem
              icon={<Globe className="w-4 h-4 mb-2 text-green-400" />}
              value="Remote"
              label="Available"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-start gap-4">
            {profile?.resumeLink ? (
              <Link
                href={profile.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center overflow-hidden rounded-full bg-primary h-12 px-8 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
              >
                <Download className="mr-2 w-5 h-5" />
                <span className="text-sm font-bold tracking-wide">
                  Download CV
                </span>
              </Link>
            ) : null}
            <Link
              href="https://github.com/shahriar-ridom"
              target="_blank"
              className="group flex items-center justify-center rounded-full bg-white/5 border border-white/10 h-12 px-8 text-white hover:bg-white/10 transition-all"
            >
              <span className="text-sm font-medium">View GitHub</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center relative">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-100 h-100 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

          <SkillsTabs skills={minimalSkills} />
        </div>
      </div>

      <div className="mt-20 opacity-60 hover:opacity-100 transition-opacity duration-500">
        <TechMarquee skills={marqueeSkills} />
      </div>
    </section>
  );
}

function StatItem({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col justify-center">
      {icon}
      <div className="text-2xl font-bold text-white mb-1 font-mono tracking-tighter">
        {value}
      </div>
      <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
        {label}
      </div>
    </div>
  );
}
