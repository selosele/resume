<template>
  <footer :class="['mt-24 pt-3 px-3',
                   'border-t-4 border-grey-900']"
  >
    <p class="text-base">
      {{ uiTextStore.json['title'] }}
    </p>
  </footer>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();
</script>

<style lang="scss" scoped>

</style>