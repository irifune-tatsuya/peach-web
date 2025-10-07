import React from 'react';
import { Metadata } from 'next';
import { getDetail } from '@/libs/microcms';
import Article from '@/components/Article';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IMAGEBASEURL } from '@/constants';
import { IoBookOutline } from 'react-icons/io5';
import { IoMdHome } from 'react-icons/io';
import ButtonArea from '@/components/ButtonArea';
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
  const url = `/article/${data.id}`;

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
      title: '新着記事一覧',
      href: '/article',
      isCurrentPage: false,
    },
    {
      title: data.title,
      href: `/article/${data.id}`,
      isCurrentPage: true,
    },
  ];

  return (
    <>
      {isEnabled && <PreviewAlert />}
      <Article data={data} />
      <ButtonArea buttons={contactButtons} className="bg-white" />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
