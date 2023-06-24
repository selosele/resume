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
    },
  ],
});

let previousScrollY = 0;

/** 윈도우 스크롤 이벤트 */
const handleScroll = () => {
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
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>

</style>