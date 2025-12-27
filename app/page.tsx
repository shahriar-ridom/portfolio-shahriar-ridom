import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { Stack } from "@/components/stack";
import { Contact } from "@/components/contact";
import { Noise } from "@/components/ui/noise";
import { HeroGlow } from "@/components/ui/hero-glow";
import { prisma } from "@/lib/prisma";

async function getProfile() {
  try {
    return await prisma.profile.findFirst();
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    return null;
  }
}

export default async function Home() {
  const profile = await getProfile();

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Noise />
      <HeroGlow />
      <Navbar />
      <Hero profile={profile} />
      <Stack />
      <ProjectGrid />
      <Contact />
    </main>
  );
}
