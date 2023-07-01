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
    /** default 테마인 경우 */
    isDefaultTheme: (state) => state.json['theme'] === 'default',
    /** blue 테마인 경우 */
    isBlueTheme: (state) => state.json['theme'] === 'blue',
  },
});
