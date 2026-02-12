import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import prisma from "@/lib/prisma";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/app/actions";

// Define the shape of params
interface PageProps {
  params: Promise<{ slug: string }>;
}

// GENERATE METADATA
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await prisma.project.findUnique({
    where: { slug },
    select: { title: true, description: true },
  });

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Shahriar Ridom`,
    description: project.description,
  };
}

// THE PAGE COMPONENT
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pb-20">
      <div className="relative h-[60vh] w-full overflow-hidden">
        {project.thumbnailUrl && (
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className="object-cover opacity-50"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute inset-0 container mx-auto px-6 flex flex-col justify-end pb-12">
          <Link
            href="/#projects"
            className="mb-6 inline-flex items-center text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4">
            {project.repoUrl && (
              <Button
                asChild
                variant="outline"
                className="gap-2 bg-white/5 border-white/10 hover:bg-white/20"
              >
                <Link href={project.repoUrl} target="_blank">
                  <Github className="w-4 h-4" /> View Code
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild className="gap-2">
                <Link href={project.liveUrl} target="_blank">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="container mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-8 space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              Project Overview
            </h2>
            <div className="max-w-none text-white/70">
              <MarkdownRenderer content={project.description} />
            </div>
          </section>

          {/* Media / Screenshot Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.screenshots.map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 group cursor-pointer"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT COLUMN: Sidebar Info */}
        <div className="lg:col-span-4 space-y-8">
          {/* Tech Stack */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" /> Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <div>
              <h4 className="text-sm font-medium text-white/50 mb-1">
                Created At
              </h4>
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(project.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/50 mb-1">Role</h4>
              <p>Full Stack Developer</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/50 mb-1">
                Client / Type
              </h4>
              <p>Personal Project</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
