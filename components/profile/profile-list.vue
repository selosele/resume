<template>
  <ul class="mt-3">
    <profile-list-item
      v-for="(item,i) in list" :key="i"
      :icon="item.icon"
      :text="item.text"
      :isLink="item.isLink"
    />
  </ul>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();

const list = [
  { icon: 'xi-call', text: uiTextStore.uiText?.phone, },
  { icon: 'xi-mail-o', text: uiTextStore.uiText?.mail, isLink: true, },
  { icon: 'xi-github', text: uiTextStore.uiText?.github, isLink: true, },
];
</script>

<style lang="scss" scoped>

</style>