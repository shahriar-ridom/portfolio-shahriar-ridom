"use server";

import prisma from "@/lib/prisma";
import { Resend } from "resend";
import { revalidatePath, unstable_cache } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import ContactFormEmail from "@/components/template/Email";

// --- Types ---
export type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

// --- Profile Actions ---

const profileSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  title: z.string().min(1, "Title is required"),
  bio: z.string().min(1, "Bio is required"),
  imageUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  resumeLink: z.string().optional().or(z.literal("")),
});

export const getProfile = unstable_cache(
  async () => {
    try {
      return await prisma.profile.findFirst();
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      return null;
    }
  },
  ["user-profile"],
  { revalidate: 3600, tags: ["profile"] },
);

export async function updateProfile(
  prevState: ActionState,
  formData: FormData,
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
      : [],
  ),
  featured: z.boolean().optional(),
});

export const getProjects = unstable_cache(
  async () => {
    try {
      return await prisma.project.findMany({
        orderBy: { createdAt: "desc" },
      });
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      return [];
    }
  },
  ["user-projects"],
  { revalidate: 3600, tags: ["projects"] },
);

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
  formData: FormData,
): Promise<ActionState> {
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

  const validated = projectSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors: validated.error.flatten().fieldErrors,
    };
  }

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
  level: z.coerce.number().min(0).max(100),
  iconName: z.string().min(1, "Icon is required"),
  showInMarquee: z.boolean().optional(),
});

export const getSkills = unstable_cache(
  async () => {
    try {
      const skills = await prisma.skill.findMany({
        orderBy: { order: "asc" },
      });
      return skills;
    } catch (error) {
      console.error("Failed to fetch skills:", error);
      return [];
    }
  },
  ["user-skills"],
  { revalidate: 3600, tags: ["skills"] },
);

export async function addSkill(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const rawData = {
    name: formData.get("name"),
    category: formData.get("category"),
    level: formData.get("level"),
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
  fax: z.string().optional(),
});

const resend = new Resend(process.env.RESEND_API);

export async function sendMessage(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    fax: formData.get("fax"),
  };
  const validated = contactSchema.safeParse(rawData);
  if (!validated.success) {
    return {
      success: false,
      message: "Invalid input",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  let messageId: string;

  try {
    const newMessage = await prisma.messages.create({
      data: {
        name: validated.data.name,
        email: validated.data.email,
        message: validated.data.message,
        status: "PENDING",
      },
    });
    messageId = newMessage.id;
  } catch (error) {
    console.error("DB Save Error:", error);
    return { success: false, message: "System busy. Please try again later." };
  }

  try {
    const data = await resend.emails.send({
      from: "My Portfolio <system@message.shahriardev.me>",
      to: "shahriarridom.info@gmail.com",
      replyTo: validated.data.email,
      subject: `New Message from ${validated.data.name}`,
      react: ContactFormEmail({
        name: validated.data.name,
        email: validated.data.email,
        message: validated.data.message,
      }),
    });

    if (data.error) {
      throw new Error(data.error.message);
    }

    await prisma.messages.update({
      where: { id: messageId },
      data: { status: "SENT" },
    });

    revalidatePath("/admin/messages");
    return { success: true, message: "Message sent successfully!" };
  } catch (emailError) {
    console.error("Email Dispatch Error: ", emailError);

    await prisma.messages.update({
      where: { id: messageId },
      data: { status: "FAILED" },
    });

    return {
      success: true,
      message: "Message received (queued). We will be in touch shortly.",
    };
  }
}

//Delete Message
export async function deleteMessage(messageId: string) {
  try {
    await prisma.messages.delete({ where: { id: messageId } });
  } catch (error) {
    console.error("Server Error: ", error);
  }
}

//Update Status
export async function updateStatus(messageId: string, status: boolean) {
  try {
    await prisma.messages.update({
      where: { id: messageId },
      data: { isRead: status },
    });
  } catch (error) {}
}

// Get Project Via Slug
export const getProjectViaSlug = async (slug: string) => {
  try {
    const project = await prisma.project.findUnique({
      where: { slug },
    });
    return project;
  } catch (error) {
    console.error(error);
  }
};
