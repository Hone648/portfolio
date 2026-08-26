import type { ComponentType } from "react";
import NewBudgetCaseStudy from "@/content/projects/newbudget.mdx";
import UnicosCaseStudy from "@/content/projects/unicos.mdx";
import HomeSecurityLabCaseStudy from "@/content/projects/home-security-lab.mdx";
import type { ProjectSlug } from "@/content/project-metadata";

export type CaseStudyPresentationMode = "legacy" | "visual-walkthrough";

export type ProjectCaseStudy = {
  readonly slug: ProjectSlug;
  readonly Content: ComponentType;
  readonly presentationMode: CaseStudyPresentationMode;
};

const publishedProjectCaseStudies = [
  {
    slug: "newbudget",
    Content: NewBudgetCaseStudy,
    presentationMode: "visual-walkthrough",
  },
  {
    slug: "unicos",
    Content: UnicosCaseStudy,
    presentationMode: "legacy",
  },
  {
    slug: "home-security-lab",
    Content: HomeSecurityLabCaseStudy,
    presentationMode: "legacy",
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
