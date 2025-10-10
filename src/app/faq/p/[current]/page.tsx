import { getList, getTagList } from '@/lib/microcms';
import { FAQFILTER, LIMIT30 } from '@/constants';
import { Pagination } from '@/components/ui/Pagination';
import Title from '@/components/ui/Title';
import { SearchField } from '@/components/ui/SearchField';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ArticleList } from '@/components/common/ArticleList';
import React, { Suspense } from 'react';
import { TagList } from '@/components/common/TagList';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { CollectionPage, BreadcrumbList, WithContext } from 'schema-dts';

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

  const title = `${pageTitle} - ${current}ページ目`;

  const collectionPageJsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description: description,
    url: `${siteConfig.url}/faq/p/${current}`,
  };

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
      title: `${current}ページ目`,
      href: `/faq/p/${current}`,
      isCurrentPage: true,
    },
  ];

  const breadcrumbJsonLd: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.title,
      item: `${siteConfig.url}${breadcrumb.href}`,
    })),
  };

  return (
    <>
      <JsonLd jsonLdData={collectionPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
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
