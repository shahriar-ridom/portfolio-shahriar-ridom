import { getProjects } from "@/app/actions";
import { ProjectCard } from "@/components/project-card";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
export const dynamic = "force-dyanmic";

export async function ProjectGrid() {
  // const projects = [
  //   {
  //     slug: "project-alpha",
  //     id: "proj_01",
  //     title: "Project Alpha",
  //     description:
  //       "A cutting-edge web application built with modern technologies.",
  //     thumbnailUrl: "/placeholder.svg",
  //     videoUrl: "",
  //     liveUrl: "https://example.com",
  //     repoUrl: "https://github.com",
  //     tags: ["React", "TypeScript", "Tailwind"],
  //     featured: true,
  //     order: 1,
  //     createdAt: new Date("2023-12-21"),
  //     updatedAt: new Date("2023-12-21"),
  //   },
  //   {
  //     slug: "project-beta",
  //     id: "proj_02",
  //     title: "Project Beta",
  //     description: "An innovative mobile-first design system.",
  //     thumbnailUrl: "/placeholder.svg",
  //     videoUrl: "",
  //     liveUrl: "https://example.com",
  //     repoUrl: "https://github.com",
  //     tags: ["Next.js", "Framer Motion"],
  //     featured: true,
  //     order: 2,
  //     createdAt: new Date("2024-01-15"),
  //     updatedAt: new Date("2024-01-20"),
  //   },
  // ];

  const projects = await getProjects();

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-10 w-full max-w-[1200px] mx-auto"
    >
      <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
            Selected Works
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
            Exploring the intersection of design and engineering. Building
            digital experiences in the Deep Space.
          </p>
        </div>

        <div className="hidden md:flex flex-col items-end gap-2 text-white/30">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]">
        <Suspense fallback={<Loader2 className="h-4 w-4 animate-spin" />}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Suspense>
      </div>
    </section>
  );
}
