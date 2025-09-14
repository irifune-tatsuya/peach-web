import { getList } from '@/libs/microcms';
import { LIMIT30, PEACHFILTER } from '@/constants';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import Title from '@/components/Title';
import { Box } from '@chakra-ui/react';
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
  {
    title: 'ピーチファイの検索結果',
    href: '/peach-fight/search',
    isCurrentPage: true,
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
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    filters: PEACHFILTER,
    limit: LIMIT30,
    offset: LIMIT30 * (current - 1),
    q: searchParams.q,
  });
  return (
    <>
      <Title titleEn={'Search Results'} titleJp={'ピーチファイの検索結果'} />
      <Box maxW={1152} mx={'auto'} p={4} mb={{ base: 16, md: 0 }}>
        <Box as={'nav'} display={'flex'} justifyContent={{ base: 'center', md: 'start' }} mb={20}>
          <Suspense fallback={<Box>読み込み中...</Box>}>
            <SearchField category={'peach-fight'} />
          </Suspense>
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
