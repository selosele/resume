<template>
  <nav :class="['w-full h-10',
                'sticky top-0 transition',
                { 'shadow-lg': 'down' === layoutStore.windowScrollDir },
                { 'bg-gray-100': uiTextStore.isDefaultTheme },
                { 'bg-gradient-to-r from-cyan-500 to-blue-500': uiTextStore.isBlueTheme },
                { 'text-slate-50': uiTextStore.isBlueTheme }]"
  >
    <ui-container class="h-full flex justify-between">
      <div class="lg:w-auto w-full flex justify-center items-center">
        <layout-site-title
          :name="uiTextStore.json['enName'].toUpperCase()"
        />
  
        <div class="hidden xs:flex flex-wrap items-center gap-2 ml-8 text-sm break-all">
          <ui-icon :name="'xi-devices'" />
          <p>{{ uiTextStore.json['enJob'] }}</p>
        </div>
      </div>
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