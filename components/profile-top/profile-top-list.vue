<template>
  <h2 class="text-4xl text-blue-900 tracking-widest font-bold">
    {{ uiTextStore.uiText['koName'] }}
  </h2>
  
  <ul class="mt-5 text-xl">
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
  { icon: 'xi-call', text: uiTextStore.uiText['phone'], },
  { icon: 'xi-mail-o', text: uiTextStore.uiText['mail'], },
  { icon: 'xi-github', text: uiTextStore.uiText['github'], },
  { icon: 'xi-maker', text: uiTextStore.uiText['area'], },
];
</script>

<style lang="scss" scoped>

</style>