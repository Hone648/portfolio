import { expect, test } from "@playwright/test";
import { collectApplicationErrors } from "./application-errors";

const testOrigin = "http://127.0.0.1:3001";

const publicRoutes = [
  {
    path: "/",
    heading: "Hunter Kam",
    title: "Hunter Kam | Full-stack developer portfolio",
  },
  {
    path: "/projects",
    heading: "Projects",
    title: "Projects | Hunter Kam",
  },
  {
    path: "/projects/newbudget",
    heading: "newBudget",
    title: "newBudget case study | Hunter Kam",
  },
  {
    path: "/projects/unicos",
    heading: "Unicos",
    title: "Unicos case study | Hunter Kam",
  },
  {
    path: "/projects/home-security-lab",
    heading: "Home Security and Automation Lab",
    title: "Home Security and Automation Lab case study | Hunter Kam",
  },
  {
    path: "/projects/forkfolio",
    heading: "Forkfolio",
    title: "Forkfolio case study | Hunter Kam",
  },
  {
    path: "/about",
    heading: "Hunter Kam",
    title: "About | Hunter Kam",
  },
  {
    path: "/resume",
    heading: "Resume",
    title: "Resume | Hunter Kam",
  },
  {
    path: "/contact",
    heading: "Contact Hunter",
    title: "Contact | Hunter Kam",
  },
] as const;

const responsiveRoutes = publicRoutes.filter(({ path }) =>
  [
    "/",
    "/projects",
    "/projects/newbudget",
    "/projects/forkfolio",
    "/about",
    "/resume",
    "/contact",
  ].includes(path),
);

test.describe("canonical public routes", () => {
  for (const route of publicRoutes) {
    test(`${route.path} exposes its public document contract`, async ({ page }) => {
      const expectNoApplicationErrors = collectApplicationErrors(page);
      const response = await page.goto(route.path);

      expect(response?.status()).toBe(200);

      const main = page.getByRole("main");
      await expect(main).toHaveCount(1);
      await expect(main).toBeVisible();

      const heading = page.getByRole("heading", {
        level: 1,
        name: route.heading,
        exact: true,
      });
      await expect(heading).toHaveCount(1);
      await expect(heading).toBeVisible();
      await expect(page).toHaveTitle(route.title);

      const description = page.locator('meta[name="description"]');
      await expect(description).toHaveCount(1);
      await expect(description).toHaveAttribute("content", /\S/);

      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        route.path === "/" ? testOrigin : new URL(route.path, testOrigin).href,
      );
      expectNoApplicationErrors();
    });
  }
});

test("Home Security exposes the public NVR infrastructure source", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const repositoryUrl = "https://github.com/Hone648/nvr-infrastructure";

  await page.goto("/projects/home-security-lab");
  const caseStudyRepositoryLink = page.getByRole("link", {
    name: "View the nvr-infrastructure repository on GitHub in a new tab",
    exact: true,
  });
  await expect(caseStudyRepositoryLink).toBeVisible();
  await expect(caseStudyRepositoryLink).toHaveAttribute("href", repositoryUrl);

  await page.goto("/projects");
  const projectSourceLink = page.getByRole("link", {
    name: "Open NVR infrastructure source: Home Security and Automation Lab in a new tab",
    exact: true,
  });
  await expect(projectSourceLink).toBeVisible();
  await expect(projectSourceLink).toHaveAttribute("href", repositoryUrl);
  expectNoApplicationErrors();
});

test("the homepage exposes the Google site-verification tag", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);

  const verification = page.locator('meta[name="google-site-verification"]');
  await expect(verification).toHaveCount(1);
  await expect(verification).toHaveAttribute(
    "content",
    "ccLfmUEUzj3OXo02VsjQnWWJkTWzzdwg4mnGXIk5_V4",
  );
  expectNoApplicationErrors();
});

test.describe("responsive public routes", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  for (const route of responsiveRoutes) {
    test(`${route.path} remains usable without horizontal overflow`, async ({
      page,
    }) => {
      const expectNoApplicationErrors = collectApplicationErrors(page);
      const response = await page.goto(route.path);

      expect(response?.status()).toBe(200);
      await expect(page.getByRole("main")).toBeVisible();
      await expect(
        page.getByRole("heading", {
          level: 1,
          name: route.heading,
          exact: true,
        }),
      ).toBeVisible();

      const primaryNavigation = page.getByRole("navigation", {
        name: "Primary navigation",
      });
      const homeLink = primaryNavigation.getByRole("link", {
        name: "Home",
        exact: true,
      });
      await expect(primaryNavigation).toBeVisible();
      await expect(homeLink).toBeVisible();
      await expect(homeLink).toHaveAttribute("href", "/");
      await homeLink.focus();
      await expect(homeLink).toBeFocused();

      const hasHorizontalOverflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth,
      );
      expect(hasHorizontalOverflow).toBe(false);
      expectNoApplicationErrors();
    });
  }
});

test("the homepage skip link moves focus to the main landmark", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to content" });
  await expect(skipLink).toBeVisible();
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");

  await expect(page.getByRole("main")).toBeFocused();
  await expect(page).toHaveURL(`${testOrigin}/#main-content`);
  expectNoApplicationErrors();
});

test("robots.txt exposes the test origin and public crawl policy", async ({
  request,
}) => {
  const response = await request.get("/robots.txt");
  const body = await response.text();

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toMatch(/^text\/plain\b/);
  expect(body).toContain("User-Agent: *");
  expect(body).toContain("Allow: /");
  expect(body).toContain(`Sitemap: ${testOrigin}/sitemap.xml`);
  expect(body).toContain(`Host: ${testOrigin}`);
});

test("sitemap.xml contains exactly the canonical public routes", async ({
  request,
}) => {
  const response = await request.get("/sitemap.xml");
  const body = await response.text();
  const locations = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    ([, location]) => location,
  );
  const expectedLocations = publicRoutes.map(({ path }) =>
    new URL(path, testOrigin).href,
  );

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toMatch(/xml/);
  expect(locations.sort()).toEqual([...expectedLocations].sort());
});

for (const path of [
  "/opengraph-image",
  "/twitter-image",
  "/icon",
  "/apple-icon",
] as const) {
  test(`${path} returns an image`, async ({ request }) => {
    const response = await request.get(path);

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toMatch(/^image\//);
  });
}

test("a missing route returns a usable noindex page", async ({ page }) => {
  const expectNoApplicationErrors = collectApplicationErrors(page, {
    allowedDocumentStatuses: [404],
  });
  const response = await page.goto("/__browser-test-missing-route__");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("main")).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Primary navigation" }),
  ).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/i,
  );
  expectNoApplicationErrors();
});
