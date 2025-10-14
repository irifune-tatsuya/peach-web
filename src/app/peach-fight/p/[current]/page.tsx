import { getList } from '@/lib/microcms';
import { PEACHFILTER, LIMIT12 } from '@/constants';
import { Pagination } from '@/components/ui/Pagination';
import { GridArticleList } from '@/components/common/GridArticleList';
import { Title } from '@/components/ui/Title';
import { SearchField } from '@/components/ui/SearchField';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { CollectionPage, BreadcrumbList, WithContext } from 'schema-dts';

export const revalidate = 3600;
const baseTitle = 'ピーチファイ記事一覧';
const baseDescription = '岡山のチャレンジするフレッシュな起業家のストーリをぜひお楽しみください！';
const parentSegment = 'peach-fight';

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
  const current = params.current || '1';
  const pageTitle = `${baseTitle} - ${current}ページ目`;
  const description = `${baseTitle}（${current}ページ目）です。${baseDescription}`;

  return {
    title: pageTitle,
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${parentSegment}/p/${current}`,
    },
    openGraph: {
      title: pageTitle,
      description: description,
      type: 'website',
    },
  };
};

const PeachFightPCurrentPage = async (props: Props) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const current = parseInt(params.current as string, 10);
  const pageTitle = `${baseTitle} - ${current}ページ目`;
  const description = `${baseTitle}（${current}ページ目）です。${baseDescription}`;
  const data = await getList({
    filters: PEACHFILTER,
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
      title: '岡山のチャレンジ応援マガジン「ピーチファイ」',
      href: `/${parentSegment}`,
      isCurrentPage: false,
    },
    {
      title: `${current}ページ目`,
      href: `/${parentSegment}/p/${current}`,
      isCurrentPage: true,
    },
  ];

  const collectionPageJsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/${parentSegment}/p/${current}`,
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
      <Title titleEn={'Peach-Fight'} titleJp={`${baseTitle}（${current}ページ目）`} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={parentSegment} />
          </Suspense>
        </nav>
        <GridArticleList articles={data.contents} category={parentSegment} />
        <Pagination
          totalCount={data.totalCount}
          basePath={`/${parentSegment}`}
          current={current}
          q={searchParams.q}
        />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default PeachFightPCurrentPage;
