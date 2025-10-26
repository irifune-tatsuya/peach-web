import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceDetail, getServicesList, getFaqsByTag } from '@/lib/microcms';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import { draftMode } from 'next/headers';
import { PreviewAlert } from '@/components/common/PreviewAlert';
import type { Service, Article as ArticleType } from '@/types/microcms';
import type {
  Article as ArticleSchema,
  BreadcrumbList,
  FAQPage,
  Question,
  Service as ServiceSchema,
  WithContext,
} from 'schema-dts';
import Image from 'next/image';
import { IMAGEBASEURL } from '@/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import {
  CircleCheck,
  X,
  Check,
  Users,
  Target,
  Sparkles,
  Star,
  ArrowRightLeft,
  ArrowUpDown,
  KeyRound,
  MoveDown,
  Lightbulb,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  Plus,
  Minus,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MeritsSlider } from '@/components/features/MeritsSlider';
import { PlansSlider } from '@/components/features/PlansSlider';
import { CtaButton } from '@/components/ui/CtaButton';
import Link from 'next/link';
import { StepsSlider } from '@/components/features/StepsSlider';
import { SnsDisadvantagesSlider } from '@/components/features/SnsDisadvantagesSlider';

export const revalidate = 0;
const parentSegment = 'services';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ draftKey?: string }>;
};

export async function generateStaticParams() {
  const listData = await getServicesList();
  return listData.contents.map((service) => ({
    slug: service.id,
  }));
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const data = await getServiceDetail(params.slug, { draftKey: searchParams.draftKey });
  const url = `/${parentSegment}/${data.id}`;

  return {
    title: data.title_jp,
    description: data.meta_description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.title_jp,
      description: data.meta_description,
      url: url,
      images: [
        {
          url: data.main_visual.url,
          alt: data.title_jp,
        },
      ],
      type: 'article',
    },
    twitter: {
      title: data.title_jp,
      description: data.meta_description,
      images: [
        {
          url: data.main_visual.url,
          alt: data.title_jp,
        },
      ],
    },
  };
};

const formatOptionPrice = (type: '月額' | '単発', price: number, isStarting: boolean) => {
  const formattedPrice = price.toLocaleString();
  const suffix = isStarting ? '〜' : '';
  return `${type} ${formattedPrice}円 / 税別${suffix}`;
};

const firstDialogueData = [
  {
    speaker: 'client',
    text: '確かにお客様から注文をいただくのにに手こずっているんですけど、ホームページで解決できるんですか...？',
    image: `${IMAGEBASEURL}/services/dialogue-client-question.webp`,
    alt: '悩むお客様',
  },
  {
    speaker: 'staff',
    text: 'そうですね！ホームページはスモールビジネスの集客の問題点である「リード獲得」と「コンバージョン率」を改善できる可能性がありますよ。',
    image: `${IMAGEBASEURL}/services/dialogue-salesperson-answer.webp`,
    alt: 'ピーチウェブ担当者',
  },
  {
    speaker: 'client',
    text: 'リード...？コンバージョン...？なんだか難しそう...。私たちみたいな小さい会社でも、本当に集客できるようになるんですか？',
    image: `${IMAGEBASEURL}/services/dialogue-client-question.webp`,
    alt: '悩むお客様',
  },
  {
    speaker: 'staff',
    text: 'もちろんです！まずはあなたの問題点がリードなのか、コンバージョンなのか考えてみましょう！',
    image: `${IMAGEBASEURL}/services/dialogue-salesperson-answer.webp`,
    alt: 'ピーチウェブ担当者',
  },
];

const businessIssuesData = [
  {
    title: 'そもそも知られていない！',
    description:
      '良い商品やサービスや商品を持っているのに、売り込みが苦手で動けない。だから注文の連絡が一向に来ない...。',
    imageUrl: `${IMAGEBASEURL}/services/problem-lead.webp`,
    alt: 'リード獲得の悩み',
    keyword: 'リード獲得',
  },
  {
    title: '相手に魅力が刺さってない！',
    description:
      '色んな人と名刺交換しまくったり、SNSのフォロワーも集まっているのに見込みのお客様からの反応がない...。',
    imageUrl: `${IMAGEBASEURL}/services/problem-cv.webp`,
    alt: 'コンバージョン率の悩み',
    keyword: 'コンバージョン率',
  },
  {
    title: 'どっちも問題かも！',
    description:
      '自分の商品やサービスに自信が持てない。人と会わないし、SNSもわかからない。それじゃ売れるわけないか...。',
    imageUrl: `${IMAGEBASEURL}/services/problem-lead-and-cv.webp`,
    alt: 'リード獲得とコンバージョン率、両方の悩み',
    keyword: '集客活動してない',
  },
];

