import { getList } from '@/libs/microcms';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import SearchField from '@/components/SearchField';
import { PEACHFILTER } from '@/constants';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { SearchResultsPage, BreadcrumbList, WithContext } from 'schema-dts';

const baseTitle = 'ピーチファイ';
const description =
  '岡山のチャレンジする起業家を応援するインタビューマガジン「ピーチファイ」です。ピーチのようにフレッシュな岡山の人々をファイトと応援しましょう！';

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const query = searchParams.q || '';
  const pageTitle = query ? `「${query}」の検索結果` : baseTitle;

  return {
    title: pageTitle,
    description: description,
    openGraph: {
      title: pageTitle,
      description: description,
      type: 'website',
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export const revalidate = 3600;

export default async function Search(props: Props) {
  const searchParams = await props.searchParams;
  const category = 'peach-fight';
  const query = searchParams.q || '';
  const data = await getList({
    filters: PEACHFILTER,
    q: searchParams.q,
  });

  const pageTitle = query ? `「${query}」の検索結果` : baseTitle;

  const searchPageJsonLd: WithContext<SearchResultsPage> = {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/peach-fight/search${query ? `?q=${query}` : ''}`,
  };

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: '岡山のチャレンジ応援マガジン「ピーチファイ」',
      href: '/peach-fight',
      isCurrentPage: false,
    },
    {
      title: query ? `「${query}」の検索結果` : '検索結果',
      href: `/peach-fight/search${query ? `?q=${query}` : ''}`,
      isCurrentPage: true,
    },
  ];

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
      <JsonLd jsonLdData={searchPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title titleEn={'Search Results'} titleJp={'ピーチファイの検索結果'} />
      <div className="mx-auto max-w-6xl p-4 mb-16 md:mb-0">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={category} />
          </Suspense>
        </nav>
        <GridArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} q={searchParams.q} />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
