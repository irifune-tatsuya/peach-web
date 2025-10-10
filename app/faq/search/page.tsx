import { getList } from '@/lib/microcms';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import SearchField from '@/components/SearchField';
import { FAQFILTER } from '@/constants';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { SearchResultsPage, BreadcrumbList, WithContext } from 'schema-dts';

const baseTitle = 'よくあるご質問';
const description =
  'ピーチウェブへのよくあるご質問をまとめております。サービスに関するものから事務的なものまで様々な疑問にお答えします。もし見つからない場合はお問い合わせフォームからご質問ください。';

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
  const category = 'faq';
  const query = searchParams.q || '';
  const data = await getList({
    filters: FAQFILTER,
    q: searchParams.q,
  });

  const pageTitle = query ? `「${query}」の検索結果` : baseTitle;

  const searchPageJsonLd: WithContext<SearchResultsPage> = {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/faq/search${query ? `?q=${query}` : ''}`,
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
      <Title titleEn={'Search Results'} titleJp={'よくあるご質問の検索結果'} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="flex justify-center md:justify-start">
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
