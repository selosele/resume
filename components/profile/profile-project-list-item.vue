<template>
  <profile-bottom-label-level-2>
    {{ label }}
  </profile-bottom-label-level-2>

  <ul class="list-disc ml-10">
    <li v-for="(item,i) in text" :key="i">
      {{ item }}
    </li>
  </ul>
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