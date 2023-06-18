import { defineStore } from 'pinia';
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

/** UI Text 인터페이스 */
interface UiText {

  /** 타이틀 */
  title?: string;

  /** 설명 */
  description?: string;

  /** 프로필 이미지 경로 */
  profileImage?: string;

  /** 소개 */
  introduction?: string;

  /** 한글이름 */
  koName?: string;

  /** 영문이름 */
  enName?: string;

  /** 연락처 */
  phone?: string;

  /** 이메일 */
  mail?: string;

  /** GitHub */
  github?: string;

}
