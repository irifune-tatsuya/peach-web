import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SlideSwiper } from '@/components/SlideSwiper';
import { CoverflowSwiper } from '@/components/CoverflowSwiper';
import { Lp01VoiceCard } from '@/components/Lp01VoiceCard';
import { IMAGEBASEURL } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { CreativeWork, ImageObject, BreadcrumbList, WithContext } from 'schema-dts';

const pageTitle = 'ランディングページデザイン提案01';
const description =
  '若々しい起業家のためのランディングページデザインで、多くの写真を使用して視覚的に訴求できるように心がけました。こちらは起業家の挨拶セクションとなります。';

export const metadata: Metadata = {
  title: pageTitle,
  description: description,
  openGraph: {
    title: pageTitle,
    description: description,
    type: 'article',
  },
};

const braketHeadingClasses =
  "relative inline-block before:content-['['] after:content-[']'] before:absolute before:-left-4 after:absolute after:-right-4";
const blueMarkerClasses =
  'bg-gradient-to-t from-blue-200 to-blue-200 bg-no-repeat bg-bottom [background-size:100%_50%]';

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: '実績&デザイン集',
    href: '/achievements',
    isCurrentPage: false,
  },
  {
    title: 'LPデザイン01',
    href: '/achievements/design/lp01',
    isCurrentPage: true,
  },
];

const pageName = 'lp01';

const swiperImages = [
  {
    pcSrc: `${IMAGEBASEURL}/achievements/${pageName}/keyvisual1_pc.webp`,
    spSrc: `${IMAGEBASEURL}/achievements/${pageName}/keyvisual1_sp.webp`,
    alt: 'ランディングデザインのキービジュアル1',
  },
  {
    pcSrc: `${IMAGEBASEURL}/achievements/${pageName}/keyvisual2_pc.webp`,
    spSrc: `${IMAGEBASEURL}/achievements/${pageName}/keyvisual2_sp.webp`,
    alt: 'ランディングデザインのキービジュアル2',
  },
  {
    pcSrc: `${IMAGEBASEURL}/achievements/${pageName}/keyvisual3_pc.webp`,
    spSrc: `${IMAGEBASEURL}/achievements/${pageName}/keyvisual3_sp.webp`,
    alt: 'ランディングデザインのキービジュアル3',
  },
];

const voices = [
  {
    src: `${IMAGEBASEURL}/achievements/${pageName}/voice1.webp`,
    name: '株式会社△△商事様',
    text: 'ターゲットを若年層に絞ったことで求人応募者の年代と応募総数が増えました。フォロワーが増えたことで新卒採用以外のタイミングでも求人募集をかけやすくなりました。',
  },
  {
    src: `${IMAGEBASEURL}/achievements/${pageName}/voice2.webp`,
    name: '○○ガーデンショップ様',
    text: '季節に応じたフラワーギフトの提案をSNSから発信するようにご提案いただきました。投稿文章や写真の添削をしていただいてSNSのクオリティがアップしました。',
  },
  {
    src: `${IMAGEBASEURL}/achievements/${pageName}/voice3.webp`,
    name: '□□社会保険労務士事務所様',
    text: '専門知識を活かした発信よりも事務所で働くスタッフにフォーカスした投稿を提案いただき、新しいお客様を開拓できました。今後はリール動画制作でもお力添えいただければと思います。',
  },
  {
    src: `${IMAGEBASEURL}/achievements/${pageName}/voice4.webp`,
    name: '☆☆ベーカリー様',
    text: '最初は具体的にお仕事依頼しなかったのですが、無料相談の段階でSNSのポイントや目標を教えていただき助かりました。その後、仕事を依頼してからも変わらずサポートしてもらってます。',
  },
];

const footerLinks = [
  {
    enTitle: 'TOP',
    jpTitle: 'トップ',
    href: `#${pageName}-top`,
  },
  {
    enTitle: 'Greeting',
    jpTitle: 'ごあいさつ',
    href: `#${pageName}-greeting`,
  },
  {
    enTitle: 'Our Mission',
    jpTitle: 'ミッション',
    href: `#${pageName}-mission`,
  },
  {
    enTitle: 'Voice',
    jpTitle: 'お客様の声',
    href: `#${pageName}-voice`,
  },
];

