import { describe, expect, it } from "vitest";
import { calculateInvestment } from ".";
import { ARCA_RATE, SELIC_RATE } from "../../constants/interestRate";

describe("Calculate investment", () => {
  const initialInvestment = 1000;
  const investmentTime = 12;
  const investmentPerMonth = 100;

  it("should be able to calculate investment based on selic", async () => {
    const result = calculateInvestment({
      initialInvestment,
      interestRate: SELIC_RATE,
      investmentTime,
      investmentPerMonth,
    });

    expect(Number(result.toFixed(2))).toBe(2348.73);
  });

  it("should be able to calculate investment based on arca", async () => {
    const result = calculateInvestment({
      initialInvestment,
      interestRate: ARCA_RATE,
      investmentTime,
      investmentPerMonth,
    });

    expect(Number(result.toFixed(2))).toBe(2499.74);
  });
});
