import { getList } from '@/libs/microcms';
import { LIMIT30, NEWSFILTER } from '@/constants';
import Pagination from '@/components/Pagination';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ArticleList from '@/components/ArticleList';
import React from 'react';

export const revalidate = 3600;

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: 'ニュース',
    href: '/news',
    isCurrentPage: true,
  },
];

export default async function News() {
  const category = 'news';
  const data = await getList({
    limit: LIMIT30,
    filters: NEWSFILTER,
  });
  return (
    <>
      <Title titleEn={'News'} titleJp={'ニュース'} />
      <main className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <ArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} basePath={`/${category}`} />
      </main>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
