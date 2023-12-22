import { defineStore } from 'pinia';
import { UiText, UiTextGroup } from '@/types/ui-text.d';
import uiTextJson from '@/ui-text.json';

/** UI Text store */
export const useUiTextStore = defineStore('uiText', {
  state: () => ({
    /** ui-text.json 파일 */
    json: {} as UiText,
  }),
  actions: {
    /** ui-text.json 파일 로드 */
    load(): void {
      this.json = uiTextJson as UiText;
    },
    /** key, id로 객체를 찾아서 반환 */
    get(key: string, id: string): UiTextGroup {
      if (this.json.hasOwnProperty(key)) {
        return (this.json[key].text as UiTextGroup[]).find(d => d.id === id);
      }
      return null;
    },
  },
  getters: {
    /** ui-text.json에 key가 존재하는지 확인 */
    hasProperty: (state) => (key: string): boolean => {
      return state.json.hasOwnProperty(key);
    },
  },
});
