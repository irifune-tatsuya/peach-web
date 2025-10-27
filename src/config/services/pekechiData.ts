import { ServiceData } from '@/types/service';
import { IMAGEBASEURL } from '@/constants';

const serviceNameJp = 'ぺけち';
const serviceNameEn = 'pekechi';

const pekechiImgPath = `${IMAGEBASEURL}/services/${serviceNameEn}`;

export const pekechiData: ServiceData = {
  id: serviceNameEn,
  titleEn: serviceNameEn,
  titleJp: serviceNameJp,
  catchphrase: 'ビジネス感度の高いXからサービスを広げる！',
  mainVisual: {
    url: `${pekechiImgPath}/main-visual.webp`,
    width: 2560,
    height: 1400,
    alt: `X（旧Twitter）運用代行サービス「${serviceNameJp}」を象徴するSNSのメインビジュアル`,
  },
  titleImage: {
    url: `${pekechiImgPath}/title-pekechi.webp`,
    width: 913,
    height: 271,
    alt: `${serviceNameJp} ロゴ`,
  },
  metaDescription: `ピーチウェブのX（旧Twitter）運用代行サービス「${serviceNameJp}」をご紹介。すでにホームページを制作した方向けにあなたのビジネスをさらに広げる運用をご提案します。`,
  descriptionHtml: `
    <p>ホームページを作ったら、リード獲得をさらに加速する「${serviceNameJp}」がおすすめ！</p>
    <p>ぺけちは、スモールビジネスを営むあなたの事業の魅力を感度の高いビジネスパーソンが集うXで拡散代行するサービスです。</p>
    <p>テキスト投稿だけでも十分訴求できるXなら、代行費用を抑えて自分のペースで拡散することができます。</p>
  `,
  relatedFaqTagId: serviceNameEn,
};
