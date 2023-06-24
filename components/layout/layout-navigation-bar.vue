<template>
  <nav :class="['w-full', 'h-8', 'sticky', 'top-0', 'bg-gray-100',
                { 'shadow-lg': 'down' === layoutStore.windowScrollDir },
                { 'transition': 'down' === layoutStore.windowScrollDir }
  ]">
    <ui-container class="flex justify-between">
      <div class="flex items-center">
        <layout-site-title
          :name="uiTextStore.uiText['enName'].toUpperCase()"
        />
  
        <div class="flex items-center gap-2 ml-8 text-sm">
          <ui-icon :name="'xi-devices'" />
          <p>{{ uiTextStore.uiText['enJob'] }}</p>
        </div>
      </div>

      <ui-icon-button
        :icon="'xi-download'"
        title="이력서 JPG 다운로드"
        class="w-7"
      />
    </ui-container>
  </nav>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';
import { useLayoutStore } from '@/store/layout';

const uiTextStore = useUiTextStore();
const layoutStore = useLayoutStore();
</script>

<style lang="scss" scoped>

</style>