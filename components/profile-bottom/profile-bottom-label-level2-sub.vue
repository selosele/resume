<template>
  <span class="xs:inline block">
    <template v-for="(item,i) in text" :key="i">
      <span v-if="0 === i" class="hidden xs:inline ml-1 mr-2 align-middle font-light">-</span>
      <profile-bottom-pipe v-if="1 === i" />
      <profile-bottom-pipe v-if="2 === i" />
    
      <span :class="['text-lg font-normal',
                    { 'text-blue-900': 0 === i },
                    { 'text-gray-500': 1 === i },
                    { 'text-gray-500': 2 === i }]"
      >{{ item }}
      </span>
    </template>
  </span>
</template>

<script setup lang="ts">
defineProps({

  /** 내용 */
  text: Array,
});
</script>

<style lang="scss" scoped>

</style>