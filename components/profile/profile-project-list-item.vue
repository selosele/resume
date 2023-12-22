<template>
  <li class="xl:w-[calc(33.33%-2rem)] sm:w-[calc(50%-2rem)] w-full">
    <NuxtLink :to="`/projects/${item.id}`" class="overflow-hidden flex flex-wrap flex-col rounded-md bg-white shadow-md">
      <p class="overflow-hidden sm:h-[17.6rem] h-[180px] bg-slate-200">
        <img :src="item.image" alt="" class="w-full">
      </p>

      <profile-bottom-label-level-2
        class="w-full mb-0 p-3 truncate"
      >
        {{ item.label[0] }}

        <!--
        <profile-bottom-label-level-2-sub
          :text="[item.label[1], item.label[2], item.label[3]]"
        />
        -->
      </profile-bottom-label-level-2>
  
      <!--
      <ul class="list-disc ml-10">
        <li v-for="(item2, i) in text" :key="i">
          {{ item2 }}
        </li>
      </ul>
      -->
    </NuxtLink>
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