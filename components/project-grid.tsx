import { prisma } from "@/lib/prisma";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@prisma/client";

async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { order: "asc" },
    });
    return projects;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

// Temporary mock data for display until DB is connected
const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-Commerce Analytics Dashboard",
    slug: "ecommerce-dashboard",
    description:
      "A comprehensive SaaS platform for real-time sales tracking, inventory management, and predictive AI insights.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    videoUrl: null,
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    tags: ["React", "Next.js", "Tailwind"],
    featured: true,
    order: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "NeoBank Mobile App",
    slug: "neobank-app",
    description:
      "Secure, biometric-enabled fintech solution for modern banking needs.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    videoUrl: null,
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    tags: ["React Native", "TypeScript"],
    featured: true,
    order: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "AI Image Generator",
    slug: "ai-image-gen",
    description:
      "OpenAI API Integration for generating creative assets on the fly.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1530&auto=format&fit=crop",
    videoUrl: null,
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    tags: ["OpenAI", "Node.js"],
    featured: false,
    order: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    title: "Crypto Portfolio Tracker",
    slug: "crypto-tracker",
    description:
      "Real-time cryptocurrency tracking with advanced charting and portfolio management.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2832&auto=format&fit=crop",
    videoUrl: null,
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    tags: ["Web3", "Solidity"],
    featured: false,
    order: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export async function ProjectGrid() {
  const projects = await getProjects();

  if (projects.length === 0) {
    return null;
  }

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
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
