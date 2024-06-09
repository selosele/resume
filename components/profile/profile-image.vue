<template>
  <div :class="['flex w-16 h-16 items-center',
                'overflow-hidden border-grey-900 rounded-full']"
  >
    <NuxtLink :to="uiTextStore.json['profileImage']" target="_blank">
      <img :src="uiTextStore.json['profileImage']" alt="">
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();
</script>

<style lang="scss" scoped>

</style>