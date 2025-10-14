import { getList, getTagList } from '@/lib/microcms';
import { FAQFILTER, LIMIT30 } from '@/constants';
import { Pagination } from '@/components/ui/Pagination';
import { Title } from '@/components/ui/Title';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SearchField } from '@/components/ui/SearchField';
import { ArticleList } from '@/components/common/ArticleList';
import { TagList } from '@/components/common/TagList';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { CollectionPage, BreadcrumbList, WithContext } from 'schema-dts';

export const revalidate = 3600;
const baseTitle = 'よくあるご質問一覧';
const description =
  'ピーチウェブへ寄せられるよくあるご質問をまとめております。サービスに関するものから事務的なものまで様々な疑問にお答えします。もし見つからない場合はお問い合わせフォームから気軽にご質問ください。';
const segmentName = `faq`;

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: baseTitle,
    href: `/${segmentName}`,
    isCurrentPage: true,
  },
];

export const metadata: Metadata = {
  title: baseTitle,
  description: description,
  openGraph: {
    title: baseTitle,
    description: description,
    type: 'article',
  },
};

const tags = await getTagList({
  filters: FAQFILTER,
});
const data = await getList({
  limit: LIMIT30,
  filters: FAQFILTER,
});

const collectionPageJsonLd: WithContext<CollectionPage> = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: baseTitle,
  description: description,
  url: `${siteConfig.url}/${segmentName}`,
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

const FaqPage = () => {
  return (
    <>
      <JsonLd jsonLdData={collectionPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title titleEn={'FAQ'} titleJp={baseTitle} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={segmentName} />
          </Suspense>
        </nav>
        <TagList tags={tags.contents} category={segmentName} />
        <ArticleList articles={data.contents} category={segmentName} />
        <Pagination totalCount={data.totalCount} basePath={`/${segmentName}`} />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default FaqPage;
