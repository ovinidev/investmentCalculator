<script setup lang="ts">
import Input from "../../components/Input.vue";
import Button from "../../components/Button.vue";
import { twMerge } from "tailwind-merge";
import primoLogo from "../../assets/logo.svg";
import arca from "../../assets/arca.svg";
import Logo from "../../components/Logo.vue";
import { ref } from "vue";

const handleClick = () => {
  console.log("funfou");
};

const result = ref(0);
</script>

<template>
  <header
    class="h-[85.81px] flex items-center px-8 border-b-[1px] border-gray lg:px-24"
  >
    <Logo :src="primoLogo" alt="grupo primo logo" class="h-6" />
  </header>

  <div v-if="result" class="h-100vh">
    <section class="bg-black h-[270px] flex justify-center px-8 flex-col">
      <h1 class="text-white font-extrabold text-3xl w-64 sm:w-full md:text-4xl">
        Simulador de investimento
      </h1>

      <text class="text-textThird text-sm mt-4 md:text-xl">
        Descubra o quanto você pode economizar.
      </text>
    </section>

    <section class="w-full p-8">
      <div
        class="bg-[#F6F6F6] rounded-2xl py-8 px-6 flex flex-col gap-5 sm:p-10"
      >
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
            type="number"
            label="Investimento inicial"
            placeholder="R$ 0,00"
          />

          <Input
            type="number"
            label="Investimento mensal"
            placeholder="R$ 0,00"
          />

          <Input
            type="number"
            label="Quanto tempo deixaria seu dinheiro investido?"
            placeholder="1 ano"
          />
        </div>

        <Button
          @click="handleClick"
          :class="
            twMerge(
              'bg-primary rounded-2xl h-[77px] w-full mt-8 font-extrabold text-lg',
              'sm:w-[278px] sm:ml-auto'
            )
          "
        >
          Calcular ->
        </Button>
      </div>
    </section>
  </div>

  <section class="w-full p-8 lg:px-24 lg:py-16">
    <div class="bg-[#F6F6F6] rounded-2xl py-8 px-6 flex flex-col gap-8 sm:p-10">
      <h2 class="font-bold text-xl text-textPrimary md:text-3xl">Resultado:</h2>

      <div class="flex flex-col gap-4">
        <text
          class="text-textPrimary font-semibold text-md leading-none md:text-xl lg:mt-6"
        >
          Em 24 meses você teria:
        </text>

        <div
          class="p-8 gap-4 border-gray text-sm flex flex-col bg-white rounded-3xl border-2 border-gray"
        >
          <span
            class="uppercase text-textSecondary font-semibold tracking-widest lg:text-lg"
          >
            taxa selic
          </span>
          <span class="font-bold text-textPrimary text-3xl lg:text-6xl"
            >R$ 538,00</span
          >
        </div>

        <div
          class="p-8 gap-4 border-gray text-sm flex flex-col items-start bg-white rounded-3xl border-2 border-gray"
        >
          <Logo :src="arca" alt="grupo primo logo" class="h-6" />

          <span
            class="uppercase text-textSecondary font-semibold tracking-widest lg:text-lg"
          >
            fundo arca
          </span>

          <span class="font-bold text-textPrimary text-3xl lg:text-6xl"
            >R$ 1.0020,00</span
          >
        </div>
      </div>

      <div class="bg-primary w-full h-1 rounded-full" />

      <div class="flex flex-row items-center gap-2 lg:mt-6">
        <span
          class="text-base uppercase text-textPrimary font-semibold tracking-widest lg:text-lg"
        >
          taxa selic:
        </span>

        <span class="text-textPrimary font-extrabold lg:text-lg"> 9,25% </span>
      </div>

      <div class="flex flex-col gap-2 sm:flex-row">
        <span
          class="text-base uppercase text-textPrimary font-semibold tracking-widest lg:text-lg"
        >
          RENTABILIDADE DO ARCA:
        </span>

        <span class="text-textPrimary font-extrabold lg:text-lg">
          18% a.a.
        </span>
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
    </div>
  </section>
</template>