const leadInitiatives = [
  '各ページのSEO対策と継続的なブログ更新',
  'SNS運用によるページ誘導',
  'Web広告の運用',
  'MEO対策（Googleビジネスプロフィール）',
];

const cvInitiatives = [
  '伝わるランディングページ制作',
  'ストレスないお問い合わせフォームへの導線設計',
  'お客様の声や導入事例の充実',
  '分かりやすい料金プランの提示',
];

const proposalDialogueData = [
  {
    speaker: 'client',
    text: '問題解決の方程式や対策はわかったけど、やることが多くて大変そう...。',
    image: `${IMAGEBASEURL}/services/dialogue-client-question.webp`,
    alt: '悩むお客様',
  },
  {
    speaker: 'staff',
    text: 'そうですよね。リード獲得でもコンバージョン率でも、いずれの問題であっても集客の第一歩にはホームページ制作をおすすめします。',
    image: `${IMAGEBASEURL}/services/dialogue-salesperson-answer.webp`,
    alt: 'ピーチウェブ担当者',
  },
  {
    speaker: 'client',
    text: 'どうしてホームページなんですか？SNSとか無料で手軽に始めるほうが良さそうなのに...。',
    image: `${IMAGEBASEURL}/services/dialogue-client-question.webp`,
    alt: '悩むお客様',
  },
  {
    speaker: 'staff',
    text: 'わかります！ところがWeb集客の最初の段階でホームページを作ると、こんなにたくさんのメリットがあるんですよ！',
    image: `${IMAGEBASEURL}/services/dialogue-salesperson-answer.webp`,
    alt: 'ピーチウェブ担当者',
  },
];

const meritsData = [
  {
    title: 'あなたの魅力を棚卸しできる',
    description:
      'ホームページ制作は、まず「何を伝えるか」を考えることから始まります。あなたのビジネスの強み、ターゲット、競合調査など「棚卸し」の機会になります。',
    imageUrl: `${IMAGEBASEURL}/services/hagupe/merit-plan-review.webp`,
    alt: '魅力を棚卸しする',
  },
  {
    title: 'あなたの魅力が100%伝わる',
    description:
      'SNSとは違って、ホームページは「あなたが自由に発信できる場所」です。写真、テキスト、デザインを使ってあなたの魅力を精一杯届けることができます。',
    imageUrl: `${IMAGEBASEURL}/services/hagupe/merit-web-design.webp`,
    alt: '魅力を伝えるプレゼンテーション',
  },
  {
    title: '集客成功の方程式が使える',
    description:
      'ブログ更新でリード獲得し、サービスページの改善でコンバージョン率のアップを狙います。ホームページはこの両方を同時に改善できる最強のツールです。',
    imageUrl: `${IMAGEBASEURL}/services/hagupe/merit-sales-improvement.webp`,
    alt: 'マーケティング分析グラフ',
  },
  {
    title: 'あなたの信頼性が高まる',
    description:
      'キチンとしたホームページがあるとあなたの本気度と信頼感が伝わります。名刺交換やSNSフォローの後、お客様が見に来る「あなたの本拠地」となります。',
    imageUrl: `${IMAGEBASEURL}/services/hagupe/merit-trust.webp`,
    alt: '信頼の握手',
  },
];

const faqDialogueData = [
  {
    speaker: 'client',
    text: '制作プランも見たけど、先に無料のSNSから始めるのじゃだめなのかな？',
    image: `${IMAGEBASEURL}/services/dialogue-client-question.webp`,
    alt: '悩むお客様',
  },
  {
    speaker: 'staff',
    text: 'なるほど。SNSから始める方も多いようですが、集客になれないうちに始めるとデメリットも目立つのでおすすめしていません。',
    image: `${IMAGEBASEURL}/services/dialogue-salesperson-answer.webp`,
    alt: 'ピーチウェブ担当者',
  },
  {
    speaker: 'client',
    text: 'SNSを先にスタートさせるのことのデメリット？集客に慣れてからのほうがいいんですね。',
    image: `${IMAGEBASEURL}/services/dialogue-client-question.webp`,
    alt: '悩むお客様',
  },
  {
    speaker: 'staff',
    text: 'そうですね、せっかくですからSNSから集客を始めるデメリットと上手なWeb集客の方法を見ていきましょう。',
    image: `${IMAGEBASEURL}/services/dialogue-salesperson-answer.webp`,
    alt: 'ピーチウェブ担当者',
  },
];

