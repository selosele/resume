<template>
  <p class="overflow-hidden w-full xl:min-h-[48.117647rem] xl:max-h-[53.529411rem] max-h-[300px] mx-auto mb-10 bg-slate-200">
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

</style>