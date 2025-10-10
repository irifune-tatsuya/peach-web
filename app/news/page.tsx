import { getList } from '@/lib/microcms';
import { LIMIT30, NEWSFILTER } from '@/constants';
import Pagination from '@/components/Pagination';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ArticleList from '@/components/ArticleList';
import React from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { CollectionPage, BreadcrumbList, WithContext } from 'schema-dts';

const pageTitle = 'ニュース';
const description =
  '合同会社ピーチウェブの最新情報をお届けしております。異業種交流会への参加情報やイベント開催情報など気になる情報をいち早くご確認いただくことができます。';

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
    title: 'ニュース',
    href: '/news',
    isCurrentPage: true,
  },
];

export default async function News() {
  const category = 'news';
  const data = await getList({
    limit: LIMIT30,
    filters: NEWSFILTER,
  });

  const collectionPageJsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/news`,
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
      <Title titleEn={'News'} titleJp={'ニュース'} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <ArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} basePath={`/${category}`} />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