const disadvantagesOfSnsData = [
  {
    title: '投稿に時間がとられる！',
    description:
      '本業も忙しいのに毎日1~3回分の投稿を考えなきゃアカウントが埋もれる...。時間もプレッシャーもかかりすぎ！',
    imageUrl: `${IMAGEBASEURL}/services/hagupe/disadvantages-of-sns-long-post-time.webp`,
    alt: '投稿する時間がもったいない問題',
  },
  {
    title: '成果が出るまでが遠い！',
    description:
      'SNSはあくまでコミュニケーションツール。見込みのお客様がファンになって購入するまで時間がかかり過ぎる...。',
    imageUrl: `${IMAGEBASEURL}/services/hagupe/disadvantages-of-sns-long-lead-time.webp`,
    alt: 'ファンになって購入するまでのリードタイムが長い',
  },
  {
    title: '事業全体を説明しにくい！',
    description:
      'あなたに興味を持ってくれるフォロワーさんが現れても、SNS投稿には文字数制限があって全てを説明できない。',
    imageUrl: `${IMAGEBASEURL}/services/hagupe/disadvantages-of-sns-hard-to-explain.webp`,
    alt: 'SNSでは事業全体を説明することができない',
  },
  {
    title: '受注の受け付けがしにくい！',
    description:
      'SNSのDMでは個別の受注フォームがない...。結局ECサイトやアンケートサイトに誘導しなきゃいけない。',
    imageUrl: `${IMAGEBASEURL}/services/hagupe/disadvantages-of-sns-difficult-to-accept.webp`,
    alt: '受注フォームやECサイトを別で用意しなければならない',
  },
  {
    title: '凍結されたらおしまい！',
    description:
      'SNSは運営権限でアカウントを勝手に凍結します。これまでの投稿もフォロワーも取り返せなくなると大変...。',
    imageUrl: `${IMAGEBASEURL}/services/hagupe/disadvantages-of-sns-account-suspension.webp`,
    alt: 'アカウント凍結リスク問題',
  },
];

const webMarketingStepsData = [
  {
    title: '「Web上の本拠地」を作ろう',
    description:
      'まずはWeb上の本拠地として見込みのお客様にあなたを説明するためのホームページを制作しましょう。プラットフォームの都合に左右されず、アカウント凍結リスクもありません。',
    imageUrl: `${IMAGEBASEURL}/services/hagupe/web-marketing-step1.webp`,
    alt: 'Web上の本拠地となるホームページ',
  },
  {
    title: '良質な記事でファンを育てる',
    description:
      '焦って毎日投稿する必要はありません。ホームページのブログ機能を活用し、お客様にとって役に立つ情報を発信。じっくり時間をかけて信頼関係とファンを育てていきましょう。',
    imageUrl: `${IMAGEBASEURL}/services/hagupe/web-marketing-step2.webp`,
    alt: '良質なコンテンツを作成する',
  },
  {
    title: 'お問い合わせへ自然に誘導',
    description:
      'ホームページなら、訪れた見込み客を自然な流れで「お問い合わせ」や「資料請求」へ誘導する設計が可能です。SNSよりも短期間で確実にコンバージョンへ繋げやすくなります。',
    imageUrl: `${IMAGEBASEURL}/services/hagupe/web-marketing-step3.webp`,
    alt: 'お問い合わせへ誘導する',
  },
  {
    title: 'SNSは「拡散役」として活用',
    description:
      '本拠地ができたら、SNSはホームページへ誘導するための「拡散役」として活用します。万が一アカウントに問題が起きても、大切なWeb資産（ホームページ）は安全ですよ。',
    imageUrl: `${IMAGEBASEURL}/services/hagupe/web-marketing-step4.webp`,
    alt: 'SNSを戦略的に活用する',
  },
];

