<script setup lang="ts">
import Input from "../../components/Input.vue";
import Button from "../../components/Button.vue";
import { twMerge } from "tailwind-merge";
import Header from "../../components/Header.vue";
import arca from "../../assets/arca.svg";
import Content from "../../components/Content.vue";
import Logo from "../../components/Logo.vue";
import Help from "../../assets/help.svg";
import Result from "../../components/Result.vue";
import { useInvestment } from "../../hooks/useInvestment";

const {
  onChangeInitialInvestment,
  onChangeInvestmentPerMonth,
  onChangeInvestmentTime,
  handleCalculateInvestment,
  initialInvestment,
  investmentPerMonth,
  investmentTime,
  rentabilityArca,
  rentabilitySelic,
  handleClearFields,
} = useInvestment();
</script>

<template>
  <Header @click="handleClearFields" />

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

        <div class="flex flex-col gap-8 mt-6 xl:items-center xl:flex-row">
          <Input
            id="initialInvestment"
            @change="(e) => onChangeInitialInvestment(e.target.value)"
            v-model="initialInvestment"
            type="number"
            label="Investimento inicial"
            placeholder="R$ 1000,00"
            :min="0"
          />

          <Input
            id="investmentPerMonth"
            @change="(e) => onChangeInvestmentPerMonth(e.target.value)"
            v-model="investmentPerMonth"
            type="number"
            label="Investimento mensal"
            placeholder="R$ 100,00"
            :min="0"
          />

          <Input
            id="investmentTime"
            @change="(e) => onChangeInvestmentTime(e.target.value)"
            v-model="investmentTime"
            type="number"
            label="Quanto tempo deixaria seu dinheiro investido?"
            placeholder="12 meses"
            :min="0"
          />
        </div>

        <Button
          data-testid="buttonCalculate"
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
        <text>
          <Logo :src="Help" alt="grupo primo logo" class="w-24 sm:w-8" />
        </text>

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
../../hooks/useInvestment/useInvestment
