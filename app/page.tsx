import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { AboutSection } from "@/components/about/stack";
import { Contact } from "@/components/contact/contact";
import { Noise } from "@/components/ui/noise";
import { HeroGlow } from "@/components/ui/hero-glow";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Noise />
      <HeroGlow />
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectGrid />
      <Contact />
    </main>
  );
}
