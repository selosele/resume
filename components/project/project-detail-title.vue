<template>
  <h2 :class="['relative mb-8 pt-8 pb-8 border-t border-b border-solid',
               'bg-stone-50', 'font-bold text-4xl leading-tight text-center']">
    <NuxtLink
      to="/#프로젝트"
      :class="['flex justify-center items-center absolute xl:bottom-[1.764705rem] xl:top-auto top-[-18px] left-0',
               'w-10 h-10 rounded-full bg-gray-800 text-slate-50 text-3xl hover:no-underline']"
    >
      <ui-icon :name="'xi-long-arrow-left'" />
      <span class="sr-only">목록으로 가기</span>
    </NuxtLink>

    {{ title }}
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

  /** 프로젝트 명 */
  title: String,
  /** 재직기업 */
  company: String,
  /** 발주처 */
  orderer: String,
  /** 투입기간 */
  period: String,
});

/** 서브 타이틀 리스트 */
const list = [
  { title: '재직기업', text: props.company },
  { title: '발주처', text: props.orderer },
  { title: '투입기간', text: props.period },
];
</script>

<style lang="scss" scoped>

</style>