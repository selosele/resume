<template>
  <profile-bottom-box>
    <profile-bottom-label-level-1 :icon="'📚'">
      {{ uiTextStore.json['project'].label }}
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <p class="mb-[0.66177rem]">
        {{ uiTextStore.json['project'].text[0][0] }}
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
  .where({ 'publish': true })
  .sort({ sort: -1 })
  .find();
</script>

<style lang="scss" scoped>

</style>