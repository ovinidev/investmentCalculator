export interface CalculateInvestmentProps {
  initialInvestment: number;
  interestRate: number;
  investmentTime: number;
  investmentPerMonth: number;
}

export function calculateInvestment({
  initialInvestment,
  interestRate,
  investmentTime,
  investmentPerMonth,
}: CalculateInvestmentProps): number {
  const months = Object.keys(new Array(Number(investmentTime)).fill(null));

  const newAmount = months.reduce((acc) => {
    acc = acc * (1 + Number(interestRate));
    acc += Number(investmentPerMonth);
    return acc;
  }, Number(initialInvestment));

  return Number(newAmount.toFixed(2));
}
