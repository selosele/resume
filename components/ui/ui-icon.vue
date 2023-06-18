<template>
  <i :class="name" aria-hidden="true">
    <slot />
  </i>
</template>

<script>
export default {
  props: {
    /** 아이콘 클래스명 */
    name: String,
  }
}
</script>

<style lang="scss" scoped>

</style>