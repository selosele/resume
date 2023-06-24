import { defineStore } from 'pinia';

/** 레이아웃 store */
export const useLayoutStore = defineStore('layout', {
  state: () => ({
    /** 윈도우 스크롤 방향 */
    windowScrollDir: 'up', // 위: up, 아래: down
  }),
});
