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

export const revalidate = 3600;
const baseTitle = 'タグの絞り込み結果';
const baseDescription = `もし回答が見つからない場合はお問い合わせフォームから気軽にご質問ください。`;
const parentSegment = 'faq';

type Props = {
  params: Promise<{
    tagId: string;
  }>;
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  const tagId = params.tagId;
  const tag = await getTag(tagId);
  const pageTitle = tag.name ? `「${tag.name}」${baseTitle}` : baseTitle;
  const description = tag.name
    ? `「${tag.name}」に関連する${baseTitle}です。${baseDescription}`
    : `${baseTitle}です。${baseDescription}`;

  return {
    title: pageTitle,
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${parentSegment}/tags/${tagId}`,
    },
    openGraph: {
      title: pageTitle,
      description: description,
      type: 'website',
    },
  };
};

const FaqTagsPage = async (props: Props) => {
  const params = await props.params;
  const tagId = params.tagId;
  const tag = await getTag(tagId);
  const data = await getList({
    limit: LIMIT30,
    filters: `tags[contains]${tagId}`,
  });
  const pageTitle = tag.name ? `「${tag.name}」${baseTitle}` : baseTitle;
  const description = tag.name
    ? `「${tag.name}」に関連する${baseTitle}です。${baseDescription}`
    : `${baseTitle}です。${baseDescription}`;

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: 'よくあるご質問',
      href: `/${parentSegment}`,
      isCurrentPage: false,
    },
    {
      title: tag.name ? `${tag.name}${baseTitle}` : baseTitle,
      href: `/${parentSegment}/tags/${tagId}`,
      isCurrentPage: true,
    },
  ];

  const collectionPageJsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/${parentSegment}/tags/${tagId}`,
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
      <Title titleEn={`Tag filter results`} titleJp={`「${tag.name}」${baseTitle}`} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={parentSegment} />
          </Suspense>
        </nav>
        <ArticleList articles={data.contents} category={parentSegment} />
        <Pagination totalCount={data.totalCount} basePath={`/${parentSegment}/tags/${tagId}`} />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default FaqTagsPage;
