import { getList } from '@/libs/microcms';
import { LIMIT30, NEWSFILTER } from '@/constants';
import Pagination from '@/components/Pagination';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ArticleList from '@/components/ArticleList';
import React from 'react';
import { Metadata } from 'next';

const pageTitle = 'ニュース';
const description =
  '合同会社ピーチウェブの最新情報をお届けしております。異業種交流会への参加情報やイベント開催情報など気になる情報をいち早くご確認いただくことができます。';

type Props = {
  params: Promise<{
    tagId: string;
    current: string;
  }>;
  searchParams: Promise<{
    q?: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const current = params.current || '1';
  const title = `${pageTitle} - ${current}ページ目`;

  return {
    title: title,
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/news/p/${current}`,
    },
    openGraph: {
      title: title,
      description: description,
      type: 'website',
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
    title: 'ニュース',
    href: '/news',
    isCurrentPage: false,
  },
];

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
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <ArticleList articles={data.contents} category={category} />
        <Pagination
          totalCount={data.totalCount}
          basePath={`/${category}`}
          current={current}
          q={searchParams.q}
        />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
