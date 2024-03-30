<script setup lang="ts">
import Input from "../../components/Input.vue";
import Button from "../../components/Button.vue";
import { twMerge } from "tailwind-merge";
import primoLogo from "../../assets/logo.svg";
import arca from "../../assets/arca.svg";
import Logo from "../../components/Logo.vue";
import Content from "../../components/Content.vue";
import Result from "../../components/Result.vue";
import { ref } from "vue";
import { calculateInvestment } from "../../utils/calculateInvestment";
import { ARCA_RATE, SELIC_RATE } from "../../constants/interestRate";
import { useToast } from "vue-toast-notification";

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
  });

  rentabilityArca.value = calculateInvestment({
    initialInvestment: initialInvestment.value,
    interestRate: ARCA_RATE,
    investmentTime: investmentTime.value,
  });
};
</script>

<template>
  <header
    class="h-[85.81px] flex items-center px-8 border-b-[1px] border-gray lg:px-24"
  >
    <Logo :src="primoLogo" alt="grupo primo logo" class="h-6" />
  </header>

  <section v-if="!rentabilitySelic" class="h-100vh">
    <section
      class="bg-black h-[270px] flex justify-center px-8 flex-col lg:px-24"
    >
      <h1 class="text-white font-extrabold text-3xl w-64 sm:w-full md:text-4xl">
        Simulador de investimento
      </h1>

      <text class="text-textThird text-sm mt-4 md:text-xl">
        Descubra o quanto você pode economizar.
      </text>
    </section>

    <section class="w-full p-8 lg:px-24 lg:py-16">
      <Content>
        <h2 class="font-semibold text-xl text-textPrimary md:text-3xl">
          Simule agora
        </h2>

        <text
          class="text-textSecondary font-normal text-md leading-none md:text-xl"
        >
          Faça uma comparação e comece a investir em uma experiência fácil e
          intuitiva:
        </text>

        <div class="flex flex-col gap-8 mt-6 lg:items-center lg:flex-row">
          <Input
            @change="(e) => onChangeInitialInvestment(e.target.value)"
            v-model="initialInvestment"
            type="number"
            label="Investimento inicial"
            placeholder="R$ 0,00"
          />

          <Input
            @change="(e) => onChangeInvestmentPerMonth(e.target.value)"
            v-model="investmentPerMonth"
            type="number"
            label="Investimento mensal"
            placeholder="R$ 0,00"
          />

          <Input
            @change="(e) => onChangeInvestmentTime(e.target.value)"
            v-model="investmentTime"
            type="number"
            label="Quanto tempo deixaria seu dinheiro investido?"
            placeholder="12 meses"
          />
        </div>

        <Button
          @click="handleCalculateInvestment"
          :class="
            twMerge(
              'bg-primary rounded-2xl h-[77px] w-full mt-8 font-extrabold text-lg',
              'sm:w-[278px] sm:ml-auto'
            )
          "
        >
          Calcular ->
        </Button>
      </Content>
    </section>
  </section>

  <section v-if="rentabilitySelic" class="w-full p-8 lg:px-24 lg:py-16">
    <Content>
      <h2 class="font-bold text-xl text-textPrimary md:text-3xl">Resultado:</h2>

      <div class="flex flex-col gap-4">
        <text
          class="text-textPrimary font-semibold text-md leading-none md:text-xl lg:mt-6"
        >
          Em {{ investmentTime }} meses você teria:
        </text>

        <Result title="taxa selic" :rate="rentabilitySelic" />

        <Result title="fundo arca" :rate="rentabilityArca">
          <Logo :src="arca" alt="grupo primo logo" class="h-6" />
        </Result>
      </div>

      <div class="bg-primary w-full h-1 rounded-full" />

      <div class="flex flex-row items-center gap-2 lg:mt-6">
        <span
          class="text-base uppercase text-textPrimary font-semibold tracking-widest lg:text-lg"
        >
          taxa selic:
        </span>

        <span class="text-textPrimary font-extrabold lg:text-lg">9,25%</span>
      </div>

      <div class="flex flex-col gap-2 sm:flex-row">
        <span
          class="text-base uppercase text-textPrimary font-semibold tracking-widest lg:text-lg"
        >
          RENTABILIDADE DO ARCA:
        </span>

        <span class="text-textPrimary font-extrabold lg:text-lg">18% a.a.</span>
      </div>

      <div class="flex flex-row gap-4 text-textThird text-sm lg:text-base">
        <text>?</text>

        <div class="flex flex-col gap-4">
          <p>
            Valores utilizados no simulador de investimentos (referentes à data
            de última atualização - esses valores podem alterar de acordo com o
            mercado):
          </p>

          <p>- Data da última atualização: 10/01/2024</p>
        </div>
      </div>
    </Content>
  </section>
</template>
../../utils/calculateInvestment/calculateInvestiment
