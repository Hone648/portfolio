import type { MetadataRoute } from "next";
import { getPublishedProjectCaseStudySlugs } from "@/lib/project-case-studies";
import { absoluteUrl, type SitePath } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyPaths = getPublishedProjectCaseStudySlugs().map(
    (slug) => `/projects/${slug}` as const,
  );
  const paths: readonly SitePath[] = [
    "/",
    "/projects",
    ...caseStudyPaths,
    "/about",
    "/resume",
    "/contact",
  ];

  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
