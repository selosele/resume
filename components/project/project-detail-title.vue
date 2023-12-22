<template>
  <h2 class="relative mb-8 pt-8 pb-8 border-t border-b border-solid font-bold text-4xl text-center break-all">
    <NuxtLink
      to="/"
      :class="['flex justify-center items-center absolute xl:bottom-[1.764705rem] xl:top-auto top-[-18px] left-0',
               'w-10 h-10 rounded-full bg-gray-800 text-slate-50 text-3xl hover:no-underline']"
    >
      <ui-icon :name="'xi-long-arrow-left'" />
      <span class="sr-only">홈으로 가기</span>
    </NuxtLink>

    {{ text[0] }}
  </h2>

  <div class="flex flex-wrap justify-center mb-8">
    <project-detail-sub-title
      v-for="(item,i) in list" :key="i"
      :title="item.title"
      :text="item.text"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({

  /** 디테일 제목 */
  text: Array,
});

/** 서브 타이틀 리스트 */
const list = [
  { title: '재직기업', text: props.text[1] as string },
  { title: '발주처', text: props.text[2] as string },
  { title: '기간', text: props.text[3] as string },
];
</script>

<style lang="scss" scoped>

</style>