<template>
  <li class="xs:w-[calc(50%-1.75rem)] w-full">
    <profile-bottom-label-level-2>
      {{ label }}
    </profile-bottom-label-level-2>
  
    <p>
      {{ text }}
    </p>
  </li>
</template>

<script>
export default {
  props: {
    /** 라벨 */
    label: String,
    /** 내용 */
    text: String,
  },
}
</script>

<style lang="scss" scoped>

</style>