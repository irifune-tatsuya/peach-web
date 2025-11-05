import { getList } from '@/lib/microcms';
import { LIMIT12, PEACHFILTER, IMAGEBASEURL } from '@/constants';
import { Pagination } from '@/components/ui/Pagination';
import { GridArticleList } from '@/components/common/GridArticleList';
import { Title } from '@/components/ui/Title';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SearchField } from '@/components/ui/SearchField';
import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonArea } from '@/components/common/ButtonArea';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { CollectionPage, BreadcrumbList, WithContext } from 'schema-dts';
import { Mail } from 'lucide-react';

export const revalidate = 3600;
const baseTitle = '岡山のチャレンジ応援マガジン「ピーチファイ」';
const description =
  '岡山のチャレンジする起業家を応援するインタビューマガジン「ピーチファイ」です。ピーチのようにフレッシュな岡山の人々をファイトと応援しましょう！';
const segmentName = `peach-fight`;

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: baseTitle,
    href: `/${segmentName}`,
    isCurrentPage: true,
  },
];

export const metadata: Metadata = {
  title: baseTitle,
  description: description,
  openGraph: {
    title: baseTitle,
    description: description,
    type: 'article',
  },
};

const swiperImages = [
  {
    h: 'h-[calc(100vh-200px)]',
    src: `${IMAGEBASEURL}/${segmentName}/peach-fight-bg.webp`,
    alt: baseTitle,
    borderRadius: 60,
  },
];

const linkButtons = [
  {
    href: '/contact',
    children: 'フォームから取材応募',
    icon: <Mail className="mr-1 !h-5 !w-5" />,
    variant: 'default',
  },
] as const;

const data = await getList({
  limit: LIMIT12,
  filters: PEACHFILTER,
});

const collectionPageJsonLd: WithContext<CollectionPage> = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: baseTitle,
  description: description,
  url: `${siteConfig.url}/peach-fight`,
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

const PeachFightPage = () => {
  return (
    <>
      <JsonLd jsonLdData={collectionPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <div className="hidden">
        <Title titleEn={'Peach-Fight'} titleJp={baseTitle} />
      </div>
      <section
        id="key-visual"
        className="relative overflow-hidden h-screen md:h-[calc(100vh-90px)] w-screen"
      >
        <div className="absolute top-1/3 left-1/2 z-20 w-[85%] max-w-xl -translate-x-1/2 -translate-y-1/3  sm:top-[40%]">
          <div className="w-full animate-[var(--animate-zoom-in)]">
            <Image
              src={`${IMAGEBASEURL}/${segmentName}/peach-fight-logo.webp`}
              alt={baseTitle}
              width={576}
              height={181}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
        <Link
          href={'/contact'}
          className="absolute bottom-[40px] md:bottom-[60px] left-1/2 z-20 h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border-2 border-black bg-white"
        >
          <span className="absolute top-0 right-0 bottom-0 left-0 m-auto block h-[124px] w-[124px] animate-[var(--animate-spin-clockwise)]">
            <Image
              src={`${IMAGEBASEURL}/${segmentName}/entry_circle.webp`}
              alt="エントリーサークル"
              width={124}
              height={124}
            />
          </span>
          <span className="absolute top-1/2 left-1/2 h-[46.4px] w-[50px] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={`${IMAGEBASEURL}/${segmentName}/entry_momo.webp`}
              alt="エントリーボタン"
              width={50}
              height={46.4}
            />
          </span>
        </Link>
        <div className="absolute inset-0 z-10">
          <div className="h-full w-full pt-4 px-4 pb-44 md:pb-48 md:px-8">
            <div className="relative h-full w-full">
              <Image
                src={`${IMAGEBASEURL}/${segmentName}/peach-fight-bg.webp`}
                alt="ピーチファイトのキービジュアル背景"
                fill
                className="object-cover rounded-[60px]"
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-6xl p-4 pt-4 pb-[60px] md:pt-0 md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={segmentName} />
          </Suspense>
        </nav>
        <GridArticleList articles={data.contents} category={segmentName} />
        <Pagination totalCount={data.totalCount} basePath={`/${segmentName}`} />
      </div>
      <section className="mx-auto max-w-6xl p-4">
        <h2 className="mb-8 text-2xl font-bold text-[var(--color-momo-100)]">
          岡山のチャレンジ応援WEBマガジン
        </h2>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-full md:w-[450px] lg:w-[600px]">
            <p className="mt-4 font-bold">
              「ピーチファイ」は、岡山県内（ときどき県外）の
              <span className="text-[var(--color-momo-100)]">
                起業家や新しいビジネスを展開する会社の従業員様の熱い想いを取材するWEBマガジン
              </span>
              です。
            </p>
            <p className="mt-4 font-bold">
              異業種交流会では聴くことができない詳しい事業内容や起業家の想い、プライベートな側面など身近な起業家のストーリーを通じて、あなたの心にも火を灯しましょう！取材をされた方と取材を読んだ方がつながり、新しいチャレンジが連鎖することで地元岡山がより盛り上がればと思っております！
            </p>
            <p className="mt-4 font-bold">
              また、ピーチファイでは
              <span className="text-[var(--color-momo-100)]">
                取材を受けたい起業家、会社の従業員様も大募集
              </span>
              しております。
            </p>
          </div>
          <div className="mt-20 md:mt-0">
            <Image
              src={`${IMAGEBASEURL}/${segmentName}/entrepreneurs.webp`}
              alt="起業家様や新しいビジネスを展開する会社の従業員様"
              width={500}
              height={500}
              className="h-auto w-full max-w-lg"
            />
          </div>
        </div>
      </section>
      <ButtonArea buttons={linkButtons} />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default PeachFightPage;
