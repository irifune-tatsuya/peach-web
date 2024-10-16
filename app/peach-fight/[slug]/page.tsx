import React from 'react';
import { Metadata } from 'next';
import { getDetail } from '@/libs/microcms';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IMAGEBASEURL } from '@/constants';
import InterviewArticle from '@/components/InterviewArticle';
import { CONTACT } from '@/constants';
import { IoMail } from 'react-icons/io5';
import { FaLine } from 'react-icons/fa';
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

const ContactButtons = [
  {
    bg: 'momo.100',
    color: 'white',
    href: '/contact',
    isExternal: false,
    title: 'フォームから取材応募',
    icon: <IoMail />,
  },
  {
    bg: '#06c755',
    color: 'white',
    href: CONTACT.line,
    isExternal: true,
    title: 'LINEから取材応募',
    icon: <FaLine />,
  },
  {
    bg: 'momo.300',
    color: 'black',
    href: '/peach-fight',
    isExternal: false,
    title: 'ピーチファイTOPへ',
    icon: <IoMdHome />,
  },
];

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  const defaultImageUrl = `${IMAGEBASEURL}/ogp.jpg`;
  const imageUrl = data?.thumbnail?.url || defaultImageUrl;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
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
      description: data.title,
      images: [
        {
          url: imageUrl,
          alt: data.title,
        },
      ],
    },
  };
}

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

  return (
    <>
      <InterviewArticle data={data} />
      <ButtonArea buttons={ContactButtons} bg={'white'} />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
