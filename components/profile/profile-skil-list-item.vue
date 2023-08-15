<template>
  <li class="xs:w-[calc(50%-1.75rem)] w-full">
    <profile-bottom-label-level-2>
      {{ label }}
    </profile-bottom-label-level-2>
  
    <p class="flex flex-wrap gap-1">
      <span
        v-for="(item,i) in text" :key="i"
        class="px-[0.6rem] py-[0.125rem] bg-blue-300 text-base rounded"
        >
        {{ item }}
      </span>
    </p>
  </li>
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