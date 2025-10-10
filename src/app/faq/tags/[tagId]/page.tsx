import { getList, getTag } from '@/lib/microcms';
import { LIMIT30 } from '@/constants';
import { Pagination } from '@/components/ui/Pagination';
import { ArticleList } from '@/components/common/ArticleList';
import Title from '@/components/ui/Title';
import { SearchField } from '@/components/ui/SearchField';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { CollectionPage, BreadcrumbList, WithContext } from 'schema-dts';

type Props = {
  params: Promise<{
    tagId: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const tagId = params.tagId;
  const tag = await getTag(tagId);
  const tagName = tag.name;

  const pageTitle = `「${tagName}」に関するよくあるご質問`;
  const description = `「${tagName}」に関連するよくあるご質問の一覧です。ピーチウェブのサービスについて、より深くご理解いただけます。`;

  return {
    title: pageTitle,
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/faq/tags/${tagId}`,
    },
    openGraph: {
      title: pageTitle,
      description: description,
      type: 'website',
    },
  };
}

export const revalidate = 3600;

export default async function Tags(props: Props) {
  const params = await props.params;
  const category = 'faq';

  const { tagId } = params;
  const data = await getList({
    limit: LIMIT30,
    filters: `tags[contains]${tagId}`,
  });
  const tag = await getTag(tagId);

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: 'よくあるご質問',
      href: `/${category}`,
      isCurrentPage: false,
    },
    {
      title: `${tag.name}タグの記事一覧`,
      href: `/${category}/tags/${tagId}`,
      isCurrentPage: true,
    },
  ];

  const pageTitle = `「${tag.name}」に関するよくあるご質問`;
  const description = `「${tag.name}」に関連するよくあるご質問の一覧です。ピーチウェブのサービスについて、より深くご理解いただけます。`;

  const collectionPageJsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/faq/tags/${tagId}`,
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
        <Pagination totalCount={data.totalCount} basePath={`/${category}/tags/${tagId}`} />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
