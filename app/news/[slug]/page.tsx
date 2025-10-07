import React from 'react';
import { Metadata } from 'next';
import { getDetail } from '@/libs/microcms';
import Article from '@/components/Article';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IMAGEBASEURL } from '@/constants';
import { draftMode } from 'next/headers';
import PreviewAlert from '@/components/PreviewAlert';

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
  const url = `/news/${data.id}`;

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
      title: 'ニュース',
      href: '/news',
      isCurrentPage: false,
    },
    {
      title: data.title,
      href: `/news/${data.id}`,
      isCurrentPage: true,
    },
  ];

  return (
    <>
      {isEnabled && <PreviewAlert />}
      <Article data={data} isShowToc={false} />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
