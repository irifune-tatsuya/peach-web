import { getList } from '@/libs/microcms';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import { Box } from '@chakra-ui/react';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import SearchField from '@/components/SearchField';
import { PEACHFILTER } from '@/constants';
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
  {
    title: 'ピーチファイの検索結果',
    href: '/peach-fight/search',
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
  const category = 'peach-fight';
  const data = await getList({
    filters: PEACHFILTER,
    q: searchParams.q,
  });

  return (
    <>
      <Title titleEn={'Search Results'} titleJp={'ピーチファイの検索結果'} />
      <Box maxW={1152} mx={'auto'} p={4} mb={{ base: 16, md: 0 }}>
        <Box as={'nav'} display={'flex'} justifyContent={{ base: 'center', md: 'start' }} mb={20}>
          <Suspense fallback={<Box>読み込み中...</Box>}>
            <SearchField category={category} />
          </Suspense>
        </Box>
        <GridArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} q={searchParams.q} />
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
