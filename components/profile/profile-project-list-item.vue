<template>
  <li>
    <profile-bottom-label-level-2>
      {{ label[0] }}

      <profile-bottom-label-level-2-sub
        :text="[label[1], label[2], label[3]]"
      />
    </profile-bottom-label-level-2>
  
    <ul class="list-disc ml-10">
      <li v-for="(item,i) in text" :key="i">
        {{ item }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    /** 라벨 */
    label: Array,
    /** 내용 */
    text: Array,
  },
}
</script>

<style lang="scss" scoped>

</style>