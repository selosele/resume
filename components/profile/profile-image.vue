<template>
  <div :class="['w-56 h-56 flex items-center',
                'overflow-hidden border-solid border-4 border-grey-900 rounded-full']"
  >
    <img :src="uiTextStore.json['profileImage']" alt="">
  </div>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();
</script>

<style lang="scss" scoped>

</style>