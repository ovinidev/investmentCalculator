<script setup lang="ts">
import { defineProps } from "vue";
import { twMerge } from "tailwind-merge";

defineProps({
  className: String,
});
</script>

<template>
  <div
    :class="
      twMerge(
        'bg-[#F6F6F6] rounded-2xl py-8 px-6 flex flex-col gap-5 sm:p-10',
        className
      )
    "
  >
    <slot />
  </div>
</template>
