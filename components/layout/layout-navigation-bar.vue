<template>
  <nav :class="['flex', 'items-center', 'w-full', 'h-10',
                'sticky', 'top-0', 'transition',
                { 'shadow-lg': 'down' === layoutStore.windowScrollDir },
                { 'bg-gray-100': 'default' === uiTextStore.json['theme'] },
                { 'bg-gradient-to-r from-cyan-500 to-blue-500': 'blue' === uiTextStore.json['theme'] },
                { 'text-slate-50': 'blue' === uiTextStore.json['theme'] }]"
  >
    <ui-container class="flex justify-between">
      <div class="flex items-center">
        <layout-site-title
          :name="uiTextStore.json['enName'].toUpperCase()"
        />
  
        <div class="flex items-center gap-2 ml-8 text-sm">
          <ui-icon :name="'xi-devices'" />
          <p>{{ uiTextStore.json['enJob'] }}</p>
        </div>
      </div>

      <ui-icon-button
        :icon="'xi-download'"
        :rounded="true"
        :title="uiTextStore.json['downloadButtonName']"
        :class="['w-7', 'h-7',
                 'hover:border-slate-700', 'focus:border-slate-700',
                 'bg-slate-700', 'hover:bg-slate-50', 'focus:bg-slate-50',
                 'hover:text-slate-900', 'focus:text-slate-900']"
        @click="onPrint"
      />
    </ui-container>
  </nav>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';
import { useLayoutStore } from '@/store/layout';

const uiTextStore = useUiTextStore();
const layoutStore = useLayoutStore();

/** 이력서 JPG 다운로드 */
const onPrint = (): void => {
  window.scrollTo(0, 0);

  // TO-DO: 화면 캡쳐 로직
  
};
</script>

<style lang="scss" scoped>

</style>