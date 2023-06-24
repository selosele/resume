/** UI Text 인터페이스 */
export interface UiText {

  /** 타이틀 */
  title?: string;

  /** 설명 */
  description?: string;

  /** 프로필 이미지 경로 */
  profileImage?: string;

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

  /** 지역 */
  area?: string;

  /** 직업 */
  job?: string;

  /** 직업 영문명 */
  enJob?: string;

  /** 소개 */
  introduction?: UiTextGroup;

  /** 보유 기술 */
  skils?: UiTextGroup;

}

/** UI Text Group 인터페이스 */
export interface UiTextGroup {

  /** 라벨 */
  label: string;

  /** 내용 */
  text: string | string[] | UiTextGroup[];

}
