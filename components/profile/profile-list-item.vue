<template>
  <li class="flex gap-3 items-center">
    <ui-icon :name="icon" />

    <template v-if="isLink">
      <NuxtLink :to="'mailto:' + text" target="_blank" v-if="isMail">{{ text }}</NuxtLink>
      <NuxtLink :to="text" target="_blank" v-else>{{ text }}</NuxtLink>
    </template>

    <template v-else>
      {{ text }}
    </template>
  </li>
</template>

<script>
export default {
  props: {
    /** 아이콘 클래스명 */
    icon: {
      type: String,
    },
    /** 내용 */
    text: {
      type: String,
    },
    /** URL인지 확인 */
    isLink: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /** 이메일 주소인지 확인 */
    isMail: {
      get() {
        return this.text.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      },
      set(value) {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>