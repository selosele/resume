<template>
  <h2 :class="['relative xl:px-12 py-10 border-t border-b border-solid',
               'bg-stone-50', 'font-bold text-4xl leading-tight text-center']">
    <NuxtLink
      to="/#주요 프로젝트"
      id="btnGoList"
      :class="['flex justify-center items-center absolute xl:top-10 top-[-18px] left-0',
               'w-10 h-10 rounded-full bg-gray-800 text-slate-50 text-3xl hover:no-underline']"
    >
      <ui-icon :name="'xi-long-arrow-left'" />
      <span class="sr-only">목록으로 가기</span>
    </NuxtLink>

    {{ title }}
  </h2>

  <div class="flex flex-wrap justify-center mb-10 p-2 bg-slate-100">
    <project-detail-sub-title
      v-for="(item,i) in list" :key="i"
      :title="item.title"
      :text="item.text"
    />
  </div>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();
const texts = uiTextStore.json['project'].text[1];

const props = defineProps({

  /** 프로젝트 명 */
  title: String,
  /** 재직기업 */
  company: String,
  /** 발주처 */
  orderer: String,
  /** 참여기간 */
  period: String,
});

/** 서브 타이틀 리스트 */
const list = [
  { title: texts[0], text: props.company },
  { title: texts[1], text: props.orderer },
  { title: texts[2], text: props.period },
];
</script>

<style lang="scss" scoped>

</style>