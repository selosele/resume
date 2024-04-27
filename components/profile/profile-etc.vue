<template>
  <profile-bottom-box>
    <profile-bottom-label-level-1 :icon="'📁'">
      {{ uiTextStore.json['etc'].label }}
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <ul>
        <profile-etc-list-item
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

const list = uiTextStore.json['etc'].text as UiTextGroup[];
</script>

<style lang="scss" scoped>

</style>