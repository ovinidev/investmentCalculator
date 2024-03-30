<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  title: String,
  rate: Number,
});
</script>

<template>
  <div
    class="p-8 gap-4 border-gray text-sm flex flex-col items-start bg-white rounded-3xl border-2 border-gray"
  >
    <slot />

    <span
      class="uppercase text-textSecondary font-semibold tracking-widest lg:text-lg"
    >
      {{ title }}
    </span>

    <span v-if="rate" class="font-bold text-textPrimary text-3xl lg:text-6xl">
      R$ {{ rate.toFixed(2) }}
    </span>
  </div>
</template>
