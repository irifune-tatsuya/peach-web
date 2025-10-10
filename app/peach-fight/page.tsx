import { getList } from '@/libs/microcms';
import { LIMIT12, PEACHFILTER, IMAGEBASEURL, CONTACT } from '@/constants';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import SearchField from '@/components/SearchField';
import { TopSwiper } from '@/components/TopSwiper';
import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMail } from 'react-icons/io5';
import { FaLine } from 'react-icons/fa';
import ButtonArea from '@/components/ButtonArea';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { CollectionPage, BreadcrumbList, WithContext } from 'schema-dts';

const pageTitle = 'ピーチファイ';
const description =
  '岡山のチャレンジする起業家を応援するインタビューマガジン「ピーチファイ」です。ピーチのようにフレッシュな岡山の人々をファイトと応援しましょう！';

export const metadata: Metadata = {
  title: pageTitle,
  description: description,
  openGraph: {
    title: pageTitle,
    description: description,
    type: 'article',
  },
};

export const revalidate = 3600;

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: '岡山のチャレンジ応援マガジン「ピーチファイ」',
    href: '/peach-fight',
    isCurrentPage: true,
  },
];

const swiperImages = [
  {
    src: `${IMAGEBASEURL}/peach-fight/peach-fight-bg.webp`,
    alt: 'ピーチファイ',
    borderRadius: 60,
    h: 'h-[80vh]',
  },
];

const contactButtons = [
  {
    bgClassName: 'bg-[var(--color-momo-100)]',
    textClassName: 'text-white',
    href: '/contact',
    isExternal: false,
    title: 'フォームから取材応募',
    icon: <IoMail />,
  },
  {
    bgClassName: 'bg-[#06c755]',
    textClassName: 'text-white',
    href: CONTACT.line,
    isExternal: true,
    title: 'LINEから取材応募',
    icon: <FaLine />,
  },
];

export default async function PeachFight() {
  const category = 'peach-fight';
  const data = await getList({
    limit: LIMIT12,
    filters: PEACHFILTER,
  });

  const collectionPageJsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '岡山のチャレンジ応援マガジン「ピーチファイ」',
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

  return (
    <>
      <JsonLd jsonLdData={collectionPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <div className="hidden">
        <Title titleEn={'ピーチファイ'} titleJp={'岡山のチャレンジ応援マガジン'} />
      </div>
      <section id="key-visual" className="relative h-screen overflow-hidden">
        <div className="absolute top-2/4 left-1/2 z-20 w-[85%] max-w-xl -translate-x-1/2 -translate-y-1/2 sm:top-[40%]">
          <div className="w-full animate-[var(--animate-zoom-in)]">
            <Image
              src={`${IMAGEBASEURL}/${category}/peach-fight-logo.webp`}
              alt="岡山のチャレンジ応援マガジン「ピーチファイ」"
              width={576}
              height={181}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
        <Link
          href={'/contact'}
          className="absolute bottom-[-20px] left-1/2 z-20 h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border-2 border-black bg-white md:bottom-[30px]"
        >
          <span className="absolute top-0 right-0 bottom-0 left-0 m-auto block h-[124px] w-[124px] animate-[var(--animate-spin-clockwise)]">
            <Image
              src={`${IMAGEBASEURL}/${category}/entry_circle.webp`}
              alt="エントリーサークル"
              width={124}
              height={124}
            />
          </span>
          <span className="absolute top-1/2 left-1/2 h-[46.4px] w-[50px] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={`${IMAGEBASEURL}/${category}/entry_momo.webp`}
              alt="エントリーボタン"
              width={50}
              height={46.4}
            />
          </span>
        </Link>
        <div className="mx-4 my-8 md:mx-10 md:my-0">
          <TopSwiper images={swiperImages} />
        </div>
      </section>
      <div className="mx-auto max-w-6xl p-4 pt-4 pb-[60px] md:pt-0 md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={category} />
          </Suspense>
        </nav>
        <GridArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} basePath={`/${category}`} />
      </div>
      <section className="mx-auto max-w-6xl p-4">
        <h2 className="mb-8 text-2xl font-bold text-[var(--color-momo-100)]">
          岡山のチャレンジ応援WEBマガジン
        </h2>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-full md:w-[450px] lg:w-[600px]">
            <p className="mt-4 font-bold text-base lg:text-xl">
              「ピーチファイ」は、岡山県内（ときどき県外）の
              <span className="text-[var(--color-momo-100)]">
                起業家や新しいビジネスを展開する会社の従業員様の熱い想いを取材するWEBマガジン
              </span>
              です。
            </p>
            <p className="mt-4 font-bold text-base lg:text-xl">
              異業種交流会では聴くことができない詳しい事業内容や起業家の想い、プライベートな側面など身近な起業家のストーリーを通じて、あなたの心にも火を灯しましょう！取材をされた方と取材を読んだ方がつながり、新しいチャレンジが連鎖することで地元岡山がより盛り上がればと思っております！
            </p>
            <p className="mt-4 font-bold text-base lg:text-xl">
              また、ピーチファイでは
              <span className="text-[var(--color-momo-100)]">
                取材を受けたい起業家、会社の従業員様も大募集
              </span>
              しております。
            </p>
          </div>
          <div className="mt-20 md:mt-0">
            <Image
              src={`${IMAGEBASEURL}/${category}/entrepreneurs.webp`}
              alt="起業家様や新しいビジネスを展開する会社の従業員様"
              width={500}
              height={500}
              className="h-auto w-full max-w-lg"
            />
          </div>
        </div>
      </section>
      <ButtonArea buttons={contactButtons} className="bg-white" />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
