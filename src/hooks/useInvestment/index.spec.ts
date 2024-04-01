import { UseInvestmentProps, useInvestment } from ".";
import { beforeEach, describe, expect, it } from "vitest";

describe("useInvestment", () => {
  let useInvestmentInstance: UseInvestmentProps;

  beforeEach(() => {
    useInvestmentInstance = useInvestment();
  });

  it("should be able to init with default values", () => {
    expect(useInvestmentInstance.initialInvestment.value).toBe(0);
    expect(useInvestmentInstance.investmentPerMonth.value).toBe(0);
    expect(useInvestmentInstance.investmentTime.value).toBe(0);
    expect(useInvestmentInstance.rentabilitySelic.value).toBe(0);
    expect(useInvestmentInstance.rentabilityArca.value).toBe(0);
  });

  it("should be able to change initial investment correctly", () => {
    useInvestmentInstance.onChangeInitialInvestment(1000);
    expect(useInvestmentInstance.initialInvestment.value).toBe(1000);
  });

  it("should be able to change investment per month correctly", () => {
    useInvestmentInstance.onChangeInvestmentPerMonth(500);
    expect(useInvestmentInstance.investmentPerMonth.value).toBe(500);
  });

  it("should be able to change investment investment time correctly", () => {
    useInvestmentInstance.onChangeInvestmentTime(12);
    expect(useInvestmentInstance.investmentTime.value).toBe(12);
  });

  it("should be able to clears fields correctly", () => {
    useInvestmentInstance.onChangeInitialInvestment(1000);
    useInvestmentInstance.onChangeInvestmentPerMonth(500);
    useInvestmentInstance.onChangeInvestmentTime(12);

    useInvestmentInstance.handleClearFields();

    expect(useInvestmentInstance.rentabilitySelic.value).toBe(0);
    expect(useInvestmentInstance.rentabilityArca.value).toBe(0);
  });

  it("should be able to calculate selic investment correctly", () => {
    useInvestmentInstance.onChangeInitialInvestment(1000);
    useInvestmentInstance.onChangeInvestmentPerMonth(500);
    useInvestmentInstance.onChangeInvestmentTime(12);

    useInvestmentInstance.handleCalculateInvestment();

    expect(useInvestmentInstance.rentabilitySelic.value).toBe(7357.55);
  });

  it("should be able to calculate arca investment correctly", () => {
    useInvestmentInstance.onChangeInitialInvestment(1000);
    useInvestmentInstance.onChangeInvestmentPerMonth(500);
    useInvestmentInstance.onChangeInvestmentTime(12);

    useInvestmentInstance.handleCalculateInvestment();

    expect(useInvestmentInstance.rentabilityArca.value).toBe(7716.22);
  });
});
