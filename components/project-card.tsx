"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@prisma/client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface ProjectCardProps {
  project: Project & { slug: string };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      videoRef.current.currentTime = 0;
    }
  };

  const getSizeClasses = (idx: number) => {
    const pattern = idx % 4;
    switch (pattern) {
      case 0:
        return "md:col-span-2 md:row-span-2";
      case 1:
        return "md:col-span-1 md:row-span-2";
      case 2:
        return "md:col-span-1 md:row-span-1";
      case 3:
        return "md:col-span-2 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/10 hover:z-10",
        getSizeClasses(index),
        "min-h-[280px]"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {project.thumbnailUrl && (
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className={cn(
              "object-cover transition-transform duration-700 group-hover:scale-105",
              isHovered && project.videoUrl ? "opacity-0" : "opacity-100"
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
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 pointer-events-none" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-20">
        <div className="flex justify-between items-start">
          <div className="flex gap-2 flex-wrap">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-xs font-medium text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
                aria-label="View Source Code"
              >
                <Github className="w-4 h-4" />
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:text-white transition-colors"
                aria-label="View Live Project"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-start">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-white/70 line-clamp-2 text-sm md:text-base mb-4">
            {project.description}
          </p>
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition-all group/btn"
          >
            <Link href={`/project/${project.slug}`}>
              Read More
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
