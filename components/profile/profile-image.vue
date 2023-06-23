<template>
  <div class="flex items-center overflow-hidden border-solid border-4 h-60">
    <img :src="uiTextStore.uiText['profileImage']" alt="">
  </div>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();
</script>

<style lang="scss" scoped>

</style>