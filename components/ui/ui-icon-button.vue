<template>
  <ui-button class="flex justify-center items-center">
    <ui-icon :name="icon" />
    <slot />
  </ui-button>
</template>

<script>
export default {
  props: {
    /** 아이콘 클래스명 */
    icon: String,
  },
}
</script>

<style lang="scss" scoped>

</style>