/*
 * Outbound-link policy for the portfolio.
 *
 * Conventional external web destinations (GitHub, the deployed newBudget
 * application) open in a supporting browser tab so the portfolio stays
 * available. Everything else keeps its native behavior: `mailto:` and `tel:`
 * hand off to the platform, fragments stay on the page, and internal routes
 * navigate in the portfolio tab.
 */

const supportingTabProtocols = new Set(["http:", "https:"]);

export function opensInSupportingTab(href: string): boolean {
  try {
    return supportingTabProtocols.has(new URL(href).protocol);
  } catch {
    // Relative routes and bare fragments are not absolute URLs, and they are
    // never external web destinations.
    return false;
  }
}

export const supportingTabLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

/**
 * Appended to a link's accessible name so new-tab behavior is announced
 * without adding repetitive visible wording.
 */
export const supportingTabAccessibleSuffix = " in a new tab";
