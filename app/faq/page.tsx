import { getList, getTagList } from '@/libs/microcms';
import { FAQFILTER, LIMIT12 } from '@/constants';
import Pagination from '@/components/Pagination';
import { Box } from '@chakra-ui/react';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import SearchField from '@/components/SearchField';
import ArticleList from '@/components/ArticleList';
import TagList from '@/components/TagList';
import React from 'react';

export const revalidate = 0;

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: 'よくあるご質問',
    href: '/faq',
    isCurrentPage: true,
  },
];

export default async function Faq() {
  const category = 'faq';
  const tags = await getTagList({
    filters: FAQFILTER,
  });
  const data = await getList({
    limit: LIMIT12,
    filters: FAQFILTER,
  });
  return (
    <>
      <Title titleEn={'FAQ'} titleJp={'よくあるご質問'} />
      <Box maxW={1152} mx={'auto'} p={4} pb={{ base: 15, md: 156 }}>
        <Box as={'nav'} display={'flex'} justifyContent={{ base: 'center', md: 'start' }} mb={20}>
          <SearchField category={category} />
        </Box>
        <TagList tags={tags.contents} category={category} />
        <ArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} />
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
