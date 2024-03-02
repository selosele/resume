<template>
  <div class="w-3/5 absolute top-full right-0 px-12 py-4 bg-stone-50 shadow">
    <ol class="list-decimal">
      <li v-for="(item,i) in uiTextStore.toc" :key="i">
        <NuxtLink :to="`#${item.id ?? item.text}`">
          {{ item.text }}
        </NuxtLink>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();
</script>

<style lang="scss" scoped>

</style>