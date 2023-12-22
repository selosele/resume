<template>
  <i :class="name" aria-hidden="true"></i>
</template>

<script setup lang="ts">
defineProps({
  
  /** 아이콘 클래스명 */
  name: String,
});
</script>

<style lang="scss" scoped>

</style>