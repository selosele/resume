<template>
  <profile-bottom-label-level-2>
    {{ label }}
  </profile-bottom-label-level-2>

  <p class="mb-5">
    {{ text.join(', ') }}
  </p>
</template>

<script>
export default {
  props: {
    /** 라벨 */
    label: String,
    /** 내용 */
    text: Array,
  },
}
</script>

<style lang="scss" scoped>

</style>