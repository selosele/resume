<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <MenuItems :class="['absolute right-0 z-10 mt-2 w-56',
                        'origin-top-right rounded-md bg-white shadow-lg',
                        'ring-1 ring-black ring-opacity-5 focus:outline-none']"
    >
      <div class="py-1">
        <MenuItem
          v-for="(item,i) in list" :key="i"
          v-slot="{ active }">
          <a
            :href="item.href"
            :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
            :download="item.download ? '' : undefined"
            @click="item.event"
          >{{ item.text }} 
          </a>
        </MenuItem>
      </div>
    </MenuItems>
  </transition>
</template>

<script>
import { MenuItems, MenuItem } from '@headlessui/vue';

export default {
  components: {
    MenuItems,
    MenuItem,
  },
  props: {
    /** 드롭다운 메뉴 목록 */
    list: Array,
  },
}
</script>

<style lang="scss" scoped>

</style>