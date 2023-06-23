<template>
  <header class="mt-8 mb-8 pt-6 pl-3 pr-3 pb-6 border-t-4 border-grey-900 text-center">
    <h1 class="text-3xl font-bold">
      {{ uiTextStore.uiText['description'] }}
    </h1>
  </header>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();
</script>

<style lang="scss" scoped>

</style>