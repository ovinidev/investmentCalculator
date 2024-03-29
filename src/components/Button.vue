<script setup lang="ts"></script>

<template>
  <button v-bind="$attrs" v-on="$attrs">
    <slot />
  </button>
</template>
