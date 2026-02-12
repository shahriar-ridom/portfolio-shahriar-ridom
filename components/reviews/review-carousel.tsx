"use client";

import { useState, useEffect } from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReviewCard } from "./review-card";
import type { Review } from "@prisma/client";

interface ReviewCarouselProps {
  reviews: Review[];
  interval?: number;
}

export function ReviewCarousel({
  reviews,
  interval = 5000,
}: ReviewCarouselProps) {
  const [active, setActive] = useState(0);

  // Auto-advance — runs forever in an infinite loop
  useEffect(() => {
    if (reviews.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, reviews.length]);

  if (reviews.length === 0) return null;

  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      {/* Carousel Container */}
      <div className="relative w-full min-h-[320px] md:min-h-[280px] flex items-center justify-center">
        {reviews.map((review, index) => (
          <ReviewCard
            key={review.id}
            review={review}
            isActive={index === active}
          />
        ))}
      </div>

      {/* Dots */}
      {reviews.length > 1 && (
        <div
          className="flex items-center gap-2 mt-8"
          role="tablist"
          aria-label="Review navigation"
        >
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              role="tab"
              aria-selected={index === active}
              aria-label={`Go to review ${index + 1}`}
              className={cn(
                "rounded-full transition-all duration-500",
                index === active
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40",
              )}
            />
          ))}
        </div>
      )}
    </m.div>
  );
}
