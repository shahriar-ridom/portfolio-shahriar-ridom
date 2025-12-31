"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Prisma } from "@prisma/client";
// --- Types ---
export type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>; // Field-specific errors
};

// --- Profile Actions ---

const profileSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  title: z.string().min(1, "Title is required"),
  bio: z.string().min(1, "Bio is required"),
  imageUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  resumeLink: z.string().optional().or(z.literal("")),
});

export async function getProfile() {
  try {
    return await prisma.profile.findFirst();
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    return null;
  }
}

export async function updateProfile(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const rawData = {
    fullName: formData.get("fullName"),
    title: formData.get("title"),
    bio: formData.get("bio"),
    imageUrl: formData.get("imageUrl"),
    resumeLink: formData.get("resumeLink"),
  };

  const validated = profileSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    const existing = await prisma.profile.findFirst();

    if (existing) {
      await prisma.profile.update({
        where: { id: existing.id },
        data: validated.data,
      });
    } else {
      await prisma.profile.create({
        data: validated.data,
      });
    }

    revalidatePath("/");
    revalidatePath("/admin/profile");
    return { success: true, message: "Profile updated successfully" };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, message: "Failed to update profile." };
  }
}

// --- Project Actions ---

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().optional().or(z.literal("")),
  description: z.string().min(10, "Description must be at least 10 chars"),
  thumbnailUrl: z.string().url("Invalid URL"),
  liveUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  repoUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  tags: z.string().transform((str) =>
    str
      ? str
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0)
      : []
  ),
  featured: z.boolean().optional(),
});

export async function getProjects() {
  try {
    return await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    return await prisma.project.findUnique({
      where: { slug },
    });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }
}

export async function createProject(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // 1. Extract Data safely
  const rawData = {
    title: formData.get("title"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    thumbnailUrl: formData.get("thumbnailUrl"),
    liveUrl: formData.get("liveUrl"),
    repoUrl: formData.get("repoUrl"),
    tags: formData.get("tags"),
    // Checkbox logic: if present, it's "on". If missing, it's null.
    featured: formData.get("featured") === "on",
  };

  // 2. Validate
  const validated = projectSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  // 3. Logic: Auto-generate slug if empty
  let finalSlug = validated.data.slug;
  if (!finalSlug || finalSlug.trim() === "") {
    finalSlug = validated.data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  try {
    await prisma.project.create({
      data: {
        title: validated.data.title,
        slug: finalSlug,
        description: validated.data.description,
        thumbnailUrl: validated.data.thumbnailUrl,
        liveUrl: validated.data.liveUrl || null,
        repoUrl: validated.data.repoUrl || null,
        tags: validated.data.tags,
        featured: validated.data.featured || false,
      },
    });
  } catch (error) {
    // 4. Handle Unique Constraint (P2002)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return {
          success: false,
          message: "A project with this slug already exists.",
          errors: { slug: ["Slug must be unique"] },
        };
      }
    }
    console.error("Create Project Error:", error);
    return { success: false, message: "Database failed to create project." };
  }

  // 5. Revalidate & Redirect
  revalidatePath("/");
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
}

export async function deleteProject(id: string): Promise<ActionState> {
  try {
    await prisma.project.delete({
      where: { id },
    });

    revalidatePath("/");
    revalidatePath("/admin/projects");
    return { success: true, message: "Project deleted" };
  } catch (error) {
    console.error("Delete Error:", error);
    return { success: false, message: "Failed to delete project" };
  }
}

// --- Skills Section ---

const skillSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.enum(["FRONTEND", "BACKEND", "DEVOPS"]),
  // Ensure we can coerce the string input from the form into a number
  level: z.coerce.number().min(0).max(100),
  iconName: z.string().min(1, "Icon is required"),
  showInMarquee: z.boolean().optional(),
});

export async function getSkills() {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: { order: "asc" },
    });
    return skills;
  } catch (error) {
    console.error("Failed to fetch skills:", error);
    return [];
  }
}

export async function addSkill(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const rawData = {
    name: formData.get("name"),
    category: formData.get("category"),
    level: formData.get("level"), // Zod coerce will handle string -> number
    iconName: formData.get("iconName"),
    showInMarquee: formData.get("showInMarquee") === "on",
  };

  const validated = skillSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message: "Invalid data",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.skill.create({
      data: {
        name: validated.data.name,
        category: validated.data.category,
        level: validated.data.level,
        iconName: validated.data.iconName,
        showInMarquee: validated.data.showInMarquee || false,
        order: 0,
        color: "#ffffff",
      },
    });

    revalidatePath("/");
    revalidatePath("/admin/skills");
    return { success: true, message: "Skill added!" };
  } catch (error) {
    console.error("Add Skill Error:", error);
    return { success: false, message: "Failed to add skill" };
  }
}

export async function deleteSkill(id: string): Promise<ActionState> {
  try {
    await prisma.skill.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/admin/skills");
    return { success: true, message: "Skill deleted" };
  } catch (error) {
    return { success: false, message: "Failed to delete" };
  }
}

// --- Contact Actions ---

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendMessage(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const validated = contactSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message: "Invalid input",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  // Simulate Email Sending Delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Message received:", validated.data);
  return { success: true, message: "Message sent successfully!" };
}
