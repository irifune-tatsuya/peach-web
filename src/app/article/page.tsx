import React, { Suspense } from 'react';
import { getList } from '@/lib/microcms';
import { ARTICLEFILTER, LIMIT12 } from '@/constants';
import { Pagination } from '@/components/ui/Pagination';
import { GridArticleList } from '@/components/common/GridArticleList';
import { Title } from '@/components/ui/Title';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SearchField } from '@/components/ui/SearchField';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { CollectionPage, BreadcrumbList, WithContext } from 'schema-dts';

export const revalidate = 3600;
const baseTitle = 'ピーチブログ一覧';
const description =
  'マーケティングや経営、ホームページに関するお得情報などのお客様の役に立つ記事やピーチウェブからのご提案などを日々更新しております。';
const segmentName = `article`;

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
  limit: LIMIT12,
  filters: ARTICLEFILTER,
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

const ArticlePage = () => {
  return (
    <>
      <JsonLd jsonLdData={collectionPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title titleEn={'Articles'} titleJp={baseTitle} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={segmentName} />
          </Suspense>
        </nav>
        <GridArticleList articles={data.contents} category={segmentName} />
        <Pagination totalCount={data.totalCount} basePath={`/${segmentName}`} />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default ArticlePage;
