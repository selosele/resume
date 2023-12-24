<template>
  <li class="xl:w-[calc(33.33%-2rem)] sm:w-[calc(50%-2rem)] w-full">
    <NuxtLink :to="`/projects/${id}`" class="overflow-hidden flex flex-wrap flex-col rounded-md bg-white shadow-md">
      <p class="overflow-hidden xl:h-[17.6470588rem] md:h-[240px] sm:h-[200px] h-[180px] bg-slate-200">
        <img :src="image" alt="" class="w-full">
      </p>

      <profile-bottom-label-level-2
        class="w-full mb-0 p-3 truncate"
      >
        {{ title }}
      </profile-bottom-label-level-2>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
defineProps({
  
  /** 프로젝트 아이디 */
  id: String,
  /** 프로젝트 명 */
  title: String,
  /** 프로젝트 이미지 경로 */
  image: String,
});
</script>

<style lang="scss" scoped>

</style>