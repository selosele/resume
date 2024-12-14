<template>
  <div id="detailBtns" class="flex justify-end gap-2 mt-14">
    <NuxtLink
      v-if="prevId"
      :to="`/projects/${prevId}`"
      class="block bg-slate-200 px-4 py-1"
    >
    이전
    </NuxtLink>

    <NuxtLink
      v-if="nextId"
      :to="`/projects/${nextId}`"
      class="block bg-slate-200 px-4 py-1"
    >
    다음
    </NuxtLink>

    <NuxtLink
      to="/#주요 프로젝트"
      class="block bg-slate-200 px-4 py-1"
    >
    목록
    </NuxtLink>
  </div>
 
</template>

<script setup lang="ts">
defineProps({

  /** 이전 프로젝트 상세정보 아이디 */
  prevId: String,
  /** 다음 프로젝트 상세정보 아이디 */
  nextId: String,
});
</script>

<style lang="scss" scoped>

</style>