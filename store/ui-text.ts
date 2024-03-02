import { defineStore } from 'pinia';
import uiTextJson from '@/ui-text.json';
import type { UiText } from '@/types/ui-text.d';
import type { Toc } from '@/types/toc.d';

/** UI Text store */
export const useUiTextStore = defineStore('uiText', {
  state: () => ({
    /** ui-text.json 파일 */
    json: {} as UiText,
    /** 목차 */
    toc: [] as Toc[],
  }),
  actions: {
    /** ui-text.json 파일 로드 */
    load(): void {
      this.json = uiTextJson as UiText;
    },
    /** 목차 설정 */
    setToc(value: Toc[]): void {
      this.toc = value;
    },
  },
  getters: {
    /** ui-text.json에 key가 존재하는지 확인 */
    hasProperty: (state) => (key: string): boolean => {
      return state.json.hasOwnProperty(key);
    },
  },
});
