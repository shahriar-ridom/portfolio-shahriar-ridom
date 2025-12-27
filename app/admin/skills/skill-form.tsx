"use client";

import { useActionState, useEffect, useState } from "react";
import { addSkill } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const AVAILABLE_ICONS = [
  "Code",
  "Palette",
  "FileJson",
  "MonitorPlay",
  "Server",
  "Database",
  "Layers",
  "Box",
  "Cloud",
  "GitBranch",
];

const CATEGORIES = ["FRONTEND", "BACKEND", "DEVOPS"];

const initialState = { success: false, message: "", errors: {} };

export function SkillForm() {
  const [state, formAction, isPending] = useActionState(addSkill, initialState);
  const [category, setCategory] = useState("");
  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (state.success) {
      setName("");
      if (state.success) {
        toast.success(state.message);
      } else if (!state.success && state.message) {
        toast.error(state.message);
      }
    }
  }, [state.success, state.message]);

  return (
    <Card className="bg-zinc-900 border-white/10 h-fit">
      <CardHeader>
        <CardTitle>Add New Skill</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          {state.message && (
            <p
              className={
                state.success
                  ? "text-green-500 text-sm"
                  : "text-red-500 text-sm"
              }
            >
              {state.message}
            </p>
          )}

          <div className="space-y-2">
            <Label>Skill Name</Label>
            <Input
              name="name"
              placeholder="e.g. React"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {state.errors?.name && (
              <p className="text-red-500 text-xs">{state.errors.name[0]}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Category</Label>
              {/* 3. BIND VALUE: The component is now locked to your state */}
              <Select
                name="category"
                value={category}
                onValueChange={setCategory}
              >
                <SelectTrigger className="bg-transparent border-input">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Level (0-100)</Label>
              <Input
                name="level"
                type="number"
                min="0"
                max="100"
                defaultValue="80"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Icon</Label>
            {/* Bind Icon state too for consistency */}
            <Select name="iconName" value={icon} onValueChange={setIcon}>
              <SelectTrigger className="bg-transparent border-input">
                <SelectValue placeholder="Select icon" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px]">
                {AVAILABLE_ICONS.map((iconItem) => (
                  <SelectItem key={iconItem} value={iconItem}>
                    {iconItem}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              name="showInMarquee"
              id="marquee"
              className="w-4 h-4 accent-primary rounded cursor-pointer"
            />
            <Label htmlFor="marquee" className="cursor-pointer">
              Show in Marquee?
            </Label>
          </div>

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isPending ? "Adding..." : "Add Skill"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
