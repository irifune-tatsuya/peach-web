import React from 'react';
import { Metadata } from 'next';
import { getDetail } from '@/lib/microcms';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { IMAGEBASEURL } from '@/constants';
import { InterviewArticle } from '@/components/features/InterviewArticle';
import { ButtonArea } from '@/components/common/ButtonArea';
import { draftMode } from 'next/headers';
import { PreviewAlert } from '@/components/common/PreviewAlert';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { Article as ArticleSchema, BreadcrumbList, WithContext } from 'schema-dts';
import { House, Mail } from 'lucide-react';

export const revalidate = 0;
const parentSegment = 'peach-fight';

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

const linkButtons = [
  {
    href: '/contact',
    children: 'フォームから取材応募',
    icon: <Mail className="mr-1 !h-5 !w-5" />,
    variant: 'default',
  },
  {
    href: `/${parentSegment}`,
    children: 'ピーチファイTOPへ',
    icon: <House className="mr-1 !h-5 !w-5" />,
    variant: 'secondary',
  },
] as const;

const PeachFightSlugPage = async (props: Props) => {
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
      title: '岡山のチャレンジ応援マガジン「ピーチファイ」',
      href: `/${parentSegment}`,
      isCurrentPage: false,
    },
    {
      title: data.title,
      href: `/${parentSegment}/${data.id}`,
      isCurrentPage: true,
    },
  ];

  const articleJsonLd: WithContext<ArticleSchema> = {
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
      <JsonLd jsonLdData={articleJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      {isEnabled && <PreviewAlert />}
      <InterviewArticle data={data} />
      <ButtonArea buttons={linkButtons} />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default PeachFightSlugPage;
