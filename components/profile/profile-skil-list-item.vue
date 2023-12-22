<template>
  <li class="xs:w-[calc(50%-1.75rem)] w-full">
    <profile-bottom-label-level-2
      class="mb-1"
    >
      {{ item.label }}
    </profile-bottom-label-level-2>
  
    <p class="flex flex-wrap gap-1">
      <span
        v-for="(item2,i) in item.text" :key="i"
        class="px-[0.6rem] py-[0.125rem] bg-blue-300 text-base rounded"
        >
        {{ item2 }}
      </span>
    </p>
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