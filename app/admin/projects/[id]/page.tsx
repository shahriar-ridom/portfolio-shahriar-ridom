import { Suspense } from "react";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { EditProjectForm } from "./edit-project-form";
import { Loader2 } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function EditProjectLoader({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: { id },
  });

  if (!project) {
    notFound();
  }

  return <EditProjectForm project={project} />;
}

export default function EditProjectPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-20 text-white/50">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      }
    >
      <EditProjectLoader params={params} />
    </Suspense>
  );
}
