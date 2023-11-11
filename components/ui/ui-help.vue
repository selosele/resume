<template>
  <button
    type="button"
    class="inline-flex justify-center items-center w-7 h-7 text-gray-900"
    @click="toggle"
  >

    <ui-icon :name="isShow ? 'xi-help' : 'xi-help-o'" />
  </button>

  <div v-show="isShow" class="py-1 px-2 text-base font-normal bg-yellow-50">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      /** 레이어 표시 여부 */
      isShow: false,
    }
  },
  methods: {
    /** 레이어 토글 */
    toggle() {
      this.isShow = !this.isShow;
    }
  },
}
</script>

<style lang="scss" scoped>

</style>