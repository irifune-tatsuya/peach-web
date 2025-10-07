import React, { Suspense } from 'react';
import { getList } from '@/libs/microcms';
import { ARTICLEFILTER, LIMIT12 } from '@/constants';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import SearchField from '@/components/SearchField';
import { Metadata } from 'next';

const pageTitle = '新着記事一覧';
const description =
  'マーケティングや経営に関する専門的な記事、ピーチウェブからのご提案などお客様の役に立つ記事を日々更新しております。';

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
    title: '新着記事一覧',
    href: '/article',
    isCurrentPage: true,
  },
];

export default async function Article() {
  const category = 'article';
  const data = await getList({
    limit: LIMIT12,
    filters: ARTICLEFILTER,
  });
  return (
    <>
      <Title titleEn={'Articles'} titleJp={'新着記事一覧'} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={category} />
          </Suspense>
        </nav>
        <GridArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} basePath={`/${category}`} />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
