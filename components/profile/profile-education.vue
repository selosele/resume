<template>
  <profile-bottom-box>
    <profile-bottom-label-level-1 :icon="'🎓'">
      {{ uiTextStore.json['education'].label }}
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <ul class="ml-10 list-disc">
        <profile-education-list-item
          v-for="(item,i) in list" :key="i"
          :item="item"
          :class="{ 'mt-7': 0 < i }"
        />
      </ul>
    </profile-bottom-text>
  </profile-bottom-box>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';
import type { UiTextGroup } from '@/types/ui-text';

const uiTextStore = useUiTextStore();

const list = uiTextStore.json['education'].text as UiTextGroup[];
</script>

<style lang="scss" scoped>

</style>