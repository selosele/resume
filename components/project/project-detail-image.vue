<template>
  <p class="overflow-hidden w-full mx-auto mb-10">
    <img :src="image" alt="">
  </p>
</template>

<script setup lang="ts">
defineProps({

  /** 디테일 이미지 */
  image: String,
});
</script>

<style lang="scss" scoped>
// 이미지 높이값 고정 시 사용하는 클래스
.h-fix {
  @apply xl:min-h-[48.117647rem] xl:max-h-[53.529411rem] max-h-[300px] bg-slate-200;
}
</style>