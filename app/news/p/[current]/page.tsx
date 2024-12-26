import { getList } from '@/libs/microcms';
import { LIMIT30, NEWSFILTER } from '@/constants';
import Pagination from '@/components/Pagination';
import Title from '@/components/Title';
import { Box } from '@chakra-ui/react';
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
  params: {
    tagId: string;
    current: string;
  };
  searchParams: {
    q?: string;
  };
};

export const revalidate = 3600;

export default async function Page({ params, searchParams }: Props) {
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
      <Box maxW={1152} mx={'auto'} p={4} pb={{ base: 15, md: 156 }}>
        <ArticleList articles={data.contents} category={category} />
        <Pagination
          totalCount={data.totalCount}
          basePath={`/${category}`}
          current={current}
          q={searchParams.q}
        />
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
