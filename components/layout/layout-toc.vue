<template>
  <div class="w-3/5 absolute top-full right-0 p-4 bg-stone-50 shadow">
    <h2 class="mb-2 font-bold text-xl">목차</h2>

    <ol class="list-decimal pl-8">
      <template v-for="(item,i) in tocStore.toc" :key="i">
        <li v-if="item.text !== null">
          <NuxtLink :to="`#${item.id ?? item.text}`">
            {{ item.text }}
          </NuxtLink>
        </li>
      </template>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { useTocStore } from '@/store/toc';

const tocStore = useTocStore();
</script>

<style lang="scss" scoped>

</style>