const ServiceDetailPage = async (props: Props) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const { isEnabled } = await draftMode();
  const service = await getServiceDetail(params.slug, { draftKey: searchParams.draftKey });

  if (!service) {
    notFound();
  }

  let faqs: ArticleType[] = [];
  const faqTagId = service.related_faq_tag?.id;

  if (faqTagId) {
    const faqListData = await getFaqsByTag(faqTagId, { draftKey: searchParams.draftKey });
    faqs = faqListData.contents;
  }

  const breadcrumbsData = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: 'サービス一覧',
      href: `/${parentSegment}`,
      isCurrentPage: false,
    },
    {
      title: service.title_jp,
      href: `/${parentSegment}/${service.id}`,
      isCurrentPage: true,
    },
  ];

  const breadcrumbJsonLd: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbsData.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.title,
      item: `${siteConfig.url}${breadcrumb.href}`,
    })),
  };

  const serviceJsonLd: WithContext<ServiceSchema> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title_jp,
    description: service.meta_description,
    image: service.main_visual.url,
    url: `${siteConfig.url}/${parentSegment}/${service.id}`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logo,
      },
    },
    offers: service.plan.map((p) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: p.plan_name,
      },
      price: p.price,
      priceCurrency: 'JPY',
      description: p.plan_description.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, ''),
    })),
    serviceType: service.title_jp,
  };

  const faqJsonLd: WithContext<FAQPage> | null =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(
            (faq) =>
              ({
                '@type': 'Question',
                name: faq.title,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, ''),
                },
              } as Question),
          ),
        }
      : null;

  return (
    <>
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <JsonLd jsonLdData={serviceJsonLd} />
      {faqJsonLd && <JsonLd jsonLdData={faqJsonLd} />}
      {isEnabled && <PreviewAlert />}
      <section className="relative h-screen md:h-[calc(100vh-76px)] overflow-hidden">
        <Image
          src={service.main_visual.url}
          alt={`${service.title_jp}の背景画像`}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-momo-100/40" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute left-1/2 top-2/5 z-20 w-[80%] max-w-lg -translate-x-1/2 -translate-y-1/3">
          <h1 className="sr-only">{service.title_jp}</h1>
          {service.catchphrase && (
            <div className="relative mb-[1rem] max-w-md z-10">
              <div className="p-4 bg-white rounded-xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <p className="text-center font-bold text-momo-100 text-sm sm:text-base md:text-lg lg:text-xl">
                  {service.catchphrase}
                </p>
                <div
                  className="absolute left-1/2 -bottom-2 w-0 h-0 -translate-x-1/2
                        border-l-[10px] border-l-transparent
                        border-r-[10px] border-r-transparent
                        border-t-[10px] border-t-white"
                />
              </div>
            </div>
          )}
          <div className="w-full flex flex-col items-center">
            {service.title_image && (
              <div className="relative w-full max-w-md">
                <Image
                  src={service.title_image.url}
                  alt={`${service.title_jp}のタイトル画像`}
                  width={service.title_image.width}
                  height={service.title_image.height}
                  className="h-auto w-full"
                />
              </div>
            )}
          </div>
        </div>
      </section>
      {service.worries && service.worries.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="mx-4 max-w-5xl rounded-lg bg-momo-300 py-8 lg:mx-auto">
            <h2 className="text-center font-bold text-lg md:text-2xl">
              こんな
              <span className="mx-1 text-2xl md:text-4xl font-bold text-momo-100">お悩み</span>
              ございませんか？
            </h2>
            <div className="mt-3 items-center justify-center gap-2 md:flex px-2 md:px-4">
              <div className="relative w-full aspect-square mx-auto md:w-full md:max-w-[250px] lg:max-w-[300px] md:h-auto md:mx-0 md:flex-shrink-0">
                <Image
                  src={`${IMAGEBASEURL}/services/issue.webp`}
                  alt="こんなお悩みはございませんか？"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, 300px"
                />
              </div>
              <ul className="mt-0 w-full md:max-w-[550px] list-none px-4 font-bold text-base lg:text-xl lg:text-center md:flex-1">
                {service.worries.map((worry, index) => (
                  <li
                    key={index}
                    className={`
                    flex items-center gap-3
                    border-b border-gray-300 px-5 py-3
                    ${index === 0 ? 'border-t' : ''}
                  `}
                  >
                    <CircleCheck className="!h-5 !w-5 flex-shrink-0 text-momo-100" />
                    <span>{worry.worry_text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle>
            その悩み<span className="hidden md:inline-block">、</span>
            <br className="md:hidden" />
            ホームページで解決できる？
          </SectionTitle>
          <div className="space-y-10 max-w-xl lg:max-w-2xl mx-auto pt-12">
            {firstDialogueData.map((dialogue, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  dialogue.speaker === 'client' ? 'flex-row-reverse md:mr-10' : 'md:ml-10'
                }`}
              >
                <div className="relative w-full max-w-[20%] mx-auto aspect-[3/4]">
                  <Image
                    src={dialogue.image}
                    alt={dialogue.alt}
                    fill
                    className="flex-shrink-0 mt-1"
                  />
                </div>
                <div
                  className={`relative p-5 mt-5 md:mt-10 rounded-xl shadow
              ${dialogue.speaker === 'client' ? 'bg-momo-100 text-white' : 'bg-momo-300'}`}
                >
                  <p className="leading-relaxed">{dialogue.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle>
            あなたの本当の悩みはどれ？
            <br />
            スモールビジネスの問題チェック
          </SectionTitle>
          <div className="pt-12 flex lg:justify-center snap-x snap-mandatory gap-6 overflow-x-auto pb-6 md:pb-0">
            {businessIssuesData.map((card, index) => (
              <div
                key={index}
                className="max-w-[300px] snap-center flex-shrink-0 bg-white shadow-lg rounded-xl border border-momo-300 overflow-hidden transition-transform duration-300 hover:-translate-y-6"
              >
                <div className="relative p-2 bg-momo-200 z-10 rounded-full mx-3 mt-3">
                  <h3 className="text-lg font-bold text-center">{card.title}</h3>
                  <div className="absolute left-1/2 -bottom-2 w-0 h-0 -translate-x-1/2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-momo-200" />
                </div>
                <div className="relative w-full max-w-[240px] mx-auto aspect-square">
                  <Image src={card.imageUrl} alt={card.alt} fill className="object-cover" />
                </div>
                <p className="px-6 pt-3 text-left">{card.description}</p>
                <div className="p-4 m-3 bg-momo-100 rounded-lg text-center">
                  <p className="text-white opacity-80">そんなあなたの問題は...</p>
                  <p className="text-2xl font-bold text-white mt-1">{card.keyword}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 md:mt-24 text-center">
            <div className="flex justify-center items-center gap-4">
              <KeyRound className="w-12 h-12 text-momo-100" />
              <h3 className="text-2xl md:text-3xl font-bold text-start">
                問題解決の鍵は<span className="md:hidden">...</span>
                <br className="md:hidden" />
                <span className="text-momo-100">集客の方程式</span>にあり！
              </h3>
            </div>
            <p className="mt-8 text-lg font-bold">詳しくは...</p>
            <MoveDown className="w-16 h-16 mx-auto mt-8 text-momo-100 animate-bounce" />
          </div>
        </div>
      </section>
      <section
        className="relative py-16 md:py-24 overflow-hidden bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${IMAGEBASEURL}/services/parallax-bg.webp)` }}
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <SectionTitle>
            リードとコンバージョンが
            <br className="md:hidden" />
            集客成功の方程式！
          </SectionTitle>
          <div className="pt-12 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 text-center">
            <div className="p-6 bg-momo-100 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <Badge
                variant="outline"
                className="text-white border-white/50 text-xs md:text-sm px-3 py-1 mb-3"
              >
                多くの人にあなたを知ってもらう
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-white">リード獲得</h3>
            </div>
            <X className="w-8 h-8 md:w-12 md:h-12 mx-auto" />
            <div className="p-6 bg-momo-300 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <Badge variant="outline" className="text-xs md:text-sm px-3 py-1 mb-3">
                高い確率でお客様に選んでもらう
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold">コンバージョン率</h3>
            </div>
          </div>
          <div className="mt-16 flex flex-col md:flex-row items-stretch md:items-center gap-8">
            <div className="w-full md:flex-1 bg-gray-600 p-6 rounded-lg border-2 border-momo-100">
              <h4 className="text-xl font-bold text-momo-100 mb-4">リード獲得の取り組み</h4>
              <ul className="space-y-3">
                {leadInitiatives.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-200">
                    <Check className="w-5 h-5 text-momo-100 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <ArrowUpDown className="w-8 h-8 mx-auto md:hidden" />
              <ArrowRightLeft className="w-10 h-10 mx-auto hidden md:block" />
            </div>
            <div className="w-full md:flex-1 bg-gray-600 p-6 rounded-lg border-2 border-momo-300">
              <h4 className="text-xl font-bold text-momo-300 mb-4">
                コンバージョン率向上の取り組み
              </h4>
              <ul className="space-y-3">
                {cvInitiatives.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-200">
                    <Check className="w-5 h-5 text-momo-300 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle>
            集客の第一歩は
            <br className="md:hidden" />
            ホームページ制作から？
          </SectionTitle>
          <div className="space-y-10 max-w-xl lg:max-w-2xl mx-auto pt-12">
            {proposalDialogueData.map((dialogue, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  dialogue.speaker === 'client' ? 'flex-row-reverse md:mr-10' : 'md:ml-10'
                }`}
              >
                <div className="relative w-full max-w-[20%] mx-auto aspect-[3/4]">
                  <Image
                    src={dialogue.image}
                    alt={dialogue.alt}
                    fill
                    className="flex-shrink-0 mt-1"
                  />
                </div>
                <div
                  className={`relative p-5 mt-5 md:mt-10 rounded-xl shadow
              ${dialogue.speaker === 'client' ? 'bg-momo-100 text-white' : 'bg-momo-300'}`}
                >
                  <p className="leading-relaxed">{dialogue.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle>
            ホームページ制作の
            <br className="md:hidden" />
            4つのメリット
          </SectionTitle>
          <div className="relative pt-12">
            <MeritsSlider meritsData={meritsData} />
            <div className="hidden lg:flex gap-4 absolute -top-8 right-4 z-10 bg-momo-300/50 rounded-full py-2 px-4">
              <button className="swiper-button-prev-custom p-2 bg-white rounded-full shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <ChevronLeft className="w-6 h-6 text-momo-100" />
              </button>
              <button className="swiper-button-next-custom p-2 bg-white rounded-full shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <ChevronRight className="w-6 h-6 text-momo-100" />
              </button>
            </div>
          </div>
          <div className="mt-16 md:mt-24 text-center">
            <div className="flex justify-center items-center gap-4">
              <ThumbsUp className="w-12 h-12 text-momo-100" />
              <h3 className="text-2xl md:text-3xl font-bold text-start">
                ホームページ制作なら<span className="md:hidden">...</span>
                <br className="md:hidden" />
                <span className="text-momo-100">ピーチウェブ</span>におまかせ！
              </h3>
            </div>
            <p className="mt-8 text-lg font-bold">詳しくは...</p>
            <MoveDown className="w-16 h-16 mx-auto mt-8 text-momo-100 animate-bounce" />
          </div>
        </div>
      </section>
      <section
        className="relative py-24 md:py-32 overflow-hidden bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${service.main_visual.url})` }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="w-full md:w-3/4 xl:w-7/12 md:ml-10 xl:ml-0">
            <h2 className="sr-only">ホームページ制作ならピーチウェブの「はぐぺ」</h2>
            {service.title_image && (
              <div className="relative w-full max-w-md mt-2">
                <Image
                  src={service.title_image.url}
                  alt={service.title_jp}
                  width={service.title_image.width}
                  height={service.title_image.height}
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
            )}
            {service.catchphrase && (
              <p className="mt-8 text-2xl md:text-3xl font-bold">{service.catchphrase}</p>
            )}
            <div
              className="mt-6 text-base md:text-lg leading-relaxed prose prose-sm md:prose-base max-w-none"
              dangerouslySetInnerHTML={{ __html: service.description }}
            />
          </div>
        </div>
      </section>
      <section className="bg-momo-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <Image
              src={`${IMAGEBASEURL}/common/contact-bg.webp`}
              alt="お問い合わせ背景"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-12">
              <div className="relative w-48 md:w-1/3 aspect-[600/703] flex-shrink-0 order-1 md:order-none">
                <Image
                  src={`${IMAGEBASEURL}/common/charactor-smile.webp`}
                  alt="笑顔のキャラクター"
                  fill
                  className="object-contain"
                  sizes="(max-width: 767px) 192px, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left text-white order-2 md:order-none">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                  ご要望に応じたカスタマイズ見積もりも受け付けております。
                </h2>
                <p className="text-base md:text-lg text-white/90 mb-6">
                  まずはお気軽にご相談ください。専門のスタッフが丁寧に対応いたします。
                </p>
                <div className="flex justify-center">
                  <Link href="/contact" passHref>
                    <CtaButton size="xl" className="btn-slide-hover">
                      お問い合わせはこちらから
                    </CtaButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-momo-600 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle>
            「{service.title_jp}」が選ばれる{service.strengths.length}つの強み
          </SectionTitle>
          <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-12 lg:gap-y-16">
            {service.strengths.map((strength, index) => (
              <div
                key={index}
                className={`lg:flex lg:items-center lg:gap-12  ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } bg-white shadow-lg rounded-xl overflow-hidden lg:shadow-none lg:bg-transparent lg:rounded-none`}
              >
                <div className="relative w-full aspect-[3/2] lg:flex-1 lg:h-auto rounded-t-xl lg:rounded-xl overflow-hidden">
                  <Image
                    src={strength.strength_image.url}
                    alt={strength.strength_title}
                    fill
                    className="object-cover lg:static lg:w-full lg:h-full"
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 50vw"
                  />
                </div>
                <div className="p-6 lg:p-0 lg:flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-momo-100 opacity-50">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold">{strength.strength_title}</h3>
                  </div>
                  <p className="mt-4 leading-relaxed">{strength.strength_text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle className="pb-12">料金プラン</SectionTitle>
          {service.plan && service.plan.length > 0 ? (
            <PlansSlider plansData={service.plan} />
          ) : (
            <p className="text-center text-gray-500">料金プランは準備中です。</p>
          )}
        </div>
      </section>
      {service.option && service.option.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle className="text-center mb-12">有料オプション</SectionTitle>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
              {service.option.map((option, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-momo-200 rounded-lg overflow-hidden shadow-sm"
                  disabled={!option.option_description}
                >
                  <AccordionTrigger
                    className={`flex justify-between items-center w-full p-4 text-left font-medium hover:no-underline [&>svg]:h-7 [&>svg]:w-7 [&[data-state=open]>svg]:rotate-180 transition-none`}
                    style={{ cursor: option.option_description ? 'pointer' : 'default' }}
                  >
                    <div className="flex flex-col flex-1 pr-4">
                      <span className="text-base md:text-lg">{option.option_name}</span>
                      <span className="text-sm md:text-base text-momo-100 font-semibold whitespace-nowrap mt-1 md:mt-0">
                        {formatOptionPrice(
                          option.option_type,
                          option.option_price,
                          option.is_starting_price,
                        )}
                      </span>
                    </div>
                  </AccordionTrigger>
                  {option.option_description && (
                    <AccordionContent className="p-4 pt-0">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {option.option_description}
                      </p>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}
      <section className="bg-momo-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <Image
              src={`${IMAGEBASEURL}/common/contact-bg.webp`}
              alt="お問い合わせ背景"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-12">
              <div className="relative w-48 md:w-1/3 aspect-[600/703] flex-shrink-0 order-1 md:order-none">
                <Image
                  src={`${IMAGEBASEURL}/common/charactor-smile.webp`}
                  alt="笑顔のキャラクター"
                  fill
                  className="object-contain"
                  sizes="(max-width: 767px) 192px, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left text-white order-2 md:order-none">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                  ご要望に応じたカスタマイズ見積もりも受け付けております。
                </h2>
                <p className="text-base md:text-lg text-white/90 mb-6">
                  まずはお気軽にご相談ください。専門のスタッフが丁寧に対応いたします。
                </p>
                <div className="flex justify-center">
                  <Link href="/contact" passHref>
                    <CtaButton size="xl" className="btn-slide-hover">
                      お問い合わせはこちらから
                    </CtaButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle>
            ホームページ制作が先？
            <br className="md:hidden" />
            SNSからじゃだめ？
          </SectionTitle>
          <div className="space-y-10 max-w-xl lg:max-w-2xl mx-auto pt-12">
            {faqDialogueData.map((dialogue, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  dialogue.speaker === 'client' ? 'flex-row-reverse md:mr-10' : 'md:ml-10'
                }`}
              >
                <div className="relative w-full max-w-[20%] mx-auto aspect-[3/4]">
                  <Image
                    src={dialogue.image}
                    alt={dialogue.alt}
                    fill
                    className="flex-shrink-0 mt-1"
                  />
                </div>
                <div
                  className={`relative p-5 mt-5 md:mt-10 rounded-xl shadow
              ${dialogue.speaker === 'client' ? 'bg-momo-100 text-white' : 'bg-momo-300'}`}
                >
                  <p className="leading-relaxed">{dialogue.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle>
            SNSから集客を始める
            <br className="md:hidden" />
            5つのデメリット
          </SectionTitle>
          <div className="relative pt-12">
            <SnsDisadvantagesSlider disadvantagesOfSnsData={disadvantagesOfSnsData} />
            <div className="hidden lg:flex gap-4 absolute -top-8 right-4 z-10 bg-momo-300/50 rounded-full py-2 px-4">
              <button className="swiper-button-prev-custom p-2 bg-white rounded-full shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <ChevronLeft className="w-6 h-6 text-momo-100" />
              </button>
              <button className="swiper-button-next-custom p-2 bg-white rounded-full shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <ChevronRight className="w-6 h-6 text-momo-100" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle className="text-center mb-16">おすすめのWeb集客の進め方</SectionTitle>
          <div className="relative space-y-12 before:absolute before:inset-y-0 before:w-0.5 before:bg-gray-200 before:left-6 md:before:left-1/2 md:before:-translate-x-1/2 max-w-4xl mx-auto">
            {webMarketingStepsData.map((step, index) => (
              <div
                key={index}
                className="relative md:grid md:grid-cols-2 md:items-center md:gap-12"
              >
                <div className="absolute top-1 left-6 w-4 h-4 rounded-full bg-momo-100 border-4 border-white md:left-1/2 md:-translate-x-1/2" />
                <div
                  className={`relative w-full aspect-square rounded-lg overflow-hidden shadow-lg mt-8 md:mt-0 ${
                    index % 2 === 1 ? 'md:order-last' : ''
                  }`}
                >
                  <Image
                    src={step.imageUrl}
                    alt={step.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, 50vw"
                  />
                </div>
                <div className="pt-5 md:pt-0 pl-12 md:pl-0">
                  <Badge className="inline-block bg-momo-100 text-white mb-2">
                    STEP {index + 1}
                  </Badge>
                  <h3 className="mt-1 text-2xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 md:mt-24 text-center">
            <div className="flex justify-center items-center gap-4">
              <Sparkles className="w-12 h-12 text-momo-100" />
              <h3 className="text-2xl md:text-3xl font-bold text-start">
                ピーチウェブと一緒に
                <br className="md:hidden" />
                <span className="text-momo-100">Web集客</span>を考えませんか？
              </h3>
            </div>
            <p className="mt-8 text-lg font-bold">ご依頼ステップは...</p>
            <MoveDown className="w-16 h-16 mx-auto mt-8 text-momo-100 animate-bounce" />
          </div>
        </div>
      </section>
      {service.steps && service.steps.length > 0 && (
        <section className="py-16 md:py-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle>ご依頼の流れ</SectionTitle>
            <div className="relative pt-12">
              <StepsSlider stepsData={service.steps} />
              <div className="hidden lg:flex gap-4 absolute -top-8 right-4 z-10 bg-momo-300/50 rounded-full py-2 px-4">
                <button className="swiper-button-prev-custom p-2 bg-white rounded-full shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  <ChevronLeft className="w-6 h-6 text-momo-100" />
                </button>
                <button className="swiper-button-next-custom p-2 bg-white rounded-full shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  <ChevronRight className="w-6 h-6 text-momo-100" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="bg-momo-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <Image
              src={`${IMAGEBASEURL}/common/contact-bg.webp`}
              alt="お問い合わせ背景"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-12">
              <div className="relative w-48 md:w-1/3 aspect-[600/703] flex-shrink-0 order-1 md:order-none">
                <Image
                  src={`${IMAGEBASEURL}/common/charactor-smile.webp`}
                  alt="笑顔のキャラクター"
                  fill
                  className="object-contain"
                  sizes="(max-width: 767px) 192px, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left text-white order-2 md:order-none">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                  ご要望に応じたカスタマイズ見積もりも受け付けております。
                </h2>
                <p className="text-base md:text-lg text-white/90 mb-6">
                  まずはお気軽にご相談ください。専門のスタッフが丁寧に対応いたします。
                </p>
                <div className="flex justify-center">
                  <Link href="/contact" passHref>
                    <CtaButton size="xl" className="btn-slide-hover">
                      お問い合わせはこちらから
                    </CtaButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {faqs && faqs.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <SectionTitle className="text-center mb-12">よくあるご質問</SectionTitle>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={faq.id}
                  className="border-l-4 border-momo-300 data-[state=open]:border-momo-100 transition-colors pl-4"
                >
                  <AccordionTrigger className="py-4 pr-4 text-left text-base md:text-lg font-medium hover:no-underline">
                    {faq.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pr-4">
                    <div
                      className="prose prose-sm max-w-none leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: faq.content }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
    </>
  );
};

export default ServiceDetailPage;
