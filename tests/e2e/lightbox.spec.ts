import { expect, test, type Locator } from "@playwright/test";
import { collectApplicationErrors } from "./application-errors";

const lightboxCases = [
  {
    path: "/projects/newbudget",
    projectName: "newBudget",
    title: "Monthly budget workspace",
    caption:
      "The month-first workspace combines income, carryover, recurring obligations, payment state, quick expenses, and remaining balance in one review surface.",
    alt: "newBudget monthly workspace showing income sources, carryover, monthly obligations, payment state, quick-expense entry, and remaining balance.",
    asset: "/images/newbudget/newbudget-monthly-workspace.png",
  },
  {
    path: "/projects/unicos",
    projectName: "Unicos",
    title: "Workflow dashboard",
    caption:
      "The read-only dashboard surfaces active work, pickup readiness, unpaid invoices, closure blockers, and recent repair-order activity.",
    alt: "Unicos dashboard showing active repair-order counts, ready-for-pickup work, unpaid invoices, closure blockers, and recently updated repair orders.",
    asset: "/images/unicos/unicos-dashboard.png",
  },
] as const;

const forkfolioLightboxCase = {
  path: "/projects/forkfolio",
  projectName: "Forkfolio",
  title: "Tenant management dashboard",
  caption:
    "The dashboard shows the tenant-facing management shell, selected restaurant workspace, role context, and operational navigation.",
  alt: "Forkfolio management dashboard for the fictional Ember & Vine showroom showing the selected workspace, website-manager role, signed-in user, and navigation to restaurant, locations, menus, links, promotions, branding, publication, media, and team areas.",
  asset: "/images/forkfolio/forkfolio-management-dashboard.png",
} as const;

