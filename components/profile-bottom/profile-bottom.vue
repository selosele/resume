<template>
  <div>

    <div class="flex flex-wrap lg:gap-8">

      <!-- 내 소개 -->
      <profile-introduction
        v-if="uiTextStore.hasProperty('introduction')"
        class="lg:w-[calc(50%-2rem)]"
      />

      <!-- 보유 기술 -->
      <profile-skil
        v-if="uiTextStore.hasProperty('skil')"
        class="lg:w-[calc(50%-2rem)]"
      />

    </div>

    <!-- 프로젝트 -->
    <profile-project
      v-if="uiTextStore.hasProperty('project')"
    />

    <!-- 경력 -->
    <profile-career
      v-if="uiTextStore.hasProperty('career')"
    />
    
  </div>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();
</script>

<style lang="scss" scoped>

</style>