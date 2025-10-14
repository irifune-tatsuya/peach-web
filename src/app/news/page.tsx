import { getList } from '@/lib/microcms';
import { LIMIT30, NEWSFILTER } from '@/constants';
import { Pagination } from '@/components/ui/Pagination';
import { Title } from '@/components/ui/Title';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ArticleList } from '@/components/common/ArticleList';
import React from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { CollectionPage, BreadcrumbList, WithContext } from 'schema-dts';

export const revalidate = 3600;
const baseTitle = 'お知らせ一覧';
const description =
  '合同会社ピーチウェブの最新情報をお届けしております。異業種交流会への参加情報やイベント開催情報など気になる情報をいち早くご確認いただくことができます。';
const segmentName = `news`;

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

const data = await getList({
  limit: LIMIT30,
  filters: NEWSFILTER,
});

const collectionPageJsonLd: WithContext<CollectionPage> = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: baseTitle,
  description: description,
  url: `${siteConfig.url}/${segmentName}`,
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

const NewsPage = () => {
  return (
    <>
      <JsonLd jsonLdData={collectionPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title titleEn={'News'} titleJp={baseTitle} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <ArticleList articles={data.contents} category={segmentName} />
        <Pagination totalCount={data.totalCount} basePath={`/${segmentName}`} />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default NewsPage;
