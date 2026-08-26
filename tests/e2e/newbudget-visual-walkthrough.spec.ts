import { expect, test } from "@playwright/test";
import { collectApplicationErrors } from "./application-errors";

const unicosVisualTitles = [
  "Workflow dashboard",
  "Repair-order queue",
  "Customer workspace",
  "Repair-order detail workspace",
  "Communication entry workflow",
  "Attachment upload workflow",
  "Estimate creation workflow",
  "Invoice creation workflow",
  "Invoice queue",
  "Operational reports",
  "Development administration console",
  "Domain and service boundaries",
  "Repair-order workflow and lifecycle boundaries",
] as const;

test("newBudget renders the published evidence-led case study", async ({
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

test("Unicos renders existing evidence inline without a legacy gallery", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);

  await page.goto("/projects/unicos");

  await expect(
    page.getByRole("heading", { level: 1, name: "Unicos", exact: true }),
  ).toHaveCount(1);
  await expect(
    page.getByText("Business application in active development", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "Open unicos on GitHub in a new tab",
      exact: true,
    }),
  ).toHaveAttribute("href", "https://github.com/Hone648/unicos");
  await expect(
    page.getByRole("link", {
      name: "Open live application in a new tab",
      exact: true,
    }),
  ).toHaveCount(0);

  for (const heading of [
    "The problem",
    "Three engineering decisions",
    "Sanitized architecture",
    "Repair-order workflow",
    "Supporting operations",
    "Active development boundary",
    "What this project demonstrates",
    "Current status",
  ] as const) {
    await expect(
      page.getByRole("heading", { level: 2, name: heading, exact: true }),
    ).toBeVisible();
  }

  const decisions = page.getByRole("list", {
    name: "High-signal engineering decisions",
    exact: true,
  });
  await expect(decisions.getByRole("listitem")).toHaveCount(3);
  await expect(
    decisions.getByText("The repair order is the shared context"),
  ).toBeVisible();
  await expect(decisions.getByText("Rules and permissions follow the work"))
    .toBeVisible();
  await expect(
    decisions.getByText("Billing stays explicit and transactional"),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Project visuals",
      exact: true,
    }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: /View larger: .* for Unicos/ }),
  ).toHaveCount(13);

  for (const visualTitle of unicosVisualTitles) {
    await expect(
      page.getByRole("button", {
        name: `View larger: ${visualTitle} for Unicos`,
        exact: true,
      }),
    ).toHaveCount(1);
    await expect(
      page.getByRole("link", {
        name: `Open full-size asset: ${visualTitle} in a new tab`,
        exact: true,
      }),
    ).toHaveCount(1);
  }

  await expect(
    page.getByText("not production-deployed", { exact: false }),
  ).toBeVisible();

  expectNoApplicationErrors();
});

test("Home Security uses the visual case-study shell without visual evidence", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);

  await page.goto("/projects/home-security-lab");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Home Security and Automation Lab",
      exact: true,
    }),
  ).toHaveCount(1);
  await expect(
    page.getByText("Operational systems-integration project", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "Open nvr-infrastructure on GitHub in a new tab",
      exact: true,
    }),
  ).toHaveAttribute("href", "https://github.com/Hone648/nvr-infrastructure");
  await expect(
    page.getByRole("link", {
      name: "Open live application in a new tab",
      exact: true,
    }),
  ).toHaveCount(0);

  for (const heading of [
    "The problem",
    "Three engineering decisions",
    "Privacy boundary",
    "What this project demonstrates",
    "Current status",
  ] as const) {
    await expect(
      page.getByRole("heading", { level: 2, name: heading, exact: true }),
    ).toBeVisible();
  }

  const decisions = page.getByRole("list", {
    name: "High-signal engineering decisions",
    exact: true,
  });
  await expect(decisions.getByRole("listitem")).toHaveCount(3);
  await expect(
    decisions.getByText("Troubleshoot the event path, not the containers"),
  ).toBeVisible();
  await expect(decisions.getByText("Reviewed configuration is source"))
    .toBeVisible();
  await expect(
    decisions.getByText(
      "Documented procedures stay distinct from exercised operations",
    ),
  ).toBeVisible();

  await expect(
    page.getByText(
      /documented procedures without separate evidence that they have been exercised against the live stack/i,
    ),
  ).toBeVisible();
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

test.describe("narrow visual case studies", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  for (const caseStudy of [
    {
      path: "/projects/newbudget",
      heading: "Month-first planning model",
      statusLimit:
        "Debt and installment calculations support planning and history but do not claim lender-exact accounting.",
    },
    {
      path: "/projects/unicos",
      heading: "Sanitized architecture",
      statusLimit:
        "Production infrastructure, monitoring, backup and restore operations, and broader hardening remain incomplete.",
    },
    {
      path: "/projects/home-security-lab",
      heading: "Privacy boundary",
      statusLimit:
        "This is a privately operated home deployment, not a commercial security product or professionally monitored alarm system.",
    },
  ] as const) {
    test(`${caseStudy.path} keeps the case study within the viewport`, async ({
      page,
    }) => {
      const expectNoApplicationErrors = collectApplicationErrors(page);

      await page.goto(caseStudy.path);

      await expect(
        page.getByRole("heading", {
          level: 2,
          name: caseStudy.heading,
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
        page.getByText(caseStudy.statusLimit, { exact: true }),
      ).toBeVisible();

      expectNoApplicationErrors();
    });
  }
});
