import React from 'react';
import { Metadata } from 'next';
import { getDetail } from '@/libs/microcms';
import Article from '@/components/Article';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IMAGEBASEURL } from '@/constants';
import { IoBookOutline } from 'react-icons/io5';
import { IoMdHome } from 'react-icons/io';
import ButtonArea from '@/components/ButtonArea';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk: string;
  };
};

export const revalidate = 3600;

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  const defaultImageUrl = `${IMAGEBASEURL}/ogp.jpg`;
  const defaultDescription =
    'あなたのビジネスが永く愛されますようWEBブランディングで岡山の企業をサポートする合同会社ピーチウェブの公式サイトです。';
  const imageUrl = data?.thumbnail?.url || defaultImageUrl;
  const description = data?.description || defaultDescription;

  return {
    title: data.title,
    description: description,
    openGraph: {
      title: data.title,
      description: description,
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
      description: description,
      images: [
        {
          url: imageUrl,
          alt: data.title,
        },
      ],
    },
  };
}

const ContactButtons = [
  {
    bg: 'momo.100',
    color: 'white',
    href: '/',
    isExternal: false,
    title: 'TOPページへ',
    icon: <IoMdHome />,
  },
  {
    bg: 'momo.300',
    color: 'black',
    href: '/article',
    isExternal: false,
    title: '新着記事一覧へ',
    icon: <IoBookOutline />,
  },
];

export default async function Page({ params, searchParams }: Props) {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

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
      <Article data={data} />
      <ButtonArea buttons={ContactButtons} bg={'white'} />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
