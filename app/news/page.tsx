import { getList } from '@/libs/microcms';
import { LIMIT12, NEWSFILTER } from '@/constants';
import Pagination from '@/components/Pagination';
import { Box } from '@chakra-ui/react';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ArticleList from '@/components/ArticleList';

export const revalidate = 0;

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: 'ニュース',
    href: '/news',
    isCurrentPage: true,
  },
];

export default async function Article() {
  const category = 'news';
  const data = await getList({
    limit: LIMIT12,
    filters: NEWSFILTER,
  });
  return (
    <>
      <Title titleEn={'News'} titleJp={'ニュース'} />
      <Box maxW={1152} mx={'auto'} p={4} pb={{ base: 15, md: 156 }}>
        <ArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} />
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
