<template>
  <profile-bottom-group>
    <profile-bottom-label-level-1>
      {{ uiTextStore.json['introduction'].label }}
    </profile-bottom-label-level-1>

    <profile-bottom-text>
      <p>
        {{ uiTextStore.json['introduction'].text }}
      </p>
    </profile-bottom-text>
  </profile-bottom-group>
</template>

<script setup lang="ts">
import { useUiTextStore } from '@/store/ui-text';

const uiTextStore = useUiTextStore();
</script>

<style lang="scss" scoped>

</style>