<template>
  <div class="flex pl-10 pr-10 gap-6">
    <div class="w-60">
      <p>
        <img :src="uiTextStore.uiText?.profileImage" alt="">
      </p>
    </div>
  
    <div class="w-40">
      <h2 class="text-3xl">{{ uiTextStore.uiText?.koName }}</h2>

      <profile-list />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();
</script>

<style lang="scss" scoped>

</style>