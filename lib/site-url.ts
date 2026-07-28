const LOCAL_SITE_URL = "http://localhost:3000";

export type SitePath = "/" | `/${string}`;

function parseSiteUrl(value: string, source: string): URL {
  const configuredValue = value.trim();

  if (!configuredValue) {
    throw new Error(`${source} must be a valid HTTP or HTTPS URL.`);
  }

  const normalizedValue = /^[a-z][a-z\d+.-]*:\/\//i.test(configuredValue)
    ? configuredValue
    : `https://${configuredValue}`;

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(normalizedValue);
  } catch {
    throw new Error(`${source} must be a valid HTTP or HTTPS URL.`);
  }

  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    throw new Error(`${source} must use the HTTP or HTTPS protocol.`);
  }

  return new URL(parsedUrl.origin);
}

export function getSiteUrl(): URL {
  if (process.env.SITE_URL !== undefined) {
    return parseSiteUrl(process.env.SITE_URL, "SITE_URL");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL !== undefined) {
    return parseSiteUrl(
      process.env.VERCEL_PROJECT_PRODUCTION_URL,
      "VERCEL_PROJECT_PRODUCTION_URL",
    );
  }

  return new URL(LOCAL_SITE_URL);
}

export function absoluteUrl(path: SitePath): string {
  return new URL(path, getSiteUrl()).toString();
}
