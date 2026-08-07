import { expect, test, type Page } from "@playwright/test";
import { collectApplicationErrors } from "./application-errors";

const topAnchor = "#case-study-top";

const caseStudies = [
  {
    path: "/projects/newbudget",
    projectName: "newBudget",
    repositoryAction: "Open newBudget on GitHub in a new tab",
    repositoryNote: "View the newBudget repository on GitHub in a new tab",
    repositoryUrl: "https://github.com/Hone648/newBudget",
    liveAction: "Open live application in a new tab",
    liveUrl: "https://new-budget-three.vercel.app",
  },
  {
    path: "/projects/unicos",
    projectName: "Unicos",
    repositoryAction: "Open unicos on GitHub in a new tab",
    repositoryNote: "View the unicos repository on GitHub in a new tab",
    repositoryUrl: "https://github.com/Hone648/unicos",
    liveAction: null,
    liveUrl: null,
  },
  {
    path: "/projects/home-security-lab",
    projectName: "Home Security and Automation Lab",
    repositoryAction: "Open nvr-infrastructure on GitHub in a new tab",
    repositoryNote: "View the nvr-infrastructure repository on GitHub in a new tab",
    repositoryUrl: "https://github.com/Hone648/nvr-infrastructure",
    liveAction: null,
    liveUrl: null,
  },
] as const;

const representativeCaseStudy = caseStudies[1];

function backToTop(page: Page) {
  return page.getByRole("link", { name: "Back to top", exact: true });
}

async function scrollDeepIntoCaseStudy(page: Page) {
  await page
    .getByRole("heading", { level: 2, name: "Current status", exact: true })
    .scrollIntoViewIfNeeded();
  expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
}

for (const caseStudy of caseStudies) {
  test(`${caseStudy.projectName} exposes its public source repository`, async ({
    page,
  }) => {
    const expectNoApplicationErrors = collectApplicationErrors(page);
    await page.goto(caseStudy.path);

    const sourceAction = page.getByRole("link", {
      name: caseStudy.repositoryAction,
      exact: true,
    });
    await expect(sourceAction).toHaveCount(1);
    await expect(sourceAction).toBeVisible();
    await expect(sourceAction).toHaveAttribute("href", caseStudy.repositoryUrl);

    const repositoryNote = page.getByRole("link", {
      name: caseStudy.repositoryNote,
      exact: true,
    });
    await expect(repositoryNote).toHaveCount(1);
    await expect(repositoryNote).toHaveAttribute("href", caseStudy.repositoryUrl);

    const liveAction = page.getByRole("link", {
      name: "Open live application in a new tab",
      exact: true,
    });

    if (caseStudy.liveAction) {
      await expect(liveAction).toHaveCount(1);
      await expect(liveAction).toBeVisible();
      await expect(liveAction).toHaveAttribute("href", caseStudy.liveUrl!);
      expect(caseStudy.liveUrl).not.toBe(caseStudy.repositoryUrl);
    } else {
      await expect(liveAction).toHaveCount(0);
    }

    expectNoApplicationErrors();
  });

  test(`${caseStudy.projectName} returns the reader to the case-study top`, async ({
    page,
  }) => {
    const expectNoApplicationErrors = collectApplicationErrors(page);
    await page.goto(caseStudy.path);

    // Near the top the control is not exposed to the accessibility tree at all,
    // so it cannot be reached by pointer, keyboard, or assistive technology.
    const control = backToTop(page);
    await expect(control).toHaveCount(0);

    await scrollDeepIntoCaseStudy(page);
    await expect(control).toHaveCount(1);
    await expect(control).toBeVisible();
    await expect(control).toHaveJSProperty("tagName", "A");
    await expect(control).toHaveAttribute("href", topAnchor);

    await control.click();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    await expect(page.locator(topAnchor)).toBeFocused();
    await expect(control).toHaveCount(0);

    expectNoApplicationErrors();
  });
}

test("the back-to-top control is keyboard operable and leaves navigation reachable", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  await page.goto(representativeCaseStudy.path);
  await scrollDeepIntoCaseStudy(page);

  const control = backToTop(page);
  await control.focus();
  await expect(control).toBeFocused();
  await page.keyboard.press("Enter");

  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator(topAnchor)).toBeFocused();

  await page.keyboard.press("Shift+Tab");
  await expect(
    page.getByRole("link", { name: "Back to projects", exact: true }),
  ).toBeFocused();

  await page.keyboard.press("Shift+Tab");
  await expect(
    page
      .getByRole("navigation", { name: "Primary navigation" })
      .getByRole("link", { name: "GitHub in a new tab", exact: true }),
  ).toBeFocused();

  expectNoApplicationErrors();
});

test("the back-to-top control returns to the top without animated scrolling under reduced motion", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(representativeCaseStudy.path);
  await scrollDeepIntoCaseStudy(page);

  const control = backToTop(page);
  await expect(control).toBeVisible();
  await control.click();

  expect(await page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator(topAnchor)).toBeFocused();

  expectNoApplicationErrors();
});

test.describe("narrow viewport", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("the back-to-top control stays usable without covering content", async ({
    page,
  }) => {
    const expectNoApplicationErrors = collectApplicationErrors(page);
    await page.goto(representativeCaseStudy.path);
    await scrollDeepIntoCaseStudy(page);

    const control = backToTop(page);
    await expect(control).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);

    const heading = page.getByRole("heading", {
      level: 2,
      name: "Current status",
      exact: true,
    });
    await expect(heading).toBeVisible();

    await page.evaluate(() =>
      window.scrollTo(0, document.documentElement.scrollHeight),
    );
    const footerNavigation = page.getByRole("navigation", {
      name: "Footer navigation",
    });
    await expect(footerNavigation).toBeVisible();

    const controlBox = await control.boundingBox();
    const footerNavigationBox = await footerNavigation.boundingBox();
    expect(controlBox).not.toBeNull();
    expect(footerNavigationBox).not.toBeNull();
    expect(controlBox!.y + controlBox!.height).toBeLessThanOrEqual(
      footerNavigationBox!.y,
    );

    await control.click();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    await expect(page.locator(topAnchor)).toBeFocused();

    expectNoApplicationErrors();
  });
});
