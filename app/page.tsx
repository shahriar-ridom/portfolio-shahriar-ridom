import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { AboutSection } from "@/components/about/stack";
import { ProjectGrid } from "@/components/project-grid";
import { Contact } from "@/components/contact/contact";

const ProjectLoader = () => (
  <div className="flex items-center justify-center py-20 text-white/50">
    <Loader2 className="w-6 h-6 animate-spin" />
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]">
      <Navbar />
      <Hero />
      <AboutSection />
      <Suspense fallback={<ProjectLoader />}>
        <ProjectGrid />
      </Suspense>
      <Contact />
    </main>
  );
}
