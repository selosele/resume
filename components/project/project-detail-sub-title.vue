<template>
  <div class="flex sm:w-auto w-full">
    <h3 :class="{ 'sm:ml-3 sm:pl-3 sm:border-l sm:border-slate-300': 0 < ($.vnode.key as number) }">
      {{ title }}:
    </h3>

    <p class="ml-2">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({

  /** 서브 타이틀 제목 */
  title: String,
  /** 서브 타이틀 텍스트 */
  text: String,
});
</script>

<style lang="scss" scoped>

</style>