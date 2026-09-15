import type { MetadataRoute } from "next";
import { allProjects } from "@/src/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = allProjects.map((project) => ({
    url: `https://lightdigital-consult.cd/realisations/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [
    {
      url: "https://lightdigital-consult.cd",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://lightdigital-consult.cd/realisations",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    ...projectEntries
  ];
}
