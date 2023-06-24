<template>
  <layout-navigation-bar />
  
  <ui-container>
    <layout-header />

    <slot />

    <layout-footer />
  </ui-container>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style lang="scss" scoped>

</style>