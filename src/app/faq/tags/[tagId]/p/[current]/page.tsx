import { getList, getTag } from '@/lib/microcms';
import { LIMIT30 } from '@/constants';
import { Pagination } from '@/components/ui/Pagination';
import Title from '@/components/ui/Title';
import { SearchField } from '@/components/ui/SearchField';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ArticleList } from '@/components/common/ArticleList';
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
    current: string;
  }>;
  searchParams: Promise<{
    q?: string;
  }>;
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  const current = params.current || '1';
  const tagId = params.tagId;
  const tag = await getTag(tagId);
  const pageTitle = tag.name ? `「${tag.name}」${baseTitle} - ${current}ページ目` : baseTitle;
  const description = tag.name
    ? `「${tag.name}」に関連する${baseTitle}（${current}ページ目）です。${baseDescription}`
    : `${baseTitle}（${current}ページ目）です。${baseDescription}`;

  return {
    title: pageTitle,
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${parentSegment}/tags/${tagId}/p/${current}`,
    },
    openGraph: {
      title: pageTitle,
      description: description,
      type: 'website',
    },
  };
};

const FaqTagsPCurrentPage = async (props: Props) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const current = parseInt(params.current as string, 10);
  const tagId = params.tagId;
  const tag = await getTag(tagId);
  const data = await getList({
    limit: LIMIT30,
    offset: LIMIT30 * (current - 1),
    filters: `tags[contains]${tagId}`,
  });
  const pageTitle = tag.name ? `「${tag.name}」${baseTitle} - ${current}ページ目` : baseTitle;
  const description = tag.name
    ? `「${tag.name}」に関連する${baseTitle}（${current}ページ目）です。${baseDescription}`
    : `${baseTitle}（${current}ページ目）です。${baseDescription}`;

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: 'よくあるご質問',
      href: `${parentSegment}`,
      isCurrentPage: false,
    },
    {
      title: tag.name ? `${tag.name}${baseTitle}` : baseTitle,
      href: `/${parentSegment}/tags/${tag.id}`,
      isCurrentPage: false,
    },
    {
      title: `${current}ページ目`,
      href: `/faq/tags/${tag.id}/p/${current}`,
      isCurrentPage: true,
    },
  ];

  const collectionPageJsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/${parentSegment}/tags/${tagId}/p/${current}`,
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
        titleEn={`Tag filter results`}
        titleJp={tag.name ? `「${tag.name}」${baseTitle}（${current}ページ目）` : baseTitle}
      />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={parentSegment} />
          </Suspense>
        </nav>
        <ArticleList articles={data.contents} category={parentSegment} />
        <Pagination
          totalCount={data.totalCount}
          basePath={`/${parentSegment}/tags/${tag.name}`}
          current={current}
          q={searchParams.q}
        />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default FaqTagsPCurrentPage;
