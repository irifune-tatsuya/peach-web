import type { ServiceImage } from '@/types/service';
import { IMAGEBASEURL } from '@/constants';

const commonImgPath = `${IMAGEBASEURL}/services`;

/** 悩んでるお客様の画像 */
export const dialogueImgClientQuestion: ServiceImage = {
  url: `${commonImgPath}/dialogue-client-question.webp`,
  width: 600,
  height: 800,
  alt: '集客について悩んでいるお客様',
};

/** 答える担当者の画像 */
export const dialogueImgStaffAnswer: ServiceImage = {
  url: `${commonImgPath}/dialogue-salesperson-answer.webp`,
  width: 600,
  height: 800,
  alt: '疑問に答えるピーチウェブ担当者',
};

/** 解決したお客様の画像 (仮) */
export const dialogueImgClientResolved: ServiceImage = {
  url: `${commonImgPath}/dialogue-client-satisfied.webp`,
  width: 600,
  height: 800,
  alt: '疑問が解決してスッキリしたお客様',
};
