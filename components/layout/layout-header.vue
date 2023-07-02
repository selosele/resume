<template>
  <header class="my-16 text-center">
    <h1 class="lg:text-3xl text-2xl font-bold">
      {{ uiTextStore.json['description'] }}
    </h1>
  </header>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();
</script>

<style lang="scss" scoped>

</style>