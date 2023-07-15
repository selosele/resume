import { defineStore } from 'pinia';
import { UiText } from '@/types/ui-text.d';
import uiTextJson from '@/ui-text.json';

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
  },
  getters: {
    /** ui-text.json에 key가 존재하는지 확인 */
    hasProperty: (state) => (key: string): boolean => {
      return state.json.hasOwnProperty(key);
    },
  },
});
