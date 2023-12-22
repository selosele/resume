<template>
  <project-detail-title
    :text="(detail.label as string[])"
  />

  <div class="xl:w-[58.823529rem] mx-auto">
    <project-detail-image
      :image="detail.image"
    />

    <project-detail-text
      v-for="(item,i) in list" :key="i"
      :title="item.title"
      :text="item.text"
    />
  </div>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';
import { UiTextGroup } from '@/types/ui-text';

const uiTextStore = useUiTextStore();
const route = useRoute();

/** 프로젝트 상세정보 */
const detail: UiTextGroup = uiTextStore.get('project', route.params.id);

/** 디테일 텍스트 리스트 */
const list = [
  { title: '역할', text: (detail.text as string[]).slice(1) },
  { title: '기술', text: (detail.text as string[])[0].split(", ") },
  { title: 'URL', text: detail.url },
];
</script>

<style lang="scss" scoped>

</style>