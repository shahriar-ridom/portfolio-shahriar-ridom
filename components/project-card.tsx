"use client";

import { useState, useRef } from "react";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "@prisma/client";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project & { slug: string };
  index: number;
  className?: string;
  sizes?: string;
}

export function ProjectCard({
  project,
  index,
  className,
  sizes,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isPriority = index < 2;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-neutral-950 border border-white/[0.06] transition-all duration-500 hover:border-white/[0.12] hover:shadow-2xl hover:shadow-primary/5",
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="article"
      aria-label={`Project: ${project.title}`}
    >
      {/* Media Layer */}
      <div className="absolute inset-0 pointer-events-none bg-neutral-900">
        {project.thumbnailUrl && (
          <Image
            src={project.thumbnailUrl}
            alt={`Screenshot of ${project.title}`}
            priority={isPriority}
            fill
            sizes={
              sizes ||
              "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            className={cn(
              "object-cover transition-all duration-700 group-hover:scale-105",
              isHovered && isVideoLoaded ? "opacity-0" : "opacity-100",
            )}
          />
        )}

        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            loop
            muted
            playsInline
            preload="none"
            onLoadedData={() => setIsVideoLoaded(true)}
            aria-hidden="true"
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              isHovered && isVideoLoaded ? "opacity-100" : "opacity-0",
            )}
          />
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 opacity-90 pointer-events-none" />

      {/* Quick Action Links */}
      <div
        className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 z-30"
        role="toolbar"
        aria-label="Project links"
      >
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:bg-white hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
            onClick={(e) => e.stopPropagation()}
            aria-label={`View source code for ${project.title}`}
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:bg-primary hover:text-primary-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
            onClick={(e) => e.stopPropagation()}
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-30">
          <span className="px-2.5 py-1 rounded-lg bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-wider font-bold backdrop-blur-sm">
            Featured
          </span>
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 p-5 md:p-7 flex flex-col gap-3">
        {/* Tags */}
        <div
          className="flex flex-wrap gap-1.5"
          role="list"
          aria-label="Technologies used"
        >
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              role="listitem"
              className="px-2 py-0.5 rounded-md bg-white/[0.08] text-[10px] uppercase tracking-wider font-medium text-white/70"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-md bg-white/[0.05] text-[10px] uppercase tracking-wider font-medium text-white/40">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 leading-tight tracking-tight">
            {project.title}
          </h3>

          <p className="text-white/50 line-clamp-2 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* CTA Link */}
        <Link
          href={`/project/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 mt-1 focus:outline-none focus:text-primary"
          aria-label={`View details for ${project.title}`}
        >
          View Details
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </m.article>
  );
}
