import { getList, getTagList } from '@/libs/microcms';
import { FAQFILTER, LIMIT30 } from '@/constants';
import Pagination from '@/components/Pagination';
import Title from '@/components/Title';
import { Box } from '@chakra-ui/react';
import SearchField from '@/components/SearchField';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ArticleList from '@/components/ArticleList';
import React from 'react';
import TagList from '@/components/TagList';

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
  const category = 'faq';
  const { tagId } = params;
  const current = parseInt(params.current as string, 10);
  const tags = await getTagList({
    filters: FAQFILTER,
  });
  const data = await getList({
    limit: LIMIT30,
    filters: FAQFILTER,
    offset: LIMIT30 * (current - 1),
    q: searchParams.q,
  });

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: 'よくあるご質問',
      href: '/faq',
      isCurrentPage: false,
    },
  ];

  return (
    <>
      <Title titleEn={'FAQ'} titleJp={'よくあるご質問'} />
      <Box maxW={1152} mx={'auto'} p={4} pb={{ base: 15, md: 156 }}>
        <Box as={'nav'} display={'flex'} justifyContent={{ base: 'center', md: 'start' }} mb={20}>
          <SearchField category={category} />
        </Box>
        <TagList tags={tags.contents} category={category} />
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
