<template>
  <profile-bottom-box>
    <profile-bottom-label-level-1 :icon="'📚'">
      {{ uiTextStore.json['project'].label }}
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <p class="mb-5">
        참여한 프로젝트를 최신 순으로 구성했습니다. 각 항목을 클릭하면 주요 내용 / 역할&amp;기여도 / 기간 등을 확인할 수 있습니다.
      </p>

      <ul class="p-[0.58823rem]">
        <profile-project-list-item
          v-for="(item,i) in projects" :key="i"
          :id="item.id"
          :title="item.title"
          :orderer="item.orderer"
          :period="item.period"
        />
      </ul>
    </profile-bottom-text>
  </profile-bottom-box>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();

/** 프로젝트 리스트 */
const projects = await queryContent('/projects')
  .only(['id', 'title', 'orderer', 'period'])
  .sort({ id: -1 })
  .find();
</script>

<style lang="scss" scoped>

</style>