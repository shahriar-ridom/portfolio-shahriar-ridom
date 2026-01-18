"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@prisma/client";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project & { slug: string };
  index: number;
  className?: string;
}

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch((e) => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/5",
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={`/project/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View project: ${project.title}`}
      >
        <span className="sr-only">View Project</span>
      </Link>

      <div className="absolute inset-0 pointer-events-none">
        {project.thumbnailUrl && (
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "object-cover transition-transform duration-700 group-hover:scale-105",
              isHovered && project.videoUrl ? "opacity-0" : "opacity-100",
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
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0",
            )}
          />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 pointer-events-none" />

      <div className="relative z-20 p-6 md:p-8">
        <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 z-30">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
              onClick={(e) => e.stopPropagation()}
              aria-label="View Source Code"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
              aria-label="View Live Project"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/5 text-[10px] uppercase tracking-wider font-medium text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
            {project.title}
          </h3>

          <p className="text-white/60 line-clamp-2 text-sm mb-4">
            {project.description}
          </p>

          <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
            Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
