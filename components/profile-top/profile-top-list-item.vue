<template>
  <li :class="['flex items-center gap-3 leading-6',
               'xl:w-[calc(50%-8rem)] md:w-[calc(50%-1rem)] sm:w-[calc(50%-3rem)] w-full']"
       v-if="uiTextStore.hasProperty(keyProp)"
  >
    <ui-icon :name="icon" />

    <span class="break-all">
      <NuxtLink
        :to="getTo(text)"
        :target="isLink ? '_blank' : '_self'"
        v-if="isLink || isMail || isPhone">{{ text }}
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

/** 이메일주소 검증 정규식 */
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/** 핸드폰번호 검증 정규식 */
const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

/** 이메일 주소인지 확인 */
const isMail = computed(() => {
  return emailRegex.test(props.text);
});

/** 핸드폰 번호인지 확인 */
const isPhone = computed(() => {
  return phoneRegex.test(props.text);
});

/** Link인지 확인 */
const isLink = computed(() => {
  return -1 < props.text.indexOf('://');
});

/** TO를 가공해서 반환 */
const getTo = (text: string): string => {
  if (emailRegex.test(text)) { return `mailto:${text}`; }
  if (phoneRegex.test(text)) { return `tel:${text}` }

  return text;
};
</script>

<style lang="scss" scoped>

</style>