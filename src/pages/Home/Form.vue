<script setup lang="ts">
import Input from "../../components/Input.vue";
import Button from "../../components/Button.vue";
import { twMerge } from "tailwind-merge";

const handleClick = () => {
  console.log("funfou");
};
</script>

<template>
  <div class="h-100vh">
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
</template>
