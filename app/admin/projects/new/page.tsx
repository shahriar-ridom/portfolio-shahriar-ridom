"use client";

import { useActionState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Loader2 } from "lucide-react";
import { createProject } from "@/app/actions";

// Initial state for the reducer
const initialState = {
  success: false,
  message: "",
  errors: {},
};

export default function NewProjectPage() {
  // Hook the server action
  const [state, formAction, isPending] = useActionState(
    createProject,
    initialState
  );

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/projects">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h2 className="text-2xl font-bold">New Project</h2>
      </div>

      <Card className="bg-black/50 border-white/10">
        <CardContent className="pt-6">
          {/* Bind the formAction here */}
          <form action={formAction} className="space-y-6">
            {!state.success && state.message && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-sm">
                {state.message}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g. E-Commerce Dashboard"
                required // Client-side check
              />
              {/* Display Server-Side Validation Errors */}
              {state.errors?.title && (
                <p className="text-red-500 text-xs">{state.errors.title[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                name="slug"
                placeholder="Leave empty to auto-generate"
              />
              {state.errors?.slug && (
                <p className="text-red-500 text-xs">{state.errors.slug[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              {state.errors?.description && (
                <p className="text-red-500 text-xs">
                  {state.errors.description[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnailUrl">Thumbnail URL</Label>
              <Input
                id="thumbnailUrl"
                name="thumbnailUrl"
                defaultValue="https://placehold.co/600x400"
              />
              {state.errors?.thumbnailUrl && (
                <p className="text-red-500 text-xs">
                  {state.errors.thumbnailUrl[0]}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="liveUrl">Live URL</Label>
                <Input id="liveUrl" name="liveUrl" placeholder="https://..." />
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
                placeholder="React, Next.js, TypeScript"
              />
              {state.errors?.tags && (
                <p className="text-red-500 text-xs">{state.errors.tags[0]}</p>
              )}
            </div>

            {/* Submit Button with Pending State */}
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isPending ? "Creating..." : "Create Project"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
