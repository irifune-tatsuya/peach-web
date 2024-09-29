import { getList } from '@/libs/microcms';
import { LIMIT12, PEACHFILTER } from '@/constants';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import Title from '@/components/Title';
import { Box } from '@chakra-ui/react';
import SearchField from '@/components/SearchField';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import React from 'react';

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
  {
    title: 'ピーチファイの検索結果',
    href: '/peach-fight/search',
    isCurrentPage: true,
  },
];

type Props = {
  params: {
    current: string;
  };
  searchParams: {
    q?: string;
  };
};

export const revalidate = 0;

export default async function Page({ params, searchParams }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    filters: PEACHFILTER,
    limit: LIMIT12,
    offset: LIMIT12 * (current - 1),
    q: searchParams.q,
  });
  return (
    <>
      <Title titleEn={'Search Results'} titleJp={'ピーチファイの検索結果'} />
      <Box maxW={1152} mx={'auto'} p={4} mb={{ base: 16, md: 0 }}>
        <Box as={'nav'} display={'flex'} justifyContent={{ base: 'center', md: 'start' }} mb={20}>
          <SearchField category={'peach-fight'} />
        </Box>
        <GridArticleList articles={data.contents} category={'peach-fight'} />
        <Pagination
          totalCount={data.totalCount}
          basePath="/article/search"
          current={current}
          q={searchParams.q}
        />
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
