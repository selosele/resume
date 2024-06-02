<template>
  <li class="flex flex-wrap xs:gap-4 gap-1 w-full">
    <profile-bottom-label-level-2
      class="mb-1 px-2 bg-blue-300"
    >
      {{ item.label }}
    </profile-bottom-label-level-2>
  
    <p class="flex flex-wrap gap-1 xs:w-auto w-full">
      <span
        v-for="(item2,i) in item.text" :key="i"
        class="flex items-center px-2 text-base text-blue-900"
        >
        #{{ item2 }}
      </span>
    </p>
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