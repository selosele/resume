import { defineStore } from 'pinia';
import type { Toc } from '@/types/toc.d';

/** 목차 store */
export const useTocStore = defineStore('toc', {
  state: () => ({
    /** 목차 */
    toc: [] as Toc[],
  }),
  actions: {
    /** 목차 설정 */
    set(value: Toc[]): void {
      this.toc = value;
    },
  },
});
