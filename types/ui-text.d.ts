/** UI Text 인터페이스 */
export interface UiText {

  /** 타이틀 */
  title?: string;

  /** 설명 */
  description?: string;

  /** 프로필 이미지 경로 */
  profileImage?: string; // '/images/[파일명]'

  /** 이름 */
  name?: string[]; // [한글이름, 영문이름]

  /** 연락처 */
  phone?: string;

  /** 이메일 주소 */
  mail?: string;

  /** GitHub 주소 */
  github?: string;

  /** 지역 */
  area?: string;

  /** 직업 */
  job?: string[]; // [한글직업명, 영문직업명]

  /** 소개 */
  introduction?: UiTextGroup;

  /** 보유 기술 */
  skil?: UiTextGroup;

  /** 경력 */
  career?: UiTextGroup;

  /** 프로젝트 */
  project?: UiTextGroup;

  /** 학력 */
  education?: UiTextGroup;

  /** 기타 */
  etc?: UiTextGroup;

}

/** UI Text Group 인터페이스 */
export interface UiTextGroup {

  /** key */
  keyProp?: string;

  /** URL */
  url?: string;

  /** 이미지 */
  image?: string;

  /** 아이콘 */
  icon?: string;

  /** 라벨 */
  label?: string | string[];

  /** 내용 */
  text?: string | string[] | UiTextGroup | UiTextGroup[];

}
