<template>
  <button
    type="button"
    :class="['text-slate-50', 'border-solid border border-transparent', 'transition',
             { 'rounded-full': rounded }]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    /** 원 스타일 여부 */
    rounded: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>

</style>