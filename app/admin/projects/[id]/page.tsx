import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { EditProjectForm } from "./edit-project-form";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProjectPage({ params }: PageProps) {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: { id },
  });

  if (!project) {
    notFound();
  }

  return <EditProjectForm project={project} />;
}
