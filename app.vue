<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();

uiTextStore.load();

useSeoMeta({
  title: uiTextStore.json['title'],
  ogTitle: uiTextStore.json['title'],
  description: uiTextStore.json['description'],
  ogDescription: uiTextStore.json['description'],
});

useHead({
  htmlAttrs: {
    lang: 'ko',
  },
  link: [
    {
      rel: 'stylesheet',
      href: '/css/plugins/XEIcon/xeicon.min.css'
    },
  ],
});
</script>

<style lang="scss" scoped>

</style>