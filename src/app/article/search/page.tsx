import { getList } from '@/lib/microcms';
import { Pagination } from '@/components/ui/Pagination';
import { GridArticleList } from '@/components/common/GridArticleList';
import { Title } from '@/components/ui/Title';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SearchField } from '@/components/ui/SearchField';
import { ARTICLEFILTER } from '@/constants';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { SearchResultsPage, BreadcrumbList, WithContext } from 'schema-dts';

export const revalidate = 3600;
const baseTitle = '記事の検索結果';
const baseDescription = `ホームページに関する情報などお客様の役に立つ記事を日々更新しております。`;
const parentSegment = 'article';

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const searchParams = await props.searchParams;
  const query = searchParams.q || '';
  const pageTitle = query ? `「${query}」${baseTitle}` : baseTitle;
  const description = query
    ? `「${query}」に関連する${baseTitle}です。${baseDescription}`
    : `${baseTitle}です。${baseDescription}`;

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
};

const ArticleSearchPage = async (props: Props) => {
  const searchParams = await props.searchParams;
  const query = searchParams.q || '';
  const pageTitle = query ? `「${query}」${baseTitle}` : baseTitle;
  const description = query
    ? `「${query}」に関連する${baseTitle}です。${baseDescription}`
    : `${baseTitle}です。${baseDescription}`;
  const data = await getList({
    filters: ARTICLEFILTER,
    q: searchParams.q,
  });

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: '新着記事一覧',
      href: `/${parentSegment}`,
      isCurrentPage: false,
    },
    {
      title: query ? `「${query}」${baseTitle}` : baseTitle,
      href: `/${parentSegment}/search${query ? `?q=${query}` : ''}`,
      isCurrentPage: true,
    },
  ];

  const searchPageJsonLd: WithContext<SearchResultsPage> = {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/${parentSegment}/search${query ? `?q=${query}` : ''}`,
  };

  const breadcrumbJsonLd: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.href === `/${parentSegment}/search` && query ? pageTitle : breadcrumb.title,
      item: `${siteConfig.url}${breadcrumb.href}`,
    })),
  };

  return (
    <>
      <JsonLd jsonLdData={searchPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title titleEn={'Search Results'} titleJp={query ? `「${query}」${baseTitle}` : baseTitle} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={parentSegment} />
          </Suspense>
        </nav>
        <GridArticleList articles={data.contents} category={parentSegment} />
        <Pagination
          totalCount={data.totalCount}
          basePath={`/${parentSegment}/search`}
          q={searchParams.q}
        />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default ArticleSearchPage;
