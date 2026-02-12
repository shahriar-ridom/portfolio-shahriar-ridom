"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteReview } from "@/app/actions";

export function DeleteReviewButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this review?")) return;

    startTransition(async () => {
      try {
        const result = await deleteReview(id);
        if (result.success) {
          router.refresh();
        } else {
          alert("Failed to delete review");
        }
      } catch (error) {
        console.error("Error deleting:", error);
      }
    });
  };

  return (
    <Button
      variant="destructive"
      size="icon"
      onClick={handleDelete}
      disabled={isPending}
      className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20 border"
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Trash2 className="h-4 w-4" />
      )}
    </Button>
  );
}
