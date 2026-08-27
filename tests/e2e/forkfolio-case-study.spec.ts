import { expect, test } from "@playwright/test";
import { collectApplicationErrors } from "./application-errors";

const privateRepositoryText =
  "The source repository is private. This case study covers the architecture, implementation, and project details that can be shared publicly.";

test("Forkfolio renders as a private-source active-development case study", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const response = await page.goto("/projects/forkfolio");

  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle("Forkfolio case study | Hunter Kam");
  await expect(
    page.getByRole("heading", { level: 1, name: "Forkfolio", exact: true }),
  ).toHaveCount(1);
  await expect(
    page.getByText("Business application in active development", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByText(
      "A private-source restaurant website platform for tenant-aware content management, controlled preview, and immutable release-backed publication.",
      { exact: true },
    ),
  ).toBeVisible();

  await expect(page.getByText(privateRepositoryText, { exact: true }))
    .toBeVisible();
  const caseStudy = page.getByRole("article");
  await expect(caseStudy).toHaveCount(1);
  await expect(
    caseStudy.getByRole("link", { name: /GitHub|source/i }),
  ).toHaveCount(0);
  await expect(
    caseStudy.locator('a[href^="https://github.com/"]'),
  ).toHaveCount(0);
  await expect(
    caseStudy.getByRole("link", { name: /Open live application/i }),
  ).toHaveCount(0);

  expectNoApplicationErrors();
});

test("Forkfolio presents exactly three engineering decisions", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  await page.goto("/projects/forkfolio");

  const decisions = page.getByRole("list", {
    name: "High-signal engineering decisions",
    exact: true,
  });
  await expect(decisions.getByRole("listitem")).toHaveCount(3);
  await expect(decisions.getByText("Tenant ownership is explicit"))
    .toBeVisible();
  await expect(
    decisions.getByText("Published state is released, not read live"),
  ).toBeVisible();
  await expect(
    decisions.getByText("Wagtail and Django have separate responsibilities"),
  ).toBeVisible();

  expectNoApplicationErrors();
});

test("Forkfolio keeps status, production, and transaction boundaries visible", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  await page.goto("/projects/forkfolio");

  await expect(page.getByText(/remains in active development/i)).toBeVisible();
  await expect(page.getByText(/not presented as production deployed/i))
    .toBeVisible();
  await expect(
    page.getByText(/Those concerns remain future production work/i),
  ).toBeVisible();
  await expect(
    page.getByText(/Ordering and reservation destinations are outbound links/i),
  ).toBeVisible();
  await expect(
    page
      .getByText(/Ordering and reservation destinations are outbound links/i)
      .first(),
  ).toBeVisible();
  await expect(
    page
      .getByText(
        /does not natively process orders, payments, delivery, or reservation inventory/i,
      )
      .first(),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Current status",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByText(
      "Ordering and reservation capabilities are outbound links only; Forkfolio does not natively process orders, payments, delivery, or reservation inventory.",
      { exact: true },
    ),
  ).toBeVisible();

  expectNoApplicationErrors();
});

test("Forkfolio ships without visual evidence in Slice 16D", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  await page.goto("/projects/forkfolio");

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Project visuals",
      exact: true,
    }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: /View larger:/ }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: /Open full-size asset:/ }),
  ).toHaveCount(0);

  expectNoApplicationErrors();
});

test("Forkfolio appears on the project index without source or live actions", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  await page.goto("/projects");

  const forkfolioCard = page
    .getByRole("article")
    .filter({
      has: page.getByRole("heading", {
        level: 2,
        name: "Forkfolio",
        exact: true,
      }),
    });
  await expect(forkfolioCard).toHaveCount(1);

  const caseStudyLink = forkfolioCard.getByRole("link", {
    name: "View case study: Forkfolio",
    exact: true,
  });
  await expect(caseStudyLink).toBeVisible();
  await expect(caseStudyLink).toHaveAttribute("href", "/projects/forkfolio");
  await expect(
    forkfolioCard.getByRole("link", { name: /GitHub|source|live/i }),
  ).toHaveCount(0);

  expectNoApplicationErrors();
});

test("Forkfolio is deferred from homepage featured projects", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  await page.goto("/");

  const featuredRegion = page.getByRole("region", {
    name: "Selected work",
  });
  await expect(featuredRegion).toBeVisible();
  await expect(
    featuredRegion.getByRole("heading", { name: "Forkfolio" }),
  ).toHaveCount(0);
  await expect(
    featuredRegion.getByRole("link", { name: /Forkfolio/ }),
  ).toHaveCount(0);

  expectNoApplicationErrors();
});

test.describe("narrow viewport", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("Forkfolio case study remains usable without horizontal overflow", async ({
    page,
  }) => {
    const expectNoApplicationErrors = collectApplicationErrors(page);
    await page.goto("/projects/forkfolio");

    await expect(
      page.getByRole("heading", { level: 1, name: "Forkfolio", exact: true }),
    ).toBeVisible();
    await page
      .getByRole("heading", {
        level: 2,
        name: "Current status",
        exact: true,
      })
      .scrollIntoViewIfNeeded();
    await expect(
      page.getByText(
        "Forkfolio is in active development and is not production-deployed or presented as operating for live customers.",
        { exact: true },
      ),
    ).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);

    expectNoApplicationErrors();
  });
});
