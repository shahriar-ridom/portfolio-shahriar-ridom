import { getReviews } from "@/app/actions";
import { ReviewCarousel } from "./review-carousel";
import { cacheLife, cacheTag } from "next/cache";

export async function ReviewSection() {
  "use cache";
  cacheLife("weeks");
  cacheTag("review-section");

  const reviews = await getReviews();

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section id="reviews" className="py-20 md:py-28 w-full overflow-hidden">
      <div className="text-center mb-14 md:mb-20 px-6 space-y-4 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-white via-white to-white/40">
          Kind Words
        </h2>
        <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
          What people I&apos;ve worked with have to say about the experience.
        </p>
      </div>

      <ReviewCarousel reviews={reviews} />
    </section>
  );
}
