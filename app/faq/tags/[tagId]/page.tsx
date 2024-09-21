import { getList, getTag } from '@/libs/microcms';
import { LIMIT12 } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';
import Title from '@/components/Title';
import { Box } from '@chakra-ui/react';
import SearchField from '@/components/SearchField';
import { Breadcrumbs } from '@/components/Breadcrumbs';

type Props = {
  params: {
    tagId: string;
  };
};

export const revalidate = 60;

export default async function Tags({ params }: Props) {
  const category = 'faq';

  const { tagId } = params;
  const data = await getList({
    limit: LIMIT12,
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
      href: '/faq',
      isCurrentPage: false,
    },
    {
      title: `${tag.name}タグの記事一覧`,
      href: `/faq/tags/${tag.id}`,
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
          <SearchField category={category} />
        </Box>
        <ArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} />
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
