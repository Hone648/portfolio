import type { ComponentType } from "react";
import NewBudgetCaseStudy from "@/content/projects/newbudget.mdx";
import type { ProjectSlug } from "@/content/project-metadata";

export type ProjectCaseStudy = {
  readonly slug: ProjectSlug;
  readonly Content: ComponentType;
};

const publishedProjectCaseStudies = [
  {
    slug: "newbudget",
    Content: NewBudgetCaseStudy,
  },
] as const satisfies readonly ProjectCaseStudy[];

export type PublishedProjectCaseStudySlug =
  (typeof publishedProjectCaseStudies)[number]["slug"];

export function getPublishedProjectCaseStudies(): readonly ProjectCaseStudy[] {
  return publishedProjectCaseStudies;
}

export function getPublishedProjectCaseStudyBySlug(
  slug: ProjectSlug,
): ProjectCaseStudy | undefined {
  return publishedProjectCaseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getPublishedProjectCaseStudySlugs(): readonly PublishedProjectCaseStudySlug[] {
  return publishedProjectCaseStudies.map((caseStudy) => caseStudy.slug);
}

export function isPublishedProjectCaseStudySlug(
  value: unknown,
): value is PublishedProjectCaseStudySlug {
  return (
    typeof value === "string" &&
    publishedProjectCaseStudies.some((caseStudy) => caseStudy.slug === value)
  );
}
