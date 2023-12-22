<template>
  <li v-if="uiTextStore.hasProperty(item.keyProp)"
      :class="['flex items-center gap-3 leading-6',
               'xl:w-[calc(50%-8rem)] md:w-[calc(50%-1rem)] sm:w-[calc(50%-3rem)] w-full']"
  >
    <ui-icon :name="item.icon" />

    <span class="break-all">
      <NuxtLink
        v-if="isLink || isMail || isPhone"
        :to="getTo(item.text as string)"
        :target="isLink ? '_blank' : '_self'"
        >
        {{ item.text }}
      </NuxtLink>
  
      <template v-else>{{ item.text }}</template>
    </span>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUiTextStore } from '@/store/ui-text';
import { UiTextGroup } from '@/types/ui-text';

const uiTextStore = useUiTextStore();

const props = defineProps({
  
  /** 리스트 항목 */
  item: {
    type: Object as () => UiTextGroup,
    default: () => ({} as UiTextGroup),
  },
});

/** 이메일주소 검증 정규식 */
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/** 핸드폰번호 검증 정규식 */
const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

/** 이메일 주소인지 확인 */
const isMail = computed(() => {
  return emailRegex.test(props.item.text as string);
});

/** 핸드폰 번호인지 확인 */
const isPhone = computed(() => {
  return phoneRegex.test(props.item.text as string);
});

/** Link인지 확인 */
const isLink = computed(() => {
  return -1 < (props.item.text as string).indexOf('://');
});

/** to를 가공해서 반환 */
const getTo = (text: string): string => {
  if (emailRegex.test(text)) { return `mailto:${text}`; }
  if (phoneRegex.test(text)) { return `tel:${text}` }

  return text;
};
</script>

<style lang="scss" scoped>

</style>