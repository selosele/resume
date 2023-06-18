<template>
  <footer class="mt-6 pt-3 pl-3 pr-3 pb-6 border-t-4 border-grey-900">
    {{ uiTextStore.uiText?.title }}
  </footer>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();
</script>

<style lang="scss" scoped>

</style>