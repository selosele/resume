<template>
  <Menu as="div" class="relative inline-block text-left">
    <ui-dropdown-button :text="text" />

    <ui-dropdown-list :list="list" />
  </Menu>
</template>

<script>
import { Menu } from '@headlessui/vue';

export default {
  components: {
    Menu,
  },
  props: {
    /** 드롭다운 텍스트 */
    text: String,
    /** 드롭다운 메뉴 목록 */
    list: Array,
  },
}
</script>

<style lang="scss" scoped>

</style>