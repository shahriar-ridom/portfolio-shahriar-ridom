"use client";

import { Star, Quote } from "lucide-react";
import type { Review } from "@prisma/client";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  review: Review;
  isActive: boolean;
}

export function ReviewCard({ review, isActive }: ReviewCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center text-center max-w-2xl mx-auto px-6 transition-all duration-700",
        isActive
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95 absolute inset-0 pointer-events-none",
      )}
      aria-hidden={!isActive}
    >
      {/* Quote Icon */}
      <div className="text-white/[0.06] mb-6">
        <Quote className="w-12 h-12 md:w-14 md:h-14" />
      </div>

      {/* Content */}
      <blockquote className="text-white/80 text-lg md:text-xl lg:text-2xl leading-relaxed font-light mb-8">
        &ldquo;{review.content}&rdquo;
      </blockquote>

      {/* Rating */}
      <div className="flex gap-1.5 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < review.rating
                ? "fill-amber-400 text-amber-400"
                : "fill-white/10 text-white/10",
            )}
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex flex-col items-center gap-3">
        {review.avatarUrl ? (
          <img
            src={review.avatarUrl}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-base font-bold text-white/80 ring-2 ring-white/10">
            {review.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-white">{review.name}</p>
          <p className="text-xs text-white/50">
            {review.role}
            {review.company && ` at ${review.company}`}
          </p>
        </div>
      </div>
    </div>
  );
}
