import { Metadata } from 'next';
import SlideViewer from './SlideViewer';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { Service, ImageObject, BreadcrumbList, WithContext } from 'schema-dts';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

const title = 'ぺけち営業スライド';
const description =
  'X運用代行サービス「ぺけち」のご紹介。知名度が低い、集客に手が回らない、SNSのノウハウがない…そんなスモールビジネスオーナーの悩みを専門家が解決。あなたの会社のファンを増やし、Webからの新規顧客獲得をサポートします。';

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
};

interface Slide {
  id: string;
  fileName: string;
  altText: string;
  tocTitle?: string;
  level?: number;
}

const slideData: Slide[] = [
  {
    id: 'slide-01',
    fileName: '01-pekechi-x-management-service-cover.webp',
    altText: 'ぺけち Webから新規ファンを増やすX運用代行サービスのご案内',
  },
  {
    id: 'slide-02',
    fileName: '02-small-business-marketing-challenges.webp',
    altText: 'スモールビジネスの経営課題：認知度不足、リード獲得、人脈の限界など',
    tocTitle: '集客に関する経営課題',
  },
  {
    id: 'slide-03',
    fileName: '03-lead-generation-methods-for-small-business.webp',
    altText: 'スモールビジネスにおける既存のリード獲得手法の一覧',
    tocTitle: '既存のリード獲得手法',
  },
  {
    id: 'slide-04',
    fileName: '04-challenges-of-traditional-lead-generation.webp',
    altText: '既存のリード獲得手法が抱える課題',
  },
  {
    id: 'slide-05',
    fileName: '05-why-sns-is-best-for-small-business.webp',
    altText: 'スモールビジネスにはSNS運用がおすすめな理由の比較表',
    tocTitle: 'SNS運用のススメ',
  },
  {
    id: 'slide-06',
    fileName: '06_5-benefits-of-sns-managemen.webp',
    altText: 'SNS運用の4つのメリット：低コスト、プル型アプローチ、全国へのリーチ、直接アプローチ',
  },
  {
    id: 'slide-07',
    fileName: '07-state-of-corporate-sns-utilization.webp',
    altText: '企業のSNS活用状況と、活用が進まない理由のグラフ',
  },
  {
    id: 'slide-08',
    fileName: '08-purpose-of-corporate-sns-marketing.webp',
    altText: '企業のSNS活用目的と運営体制のグラフ',
  },
  {
    id: 'slide-09',
    fileName: '09-why-x-management-is-optimal-for-small-business.webp',
    altText: 'スモールビジネスのSNS運用にX（旧Twitter）が最適解である4つの理由',
    tocTitle: 'Xが最適解な理由',
  },
  {
    id: 'slide-10',
    fileName: '10-x-branding-strategy-tips-01.webp',
    altText: 'Xでのブランド発信のポイントその1：タイムリーな投稿、独自性のある情報発信、投稿頻度',
  },
  {
    id: 'slide-11',
    fileName: '11-x-branding-strategy-tips-02.webp',
    altText: 'Xでのブランド発信のポイントその2：プロフィール、ユーザーとの交流、検索機能の活用',
  },
  {
    id: 'slide-12',
    fileName: '12-pekechi-concept-your-pr-manager.webp',
    altText:
      'ぺけちはあなたの宣伝部長です!時間のないあなたに寄り添ってあなたのビジョンや想いを言語化。Xからターゲットに発信して、リード・共感・ファンを増やします。',
    tocTitle: 'ぺけちのコンセプト',
  },
  {
    id: 'slide-13',
    fileName: '13-pekechi-service-3-steps.webp',
    altText: 'ぺけちが提供するファン獲得のための3ステップ：初回相談、導入支援、運用代行',
    tocTitle: 'ファン獲得のステップ',
  },
  {
    id: 'slide-14',
    fileName: '14-pekechi-ooda-loop-approach.webp',
    altText: 'ぺけちの行動指針であるOODAループ：観察、状況判断、決定、実行',
  },
  {
    id: 'slide-15',
    fileName: '15-pekechi-maximizing-appeal-to-target.webp',
    altText: 'ぺけちがあなたとターゲットのクロスポイントを最大化する',
    tocTitle: 'ぺけちの強み',
  },
  {
    id: 'slide-16',
    fileName: '16-persona-setting-for-effective-marketing.webp',
    altText: 'ペルソナ設定の重要性と、刺さるコンテンツ制作について',
  },
  {
    id: 'slide-17',
    fileName: '17-pekechi-service-step1-initial-consultation.webp',
    altText: 'STEP 01 初回相談の詳細と料金',
    tocTitle: '料金のご案内',
  },
  {
    id: 'slide-18',
    fileName: '18-pekechi-service-step2-setup-support.webp',
    altText: 'STEP 02 導入支援の詳細と料金',
  },
  {
    id: 'slide-19',
    fileName: '19-pekechi-service-step3-x-management-agency.webp',
    altText: 'STEP 03 運用代行の詳細と料金',
  },
  {
    id: 'slide-20',
    fileName: '20-pekechi-optional-services-and-pricing.webp',
    altText: 'X運用効果を高めるオプションメニューの料金表',
  },
  {
    id: 'slide-21',
    fileName: '21-benefits-of-x-management-agency-loss-reduction.webp',
    altText: 'X運用代行でなくせる4つのロス：時間、学習、営業機会、人件費',
    tocTitle: '自社運用のコスト',
  },
  {
    id: 'slide-22',
    fileName: '22-man-hours-for-in-house-x-management.webp',
    altText: '自社でSNS運用した場合にかかる工数のシミュレーション',
  },
  {
    id: 'slide-23',
    fileName: '23-financial-cost-of-in-house-x-management.webp',
    altText: '自社でSNS運用した場合にかかる金銭的ロスのシミュレーション',
  },
  {
    id: 'slide-24',
    fileName: '24-5-benefits-of-pekechi-x-management-service.webp',
    altText: 'ぺけちにX運用代行を依頼する5つのメリット',
    tocTitle: 'ぺけちのメリット5選',
  },
  {
    id: 'slide-25',
    fileName: '25-peachweb-ceo-tatsuya-irifune-profile.webp',
    altText: 'ぺけち運用責任者 入船達也の自己紹介',
    tocTitle: '運用責任者の自己紹介',
  },
  {
    id: 'slide-26',
    fileName: '26-branding-case-study-okayama-concept-cafe.webp',
    altText: 'ブランディングの実績紹介：岡山コンセプトカフェの採用事例',
    tocTitle: 'ブランディング実績',
  },
  {
    id: 'slide-27',
    fileName: '27-free-online-meeting-reservation.webp',
    altText: '初回無料のオンラインミーティング予約のご案内',
    tocTitle: 'お問い合わせ',
  },
];

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: title,
    href: '/pekechi',
    isCurrentPage: true,
  },
];

export default function Page() {
  const jsonLdData: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'X運用代行サービス「ぺけち」',
    description: description,
    url: `${siteConfig.url}/pekechi`,
    provider: {
      '@type': 'Organization',
      '@id': siteConfig.url,
      name: siteConfig.name,
    },
    serviceType: 'X (旧Twitter) 運用代行サービス',
    image: slideData.map((slide) => ({
      '@type': 'ImageObject',
      url: `${siteConfig.url}/pekechi/${slide.fileName}`, // 注意: ここは実際の画像URLパスに合わせて調整してね！
      name: slide.altText,
      description: slide.altText,
    })) as ImageObject[],
  };

  const breadcrumbJsonLd: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.title,
      item: `${siteConfig.url}${breadcrumb.href}`,
    })),
  };

  return (
    <>
      <JsonLd jsonLdData={jsonLdData} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <SlideViewer slides={slideData} />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
