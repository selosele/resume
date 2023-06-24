<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useUiTextStore } from '@/store/ui-text';
import { useLayoutStore } from '@/store/layout';

const uiTextStore = useUiTextStore();
const layoutStore = useLayoutStore();

uiTextStore.loadUiText();

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

let previousScrollY = 0;

/** 윈도우 스크롤 */
const onScroll = (): void => {
  const currentScrollY = window.scrollY;

  // 아래로 스크롤될 때
  if (currentScrollY > previousScrollY) {
    layoutStore.windowScrollDir = 'down';
  }
  // 위로 스크롤될 때
  else if (currentScrollY < previousScrollY) {
    layoutStore.windowScrollDir = 'up';
  }

  previousScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style lang="scss" scoped>

</style>