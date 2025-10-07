import { getList } from '@/libs/microcms';
import { ARTICLEFILTER, LIMIT30 } from '@/constants';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import Title from '@/components/Title';
import SearchField from '@/components/SearchField';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { FAQFILTER } from '@/constants';

const baseTitle = 'よくあるご質問';
const description =
  'ピーチウェブへのよくあるご質問をまとめております。サービスに関するものから事務的なものまで様々な疑問にお答えします。もし見つからない場合はお問い合わせフォームからご質問ください。';

type Props = {
  params: Promise<{
    current: string;
  }>;
  searchParams: Promise<{
    q?: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const query = searchParams.q || '';
  const params = await props.params;
  const current = params.current || '1';
  const pageTitle = query
    ? `「${query}」の検索結果 - ${current}ページ目`
    : `${baseTitle} - ${current}ページ目`;

  return {
    title: pageTitle,
    description: description,
    openGraph: {
      title: pageTitle,
      description: description,
      type: 'website',
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: '新着記事',
    href: '/article',
    isCurrentPage: false,
  },
  {
    title: '記事の検索結果',
    href: '/article/search',
    isCurrentPage: true,
  },
];

export const revalidate = 3600;

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    filters: ARTICLEFILTER,
    limit: LIMIT30,
    offset: LIMIT30 * (current - 1),
    q: searchParams.q,
  });
  return (
    <>
      <Title titleEn={'Search Results'} titleJp={'記事検索の結果'} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={'article'} />
          </Suspense>
        </nav>
        <GridArticleList articles={data.contents} category={'article'} />
        <Pagination
          totalCount={data.totalCount}
          basePath="/article/search"
          current={current}
          q={searchParams.q}
        />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
