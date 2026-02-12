import { getProjects } from "@/app/actions";
import { ProjectCard } from "@/components/project-card";
import { cacheLife, cacheTag } from "next/cache";

/**
 * Repeating 6-item bento pattern:
 * Row 1: [wide] [normal]
 * Row 2: [normal] [wide]
 * Row 3: [normal] [normal] [normal]
 * Then repeats.
 */
function getBentoClass(index: number) {
  const pos = index % 6;
  switch (pos) {
    case 0:
      return "md:col-span-2 md:row-span-2"; // Hero — large
    case 1:
      return "md:col-span-1 md:row-span-2"; // Tall right
    case 2:
      return "md:col-span-1 md:row-span-1"; // Normal
    case 3:
      return "md:col-span-2 md:row-span-1"; // Wide
    case 4:
      return "md:col-span-1 md:row-span-1"; // Normal
    case 5:
      return "md:col-span-1 md:row-span-1"; // Normal
    default:
      return "md:col-span-1 md:row-span-1";
  }
}

export async function ProjectGrid() {
  "use cache";
  cacheLife("weeks");
  cacheTag("project-grid");

  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-10 w-full max-w-7xl mx-auto"
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[260px] grid-flow-dense">
        {projects.map((project, index) => {
          const spanClass = getBentoClass(index);

          const isLarge =
            spanClass.includes("col-span-2") ||
            spanClass.includes("row-span-2");
          const sizes = isLarge
            ? "(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px";

          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              className={spanClass}
              sizes={sizes}
            />
          );
        })}
      </div>
    </section>
  );
}
