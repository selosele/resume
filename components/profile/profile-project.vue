<template>
  <profile-bottom-box>
    <profile-bottom-label-level-1>
      {{ uiTextStore.json['project'].label }}

      <!--
      <ui-help>
        프로젝트명 - 재직기업 | 발주처 | 프로젝트 기간
      </ui-help>
      -->
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <ul class="flex flex-wrap gap-8 p-[0.58823rem] sm:w-[calc(100%+2rem)]">
        <profile-project-list-item
          v-for="(item,i) in list" :key="i"
          :item="item"
        />
      </ul>
    </profile-bottom-text>
  </profile-bottom-box>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';
import { UiTextGroup } from '@/types/ui-text';

const uiTextStore = useUiTextStore();

const list = uiTextStore.json['project'].text as UiTextGroup[];
</script>

<style lang="scss" scoped>

</style>