"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

// --- Profile Actions ---

const profileSchema = z.object({
  fullName: z.string().min(1),
  title: z.string().min(1),
  bio: z.string().min(1),
  resumeLink: z.string().optional(),
});

export async function getProfile() {
  try {
    const profile = await prisma.profile.findFirst();
    return profile;
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    return null;
  }
}

export async function updateProfile(formData: FormData) {
  const rawData = {
    fullName: formData.get("fullName"),
    title: formData.get("title"),
    bio: formData.get("bio"),
    resumeLink: formData.get("resumeLink"),
  };

  const validatedData = profileSchema.parse(rawData);

  try {
    const existingProfile = await prisma.profile.findFirst();

    if (existingProfile) {
      await prisma.profile.update({
        where: { id: existingProfile.id },
        data: validatedData,
      });
    } else {
      await prisma.profile.create({
        data: validatedData,
      });
    }

    revalidatePath("/");
    revalidatePath("/admin/profile");
    return { success: true };
  } catch (error) {
    console.error("Failed to update profile:", error);
    return { success: false, error: "Failed to update profile" };
  }
}

// --- Project Actions ---

const projectSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  thumbnailUrl: z.string().url(),
  liveUrl: z.string().url().optional().or(z.literal("")),
  repoUrl: z.string().url().optional().or(z.literal("")),
  tags: z.string(), // Comma separated string from form
  featured: z.boolean().optional(),
});

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    return projects;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

export async function createProject(formData: FormData) {
  const rawData = {
    title: formData.get("title"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    thumbnailUrl: formData.get("thumbnailUrl"),
    liveUrl: formData.get("liveUrl"),
    repoUrl: formData.get("repoUrl"),
    tags: formData.get("tags"),
    featured: formData.get("featured") === "on",
  };

  try {
    const validatedData = projectSchema.parse(rawData);

    // Convert comma-separated tags to array
    const tagsArray = validatedData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    await prisma.project.create({
      data: {
        ...validatedData,
        tags: tagsArray,
        liveUrl: validatedData.liveUrl || null,
        repoUrl: validatedData.repoUrl || null,
      },
    });

    revalidatePath("/");
    revalidatePath("/admin/projects");
  } catch (error) {
    console.error("Failed to create project:", error);
    return { success: false, error: "Failed to create project" };
  }

  redirect("/admin/projects");
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({
      where: { id },
    });
    revalidatePath("/");
    revalidatePath("/admin/projects");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete project:", error);
    return { success: false, error: "Failed to delete project" };
  }
}
