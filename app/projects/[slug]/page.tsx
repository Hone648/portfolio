import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import {
  getPublishedProjectCaseStudyBySlug,
  getPublishedProjectCaseStudySlugs,
} from "@/lib/project-case-studies";
import { getProjectBySlug, isProjectSlug } from "@/lib/projects";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedProjectCaseStudySlugs().map((slug) => ({ slug }));
}

function getCaseStudyPageData(slug: string) {
  if (!isProjectSlug(slug)) {
    notFound();
  }

  const project = getProjectBySlug(slug);
  const caseStudy = getPublishedProjectCaseStudyBySlug(slug);

  if (!project || !caseStudy) {
    notFound();
  }

  return { project, caseStudy };
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { project } = getCaseStudyPageData(slug);

  return {
    title: `${project.name} Case Study | Hunter Kam`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const { project, caseStudy } = getCaseStudyPageData(slug);
  const { Content } = caseStudy;

  return (
    <CaseStudyLayout project={project}>
      <Content />
    </CaseStudyLayout>
  );
}
