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
const baseDescription =
  '最新の制作実績やイベント開催情報など気になる情報をいち早くご確認いただくことができます。';
const parentSegment = 'news';

type Props = {
  params: Promise<{
    tagId: string;
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

const NewsPCurrentPage = async (props: Props) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const current = parseInt(params.current as string, 10);
  const pageTitle = `${baseTitle} - ${current}ページ目`;
  const description = `${baseTitle}（${current}ページ目）です。${baseDescription}`;
  const data = await getList({
    limit: LIMIT30,
    offset: LIMIT30 * (current - 1),
    filters: NEWSFILTER,
    q: searchParams.q,
  });

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: baseTitle,
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
      <Title titleEn={'News'} titleJp={`${baseTitle}（${current}ページ目）`} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <ArticleList articles={data.contents} category={parentSegment} />
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

export default NewsPCurrentPage;
