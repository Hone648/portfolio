import { expect, test, type Locator, type Page } from "@playwright/test";
import { collectApplicationErrors } from "./application-errors";

const githubProfileUrl = "https://github.com/Hone648";

const featuredCards = [
  {
    projectName: "newBudget",
    caseStudyPath: "/projects/newbudget",
    repositoryUrl: "https://github.com/Hone648/newBudget",
    liveUrl: "https://new-budget-three.vercel.app",
  },
  {
    projectName: "Unicos",
    caseStudyPath: "/projects/unicos",
    repositoryUrl: "https://github.com/Hone648/unicos",
    liveUrl: null,
  },
  {
    projectName: "Home Security and Automation Lab",
    caseStudyPath: "/projects/home-security-lab",
    repositoryUrl: "https://github.com/Hone648/nvr-infrastructure",
    liveUrl: null,
  },
] as const;

function featuredActions(page: Page, projectName: string) {
  return page.getByRole("list", { name: `${projectName} links` });
}

async function expectSupportingTab(link: Locator) {
  await expect(link).toHaveAttribute("target", "_blank");
  await expect(link).toHaveAttribute("rel", /\bnoopener\b/);
  await expect(link).toHaveAttribute("rel", /\bnoreferrer\b/);
}

async function expectSameTab(link: Locator) {
  await expect(link).not.toHaveAttribute("target", /.*/);
}

async function actionBox(link: Locator) {
  const box = await link.boundingBox();
  expect(box).not.toBeNull();
  return box!;
}

for (const card of featuredCards) {
  test(`the ${card.projectName} featured card presents one action system`, async ({
    page,
  }) => {
    const expectNoApplicationErrors = collectApplicationErrors(page);
    await page.goto("/");

    const actions = featuredActions(page, card.projectName);
    await expect(actions).toHaveCount(1);

    const caseStudyAction = actions.getByRole("link", {
      name: `View case study: ${card.projectName}`,
      exact: true,
    });
    await expect(caseStudyAction).toBeVisible();
    await expect(caseStudyAction).toHaveAttribute("href", card.caseStudyPath);
    await expectSameTab(caseStudyAction);

    const repositoryAction = actions.getByRole("link", {
      name: `GitHub source: ${card.projectName} in a new tab`,
      exact: true,
    });
    await expect(repositoryAction).toBeVisible();
    await expect(repositoryAction).toHaveAttribute("href", card.repositoryUrl);
    await expectSupportingTab(repositoryAction);

    const liveAction = actions.getByRole("link", {
      name: `Live app: ${card.projectName} in a new tab`,
      exact: true,
    });

    if (card.liveUrl) {
      await expect(liveAction).toBeVisible();
      await expect(liveAction).toHaveAttribute("href", card.liveUrl);
      await expectSupportingTab(liveAction);
    } else {
      await expect(liveAction).toHaveCount(0);
    }

    // No additional destination is invented for a project: the card offers the
    // case study, the public repository, and a live application only where one
    // legitimately exists.
    const expectedHrefs = [
      card.caseStudyPath,
      card.repositoryUrl,
      ...(card.liveUrl ? [card.liveUrl] : []),
    ];
    expect(
      await actions.getByRole("link").evaluateAll((links) =>
        links.map((link) => link.getAttribute("href")),
      ),
    ).toEqual(expectedHrefs);

    expectNoApplicationErrors();
  });
}

test("the featured action regions share one desktop geometry", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  await page.goto("/");

  const primaryBoxes = [];
  const supportingRowTops = [];

  for (const card of featuredCards) {
    const actions = featuredActions(page, card.projectName);
    const primary = await actionBox(
      actions.getByRole("link", {
        name: `View case study: ${card.projectName}`,
        exact: true,
      }),
    );
    const repository = await actionBox(
      actions.getByRole("link", {
        name: `GitHub source: ${card.projectName} in a new tab`,
        exact: true,
      }),
    );

    primaryBoxes.push(primary);
    supportingRowTops.push(Math.round(repository.y));

    // Every control keeps the shared control height.
    expect(Math.round(repository.height)).toBe(Math.round(primary.height));

    if (card.liveUrl) {
      const live = await actionBox(
        actions.getByRole("link", {
          name: `Live app: ${card.projectName} in a new tab`,
          exact: true,
        }),
      );

      // Paired supporting actions divide the supporting row evenly and sit on
      // the same line, so width never follows label length.
      expect(Math.abs(repository.width - live.width)).toBeLessThanOrEqual(1);
      expect(Math.round(repository.y)).toBe(Math.round(live.y));
      expect(repository.width).toBeLessThan(primary.width);
      expect(
        Math.abs(repository.width + live.width - primary.width),
      ).toBeLessThanOrEqual(16);
    } else {
      // A lone supporting action spans the supporting row.
      expect(Math.abs(repository.width - primary.width)).toBeLessThanOrEqual(1);
    }
  }

  // The three cards present their action rows on the same lines.
  const primaryTops = primaryBoxes.map((box) => Math.round(box.y));
  const primaryWidths = primaryBoxes.map((box) => Math.round(box.width));
  expect(new Set(primaryTops).size).toBe(1);
  expect(new Set(primaryWidths).size).toBe(1);
  expect(new Set(supportingRowTops).size).toBe(1);

  expectNoApplicationErrors();
});

test.describe("narrow viewport", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("featured actions stack usably without horizontal overflow", async ({
    page,
  }) => {
    const expectNoApplicationErrors = collectApplicationErrors(page);
    await page.goto("/");

    for (const card of featuredCards) {
      const actions = featuredActions(page, card.projectName);
      const links = await actions.getByRole("link").all();
      const boxes = [];

      for (const link of links) {
        await expect(link).toBeVisible();
        boxes.push(await actionBox(link));
      }

      // Every action fills the card width on its own row and keeps a
      // comfortable tap target.
      const widths = boxes.map((box) => Math.round(box.width));
      const tops = boxes.map((box) => Math.round(box.y));
      expect(new Set(widths).size).toBe(1);
      expect(new Set(tops).size).toBe(boxes.length);
      for (const box of boxes) {
        expect(box.height).toBeGreaterThanOrEqual(44);
      }

      // Card content above the actions stays visible.
      await expect(
        page.getByRole("heading", { level: 3, name: card.projectName }),
      ).toBeVisible();
    }

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);

    expectNoApplicationErrors();
  });
});

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
