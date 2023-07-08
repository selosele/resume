<template>
  <header class="mt-8 mb-16 pt-8 text-center border-t-4 border-grey-900">
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