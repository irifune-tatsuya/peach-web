import React from 'react';
import { Metadata } from 'next';
import { getDetail } from '@/lib/microcms';
import Article from '@/components/Article';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IMAGEBASEURL } from '@/constants';
import { draftMode } from 'next/headers';
import PreviewAlert from '@/components/PreviewAlert';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { FAQPage, Question, Answer, BreadcrumbList, WithContext } from 'schema-dts';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ draftKey?: string }>;
};

export const revalidate = 0;

export async function generateMetadata({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: Props): Promise<Metadata> {
  const params = await paramsPromise;
  const searchParams = await searchParamsPromise;
  const data = await getDetail(params.slug, { draftKey: searchParams.draftKey });
  const defaultImageUrl = `${IMAGEBASEURL}/ogp.jpg`;
  const imageUrl = data?.thumbnail?.url || defaultImageUrl;
  const url = `/faq/${data.id}`;

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
      title: 'よくあるご質問',
      href: '/faq',
      isCurrentPage: false,
    },
    {
      title: data.title,
      href: `/faq/${data.id}`,
      isCurrentPage: true,
    },
  ];

  const faqPageJsonLd: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: data.title,
    description: data.description,
    url: `${siteConfig.url}/faq/${data.id}`,
    mainEntity: [
      {
        '@type': 'Question',
        name: data.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data.content,
        },
      } as Question,
    ],
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
      <JsonLd jsonLdData={faqPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      {isEnabled && <PreviewAlert />}
      <Article data={data} isFaqLayout={true} />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
