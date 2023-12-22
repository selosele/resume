<template>
  <ui-container>
    <layout-header />

    <slot />

    <layout-footer />
  </ui-container>
</template>

<script setup lang="ts">
const layout = 'default';
</script>

<style lang="scss" scoped>

</style>