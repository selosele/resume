<template>
  <profile-bottom-box>
    <profile-bottom-label-level-1>
      {{ uiTextStore.json['project'].label }}
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <ul class="flex flex-wrap gap-8 p-[0.58823rem] sm:w-[calc(100%+2rem)]">
        <profile-project-list-item
          v-for="(item,i) in projects" :key="i"
          :id="item.id"
          :title="item.title"
          :image="item.img"
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
  .only(['id', 'title', 'img'])
  .sort({ id: -1 })
  .find();
</script>

<style lang="scss" scoped>

</style>