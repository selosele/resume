<template>
  <ul class="flex flex-wrap gap-4 xl:w-[48.82rem]">
    <profile-top-list-item
      v-for="(item,i) in list" :key="i"
      :icon="item.icon"
      :text="item.text"
      :keyProp="item.keyProp"
    />
  </ul>
</template>

<script setup lang="ts">
import { useUiTextStore } from "@/store/ui-text";

const uiTextStore = useUiTextStore();

const list = [
  { icon: 'xi-call', text: uiTextStore.json['phone'], keyProp: 'phone' },
  { icon: 'xi-mail-o', text: uiTextStore.json['mail'], keyProp: 'mail' },
  { icon: 'xi-github', text: uiTextStore.json['github'], keyProp: 'github' },
  { icon: 'xi-maker', text: uiTextStore.json['area'], keyProp: 'area' },
];
</script>

<style lang="scss" scoped>

</style>