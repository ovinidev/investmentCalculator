import { test, expect } from "@playwright/test";

test.describe("Access home", () => {
  test("should have the permission to navigate to home", async ({ page }) => {
    await page.goto("http://localhost:5173");
    await expect(page).toHaveURL("http://localhost:5173");
  });
});
