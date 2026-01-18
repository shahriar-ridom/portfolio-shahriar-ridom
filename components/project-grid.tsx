import { getProjects } from "@/app/actions";
import { ProjectCard } from "@/components/project-card";

export const dynamic = "force-dynamic";

function getBentoClass(index: number) {
  if (index === 0) {
    return "md:col-span-2 md:row-span-2";
  }

  if (index === 3 || index === 6) {
    return "md:col-span-2 md:row-span-1";
  }

  return "md:col-span-1 md:row-span-1";
}

export async function ProjectGrid() {
  const projects = await getProjects();

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-10 w-full max-w-300 mx-auto"
    >
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-6 max-w-2xl">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-white via-white to-white/40">
            Selected Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg">
            Exploring the intersection of design and engineering. Building
            digital experiences that scale.
          </p>
        </div>

        <div className="hidden md:flex flex-col items-end gap-3 text-white/20">
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono">
            Scroll
          </span>
          <div className="h-16 w-px bg-linear-to-b from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 auto-rows-[280px] grid-flow-dense">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            className={getBentoClass(index)}
          />
        ))}
      </div>
    </section>
  );
}
