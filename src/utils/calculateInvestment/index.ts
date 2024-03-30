export interface CalculateInvestmentProps {
  initialInvestment: number;
  interestRate: number;
  investmentTime: number;
}

export function calculateInvestment({
  initialInvestment,
  interestRate,
  investmentTime,
}: CalculateInvestmentProps) {
  let amount = initialInvestment;

  for (let i = 0; i < investmentTime; i++) {
    amount = amount * (1 + interestRate);
  }

  return amount;
}
