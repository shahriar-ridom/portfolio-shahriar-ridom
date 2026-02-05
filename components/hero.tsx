import { getProfile } from "@/app/actions";
import { HeroUi } from "./ui/hero-ui";
import { cacheLife, cacheTag } from "next/cache";
import { Suspense } from "react";

//Hero Skeleton for loading state
export function HeroUiSkeleton() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] w-full max-w-300 mx-auto gap-8 lg:gap-16 px-6 md:px-10 pt-24 md:pt-0">
      {/* Image Skeleton */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-[55vh] relative rounded-3xl overflow-hidden border border-white/5 bg-white/5 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />

        {/* Available Badge Skeleton */}
        <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="h-3 w-24 bg-white/20 rounded" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left space-y-6 md:pl-4">
        {/* Label Skeleton */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-px bg-white/20" />
          <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
        </div>

        {/* Name Skeleton */}
        <div className="space-y-2">
          <div className="h-16 md:h-20 w-full max-w-md bg-white/10 rounded animate-pulse" />
          <div className="h-16 md:h-20 w-3/4 bg-white/10 rounded animate-pulse" />
        </div>

        {/* Title Skeleton */}
        <div className="h-8 md:h-10 w-64 bg-white/10 rounded animate-pulse" />

        {/* Bio Skeleton */}
        <div className="max-w-md space-y-3">
          <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-4/6 bg-white/10 rounded animate-pulse" />
        </div>

        {/* Buttons Skeleton */}
        <div className="flex flex-row gap-3 pt-4">
          <div className="h-12 w-36 md:w-44 bg-white/10 rounded-full animate-pulse" />
          <div className="h-12 w-32 md:w-40 bg-white/10 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

//Hero Component with data fetching and Suspense
export async function Hero() {
  "use cache";
  cacheLife("weeks");
  cacheTag("hero-data");

  const profile = await getProfile();
  return (
    <Suspense fallback={<HeroUiSkeleton />}>
      <HeroUi profile={profile} />
    </Suspense>
  );
}
