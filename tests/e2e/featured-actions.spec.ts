import { expect, test, type Locator } from "@playwright/test";
import { collectApplicationErrors } from "./application-errors";

const githubProfileUrl = "https://github.com/Hone648";

async function expectSupportingTab(link: Locator) {
  await expect(link).toHaveAttribute("target", "_blank");
  await expect(link).toHaveAttribute("rel", /\bnoopener\b/);
  await expect(link).toHaveAttribute("rel", /\bnoreferrer\b/);
}

async function expectSameTab(link: Locator) {
  await expect(link).not.toHaveAttribute("target", /.*/);
}

test("conventional external destinations open in a supporting tab", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);

  await page.goto("/");
  const homepageProfile = page.getByRole("link", {
    name: "View GitHub profile in a new tab",
    exact: true,
  });
  await expect(homepageProfile).toHaveAttribute("href", githubProfileUrl);
  await expectSupportingTab(homepageProfile);

  const headerProfile = page
    .getByRole("navigation", { name: "Primary navigation" })
    .getByRole("link", { name: "GitHub in a new tab", exact: true });
  await expect(headerProfile).toHaveAttribute("href", githubProfileUrl);
  await expectSupportingTab(headerProfile);

  const footerProfile = page
    .getByRole("navigation", { name: "Footer navigation" })
    .getByRole("link", { name: "GitHub profile in a new tab", exact: true });
  await expect(footerProfile).toHaveAttribute("href", githubProfileUrl);
  await expectSupportingTab(footerProfile);

  await page.goto("/projects/newbudget");
  await expectSupportingTab(
    page.getByRole("link", {
      name: "Open live application in a new tab",
      exact: true,
    }),
  );
  await expectSupportingTab(
    page.getByRole("link", {
      name: "Open newBudget on GitHub in a new tab",
      exact: true,
    }),
  );
  await expectSupportingTab(
    page.getByRole("link", {
      name: "View the newBudget repository on GitHub in a new tab",
      exact: true,
    }),
  );

  await page.goto("/projects");
  await expectSupportingTab(
    page.getByRole("link", {
      name: "Open NVR infrastructure source: Home Security and Automation Lab in a new tab",
      exact: true,
    }),
  );

  await page.goto("/resume");
  await expectSupportingTab(
    page.getByRole("link", {
      name: "View GitHub profile in a new tab",
      exact: true,
    }),
  );

  expectNoApplicationErrors();
});

test("every user-facing route obeys the outbound-link policy", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const routes = [
    "/",
    "/projects",
    "/projects/newbudget",
    "/projects/unicos",
    "/projects/home-security-lab",
    "/projects/forkfolio",
    "/about",
    "/resume",
    "/contact",
  ];
  const supportingTabLinks = [];
  const sameTabLinks = [];

  for (const route of routes) {
    await page.goto(route);
    const links = await page.evaluate(() =>
      [...document.querySelectorAll("a[href]")].map((link) => ({
        href: link.getAttribute("href") ?? "",
        target: link.getAttribute("target"),
        rel: link.getAttribute("rel") ?? "",
        // Matches the accessible name for these links: an explicit label when
        // present, otherwise the visible text plus any hidden new-tab hint.
        name: (
          link.getAttribute("aria-label") ??
          link.textContent ??
          ""
        ).trim(),
      })),
    );

    for (const link of links) {
      const entry = { route, ...link };

      if (/^https?:/.test(link.href)) {
        supportingTabLinks.push(entry);
        continue;
      }

      // Direct evidence assets deliberately open alongside the case study.
      if (/^\/(images|diagrams)\//.test(link.href)) {
        continue;
      }

      sameTabLinks.push(entry);
    }
  }

  // A conventional external destination can never be weakened to same-tab
  // navigation, lose its safe `rel` tokens, or hide the new-tab announcement.
  expect(supportingTabLinks.length).toBeGreaterThan(0);
  expect(
    supportingTabLinks.filter(
      (link) =>
        link.target !== "_blank" ||
        !/\bnoopener\b/.test(link.rel) ||
        !/\bnoreferrer\b/.test(link.rel) ||
        !link.name.endsWith("in a new tab"),
    ),
  ).toEqual([]);

  // Internal routes, fragments, and `mailto:` keep their native behavior.
  expect(sameTabLinks.length).toBeGreaterThan(0);
  expect(sameTabLinks.filter((link) => link.target !== null)).toEqual([]);

  expectNoApplicationErrors();
});

test("email actions keep native mail handling", async ({ page }) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);

  for (const path of ["/contact", "/resume"]) {
    await page.goto(path);
    const emailAction = page.getByRole("link", {
      name: "Email Hunter",
      exact: true,
    });

    await expect(emailAction).toBeVisible();
    await expect(emailAction).toHaveAttribute(
      "href",
      "mailto:hone648@gmail.com",
    );
    await expectSameTab(emailAction);
  }

  expectNoApplicationErrors();
});

test("internal portfolio navigation stays in the portfolio tab", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);

  await page.goto("/");
  await expectSameTab(
    page.getByRole("link", { name: "View projects", exact: true }).first(),
  );
  await expectSameTab(
    page.getByRole("link", { name: "View all projects", exact: true }),
  );

  await page.goto("/resume");
  await expectSameTab(
    page.getByRole("link", { name: "View projects", exact: true }),
  );

  await page.goto("/projects/unicos");
  await expectSameTab(
    page.getByRole("link", { name: "Back to projects", exact: true }),
  );

  const caseStudyAction = page
    .getByRole("navigation", { name: "Primary navigation" })
    .getByRole("link", { name: "Projects", exact: true });
  await expectSameTab(caseStudyAction);
  await caseStudyAction.click();
  await expect(page).toHaveURL(/\/projects$/);

  expectNoApplicationErrors();
});
