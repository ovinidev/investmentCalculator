<script setup lang="ts">
import Logo from "./Logo.vue";
import primoLogo from "../assets/logo.svg";
</script>

<template>
  <header
    class="h-[85.81px] flex items-center px-8 border-b-[1px] border-gray lg:px-24"
  >
    <Logo
      :src="primoLogo"
      alt="grupo primo logo"
      class="h-6 cursor-pointer"
      v-on="$attrs"
    />
  </header>
</template>
