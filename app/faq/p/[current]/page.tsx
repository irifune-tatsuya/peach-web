import { getList, getTagList } from '@/libs/microcms';
import { FAQFILTER, LIMIT30 } from '@/constants';
import Pagination from '@/components/Pagination';
import Title from '@/components/Title';
import SearchField from '@/components/SearchField';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ArticleList from '@/components/ArticleList';
import React, { Suspense } from 'react';
import TagList from '@/components/TagList';
import { Metadata } from 'next';

const pageTitle = 'よくあるご質問';
const description =
  'ピーチウェブへのよくあるご質問をまとめております。サービスに関するものから事務的なものまで様々な疑問にお答えします。もし見つからない場合はお問い合わせフォームからご質問ください。';

type Props = {
  params: Promise<{
    tagId: string;
    current: string;
  }>;
  searchParams: Promise<{
    q?: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const current = params.current || '1';
  const title = `${pageTitle} - ${current}ページ目`;

  return {
    title: title,
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/faq/p/${current}`,
    },
    openGraph: {
      title: title,
      description: description,
      type: 'website',
    },
  };
}

export const revalidate = 3600;

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
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
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={category} />
          </Suspense>
        </nav>
        <TagList tags={tags.contents} category={category} />
        <ArticleList articles={data.contents} category={category} />
        <Pagination
          totalCount={data.totalCount}
          basePath={`/${category}`}
          current={current}
          q={searchParams.q}
        />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
