<template>
  <strong>{{ name }}</strong>
</template>

<script setup lang="ts">
defineProps({
  
  /** 사이트 타이틀명 */
  name: String,
});
</script>

<style lang="scss" scoped>

</style>