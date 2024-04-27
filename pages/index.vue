<template>
  <profile-bottom />
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';
import { useTocStore } from '@/store/toc';

const uiTextStore = useUiTextStore();
const tocStore = useTocStore();

tocStore.set([
  { text: getText('introduction') },
  { text: getText('skill') },
  { text: getText('project') },
  { text: getText('career') },
  { text: getText('education') },
  { text: getText('etc') },
]);

/** 목차 텍스트 반환 */
function getText(key: string) {
  if (uiTextStore.hasProperty(key)) {
    return uiTextStore.json[key].label as string;
  }
  return null;
}
</script>

<style lang="scss" scoped>

</style>