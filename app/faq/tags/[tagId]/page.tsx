import { getList, getTag } from '@/libs/microcms';
import { LIMIT30 } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';
import Title from '@/components/Title';
import SearchField from '@/components/SearchField';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import React, { Suspense } from 'react';
import { Metadata } from 'next';

type Props = {
  params: Promise<{
    tagId: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const tagId = params.tagId;
  const tag = await getTag(tagId);
  const tagName = tag.name;

  const pageTitle = `「${tagName}」に関するよくあるご質問`;
  const description = `「${tagName}」に関連するよくあるご質問の一覧です。ピーチウェブのサービスについて、より深くご理解いただけます。`;

  return {
    title: pageTitle,
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/faq/tags/${tagId}`,
    },
    openGraph: {
      title: pageTitle,
      description: description,
      type: 'website',
    },
  };
}

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
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[156px]">
        <nav className="mb-20 flex justify-center md:justify-start">
          <Suspense fallback={<div className="animate-pulse">読み込み中...</div>}>
            <SearchField category={category} />
          </Suspense>
        </nav>
        <ArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} basePath={`/${category}/tags/${tagId}`} />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
