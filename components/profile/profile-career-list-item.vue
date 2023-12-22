<template>
  <li>
    <profile-bottom-label-level-2
      class="mb-1"
    >
      {{ item.label[0] }}
      
      <profile-bottom-label-level-2-sub
        :text="[item.label[1], item.label[2]]"
      />
    </profile-bottom-label-level-2>
  
    <ul class="list-disc ml-10">
      <li v-for="(item2,i) in item.text" :key="i">
        {{ item2 }}
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { UiTextGroup } from '@/types/ui-text';

defineProps({

  /** 리스트 항목 */
  item: {
    type: Object as () => UiTextGroup,
    default: () => ({} as UiTextGroup),
  },
});
</script>

<style lang="scss" scoped>

</style>