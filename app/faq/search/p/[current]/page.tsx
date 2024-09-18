import { getList } from '@/libs/microcms';
import { ARTICLEFILTER, LIMIT12 } from '@/constants';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import Title from '@/components/Title';
import { Box } from '@chakra-ui/react';
import SearchField from '@/components/SearchField';
import { Breadcrumbs } from '@/components/Breadcrumbs';

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
  params: {
    current: string;
  };
  searchParams: {
    q?: string;
  };
};

export const revalidate = 60;

export default async function Page({ params, searchParams }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    filters: ARTICLEFILTER,
    limit: LIMIT12,
    offset: LIMIT12 * (current - 1),
    q: searchParams.q,
  });
  return (
    <>
      <Title titleEn={'Search Results'} titleJp={'記事検索の結果'} />
      <Box maxW={1152} mx={'auto'} p={4} pb={{ base: 15, md: 156 }}>
        <Box as={'nav'} display={'flex'} justifyContent={{ base: 'center', md: 'start' }}>
          <SearchField category={'article'} />
        </Box>
        <GridArticleList articles={data.contents} category={'article'} />
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
