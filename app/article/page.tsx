import { getList } from '@/libs/microcms';
import { ARTICLEFILTER, LIMIT12 } from '@/constants';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import { Box } from '@chakra-ui/react';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const revalidate = 60;

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: '新着記事一覧',
    href: '/article',
    isCurrentPage: true,
  },
];

export default async function Article() {
  const data = await getList({
    limit: LIMIT12,
    filters: ARTICLEFILTER,
  });
  return (
    <>
      <Title titleEn={'Articles'} titleJp={'新着記事一覧'} />
      <Box maxW={1152} mx={'auto'} p={4} mb={{ base: 16, md: 0 }}>
        <Pagination totalCount={data.totalCount} />
        <GridArticleList articles={data.contents} category={'article'} />
        <Pagination totalCount={data.totalCount} />
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
