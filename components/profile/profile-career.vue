<template>
  <profile-bottom-box>
    <profile-bottom-label-level-1>
      {{ uiTextStore.json['career'].label }}
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <ul>
        <profile-career-list-item
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

const list = uiTextStore.json['career'].text as UiTextGroup[];
</script>

<style lang="scss" scoped>

</style>