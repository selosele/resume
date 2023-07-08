<template>
  <ul class="flex flex-wrap gap-4">
    <profile-top-list-item
      v-for="(item,i) in list" :key="i"
      :icon="item.icon"
      :text="item.text"
    />
  </ul>
</template>

<script setup lang="ts">
import { useUiTextStore } from "@/store/ui-text";

const uiTextStore = useUiTextStore();

const list = [
  { icon: 'xi-call', text: uiTextStore.json['phone'], },
  { icon: 'xi-mail-o', text: uiTextStore.json['mail'], },
  { icon: 'xi-github', text: uiTextStore.json['github'], },
  { icon: 'xi-maker', text: uiTextStore.json['area'], },
];
</script>

<style lang="scss" scoped>

</style>