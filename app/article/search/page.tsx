import { getList } from '@/libs/microcms';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import { Box } from '@chakra-ui/react';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import SearchField from '@/components/SearchField';
import { ARTICLEFILTER } from '@/constants';
import React, { Suspense } from 'react';

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

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export const revalidate = 3600;

export default async function Search(props: Props) {
  const searchParams = await props.searchParams;
  const category = 'article';
  const data = await getList({
    filters: ARTICLEFILTER,
    q: searchParams.q,
  });

  return (
    <>
      <Title titleEn={'Search Results'} titleJp={'記事の検索結果'} />
      <Box maxW={1152} mx={'auto'} p={4} pb={{ base: 15, md: 156 }}>
        <Box as={'nav'} display={'flex'} justifyContent={{ base: 'center', md: 'start' }} mb={20}>
          <Suspense fallback={<Box>読み込み中...</Box>}>
            <SearchField category={category} />
          </Suspense>
        </Box>
        <GridArticleList articles={data.contents} category={category} />
        <Pagination
          totalCount={data.totalCount}
          basePath={`/${category}/search`}
          q={searchParams.q}
        />
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
