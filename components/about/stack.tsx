import { getProfile, getSkills } from "@/app/actions";
import { Download } from "lucide-react";
import { SkillsTabs } from "./skill-tabs";
import { TechMarquee } from "./tech-marquee";

export async function AboutSection() {
  const [profile, skills] = await Promise.all([getProfile(), getSkills()]);

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 w-full max-w-[1200px] mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono font-medium tracking-wide text-primary shadow-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              ABOUT & SKILLS
            </span>
          </div>

          <h2 className="text-foreground tracking-tight text-[32px] md:text-5xl font-bold leading-[1.1] mb-8">
            Building digital products with{" "}
            <span className="text-primary">purpose</span>.
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
            <p className="whitespace-pre-line">
              I am a full-stack developer passionate about creating seamless
              digital experiences. With a background in design and engineering,
              I bridge the gap between aesthetics and functionality.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-8 my-8">
            <StatItem number="5+" label="Years Exp." />
            <StatItem number="40+" label="Projects" />
            <StatItem number="∞" label="Coffees" />
          </div>

          <div className="flex justify-start">
            {profile?.resumeLink ? (
              <a
                href={profile.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center overflow-hidden rounded-full bg-primary h-12 px-8 text-primary-foreground shadow-[0_0_20px_-5px_#3c83f6] transition-all hover:bg-blue-600 hover:text-white hover:scale-105 active:scale-95"
              >
                <Download className="mr-2 w-5 h-5" />
                <span className="text-sm font-bold tracking-wide">
                  Download Resume
                </span>
              </a>
            ) : (
              <button
                disabled
                className="bg-white/5 text-white/50 h-12 px-8 rounded-full cursor-not-allowed"
              >
                Resume Unavailable
              </button>
            )}
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center relative">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
          <SkillsTabs skills={skills} />
        </div>
      </div>
      <TechMarquee skills={skills} />
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-white mb-1 font-mono">
        {number}
      </div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
