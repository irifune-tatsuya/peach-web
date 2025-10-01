import { getList } from '@/libs/microcms';
import { LIMIT30, NEWSFILTER } from '@/constants';
import Pagination from '@/components/Pagination';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ArticleList from '@/components/ArticleList';
import React from 'react';

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: 'ニュース',
    href: '/news',
    isCurrentPage: false,
  },
];

type Props = {
  params: Promise<{
    tagId: string;
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
  const category = 'news';
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    limit: LIMIT30,
    offset: LIMIT30 * (current - 1),
    filters: NEWSFILTER,
    q: searchParams.q,
  });
  return (
    <>
      <Title titleEn={'News'} titleJp={'ニュース'} />
      <main className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <ArticleList articles={data.contents} category={category} />
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
