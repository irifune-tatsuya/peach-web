import { getList } from '@/lib/microcms';
import { ARTICLEFILTER, LIMIT30 } from '@/constants';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import Title from '@/components/Title';
import SearchField from '@/components/SearchField';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { FAQFILTER } from '@/constants';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { SearchResultsPage, BreadcrumbList, WithContext } from 'schema-dts';

const baseTitle = 'よくあるご質問';
const description =
  'ピーチウェブへのよくあるご質問をまとめております。サービスに関するものから事務的なものまで様々な疑問にお答えします。もし見つからない場合はお問い合わせフォームからご質問ください。';

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
    : `${baseTitle} - ${current}ページ目`;

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
  const category = 'faq';
  const query = searchParams.q || '';
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    filters: ARTICLEFILTER,
    limit: LIMIT30,
    offset: LIMIT30 * (current - 1),
    q: searchParams.q,
  });

  const pageTitle = query
    ? `「${query}」の検索結果 - ${current}ページ目`
    : `${baseTitle} - ${current}ページ目`;

  const searchPageJsonLd: WithContext<SearchResultsPage> = {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/faq/search/p/${current}${query ? `?q=${query}` : ''}`,
  };

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: 'よくあるご質問',
      href: '/faq',
      isCurrentPage: false,
    },
    {
      title: query ? `「${query}」の検索結果` : '検索結果',
      href: `/faq/search${query ? `?q=${query}` : ''}`,
      isCurrentPage: false,
    },
    {
      title: `${current}ページ目`,
      href: `/faq/search/p/${current}${query ? `?q=${query}` : ''}`,
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
      <Title titleEn={'Search Results'} titleJp={'記事検索の結果'} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={'article'} />
          </Suspense>
        </nav>
        <GridArticleList articles={data.contents} category={'article'} />
        <Pagination
          totalCount={data.totalCount}
          basePath="/article/search"
          current={current}
          q={searchParams.q}
        />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
