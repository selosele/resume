<template>
  <profile-bottom-group v-for="(item,i) in list" :key="i">
    <profile-bottom-label-level-1>
      <span v-html="item.label" />
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <profile-career-list-item
        v-for="(item2,j) in (item.text as UiTextGroup[])" :key="j"
        :label="item2.label"
        :text="item2.text"
      />
    </profile-bottom-text>
  </profile-bottom-group>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';
import { UiTextGroup } from '@/types/ui-text';

const uiTextStore = useUiTextStore();

const list = uiTextStore.json['career'] as UiTextGroup[];
</script>

<style lang="scss" scoped>

</style>