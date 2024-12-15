import { defineStore } from 'pinia';

/** UI Loading store */
export const useUiLoadingStore = defineStore('uiLoading', {
  state: () => ({
    /** 로딩 상태 */
    loading: false,
  }),
  actions: {
    /** 로딩 표출 */
    show(): void {
      this.loading = true;
    },
    /** 로딩 삭제 */
    hide(): void {
      this.loading = false;
    },
  },
  getters: {
    /** 로딩 표출 상태인지 확인 */
    isLoading: (state): boolean => {
      return state.loading;
    },
  },
});
