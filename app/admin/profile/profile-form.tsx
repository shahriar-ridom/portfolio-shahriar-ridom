"use client";

import { useActionState, useEffect } from "react";
import { updateProfile } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { ImageUpload } from "@/components/ui/image-upload";
import type { Profile } from "@prisma/client";
import { toast } from "sonner";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

export function ProfileForm({ profile }: { profile: Profile | null }) {
  const [state, formAction, isPending] = useActionState(
    updateProfile,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
    } else if (!state.success && state.message) {
      toast.error(state.message);
    }
  }, [state.success, state.message]);

  return (
    <Card className="bg-black/50 border-white/10">
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              defaultValue={profile?.fullName || ""}
              required
            />
            {state.errors?.fullName && (
              <p className="text-red-500 text-xs">{state.errors.fullName[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              name="title"
              defaultValue={profile?.title || ""}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <textarea
              id="bio"
              name="bio"
              rows={4}
              className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue={profile?.bio || ""}
            />
          </div>

          <div className="space-y-2">
            <Label>Profile Image</Label>
            <ImageUpload
              name="imageUrl"
              defaultValue={profile?.imageUrl || ""}
              folder="profile"
              label="Upload profile image"
              rounded
            />
            {state.errors?.imageUrl && (
              <p className="text-red-500 text-xs">{state.errors.imageUrl[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="resumeLink">Resume Link</Label>
            <Input
              id="resumeLink"
              name="resumeLink"
              defaultValue={profile?.resumeLink || ""}
              placeholder="https://..."
            />
          </div>

          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
