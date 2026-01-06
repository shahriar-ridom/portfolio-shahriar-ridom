import type { MetadataRoute } from "next";
import { getProjects } from "./actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();

  const projectUrls = projects.map((project) => ({
    url: `https://www.shahriardev.me/projects/${project.slug}`,
    lastModified: project.updatedAt,
  }));

  return [
    { url: "https://www.shahriardev.me", lastModified: new Date() },
    ...projectUrls,
  ];
}
