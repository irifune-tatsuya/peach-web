import React from 'react';
import { Metadata } from 'next';
import { getDetail } from '@/lib/microcms';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IMAGEBASEURL } from '@/constants';
import InterviewArticle from '@/components/InterviewArticle';
import { CONTACT } from '@/constants';
import { IoMail } from 'react-icons/io5';
import { FaLine } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import ButtonArea from '@/components/ButtonArea';
import { draftMode } from 'next/headers';
import PreviewAlert from '@/components/PreviewAlert';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { Article as ArticleSchema, BreadcrumbList, WithContext } from 'schema-dts';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ draftKey?: string }>;
};

export const revalidate = 0;

const contactButtons = [
  {
    bgClassName: 'bg-[var(--color-momo-100)]',
    textClassName: 'text-white',
    href: '/contact',
    isExternal: false,
    title: 'フォームから取材応募',
    icon: <IoMail />,
  },
  {
    bgClassName: 'bg-[#06c755]',
    textClassName: 'text-white',
    href: CONTACT.line,
    isExternal: true,
    title: 'LINEから取材応募',
    icon: <FaLine />,
  },
  {
    bgClassName: 'bg-[var(--color-momo-300)]',
    textClassName: 'text-black',
    href: '/peach-fight',
    isExternal: false,
    title: 'ピーチファイTOPへ',
    icon: <IoMdHome />,
  },
];

export async function generateMetadata({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: Props): Promise<Metadata> {
  const params = await paramsPromise;
  const searchParams = await searchParamsPromise;
  const data = await getDetail(params.slug, { draftKey: searchParams.draftKey });

  const defaultImageUrl = `${IMAGEBASEURL}/ogp.jpg`;
  const imageUrl = data?.thumbnail?.url || defaultImageUrl;
  const url = `/peach-fight/${data.id}`;

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
}

export default async function Page({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: Props) {
  const params = await paramsPromise;
  const searchParams = await searchParamsPromise;
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
      href: '/peach-fight',
      isCurrentPage: false,
    },
    {
      title: data.title,
      href: `/peach-fight/${data.id}`,
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
      '@id': `${siteConfig.url}/peach-fight/${data.id}`,
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
      <ButtonArea buttons={contactButtons} className="bg-white" />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
