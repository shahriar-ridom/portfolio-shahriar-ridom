import { getProfile, getProjects, getSkills } from "@/app/actions";
import { Download, Globe, Code2, Terminal } from "lucide-react";
import { SkillsTabs } from "./skill-tabs";
import { TechMarquee } from "./tech-marquee";
export async function AboutSection() {
  const [profile, skills, projects] = await Promise.all([
    getProfile().catch(() => null),
    getSkills().catch(() => []),
    getProjects().catch(() => []),
  ]);

  const projectCount: string = projects?.length.toString() || "0";

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 w-full max-w-[1200px] mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-mono font-medium tracking-wide text-emerald-500 shadow-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              OPEN TO WORK
            </span>
          </div>

          <h2 className="text-foreground tracking-tight text-[32px] md:text-5xl font-bold leading-[1.1] mb-8">
            Engineering simple solutions for{" "}
            <span className="text-primary">complex problems</span>.
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
            <p>
              I am a developer who believes in clean code and user-centric
              design. Currently transitioning from &quot;learning&quot; to
              &quot;building,&quot; I focus on understanding the fundamentals of
              the web rather than just chasing frameworks.
            </p>
            <p>
              My goal is simple: to build applications that are fast,
              accessible, and maintainable.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-8 my-8">
            <StatItem
              icon={<Code2 className="w-4 h-4 mb-2 text-primary" />}
              value={projectCount}
              label="Core Projects"
            />
            <StatItem
              icon={<Terminal className="w-4 h-4 mb-2 text-blue-400" />}
              value="100%"
              label="Commitment"
            />
            <StatItem
              icon={<Globe className="w-4 h-4 mb-2 text-green-400" />}
              value="Remote"
              label="Available"
            />
          </div>

          <div className="flex justify-start gap-4">
            {profile?.resumeLink ? (
              <a
                href={profile.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center overflow-hidden rounded-full bg-primary h-12 px-8 text-primary-foreground shadow-[0_0_20px_-5px_#3c83f6] transition-all hover:bg-blue-600 hover:text-white hover:scale-105 active:scale-95"
              >
                <Download className="mr-2 w-5 h-5" />
                <span className="text-sm font-bold tracking-wide">
                  Download CV
                </span>
              </a>
            ) : (
              <a
                href="https://github.com/shahriar-ridom"
                target="_blank"
                className="group flex items-center justify-center rounded-full bg-white/10 h-12 px-8 text-white hover:bg-white/20 transition-all"
              >
                <span className="text-sm font-medium">View GitHub</span>
              </a>
            )}
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center relative">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

          <SkillsTabs skills={skills} />
        </div>
      </div>

      <div className="mt-20 opacity-60 hover:opacity-100 transition-opacity duration-500">
        <TechMarquee skills={skills} />
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
