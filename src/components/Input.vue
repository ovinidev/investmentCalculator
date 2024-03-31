<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  label: String,
  id: String,
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="text-textSecondary lg:text-lg" for="">{{ label }}</label>

    <input
      :data-testid="id"
      class="border-grey border-2 rounded-xl h-16 px-4"
      v-bind="$attrs"
      v-on="$attrs"
    />
  </div>
</template>
