<template>
  <nav :class="['flex items-center w-full h-10',
                'sticky top-0 transition',
                { 'shadow-lg': 'down' === layoutStore.windowScrollDir },
                { 'bg-gray-100': uiTextStore.isDefaultTheme },
                { 'bg-gradient-to-r from-cyan-500 to-blue-500': uiTextStore.isBlueTheme },
                { 'text-slate-50': uiTextStore.isBlueTheme }]"
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

      <ui-dropdown :text="'더보기'" :list="dropdownList" />
    </ui-container>
  </nav>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';
import { useLayoutStore } from '@/store/layout';

const uiTextStore = useUiTextStore();
const layoutStore = useLayoutStore();

/** 이력서 JPG 다운로드 */
const onPrintResume = (): void => {
  window.scrollTo(0, 0);

  // TO-DO: 화면 캡쳐 로직
  //location.href = '/documents/이력서_오세현.png';
};

/** 이력서 다운로드 드롭다운 메뉴 목록 */
const dropdownList = [
  { text: '이력서 내려받기', href: '/documents/이력서_오세현.png', event: onPrintResume, download: true, },
  { text: '경력기술서 내려받기', href: '#', event: null, download: false, },
];
</script>

<style lang="scss" scoped>

</style>