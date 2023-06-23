<template>
  <li class="flex items-center gap-3 mt-4">
    <ui-icon :name="icon" />

    <NuxtLink
      :to="isMail ? `mailto:${text}` : text"
      :target="isLink ? '_blank' : '_self'"
      :class="{ 'underline': isLink || isMail }"
      v-if="isLink || isMail">{{ text }}
    </NuxtLink>

    <template v-else>{{ text }}</template>
  </li>
</template>

<script>
export default {
  props: {
    /** 아이콘 클래스명 */
    icon: String,
    /** 내용 */
    text: String,
  },
  computed: {
    /** Link인지 확인 */
    isLink() {
      return -1 < this.text.indexOf('://');
    },
    /** 이메일 주소인지 확인 */
    isMail() {
      return this.text.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    },
  },
}
</script>

<style lang="scss" scoped>

</style>