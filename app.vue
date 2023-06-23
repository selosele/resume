<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();

uiTextStore.uiText = uiTextStore.getUiText();

useSeoMeta({
  title: uiTextStore.uiText['title'],
  ogTitle: uiTextStore.uiText['title'],
  description: uiTextStore.uiText['description'],
  ogDescription: uiTextStore.uiText['description'],
});

useHead({
  htmlAttrs: {
    lang: 'ko',
  },
  link: [
    {
      rel: 'stylesheet',
      href: '/css/plugins/XEIcon/xeicon.min.css'
    }
  ],
})
</script>

<style lang="scss" scoped>

</style>