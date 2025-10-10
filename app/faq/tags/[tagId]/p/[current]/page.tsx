import { getList, getTag } from '@/libs/microcms';
import { LIMIT30 } from '@/constants';
import Pagination from '@/components/Pagination';
import Title from '@/components/Title';
import SearchField from '@/components/SearchField';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ArticleList from '@/components/ArticleList';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { CollectionPage, BreadcrumbList, WithContext } from 'schema-dts';

type Props = {
  params: Promise<{
    tagId: string;
    current: string;
  }>;
  searchParams: Promise<{
    q?: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const tagId = params.tagId;
  const current = params.current || '1';
  const tag = await getTag(tagId);
  const tagName = tag.name;

  const pageTitle = `「${tagName}」に関するよくあるご質問 - ${current}ページ目`;
  const description = `「${tagName}」に関連するよくあるご質問の一覧（${current}ページ目）です。ピーチウェブのサービスについて、より深くご理解いただけます。`;

  return {
    title: pageTitle,
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/faq/tags/${tagId}/p/${current}`,
    },
    openGraph: {
      title: pageTitle,
      description: description,
      type: 'website',
    },
  };
}

export const revalidate = 3600;

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const category = 'faq';
  const { tagId } = params;
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    limit: LIMIT30,
    offset: LIMIT30 * (current - 1),
    filters: `tags[contains]${tagId}`,
  });
  const tag = await getTag(tagId);

  const pageTitle = `「${tag.name}」に関するよくあるご質問 - ${current}ページ目`;
  const description = `「${tag.name}」に関連するよくあるご質問の一覧（${current}ページ目）です。ピーチウェブのサービスについて、より深くご理解いただけます。`;

  const collectionPageJsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/faq/tags/${tagId}/p/${current}`,
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
      title: `${tag.name}タグの記事一覧`,
      href: `/faq/tags/${tag.id}`,
      isCurrentPage: false,
    },
    {
      title: `${current}ページ目`,
      href: `/faq/tags/${tag.id}/p/${current}`,
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
      <JsonLd jsonLdData={collectionPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title
        titleEn={`FAQ -${tag.id.charAt(0).toUpperCase() + tag.id.slice(1)}-`}
        titleJp={`${tag.name}タグの記事一覧`}
      />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={category} />
          </Suspense>
        </nav>
        <ArticleList articles={data.contents} category={category} />
        <Pagination
          totalCount={data.totalCount}
          basePath={`/${category}/tags/${tag.name}`}
          current={current}
          q={searchParams.q}
        />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
