<template>
  <div>
    <MenuButton :class="['inline-flex w-full justify-center gap-x-1.5 align-top',
                         'rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900',
                         'shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50']"
    >
      {{ text }}
      <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
    </MenuButton>
  </div>
</template>

<script>
import { MenuButton } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';

export default {
  components: {
    MenuButton,
    ChevronDownIcon,
  },
  props: {
    /** 드롭다운 텍스트 */
    text: String,
  },
}
</script>

<style lang="scss" scoped>

</style>