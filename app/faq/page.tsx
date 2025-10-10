import { getList, getTagList } from '@/libs/microcms';
import { FAQFILTER, LIMIT30 } from '@/constants';
import Pagination from '@/components/Pagination';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import SearchField from '@/components/SearchField';
import ArticleList from '@/components/ArticleList';
import TagList from '@/components/TagList';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { CollectionPage, BreadcrumbList, WithContext } from 'schema-dts';

const pageTitle = 'よくあるご質問';
const description =
  'ピーチウェブへのよくあるご質問をまとめております。サービスに関するものから事務的なものまで様々な疑問にお答えします。もし見つからない場合はお問い合わせフォームからご質問ください。';

export const metadata: Metadata = {
  title: pageTitle,
  description: description,
  openGraph: {
    title: pageTitle,
    description: description,
    type: 'article',
  },
};

export const revalidate = 3600;

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: 'よくあるご質問',
    href: '/faq',
    isCurrentPage: true,
  },
];

export default async function Faq() {
  const category = 'faq';
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
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/faq`,
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
      <Title titleEn={'FAQ'} titleJp={'よくあるご質問'} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={category} />
          </Suspense>
        </nav>
        <TagList tags={tags.contents} category={category} />
        <ArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} basePath={`/${category}`} />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