export default async function Lp01() {
  const creativeWorkJsonLd: WithContext<CreativeWork> = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/achievements/design/lp01`,
    author: {
      '@type': 'Organization',
      '@id': siteConfig.url,
      name: siteConfig.name,
    },
    image: swiperImages.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: img.pcSrc,
      name: img.alt,
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
      <JsonLd jsonLdData={creativeWorkJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <div id="lp01-top" className="relative">
        <div className="absolute top-0 left-0 z-[-1] bg-[#b7e0ff] w-[100px] md:w-[200px] xl:w-[350px] min-h-[850px] md:bottom-0 h-[calc(((100vw-35px)*(960/680))+850px)] md:h-[calc(((100vw-280px)*(1060/1220))+80px)] lg:h-[calc(((100vw-280px)*(1060/1220))+450px)] xl:h-[calc(((100vw-280px)*(1060/1220))+180px)]" />
        <header className="z-10 mx-auto md:absolute md:top-0 md:right-0 md:left-0 md:flex md:flex-col md:px-0 md:py-4">
          <h1 className="relative py-4 ml-6 md:ml-12 xl:ml-12">
            <Image
              src={`${IMAGEBASEURL}/achievements/${pageName}/logo.webp`}
              alt="ロゴ"
              width={160}
              height={50}
              className="h-auto w-[50px] md:w-[70px] xl:w-[160px]"
            />
          </h1>
          <nav>{/* ナビゲーションリンクなど */}</nav>
        </header>
        <div className="relative mx-auto min-h-screen p-0">
          <div className="mb-24">
            <div className="ml-9 md:mt-32 md:ml-44 xl:ml-72">
              <SlideSwiper images={swiperImages} />
            </div>
            <section id="lp01-greeting">
              <div className="pt-24 pb-8 text-center">
                <h2 className={`${braketHeadingClasses} text-lg md:text-xl lg:text-5xl`}>
                  Greeting
                </h2>
              </div>
              <div className="mx-auto max-w-[650px] gap-2 md:flex md:items-center md:justify-center lg:max-w-[800px] xl:max-w-5xl">
                <div className="flex w-full items-center justify-center md:w-[30%] lg:w-[40%] xl:w-[30%]">
                  <Image
                    src={`${IMAGEBASEURL}/achievements/${pageName}/ceo-square.webp`}
                    alt="CEO"
                    width={300}
                    height={300}
                    className="h-auto w-[90vw] rounded-full md:w-full"
                  />
                </div>
                <p className="mt-4 p-4 text-base leading-loose tracking-widest md:w-[70%] lg:w-[60%] xl:w-[70%]">
                  こちらページは、
                  <span className={blueMarkerClasses}>
                    合同会社ピーチウェブのホームページデザイン見本
                  </span>
                  となります。若々しい起業家のためのランディングページデザインで、多くの写真を使用して視覚的に訴求できるように心がけました。こちらは起業家の挨拶セクションとなります。
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section id="lp01-mission" className="relative mt-20">
        <div
          className="absolute top-0 bottom-0 left-0 z-[-1] hidden max-w-[1300px] md:block md:right-24 lg:right-40 xl:right-60"
          style={{
            backgroundImage: `url("${IMAGEBASEURL}/achievements/${pageName}/mission_bg_pc.webp")`,
          }}
        />
        <div
          className="absolute top-0 bottom-0 left-0 z-[-1] block max-w-[650px] right-10 md:hidden"
          style={{
            backgroundImage: `url("${IMAGEBASEURL}/achievements/${pageName}/mission_bg_sp.webp")`,
          }}
        />
        <div className="pt-20 pb-8 text-center">
          <h2 className={`${braketHeadingClasses} text-lg md:text-xl lg:text-5xl`}>Our Mission</h2>
        </div>
        <div className="flex justify-center">
          <p className="p-4 text-center text-base font-bold leading-loose tracking-widest md:w-[70%] md:text-xl lg:w-[60%]">
            ミッションを紹介するセクションになります。経営者自身が顔出しで考え方を伝えることで読み手に安心感を持ってもらうことができます。
          </p>
        </div>
        <div className="flex justify-center pb-20">
          <Image
            src={`${IMAGEBASEURL}/achievements/${pageName}/mission_circle.webp`}
            alt="提供サービス"
            width={800}
            height={800}
            className="h-auto w-[95vw] max-w-[800px] md:w-[60vw]"
          />
        </div>
      </section>
      <section id="lp01-voice" className="relative mt-20">
        <div
          className="absolute top-0 right-0 bottom-0 z-[-1] hidden max-w-[1300px] md:block md:left-24 lg:left-40 xl:left-[calc(100vw-1300px)]"
          style={{
            backgroundImage: `url("${IMAGEBASEURL}/achievements/${pageName}/voice_bg_pc.webp")`,
          }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 z-[-1] block max-w-[650px] left-10 md:hidden"
          style={{
            backgroundImage: `url("${IMAGEBASEURL}/achievements/${pageName}/voice_bg_sp.webp")`,
          }}
        />
        <div className="pt-20 pb-8 text-center">
          <h2 className={`${braketHeadingClasses} text-lg md:text-xl lg:text-5xl`}>Voice</h2>
        </div>
        <div className="flex justify-center">
          <p className="p-4 text-center text-base font-bold leading-loose tracking-widest md:w-[70%] md:text-xl lg:w-[60%]">
            お客様からいただいた喜びの声をご紹介するセクションになります。目に見えないサービスの場合はお客様の口コミを掲載することで利用イメージを持ってもらうことができます。
          </p>
        </div>
        <div className="flex justify-center pb-20">
          <div className="w-[95vw] md:w-[60vw]">
            <CoverflowSwiper>
              {voices.map((item, i) => (
                <Lp01VoiceCard src={item.src} name={item.name} text={item.text} key={i} />
              ))}
            </CoverflowSwiper>
          </div>
        </div>
      </section>
      <footer className="mx-auto mt-40 overflow-x-hidden bg-[#2e8ad5] md:flex md:flex-row-reverse">
        <div className="md:relative md:flex md:h-96 md:basis-1/2 md:flex-col md:items-center md:justify-center md:overflow-hidden">
          <Image
            src={`${IMAGEBASEURL}/achievements/${pageName}/footer.webp`}
            alt="デザインページのフッター"
            fill
            className="!relative object-cover md:!absolute md:h-full md:w-full"
          />
        </div>
        <div className="flex w-full items-center justify-center py-20 md:w-1/2">
          <ul className="mx-auto grid w-[250px] grid-cols-2 gap-10 text-center">
            {footerLinks.map((item, i) => (
              <li key={i} className="inline-block w-28 align-middle">
                <a href={item.href} className="text-white">
                  <span className="block text-lg font-bold">{item.enTitle}</span>
                  <span className="block text-sm">{item.jpTitle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <div className="my-20 flex justify-center">
        <Link
          href="/achievements"
          className="mx-2 block w-[350px] rounded-lg bg-momo-200 p-3 text-center font-bold transition-opacity hover:opacity-80"
        >
          実績一覧に戻る
        </Link>
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