async function expectFocusNotOnBackgroundControl(dialog: Locator) {
  const backgroundControlHasFocus = await dialog.evaluate((element) => {
    const activeElement = document.activeElement;
    const isInteractive = activeElement?.matches(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    return Boolean(isInteractive && !element.contains(activeElement));
  });

  expect(backgroundControlHasFocus).toBe(false);
}

for (const lightboxCase of lightboxCases) {
  test(`${lightboxCase.projectName} lightbox supports keyboard and close controls`, async ({
    page,
  }) => {
    const expectNoApplicationErrors = collectApplicationErrors(page);

    await page.goto(lightboxCase.path);
    const startingUrl = page.url();
    const thumbnail = page.getByRole("button", {
      name: `View larger: ${lightboxCase.title} for ${lightboxCase.projectName}`,
      exact: true,
    });
    const cardOriginalLink = page.getByRole("link", {
      name: `Open full-size asset: ${lightboxCase.title} in a new tab`,
      exact: true,
    });

    await expect(thumbnail).toHaveCount(1);
    await expect(thumbnail).toHaveJSProperty("tagName", "BUTTON");
    await thumbnail.focus();
    await expect(thumbnail).toBeFocused();
    await page.keyboard.press("Enter");

    const dialog = page.getByRole("dialog", { name: lightboxCase.title });
    const closeButton = dialog.getByRole("button", { name: "Close" });
    const originalLink = dialog.getByRole("link", {
      name: `Open original asset: ${lightboxCase.title} in a new tab`,
      exact: true,
    });

    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAccessibleName(lightboxCase.title);
    await expect(dialog).toHaveAccessibleDescription(lightboxCase.caption);
    await expect(dialog.getByRole("img", { name: lightboxCase.alt })).toHaveCount(
      1,
    );
    await expect(closeButton).toBeFocused();
    await expect(page.locator("html")).toHaveCSS("overflow", "hidden");
    await expect(page).toHaveURL(startingUrl);

    await page.keyboard.press("Tab");
    await expect(originalLink).toBeFocused();
    await page.keyboard.press("Tab");
    await expectFocusNotOnBackgroundControl(dialog);
    await page.keyboard.press("Tab");
    await expect(closeButton).toBeFocused();

    await expect(originalLink).toHaveAttribute("href", lightboxCase.asset);
    await expect(originalLink).toHaveAttribute("target", "_blank");
    await expect(originalLink).toHaveAttribute("rel", /\bnoopener\b/);
    await expect(originalLink).toHaveAttribute("rel", /\bnoreferrer\b/);
    await expect(cardOriginalLink).toBeAttached();
    await expect(cardOriginalLink).toHaveAttribute("href", lightboxCase.asset);

    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(page.locator("html")).not.toHaveCSS("overflow", "hidden");
    await expect(thumbnail).toBeFocused();

    const scrollBeforeSpace = await page.evaluate(() => window.scrollY);
    await page.keyboard.press("Space");
    await expect(dialog).toBeVisible();
    expect(await page.evaluate(() => window.scrollY)).toBe(scrollBeforeSpace);
    await expect(closeButton).toBeFocused();
    await closeButton.click();
    await expect(dialog).not.toBeVisible();
    await expect(thumbnail).toBeFocused();

    await expect(page.locator("html")).not.toHaveCSS("overflow", "hidden");
    await expect(page).toHaveURL(startingUrl);

    expectNoApplicationErrors();
  });
}

test("Forkfolio representative lightbox supports keyboard and close controls", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const lightboxCase = forkfolioLightboxCase;

  await page.goto(lightboxCase.path);
  const startingUrl = page.url();
  const thumbnail = page.getByRole("button", {
    name: `View larger: ${lightboxCase.title} for ${lightboxCase.projectName}`,
    exact: true,
  });
  const cardOriginalLink = page.getByRole("link", {
    name: `Open full-size asset: ${lightboxCase.title} in a new tab`,
    exact: true,
  });

  await expect(thumbnail).toHaveCount(1);
  await expect(thumbnail).toHaveJSProperty("tagName", "BUTTON");
  await thumbnail.focus();
  await expect(thumbnail).toBeFocused();
  await page.keyboard.press("Enter");

  const dialog = page.getByRole("dialog", { name: lightboxCase.title });
  const closeButton = dialog.getByRole("button", { name: "Close" });
  const originalLink = dialog.getByRole("link", {
    name: `Open original asset: ${lightboxCase.title} in a new tab`,
    exact: true,
  });

  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveAccessibleName(lightboxCase.title);
  await expect(dialog).toHaveAccessibleDescription(lightboxCase.caption);
  await expect(dialog.getByRole("img", { name: lightboxCase.alt })).toHaveCount(
    1,
  );
  await expect(closeButton).toBeFocused();
  await expect(page.locator("html")).toHaveCSS("overflow", "hidden");
  await expect(page).toHaveURL(startingUrl);

  await page.keyboard.press("Tab");
  await expect(originalLink).toBeFocused();
  await page.keyboard.press("Tab");
  await expectFocusNotOnBackgroundControl(dialog);

  await expect(originalLink).toHaveAttribute("href", lightboxCase.asset);
  await expect(originalLink).toHaveAttribute("target", "_blank");
  await expect(originalLink).toHaveAttribute("rel", /\bnoopener\b/);
  await expect(originalLink).toHaveAttribute("rel", /\bnoreferrer\b/);
  await expect(cardOriginalLink).toBeAttached();
  await expect(cardOriginalLink).toHaveAttribute("href", lightboxCase.asset);

  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(page.locator("html")).not.toHaveCSS("overflow", "hidden");
  await expect(thumbnail).toBeFocused();
  await expect(page).toHaveURL(startingUrl);

  expectNoApplicationErrors();
});

test("the representative lightbox closes from the backdrop", async ({ page }) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const lightboxCase = lightboxCases[0];

  await page.goto(lightboxCase.path);
  const thumbnail = page.getByRole("button", {
    name: `View larger: ${lightboxCase.title} for ${lightboxCase.projectName}`,
  });
  await thumbnail.click();

  const dialog = page.getByRole("dialog", { name: lightboxCase.title });
  await expect(dialog).toBeVisible();
  const box = await dialog.boundingBox();
  expect(box).not.toBeNull();

  await page.mouse.click(Math.max(1, box!.x / 2), box!.y + box!.height / 2);
  await expect(dialog).not.toBeVisible();
  await expect(thumbnail).toBeFocused();

  expectNoApplicationErrors();
});
