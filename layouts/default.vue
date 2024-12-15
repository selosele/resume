<template>
  <layout-mobile-header />
  
  <ui-container>
    <layout-header />

    <slot />

    <layout-footer />
  </ui-container>

  <ui-loading />
</template>

<script setup lang="ts">
const layout = 'default';
</script>

<style lang="scss" scoped>

</style>