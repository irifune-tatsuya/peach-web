import { Breadcrumbs } from '@/components/Breadcrumbs';
import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StartMailMagazineForm } from '@/components/StartMailMagazineForm';
import { StopMailMagazineForm } from '@/components/StopMailMagazineForm';
import { IMAGEBASEURL } from '@/constants';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { WebPage, CreativeWorkSeries, BreadcrumbList, WithContext } from 'schema-dts';

const pageTitle = 'ニュースレターのご案内';
const description =
  'ピーチウェブの最新情報をいち早くお届けするニュースレターの登録と解除をご利用できるページとなります。';

export const metadata: Metadata = {
  title: pageTitle,
  description: description,
  openGraph: {
    title: pageTitle,
    description: description,
    type: 'article',
  },
};

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: 'ニュースレター',
    href: '/newsletter',
    isCurrentPage: true,
  },
];

const NewsletterContents = [
  {
    title: '新着記事の情報',
    text: 'コンテンツ制作やホームページ制作に役立つ情報を発信しています。新着情報をいち早くお届けします。',
    href: '/article',
  },
  {
    title: 'ピーチファイの更新情報',
    text: '岡山のチャレンジする起業家・経営者を応援するWEBマガジン「ピーチファイ」の更新もお知らせします。',
    href: '/peach-fight',
  },
  {
    title: 'サービスの最新情報',
    text: 'WEBブランディングやホームページ制作などサービスに関する情報をお届けします。',
    href: '/service',
  },
  {
    title: 'ピーチウェブからのお知らせ',
    text: '異業種交流会への参加情報やイベント参加情報、その他の会社情報をお届けします。',
    href: '/news',
  },
];

export default async function Newsletter() {
  const jsonLdData: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/newsletter`,
    mainEntity: {
      '@type': 'Newsletter',
      name: 'ピーチウェブ ニュースレター',
      description: 'ピーチウェブの新着記事やサービスに関する最新情報をお届けします。',
      publisher: {
        '@type': 'Organization',
        '@id': siteConfig.url,
        name: siteConfig.name,
      },
    } as any,
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
      <div className="bg-momo-100 py-8 md:py-20">
        <div className="mx-auto flex w-[90%] max-w-6xl flex-col-reverse items-center justify-between md:w-[80%] md:flex-row lg:w-1/2">
          <Image
            src={`${IMAGEBASEURL}/newsletter/top-image.webp`}
            alt={'ニュースレタートップイメージ'}
            width={400}
            height={400}
            className="h-auto w-full max-w-[400px]"
          />
          <div className="mt-10 inline-block text-white md:mt-0">
            <p className="text-lg font-bold">ニュースレターのご案内</p>
            <h1 className="text-4xl font-bold">Newsletter</h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl p-4">
        <section className="pt-10 md:pt-[70px]">
          <div className="pb-5">
            <h2 className="mr-4 inline-block text-2xl font-bold">
              When is the next article update?
            </h2>
            <span className="text-sm font-medium tracking-[0.08em]">次の記事更新はいつ？</span>
          </div>
          <p>
            ピーチウェブのニュースレターは
            <span className="font-bold text-momo-100">毎週1回程度</span>
            のペースで更新予定です。新着記事のご案内やサービスに関する最新情報をお届けします。
          </p>
        </section>
        <section className="py-10 md:py-[70px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
            {NewsletterContents.map((content, i) => (
              <div key={i}>
                <Link href={content.href} className="hover:opacity-70">
                  <Image
                    src={`${IMAGEBASEURL}/newsletter/newsletter-content${i + 1}.webp`}
                    alt={content.title}
                    width={500}
                    height={300}
                    className="h-auto w-full"
                  />
                </Link>
                <h3 className="my-5 text-xl font-bold">{content.title}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="bg-momo-600 py-10 md:py-[70px]">
        <div className="mx-auto max-w-6xl p-4">
          <div className="pb-5">
            <h2 className="mr-4 inline-block text-2xl font-bold">Subscribe</h2>
            <span className="text-sm font-medium tracking-[0.08em]">購読登録</span>
          </div>
          <p className="pb-10">
            こちらのフォームよりニュースレターの購読登録をすることができます。もちろん、
            <span className="font-bold text-momo-100">登録無料でいつでも配信停止</span>
            が可能です。
          </p>
          <Suspense fallback={<div className="text-white">フォームを読み込んでいます...</div>}>
            <StartMailMagazineForm />
          </Suspense>
        </div>
      </section>
      <section className="py-10 md:py-[70px]">
        <div className="mx-auto max-w-6xl p-4">
          <div className="pb-5">
            <h2 className="mr-4 inline-block text-2xl font-bold">Unsubscribe</h2>
            <span className="text-sm font-medium tracking-[0.08em]">配信停止</span>
          </div>
          <p className="pb-10">
            こちらのフォームよりニュースレターの配信停止をすることができます。
          </p>
          <Suspense fallback={<div>フォームを読み込んでいます...</div>}>
            <StopMailMagazineForm />
          </Suspense>
        </div>
      </section>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
