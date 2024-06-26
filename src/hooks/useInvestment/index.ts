import { Ref, ref } from "vue";
import { useToast } from "vue-toast-notification";
import { calculateInvestment } from "../../utils/calculateInvestment";
import { ARCA_RATE, SELIC_RATE } from "../../constants/interestRate";

export interface UseInvestmentProps {
  onChangeInitialInvestment: (value: number) => void; // eslint-disable-line no-unused-vars
  onChangeInvestmentPerMonth: (value: number) => void; // eslint-disable-line no-unused-vars
  onChangeInvestmentTime: (value: number) => void; // eslint-disable-line no-unused-vars
  handleCalculateInvestment: () => void;
  handleClearFields: () => void;
  initialInvestment: Ref<number>;
  investmentPerMonth: Ref<number>;
  investmentTime: Ref<number>;
  rentabilityArca: Ref<number>;
  rentabilitySelic: Ref<number>;
}

export const useInvestment = () => {
  const toast = useToast();

  const initialInvestment = ref(0);
  const investmentPerMonth = ref(0);
  const investmentTime = ref(0);

  const onChangeInitialInvestment = (value: number) => {
    initialInvestment.value = value;
  };

  const onChangeInvestmentPerMonth = (value: number) => {
    investmentPerMonth.value = value;
  };

  const onChangeInvestmentTime = (value: number) => {
    investmentTime.value = value;
  };

  const rentabilitySelic = ref(0);
  const rentabilityArca = ref(0);

  const handleCalculateInvestment = () => {
    if (
      !initialInvestment.value ||
      !investmentPerMonth.value ||
      !investmentTime.value
    ) {
      toast.warning("Preencha todos os campos!", {
        duration: 5000,
        position: "bottom-right",
      });

      return;
    }

    rentabilitySelic.value = calculateInvestment({
      initialInvestment: initialInvestment.value,
      interestRate: SELIC_RATE,
      investmentTime: investmentTime.value,
      investmentPerMonth: investmentPerMonth.value,
    });

    rentabilityArca.value = calculateInvestment({
      initialInvestment: initialInvestment.value,
      interestRate: ARCA_RATE,
      investmentTime: investmentTime.value,
      investmentPerMonth: investmentPerMonth.value,
    });
  };

  const handleClearFields = () => {
    rentabilitySelic.value = 0;
    rentabilityArca.value = 0;
  };

  return {
    onChangeInitialInvestment,
    onChangeInvestmentPerMonth,
    onChangeInvestmentTime,
    handleCalculateInvestment,
    rentabilitySelic,
    rentabilityArca,
    initialInvestment,
    investmentPerMonth,
    investmentTime,
    handleClearFields,
  };
};
