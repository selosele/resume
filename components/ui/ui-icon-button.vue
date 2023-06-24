<template>
  <button :type="type">
    <ui-icon :name="icon" />
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    /** 버튼 Type */
    type: {
      type: String,
      default: 'button'
    },
    /** 아이콘 클래스명 */
    icon: String,
  },
}
</script>

<style lang="scss" scoped>

</style>