<template>
  <header class="mt-8 xl:mb-16 mb-12">
    <div class="flex xl:flex-nowrap flex-wrap xl:gap-12 gap-6">
      <div class="flex items-center gap-4">
        <profile-image />
  
        <div>
          <h1 class="text-2xl font-bold">
            {{ uiTextStore.json['name'][0] }}({{ uiTextStore.json['name'][1] }})
          </h1>
    
          <p>{{ uiTextStore.json['job'][1] }}</p>
        </div>
      </div>

      <profile-top-list />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();
</script>

<style lang="scss" scoped>

</style>