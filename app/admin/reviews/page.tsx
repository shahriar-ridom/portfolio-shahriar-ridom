import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { getReviews } from "@/app/actions";
import { ReviewForm } from "./review-form";
import { DeleteReviewButton } from "./delete-review";

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <div className="space-y-8 p-8 max-w-6xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Reviews</h2>
        <p className="text-muted-foreground mt-1">
          Manage testimonials and reviews displayed on your portfolio.
        </p>
      </div>

      {/* Add Review Form */}
      <Card className="bg-black/50 border-white/10">
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-4">Add New Review</h3>
          <ReviewForm />
        </CardContent>
      </Card>

      {/* Reviews List */}
      <div className="grid gap-4">
        {reviews.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-lg">
            <p className="text-muted-foreground">No reviews yet.</p>
          </div>
        ) : (
          reviews.map((review) => (
            <Card
              key={review.id}
              className="bg-zinc-900 border-white/5 overflow-hidden group"
            >
              <CardContent className="flex items-start justify-between p-6">
                <div className="flex gap-4 items-start flex-1">
                  {/* Avatar */}
                  {review.avatarUrl ? (
                    <img
                      src={review.avatarUrl}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10 shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-base font-bold text-white/80 ring-2 ring-white/10 shrink-0">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-white">
                        {review.name}
                      </h3>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < review.rating
                                ? "fill-amber-400 text-amber-400"
                                : "fill-white/10 text-white/10"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400 mb-2">
                      {review.role}
                      {review.company && ` at ${review.company}`}
                    </p>
                    <p className="text-sm text-zinc-300 line-clamp-2">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>
                </div>

                <DeleteReviewButton id={review.id} />
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
