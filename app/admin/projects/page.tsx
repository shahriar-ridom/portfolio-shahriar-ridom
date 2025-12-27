import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Pencil, Calendar } from "lucide-react";
import { DeleteProjectButton } from "./delete-button";
import { getProjects } from "@/app/actions";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-8 p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground mt-1">
            Manage and organize your portfolio work.
          </p>
        </div>
        <Button asChild className="bg-white text-black hover:bg-gray-200">
          <Link href="/admin/projects/new">
            <Plus className="mr-2 h-4 w-4" /> Add Project
          </Link>
        </Button>
      </div>

      {/* Grid */}
      <div className="grid gap-6">
        {projects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-lg">
            <p className="text-muted-foreground">No projects found.</p>
            <Button variant="link" asChild className="mt-2 text-white">
              <Link href="/admin/projects/new">Create your first project</Link>
            </Button>
          </div>
        ) : (
          projects.map((project) => (
            <Card
              key={project.id}
              className="bg-zinc-900 border-white/5 overflow-hidden group"
            >
              <CardContent className="flex items-center justify-between p-6">
                {/* Left Side: Info */}
                <div className="flex gap-6 items-center">
                  {/* Thumbnail Preview */}
                  <div className="h-16 w-24 bg-zinc-800 rounded-md overflow-hidden relative shrink-0">
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className="h-full w-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-3 mt-2 text-sm text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.createdAt.toLocaleDateString()}
                      </span>
                      <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                      <p className="line-clamp-1 max-w-md">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider font-medium bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Actions */}
                <div className="flex items-center gap-3">
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <Link href={`/admin/projects/${project.id}`}>
                      <Pencil className="h-4 w-4" />
                    </Link>
                  </Button>

                  <DeleteProjectButton id={project.id} />
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
