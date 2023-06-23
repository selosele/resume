import { defineStore } from 'pinia';
import { UiText } from '@/types/ui-text.d';
import uiText from '@/static/ui-text.json';

/** UI Text store */
export const useUiTextStore = defineStore('uiText', {
  state: () => ({
    uiText: {} as UiText,
  }),
  actions: {
    /** ui-text.json 파일 조회 */
    getUiText(): UiText {
      return uiText;
    },
  }
});
