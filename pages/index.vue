<template>
  <profile-bottom />
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';
import { useTocStore } from '@/store/toc';

const uiTextStore = useUiTextStore();
const tocStore = useTocStore();

tocStore.set([
  { text: uiTextStore.json['introduction'].label as string },
  { text: uiTextStore.json['skil'].label as string },
  { text: uiTextStore.json['project'].label as string },
  { text: uiTextStore.json['career'].label as string },
]);
</script>

<style lang="scss" scoped>

</style>