import { getList } from '@/lib/microcms';
import { FAQFILTER, LIMIT12 } from '@/constants';
import { Pagination } from '@/components/ui/Pagination';
import { Title } from '@/components/ui/Title';
import { SearchField } from '@/components/ui/SearchField';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { SearchResultsPage, BreadcrumbList, WithContext } from 'schema-dts';
import { ArticleList } from '@/components/common/ArticleList';

export const revalidate = 3600;
const baseTitle = 'よくあるご質問の検索結果';
const baseDescription = `サービスに関するものから事務的なものまで様々な疑問にお答えします。`;
const parentSegment = 'faq';

type Props = {
  params: Promise<{
    current: string;
  }>;
  searchParams: Promise<{
    q?: string;
  }>;
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const query = searchParams.q || '';
  const current = params.current || '1';
  const pageTitle = query
    ? `「${query}」${baseTitle} - ${current}ページ目`
    : `${baseTitle} - ${current}ページ目`;
  const description = query
    ? `「${query}」に関連する${baseTitle}（${current}ページ目）です。${baseDescription}`
    : `${baseTitle}（${current}ページ目）です。${baseDescription}`;

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

const FaqSearchPCurrentPage = async (props: Props) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const query = searchParams.q || '';
  const current = parseInt(params.current as string, 10);
  const pageTitle = query
    ? `「${query}」${baseTitle} - ${current}ページ目`
    : `${baseTitle} - ${current}ページ目`;
  const description = query
    ? `「${query}」に関連する${baseTitle}（${current}ページ目）です。${baseDescription}`
    : `${baseTitle}（${current}ページ目）です。${baseDescription}`;
  const data = await getList({
    filters: FAQFILTER,
    limit: LIMIT12,
    offset: LIMIT12 * (current - 1),
    q: searchParams.q,
  });

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: 'よくあるご質問一覧',
      href: `/${parentSegment}`,
      isCurrentPage: false,
    },
    {
      title: query ? `「${query}」${baseTitle}` : baseTitle,
      href: `/${parentSegment}/search${query ? `?q=${query}` : ''}`,
      isCurrentPage: false,
    },
    {
      title: `${current}ページ目`,
      href: `/${parentSegment}/search/p/${current}${query ? `?q=${query}` : ''}`,
      isCurrentPage: true,
    },
  ];

  const searchPageJsonLd: WithContext<SearchResultsPage> = {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/${parentSegment}/search/p/${current}${query ? `?q=${query}` : ''}`,
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
      <JsonLd jsonLdData={searchPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title
        titleEn={'Search Results'}
        titleJp={
          query
            ? `「${query}」に関する${baseTitle}（${current}ページ目）`
            : `${baseTitle}（${current}ページ目）`
        }
      />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={parentSegment} />
          </Suspense>
        </nav>
        <ArticleList articles={data.contents} category={parentSegment} />
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

export default FaqSearchPCurrentPage;
