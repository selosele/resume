<template>
  <profile-bottom-box>
    <profile-bottom-label-level-1>
      {{ uiTextStore.json['project'].label }}

      <ui-help>
        프로젝트명 - 재직기업 | 발주처 | 프로젝트 기간
      </ui-help>
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <ul>
        <profile-project-list-item
          v-for="(item,i) in list" :key="i"
          :label="item.label"
          :text="item.text"
          :class="{ 'mt-7': 0 < i }"
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