import React from 'react';
import { Metadata } from 'next';
import { getDetail } from '@/lib/microcms';
import { Article } from '@/components/features/Article';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { IMAGEBASEURL } from '@/constants';
import { IoBookOutline } from 'react-icons/io5';
import { IoMdHome } from 'react-icons/io';
import ButtonArea from '@/components/common/ButtonArea';
import { draftMode } from 'next/headers';
import { PreviewAlert } from '@/components/common/PreviewAlert';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { Article as ArticleSchema, BreadcrumbList, WithContext } from 'schema-dts';

export const revalidate = 0;
const parentSegment = 'article';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ draftKey?: string }>;
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const data = await getDetail(params.slug, { draftKey: searchParams.draftKey });
  const defaultImageUrl = `${IMAGEBASEURL}/ogp.jpg`;
  const imageUrl = data?.thumbnail?.url || defaultImageUrl;
  const url = `/${parentSegment}/${data.id}`;

  return {
    title: data.title,
    description: data.description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: url,
      images: [
        {
          url: imageUrl,
          alt: data.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: imageUrl,
          alt: data.title,
        },
      ],
    },
  };
};

const contactButtons = [
  {
    bgClassName: 'bg-[var(--color-momo-100)]',
    textClassName: 'text-white',
    href: '/',
    isExternal: false,
    title: 'TOPページへ',
    icon: <IoMdHome />,
  },
  {
    bgClassName: 'bg-[var(--color-momo-300)]',
    textClassName: 'text-black',
    href: '/article',
    isExternal: false,
    title: '新着記事一覧へ',
    icon: <IoBookOutline />,
  },
];

const ArticleSlugPage = async (props: Props) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const { isEnabled } = await draftMode();
  const data = await getDetail(params.slug, { draftKey: searchParams.draftKey });

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: '新着記事一覧',
      href: `/${parentSegment}`,
      isCurrentPage: false,
    },
    {
      title: data.title,
      href: `/${parentSegment}/${data.id}`,
      isCurrentPage: true,
    },
  ];

  const jsonLdData: WithContext<ArticleSchema> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: data.thumbnail?.url || `${IMAGEBASEURL}/ogp.jpg`,
    datePublished: data.publishedAt,
    dateModified: data.updatedAt,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/${parentSegment}/${data.id}`,
    },
  };

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
      <JsonLd jsonLdData={jsonLdData} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      {isEnabled && <PreviewAlert />}
      <Article data={data} />
      <ButtonArea buttons={contactButtons} className="bg-white" />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default ArticleSlugPage;
