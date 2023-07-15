<template>
  <li :class="['flex items-center gap-3 leading-6',
               'xl:w-[calc(50%-8rem)] md:w-[calc(50%-1rem)] sm:w-[calc(50%-3rem)] w-full']"
       v-if="uiTextStore.hasProperty(keyProp)"
  >
    <ui-icon :name="icon" />

    <span class="break-all">
      <NuxtLink
        :to="isMail ? `mailto:${text}` : text"
        :target="isLink ? '_blank' : '_self'"
        v-if="isLink || isMail">{{ text }}
      </NuxtLink>
  
      <template v-else>{{ text }}</template>
    </span>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUiTextStore } from "@/store/ui-text";

const uiTextStore = useUiTextStore();

const props = defineProps({
  
  /** 아이콘 클래스명 */
  icon: String,
  /** 내용 */
  text: String,
  /** key */
  keyProp: String,
});

/** Link인지 확인 */
const isLink = computed(() => -1 < props.text.indexOf('://'));

/** 이메일 주소인지 확인 */
const isMail = computed(() => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(props.text);
});
</script>

<style lang="scss" scoped>

</style>