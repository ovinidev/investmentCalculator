import { test, expect } from "@playwright/test";
import { putCalcOnFields } from "../src/utils/putCalcOnFields";

test.describe("Access home", () => {
  const selicRate = 2348.73;
  const selicFormatted = selicRate?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const arcaRate = 2499.74;
  const arcaFormatted = arcaRate?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  test("should be able to navigate to home", async ({ page }) => {
    await putCalcOnFields(page);

    await page.goto("http://localhost:5173");
    await expect(page).toHaveURL("http://localhost:5173");
  });

  test("should be able to calculate selic", async ({ page }) => {
    await putCalcOnFields(page);

    const selic = await page.$('[data-testid="taxa selic"]');

    expect(await selic?.innerText()).toEqual(selicFormatted);
  });

  test("should be able to calculate arca", async ({ page }) => {
    await putCalcOnFields(page);

    const arca = await page.$('[data-testid="fundo arca"]');

    expect(await arca?.innerText()).toEqual(arcaFormatted);
  });

  test.only("should not be able to calculate investment with empty fields", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173");

    const button = await page.$('[data-testid="buttonCalculate"]');

    await button?.click();

    const toast = await page.waitForSelector('[role="alert"]');

    const isVisible = await toast.isVisible();
    expect(isVisible).toBe(true);

    const toastText = await toast.innerText();
    expect(toastText).toContain("Preencha todos os campos!");
  });
});
