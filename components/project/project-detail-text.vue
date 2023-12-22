
<template>
  <h3 v-if="text != ''" class="font-bold text-2xl mb-3">
    {{ title }}
  </h3>

  <ul v-if="text != ''" class="mb-10 list-disc ml-10">
    <template v-if="(text instanceof Array)">
      <li v-for="(item,j) in text" :key="j">
        {{ item }}
      </li>
    </template>

    <li v-else>
      <NuxtLink v-if="isLink(text)"
        :to="text"
        target="_blank"
        title="새 창으로 열립니다"
        class="break-all"
      >
        {{ text }}
      </NuxtLink>

      <template v-else>
        {{ text }}
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps({

  /** 디테일 제목 */
  title: String,
  /** 디테일 텍스트 */
  text: [String, Array],
});

/** Link인지 확인 */
const isLink = (text: string) => {
  return -1 < (text).indexOf('://');
};
</script>

<style lang="scss" scoped>

</style>