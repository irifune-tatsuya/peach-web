import { getList } from '@/libs/microcms';
import { PEACHFILTER, LIMIT12 } from '@/constants';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import Title from '@/components/Title';
import SearchField from '@/components/SearchField';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import React, { Suspense } from 'react';

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: '岡山のチャレンジ応援マガジン「ピーチファイ」',
    href: '/peach-fight',
    isCurrentPage: false,
  },
];

type Props = {
  params: Promise<{
    current: string;
  }>;
  searchParams: Promise<{
    q?: string;
  }>;
};

export const revalidate = 3600;

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const category = 'peach-fight';
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    filters: PEACHFILTER,
    limit: LIMIT12,
    offset: LIMIT12 * (current - 1),
    q: searchParams.q,
  });
  return (
    <>
      <Title titleEn={'Peach Fight'} titleJp={'新着記事一覧'} />
      <main className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={category} />
          </Suspense>
        </nav>
        <GridArticleList articles={data.contents} category={category} />
        <Pagination
          totalCount={data.totalCount}
          basePath={`/${category}`}
          current={current}
          q={searchParams.q}
        />
      </main>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
