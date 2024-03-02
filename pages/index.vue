<template>
  <profile-bottom />
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();

uiTextStore.setToc([
  { text: uiTextStore.json['introduction'].label as string },
  { text: uiTextStore.json['skil'].label as string },
  { text: uiTextStore.json['project'].label as string },
  { text: uiTextStore.json['career'].label as string },
]);
</script>

<style lang="scss" scoped>

</style>