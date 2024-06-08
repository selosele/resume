<template>
  <profile-bottom-box>
    <profile-bottom-label-level-1 :icon="'🔧'">
      {{ uiTextStore.json['skill'].label }}
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <ul class="flex flex-wrap gap-6 xs:justify-center">
        <profile-skill-list-item
          v-for="(item,i) in list" :key="i"
          :item="item"
        />
      </ul>
    </profile-bottom-text>
  </profile-bottom-box>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';
import type { UiTextGroup } from '@/types/ui-text';

const uiTextStore = useUiTextStore();

const list = uiTextStore.json['skill'].text as UiTextGroup[];
</script>

<style lang="scss" scoped>

</style>