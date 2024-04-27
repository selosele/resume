<template>
  <li>
    {{ item.label[0] }}
    
    <profile-bottom-label-level-2-sub
      :text="[item.label[1], item.label[2]]"
    />
  </li>
</template>

<script setup lang="ts">
import type { UiTextGroup } from '@/types/ui-text';

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