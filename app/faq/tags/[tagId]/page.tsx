import { getList, getTag } from '@/libs/microcms';
import { LIMIT30 } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';
import Title from '@/components/Title';
import { Box } from '@chakra-ui/react';
import SearchField from '@/components/SearchField';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import React, { Suspense } from 'react';

type Props = {
  params: Promise<{
    tagId: string;
  }>;
};

export const revalidate = 3600;

export default async function Tags(props: Props) {
  const params = await props.params;
  const category = 'faq';

  const { tagId } = params;
  const data = await getList({
    limit: LIMIT30,
    filters: `tags[contains]${tagId}`,
  });
  const tag = await getTag(tagId);

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: 'よくあるご質問',
      href: `/${category}`,
      isCurrentPage: false,
    },
    {
      title: `${tag.name}タグの記事一覧`,
      href: `/${category}/tags/${tagId}`,
      isCurrentPage: true,
    },
  ];

  return (
    <>
      <Title
        titleEn={`FAQ -${tag.id.charAt(0).toUpperCase() + tag.id.slice(1)}-`}
        titleJp={`${tag.name}タグの記事一覧`}
      />
      <Box maxW={1152} mx={'auto'} p={4} pb={{ base: 15, md: 156 }}>
        <Box as={'nav'} display={'flex'} justifyContent={{ base: 'center', md: 'start' }} mb={20}>
          <Suspense fallback={<Box>読み込み中...</Box>}>
            <SearchField category={category} />
          </Suspense>
        </Box>
        <ArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} basePath={`/${category}/tags/${tagId}`} />
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
