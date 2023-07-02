<template>
  <h2 class="lg:text-4xl text-3xl text-blue-900 tracking-widest font-bold">
    {{ uiTextStore.json['name'] }}
  </h2>
  
  <ul class="mt-5 lg:text-xl text-lg">
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