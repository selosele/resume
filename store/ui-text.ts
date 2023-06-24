import { defineStore } from 'pinia';
import { UiText } from '@/types/ui-text.d';
import uiTextJson from '@/static/ui-text.json';

/** UI Text store */
export const useUiTextStore = defineStore('uiText', {
  state: () => ({
    /** ui-text.json 파일 */
    json: {} as UiText,
  }),
  actions: {
    /** ui-text.json 파일 로드 */
    loadUiText(): void {
      this.json = uiTextJson as UiText;
    },
  }
});
