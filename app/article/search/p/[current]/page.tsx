import { getList } from '@/lib/microcms';
import { ARTICLEFILTER, LIMIT12 } from '@/constants';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import Title from '@/components/Title';
import SearchField from '@/components/SearchField';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { SearchResultsPage, BreadcrumbList, WithContext } from 'schema-dts';

type Props = {
  params: Promise<{
    current: string;
  }>;
  searchParams: Promise<{
    q?: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const query = searchParams.q || '';
  const params = await props.params;
  const current = params.current || '1';
  const pageTitle = query
    ? `「${query}」の検索結果 - ${current}ページ目`
    : `記事の検索結果 - ${current}ページ目`;
  const description =
    'マーケティングや経営に関する専門的な記事、ピーチウェブからのご提案などお客様の役に立つ記事を日々更新しております。';

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

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const category = 'article';
  const query = searchParams.q || '';
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    filters: ARTICLEFILTER,
    limit: LIMIT12,
    offset: LIMIT12 * (current - 1),
    q: searchParams.q,
  });

  const pageTitle = query
    ? `「${query}」の検索結果 - ${current}ページ目`
    : `記事の検索結果 - ${current}ページ目`;
  const description =
    'マーケティングや経営に関する専門的な記事、ピーチウェブからのご提案などお客様の役に立つ記事を日々更新しております。';

  const searchPageJsonLd: WithContext<SearchResultsPage> = {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/article/search/p/${current}${query ? `?q=${query}` : ''}`,
  };

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: '新着記事',
      href: '/article',
      isCurrentPage: false,
    },
    {
      title: query ? `「${query}」の検索結果` : '記事の検索結果',
      href: `/article/search${query ? `?q=${query}` : ''}`,
      isCurrentPage: false,
    },
    {
      title: `${current}ページ目`,
      href: `/article/search/p/${current}${query ? `?q=${query}` : ''}`,
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
      <Title titleEn={'Search Results'} titleJp={'記事の検索結果'} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={category} />
          </Suspense>
        </nav>
        <GridArticleList articles={data.contents} category={category} />
        <Pagination
          totalCount={data.totalCount}
          basePath={`/${category}/search`}
          current={current}
          q={searchParams.q}
        />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
