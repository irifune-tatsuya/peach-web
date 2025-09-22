'use client';

import React from 'react';
import { formatRichText } from '@/libs/utils';
import { renderToc } from '@/libs/render-toc';
import { type Article } from '@/libs/microcms';
import PublishedDate from '../PublishedDate';
import styles from './index.module.css';
import { Box, Heading, Image, Link, Text } from '@chakra-ui/react';
import TableOfContents from '../TableOfContents';
import { FaXTwitter } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { IMAGEBASEURL } from '@/constants';
import { StartMailMagazineForm } from '../StartMailMagazineForm';

type Props = {
  data: Article;
  isShowToc?: boolean;
  isFaqLayout?: boolean;
};

type startMailMagazineInputs = {
  lastname: string;
  firstname: string;
  company?: string;
  email: string;
};

export default function Article({ data, isShowToc = true, isFaqLayout = false }: Props) {
  const toc = renderToc(data.content);
  const pathName = usePathname();
  const fullPath = `${process.env.NEXT_PUBLIC_BASE_URL}${pathName}`;
  return (
    <>
      <Box
        as={'article'}
        maxW={{ base: 'auto', md: 620 }}
        mx={'auto'}
        pb={{ base: 15, md: 156 }}
        minH={'calc(100vh - 200px)'}
      >
        {isFaqLayout ? (
          ''
        ) : (
          <>
            {data.thumbnail ? (
              <Image src={data.thumbnail?.url} alt={data.title} w={'100%'} maxW={620} h={'auto'} />
            ) : (
              <Image
                src={`${IMAGEBASEURL}/no-image.webp`}
                alt={'No Image'}
                w={'100%'}
                maxW={620}
                h={'auto'}
              />
            )}{' '}
          </>
        )}
        <Heading
          as={'h1'}
          mt={{ base: '30px', md: '72px' }}
          mb={5}
          fontSize={'x-large'}
          textAlign={'left'}
          className={styles.title}
          px={4}
          lineHeight={1.5}
        >
          {data.title}
        </Heading>
        {isFaqLayout ? (
          ''
        ) : (
          <>
            <Box
              px={4}
              h={'37px'}
              mb={9}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Box display={'flex'} alignItems={'center'}>
                <Image
                  src={`${IMAGEBASEURL}/article/momo-icon.webp`}
                  alt={'ピーチウェブアイコン'}
                  w={'37px'}
                  h={'37px'}
                  borderRadius="full"
                />
                <Box display={'flex'} flexFlow={'column'} fontSize={'small'} ml={2}>
                  <Box as={'span'}>合同会社ピーチウェブ</Box>
                  <PublishedDate date={data.publishedAt || data.createdAt} simple={true} />
                </Box>
              </Box>
              <Box display={'flex'} gap={2}>
                <Link
                  href={`https://x.com/share?url=${fullPath}&text=${data.title}&via=irifune333&related=irifune333&hashtags=ピーチウェブ`}
                  isExternal
                  rel={'nofollow noopener'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  bg={'#000'}
                  borderRadius={7}
                  w={{ base: 37 }}
                  h={{ base: 37 }}
                  _hover={{ textDecoration: 'none', opacity: 0.7 }}
                >
                  <FaXTwitter size={24} color="white" />
                </Link>
              </Box>
            </Box>
            {isShowToc ? <TableOfContents toc={toc} /> : ''}
          </>
        )}
        <Box
          px={4}
          mb={20}
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: `${formatRichText(data.content)}`,
          }}
        />
        <Box px={4}>
          <Heading className={styles.title}>次の記事更新はいつ？</Heading>
          <Text className={styles.paragraph} mb={10}>
            ニュースレターを登録してピーチウェブの最新情報をいち早く手に入れてください！もちろん、
            <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
              登録無料でいつでも解約可能
            </Box>
            ですのでご安心ください。
          </Text>
          <StartMailMagazineForm />
        </Box>
      </Box>
    </>
  );
}
