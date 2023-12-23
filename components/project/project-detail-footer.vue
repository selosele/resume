<template>
  <div class="flex justify-between mt-14">
    <div>
      <NuxtLink
        v-if="prevId"
        :to="`/projects/${prevId}`"
        class="block bg-slate-200 px-4 py-1"
      >
      이전
      </NuxtLink>
    </div>

    <div>
      <NuxtLink
        v-if="nextId"
        :to="`/projects/${nextId}`"
        class="block bg-slate-200 px-4 py-1"
      >
      다음
      </NuxtLink>
    </div>
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