<template>
  <profile-bottom-group>
    <profile-bottom-label-level-1>
      {{ uiTextStore.json['skil'].label }}
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <profile-skil-list-item
        v-for="(item,i) in list" :key="i"
        :label="item.label"
        :text="item.text"
      />
    </profile-bottom-text>
  </profile-bottom-group>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';
import { UiTextGroup } from '@/types/ui-text';

const uiTextStore = useUiTextStore();

const list = uiTextStore.json['skil'].text as UiTextGroup[];
</script>

<style lang="scss" scoped>

</style>