import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/metadata/json-ld";
import { siteContent } from "@/content/site-content";
import {
  ROOT_TITLE,
  SITE_NAME,
  TITLE_TEMPLATE,
} from "@/lib/metadata";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const rootUrl = absoluteUrl("/");
const personId = absoluteUrl("/#person");

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: ROOT_TITLE,
    template: TITLE_TEMPLATE,
  },
  description: siteContent.positioning,
  applicationName: "Hunter Kam portfolio",
  authors: [
    {
      name: SITE_NAME,
      url: absoluteUrl("/about"),
    },
  ],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  verification: {
    google: "ccLfmUEUzj3OXo02VsjQnWWJkTWzzdwg4mnGXIk5_V4",
  },
  alternates: {
    canonical: rootUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: rootUrl,
    title: ROOT_TITLE,
    description: siteContent.positioning,
  },
  twitter: {
    card: "summary_large_image",
    title: ROOT_TITLE,
    description: siteContent.positioning,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
  colorScheme: "light",
};

const rootStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: "Hunter Kam portfolio",
      url: rootUrl,
      description: siteContent.positioning,
      inLanguage: "en-US",
      author: {
        "@id": personId,
      },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: SITE_NAME,
      url: rootUrl,
      sameAs: [siteContent.github.href],
      description: siteContent.positioning,
    },
  ],
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={rootStructuredData} />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="site-main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
