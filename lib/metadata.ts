import type { Metadata } from "next";
import { absoluteUrl, type SitePath } from "@/lib/site-url";

export const SITE_NAME = "Hunter Kam";
export const ROOT_TITLE = `${SITE_NAME} | Full-stack developer portfolio`;
export const TITLE_TEMPLATE = `%s | ${SITE_NAME}`;
const SOCIAL_IMAGE_ALT =
  "Hunter Kam full-stack developer portfolio social card";

type PageMetadataInput = {
  readonly title: string;
  readonly description: string;
  readonly path: SitePath;
};

export function composePageTitle(title: string): string {
  return `${title} | ${SITE_NAME}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const composedTitle = composePageTitle(title);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url: canonicalUrl,
      title: composedTitle,
      description,
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          type: "image/png",
          alt: SOCIAL_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: composedTitle,
      description,
      images: [
        {
          url: absoluteUrl("/twitter-image"),
          alt: SOCIAL_IMAGE_ALT,
        },
      ],
    },
  };
}
