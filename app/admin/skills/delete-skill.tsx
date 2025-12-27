"use client";

import { useTransition } from "react";
import { deleteSkill } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";

export function DeleteSkill({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!confirm("Delete this skill?")) return;

    startTransition(async () => {
      await deleteSkill(id);
    });
  };

  return (
    <Button
      variant="destructive"
      size="icon"
      disabled={isPending}
      onClick={handleDelete}
      className="h-8 w-8"
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Trash2 className="h-4 w-4" />
      )}
    </Button>
  );
}
