import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-black text-white pb-20">
      {/* HERO SECTION SKELETON */}
      <div className="relative h-[60vh] w-full overflow-hidden bg-white/5 border-b border-white/10">
        <div className="absolute inset-0 container mx-auto px-6 flex flex-col justify-end pb-12">

          {/* Back Button */}
          <Skeleton className="h-6 w-32 mb-6 bg-white/10 rounded-full" />

          {/* Title */}
          <Skeleton className="h-12 md:h-16 w-3/4 max-w-2xl mb-4 bg-white/10" />

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-10 w-32 bg-white/10 rounded-md" />
            <Skeleton className="h-10 w-32 bg-white/10 rounded-md" />
          </div>
        </div>
      </div>

      {/* CONTENT GRID SKELETON */}
      <div className="container mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-8 space-y-12">

          {/* Overview Section */}
          <section className="space-y-4">
            <Skeleton className="h-8 w-48 bg-white/10 mb-4" /> {/* Header */}
            <div className="space-y-3">
              <Skeleton className="h-4 w-full bg-white/10" />
              <Skeleton className="h-4 w-full bg-white/10" />
              <Skeleton className="h-4 w-[90%] bg-white/10" />
              <Skeleton className="h-4 w-[95%] bg-white/10" />
              <Skeleton className="h-4 w-[80%] bg-white/10" />
            </div>
          </section>

          {/* Gallery Section */}
          <section>
            <Skeleton className="h-8 w-32 bg-white/10 mb-6" /> {/* Header */}
            {/* Gallery Placeholder */}
            <Skeleton className="aspect-video w-full rounded-2xl bg-white/5 border border-white/10" />
          </section>

        </div>

        {/* RIGHT COLUMN: Sidebar Info */}
        <div className="lg:col-span-4 space-y-8">

          {/* Tech Stack Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <Skeleton className="h-6 w-32 bg-white/10" /> {/* Header */}
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-6 w-16 rounded-full bg-white/10" />
              ))}
            </div>
          </div>

          {/* Project Details Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6">

            {/* Created At */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-20 bg-white/10" />
              <Skeleton className="h-5 w-32 bg-white/10" />
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-16 bg-white/10" />
              <Skeleton className="h-5 w-28 bg-white/10" />
            </div>

            {/* Client / Type */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-24 bg-white/10" />
              <Skeleton className="h-5 w-36 bg-white/10" />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
