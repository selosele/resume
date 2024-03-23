<template>
  <h2 :class="['mb-5 leading-9 text-2xl text-blue-900',
               'font-bold border-b-2 border-blue-900']"
      :id="slotText"
  >
    {{ icon }}
    <a :href="`#${slotText}`" class="hover:no-underline">
      <slot />
    </a>
  </h2>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';

defineProps({
  
  /** 아이콘 */
  icon: String,
});

const slots = useSlots();

/** slot 텍스트 */
const slotText = computed(() => {
  return (slots.default()[0].children) as string;
});
</script>

<style lang="scss" scoped>

</style>