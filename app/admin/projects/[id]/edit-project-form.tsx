"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Loader2, Eye, Pencil } from "lucide-react";
import { updateProject, type ActionState } from "@/app/actions";
import { ImageUpload } from "@/components/ui/image-upload";
import { MultiImageUpload } from "@/components/ui/multi-image-upload";
import type { Project } from "@prisma/client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const initialState: ActionState = {
  success: false,
  message: "",
  errors: {},
};

interface EditProjectFormProps {
  project: Project;
}

export function EditProjectForm({ project }: EditProjectFormProps) {
  const updateProjectWithId = updateProject.bind(null, project.id);
  const [state, formAction, isPending] = useActionState(
    updateProjectWithId,
    initialState,
  );

  const [description, setDescription] = useState(project.description);
  const [previewMode, setPreviewMode] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/projects">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h2 className="text-2xl font-bold">Edit Project</h2>
      </div>

      <Card className="bg-black/50 border-white/10">
        <CardContent className="pt-6">
          <form action={formAction} className="space-y-6">
            {!state.success && state.message && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-sm">
                {state.message}
              </div>
            )}
            {state.success && state.message && (
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded text-green-500 text-sm">
                {state.message}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                name="title"
                defaultValue={project.title}
                placeholder="e.g. E-Commerce Dashboard"
                required
              />
              {state.errors?.title && (
                <p className="text-red-500 text-xs">{state.errors.title[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                name="slug"
                defaultValue={project.slug}
                placeholder="Leave empty to auto-generate"
              />
              {state.errors?.slug && (
                <p className="text-red-500 text-xs">{state.errors.slug[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="description">Description (Markdown)</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setPreviewMode(!previewMode)}
                  className="text-xs gap-1.5"
                >
                  {previewMode ? (
                    <>
                      <Pencil className="w-3 h-3" /> Edit
                    </>
                  ) : (
                    <>
                      <Eye className="w-3 h-3" /> Preview
                    </>
                  )}
                </Button>
              </div>

              {previewMode ? (
                <div className="min-h-[120px] rounded-md border border-input bg-transparent px-3 py-2 text-sm prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {description}
                  </ReactMarkdown>
                </div>
              ) : (
                <textarea
                  id="description"
                  name="description"
                  rows={6}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                  required
                />
              )}
              {/* Hidden input to ensure form data is sent even in preview mode */}
              {previewMode && (
                <input type="hidden" name="description" value={description} />
              )}
              {state.errors?.description && (
                <p className="text-red-500 text-xs">
                  {state.errors.description[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Thumbnail</Label>
              <ImageUpload
                name="thumbnailUrl"
                defaultValue={project.thumbnailUrl}
                folder="projects"
                label="Upload project thumbnail"
              />
              {state.errors?.thumbnailUrl && (
                <p className="text-red-500 text-xs">
                  {state.errors.thumbnailUrl[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Screenshots (optional)</Label>
              <MultiImageUpload
                name="screenshots"
                defaultValue={project.screenshots}
                folder="projects/screenshots"
                label="Upload project screenshots"
                max={10}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="liveUrl">Live URL</Label>
                <Input
                  id="liveUrl"
                  name="liveUrl"
                  defaultValue={project.liveUrl || ""}
                  placeholder="https://..."
                />
                {state.errors?.liveUrl && (
                  <p className="text-red-500 text-xs">
                    {state.errors.liveUrl[0]}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="repoUrl">Repo URL</Label>
                <Input
                  id="repoUrl"
                  name="repoUrl"
                  defaultValue={project.repoUrl || ""}
                  placeholder="https://github.com/..."
                />
                {state.errors?.repoUrl && (
                  <p className="text-red-500 text-xs">
                    {state.errors.repoUrl[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                name="tags"
                defaultValue={project.tags.join(", ")}
                placeholder="React, Next.js, TypeScript"
              />
              {state.errors?.tags && (
                <p className="text-red-500 text-xs">{state.errors.tags[0]}</p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                defaultChecked={project.featured}
                className="rounded border-white/20"
              />
              <Label htmlFor="featured">Featured project</Label>
            </div>

            <Button type="submit" disabled={isPending} className="w-full">
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
