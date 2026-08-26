import { expect, test } from "@playwright/test";
import { collectApplicationErrors } from "./application-errors";

test("newBudget renders the visual walkthrough reference experience", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);

  await page.goto("/projects/newbudget");

  await expect(
    page.getByRole("heading", { level: 1, name: "newBudget", exact: true }),
  ).toHaveCount(1);
  await expect(
    page.getByText("Deployed production application", { exact: true }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", {
      name: "Open newBudget on GitHub in a new tab",
      exact: true,
    }),
  ).toHaveAttribute("href", "https://github.com/Hone648/newBudget");
  await expect(
    page.getByRole("link", {
      name: "Open live application in a new tab",
      exact: true,
    }),
  ).toHaveAttribute("href", "https://new-budget-three.vercel.app");

  await expect(
    page.getByRole("heading", { level: 2, name: "The problem", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText(/what does this month look like\?/),
  ).toBeVisible();

  const decisions = page.getByRole("list", {
    name: "High-signal engineering decisions",
    exact: true,
  });
  await expect(decisions.getByRole("listitem")).toHaveCount(3);
  await expect(decisions.getByText("The month is the workspace")).toBeVisible();
  await expect(
    decisions.getByText("Money is modeled for consistency"),
  ).toBeVisible();
  await expect(
    decisions.getByText("Ownership is resolved on the server"),
  ).toBeVisible();

  await expect(
    page.getByRole("button", {
      name: "View larger: Monthly budget workspace for newBudget",
      exact: true,
    }),
  ).toHaveCount(1);
  await expect(
    page.getByRole("img", {
      name: /selected month composing income, carryover, recurring items/i,
    }),
  ).toHaveCount(1);
  await expect(
    page.getByRole("button", {
      name: "View larger: Month-first planning model for newBudget",
      exact: true,
    }),
  ).toHaveCount(1);
  await expect(
    page.getByRole("button", {
      name: "View larger: Expense trends for newBudget",
      exact: true,
    }),
  ).toHaveCount(1);
  await expect(
    page.getByRole("button", {
      name: "View larger: Debt and payment trends for newBudget",
      exact: true,
    }),
  ).toHaveCount(1);

  for (const visualTitle of [
    "Monthly budget workspace",
    "Month-first planning model",
    "Expense trends",
    "Debt and payment trends",
  ] as const) {
    await expect(
      page.getByRole("link", {
        name: `Open full-size asset: ${visualTitle} in a new tab`,
        exact: true,
      }),
    ).toHaveCount(1);
  }

  await expect(
    page.getByText(
      "A green build and a successful deployment do not prove that the canonical production domain is serving that build.",
      { exact: true },
    ),
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
      "Debt and installment calculations support planning and history but do not claim lender-exact accounting.",
      { exact: true },
    ),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Project visuals",
      exact: true,
    }),
  ).toHaveCount(0);

  expectNoApplicationErrors();
});

test("legacy case studies keep their existing presentation boundaries", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);

  await page.goto("/projects/unicos");
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Project visuals",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", {
      name: "View larger: Workflow dashboard for Unicos",
      exact: true,
    }),
  ).toHaveCount(1);
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "The problem",
      exact: true,
    }),
  ).toHaveCount(0);

  await page.goto("/projects/home-security-lab");
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
    page.getByRole("heading", {
      level: 1,
      name: "Home Security and Automation Lab",
      exact: true,
    }),
  ).toBeVisible();

  expectNoApplicationErrors();
});

test.describe("narrow newBudget walkthrough", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("keeps visuals and current status within the viewport", async ({
    page,
  }) => {
    const expectNoApplicationErrors = collectApplicationErrors(page);

    await page.goto("/projects/newbudget");

    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Month-first planning model",
        exact: true,
      }),
    ).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);

    await page
      .getByRole("heading", {
        level: 2,
        name: "Current status",
        exact: true,
      })
      .scrollIntoViewIfNeeded();
    await expect(
      page.getByText(
        "Debt and installment calculations support planning and history but do not claim lender-exact accounting.",
        { exact: true },
      ),
    ).toBeVisible();

    expectNoApplicationErrors();
  });
});
