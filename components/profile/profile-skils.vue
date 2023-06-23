<template>
  <profile-bottom-group>
    <profile-bottom-label-level-1>
      {{ uiTextStore.uiText['skils'].label }}
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <profile-skils-list-item
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

const list = uiTextStore.uiText['skils'].text as UiTextGroup[];
</script>

<style lang="scss" scoped>

</style>