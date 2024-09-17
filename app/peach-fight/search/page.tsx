import { getList } from '@/libs/microcms';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import { Box } from '@chakra-ui/react';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import SearchField from '@/components/SearchField';
import { PEACHFILTER } from '@/constants';

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
    title: '記事の検索結果',
    href: '/peach-fight/search',
    isCurrentPage: true,
  },
];

type Props = {
  searchParams: {
    q?: string;
  };
};

export const revalidate = 60;

export default async function Page({ searchParams }: Props) {
  const data = await getList({
    filters: PEACHFILTER,
    q: searchParams.q,
  });

  return (
    <>
      <Title titleEn={'Search Results'} titleJp={'ピーチファイの検索の結果'} />
      <Box maxW={1152} mx={'auto'} p={4} mb={{ base: 16, md: 0 }}>
        <Box as={'nav'} display={'flex'} justifyContent={{ base: 'center', md: 'start' }}>
          <SearchField category={'peach-fight'} />
        </Box>
        <Pagination
          totalCount={data.totalCount}
          basePath="/peach-fight/search"
          q={searchParams.q}
        />
        <GridArticleList articles={data.contents} category={'peach-fight'} />
        <Pagination
          totalCount={data.totalCount}
          basePath="/peach-fight/search"
          q={searchParams.q}
        />
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
