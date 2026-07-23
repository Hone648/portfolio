import {
  projects,
  type Project,
  type ProjectSlug,
} from "@/content/project-metadata";

export function getProjects(): readonly Project[] {
  return projects;
}

export function getFeaturedProjects(): readonly Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: ProjectSlug): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): readonly ProjectSlug[] {
  return projects.map((project) => project.slug);
}

export function isProjectSlug(value: unknown): value is ProjectSlug {
  return (
    typeof value === "string" &&
    projects.some((project) => project.slug === value)
  );
}
