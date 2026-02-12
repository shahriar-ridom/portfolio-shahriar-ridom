"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { ImageUpload } from "@/components/ui/image-upload";
import { createReview, type ActionState } from "@/app/actions";

const initialState: ActionState = {
  success: false,
  message: "",
  errors: {},
};

export function ReviewForm() {
  const [state, formAction, isPending] = useActionState(
    createReview,
    initialState,
  );
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      router.refresh();
    }
  }, [state, router]);

  return (
    <form action={formAction} className="space-y-4">
      {!state.success && state.message && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-sm">
          {state.message}
        </div>
      )}
      {state.success && state.message && (
        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded text-green-500 text-sm">
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="John Doe" required />
          {state.errors?.name && (
            <p className="text-red-500 text-xs">{state.errors.name[0]}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Input id="role" name="role" placeholder="CEO" required />
          {state.errors?.role && (
            <p className="text-red-500 text-xs">{state.errors.role[0]}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company">Company (optional)</Label>
          <Input id="company" name="company" placeholder="Acme Inc." />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rating">Rating (1-5)</Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            min={1}
            max={5}
            defaultValue={5}
          />
          {state.errors?.rating && (
            <p className="text-red-500 text-xs">{state.errors.rating[0]}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Avatar (optional)</Label>
        <ImageUpload
          name="avatarUrl"
          folder="avatars"
          label="Upload avatar"
          rounded
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Review Content</Label>
        <textarea
          id="content"
          name="content"
          rows={4}
          className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Write the review content..."
          required
        />
        {state.errors?.content && (
          <p className="text-red-500 text-xs">{state.errors.content[0]}</p>
        )}
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isPending ? "Adding..." : "Add Review"}
      </Button>
    </form>
  );
}
