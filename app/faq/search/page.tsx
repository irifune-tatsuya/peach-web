import { getList } from '@/libs/microcms';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import SearchField from '@/components/SearchField';
import { FAQFILTER } from '@/constants';
import React, { Suspense } from 'react';

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
    title: 'よくあるご質問の検索結果',
    href: '/faq/search',
    isCurrentPage: true,
  },
];

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export const revalidate = 3600;

export default async function Search(props: Props) {
  const searchParams = await props.searchParams;
  const category = 'faq';
  const data = await getList({
    filters: FAQFILTER,
    q: searchParams.q,
  });

  return (
    <>
      <Title titleEn={'Search Results'} titleJp={'よくあるご質問の検索結果'} />
      <main className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={category} />
          </Suspense>
        </nav>
        <GridArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} q={searchParams.q} />
      </main>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
