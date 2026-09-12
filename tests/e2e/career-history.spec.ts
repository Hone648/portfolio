import { expect, test } from "@playwright/test";
import { collectApplicationErrors } from "./application-errors";

test("resume renders Advantage Aircraft technical experience", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const response = await page.goto("/resume");

  expect(response?.status()).toBe(200);

  const entry = page.locator("#experience-advantage-aircraft");
  await expect(entry).toHaveCount(1);
  await expect(entry.getByRole("heading", { name: "Avionics Technician" }))
    .toBeVisible();
  await expect(entry.getByText("Advantage Aircraft Services Inc.")).toBeVisible();
  await expect(entry).toContainText("two-person avionics shop");
  await expect(entry).toContainText("shared-use corporate jets");
  await expect(entry).toContainText("partnering directly with the owner");
  await expect(entry).toContainText("avionics installations");
  await expect(entry).toContainText("repairs");
  await expect(entry).toContainText("troubleshooting");
  await expect(entry).toContainText("equipment upgrades");
  await expect(entry).toContainText("system updates");
  await expect(entry).toContainText("Shared responsibility with the shop owner");

  expectNoApplicationErrors();
});

test("about systems troubleshooting links to Advantage Aircraft resume entry", async ({
  page,
}) => {
  const expectNoApplicationErrors = collectApplicationErrors(page);
  const response = await page.goto("/about");

  expect(response?.status()).toBe(200);

  const systemsTroubleshooting = page
    .getByRole("heading", {
      name: "Systems troubleshooting",
      exact: true,
    })
    .locator("xpath=ancestor::li");
  const relatedExperienceLink = systemsTroubleshooting.getByRole("link", {
    name: "Avionics Technician, Advantage Aircraft Services Inc.",
    exact: true,
  });

  await expect(relatedExperienceLink).toBeVisible();
  await expect(relatedExperienceLink).toHaveAttribute(
    "href",
    "/resume#experience-advantage-aircraft",
  );

  await relatedExperienceLink.click();
  await expect(page).toHaveURL(/\/resume#experience-advantage-aircraft$/);
  await expect(page.locator("#experience-advantage-aircraft")).toBeVisible();

  expectNoApplicationErrors();
});
