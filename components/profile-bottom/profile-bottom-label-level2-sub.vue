<template>
  <span class="xs:inline block">
    <template v-for="(item,i) in text" :key="i">
      <span class="hidden xs:inline ml-1 mr-2 align-middle font-light" v-if="0 === i">-</span>
      <span class="ml-1 mr-1 text-gray-400 font-light text-lg" v-if="1 === i">|</span>
    
      <span :class="['text-lg font-normal',
                    { 'text-blue-900': 0 === i },
                    { 'text-gray-500': 1 === i }]"
      >{{ item }}
      </span>
    </template>
  </span>
</template>

<script>
export default {
  props: {
    /** 내용 */
    text: Array,
  },
}
</script>

<style lang="scss" scoped>

</style>