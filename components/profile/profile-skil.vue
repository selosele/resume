<template>
  <profile-bottom-box>
    <profile-bottom-label-level-1>
      {{ uiTextStore.json['skil'].label }}
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <ul :class="['flex flex-wrap gap-7',
                   'xs:justify-center xs:w-[calc(100%+1.75rem)] xs:mx-[-0.875rem]']"
      >
        <profile-skil-list-item
          v-for="(item,i) in list" :key="i"
          :label="item.label"
          :text="item.text"
        />
      </ul>
    </profile-bottom-text>
  </profile-bottom-box>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';
import { UiTextGroup } from '@/types/ui-text';

const uiTextStore = useUiTextStore();

const list = uiTextStore.json['skil'].text as UiTextGroup[];
</script>

<style lang="scss" scoped>

</style>