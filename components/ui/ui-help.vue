<template>
  <button
    type="button"
    title="도움말"
    class="inline-flex justify-center items-center w-7 h-7 text-gray-900"
    @click="toggle"
  >

    <ui-icon :name="isShow ? 'xi-help' : 'xi-help-o'" />
  </button>

  <span v-show="isShow" class="block py-1 px-2 text-base text-gray-950 font-normal bg-yellow-50">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue';

/** 레이어 표시 여부 */
let isShow = ref(false);

/** 레이어 토글 */
const toggle = () => {
  isShow.value = !isShow.value;
};
</script>

<style lang="scss" scoped>

</style>