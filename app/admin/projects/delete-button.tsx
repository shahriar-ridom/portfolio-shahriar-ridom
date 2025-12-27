"use client";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteProject } from "@/app/actions";

export function DeleteProjectButton({ id }: { id: string }) {
  // useTransition handles the loading state automatically without needing useState
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    startTransition(async () => {
      try {
        const result = await deleteProject(id);
        if (result && !("error" in result)) {
          // This magically re-fetches the Server Component data without a page reload
          router.refresh();
        } else {
          alert("Failed to delete project");
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
