'use client';

import React from 'react';
import { formatRichText } from '@/libs/utils';
import { renderToc } from '@/libs/render-toc';
import { type Article } from '@/libs/microcms';
import PublishedDate from '../PublishedDate';
import styles from './index.module.css';
import { Box, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react';
import TableOfContents from '../TableOfContents';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { IMAGEBASEURL } from '@/constants';
import { FaLine } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';

type Props = {
  data: Article;
  isShowToc?: boolean;
};

export default function InterviewArticle({ data, isShowToc = true }: Props) {
  const toc = renderToc(data.content);
  const pathName = usePathname();
  const fullPath = `${new URL(process.env.BASE_URL || 'http://localhost:3000')}${pathName.slice(
    1,
  )}`;
  const devidedContents = data.content
    .split(/<h2/g)
    .filter(Boolean)
    .map((section, i) => {
      const completedParagraph = `<h2${section}`;
      return completedParagraph;
    });

  const interviewedSNSLinks = [
    {
      sns: data.instagramid,
      href: `https://www.instagram.com/${data.instagramid}?ref=badge`,
      isInstagram: true,
      bg: '',
      activeIcon: <FaInstagram className={styles.instagramIcon} size={32} color={'white'} />,
      inactiveIcon: <FaInstagram size={32} color={'gray'} />,
    },
    {
      sns: data.facebookurl,
      href: data.facebookurl,
      isInstagram: false,
      bg: '#1877f2',
      activeIcon: <FaFacebookF size={26} color={'white'} />,
      inactiveIcon: <FaFacebookF size={26} color={'gray'} />,
    },
    {
      sns: data.xid,
      href: `https://twitter.com/${data.xid}`,
      isInstagram: false,
      bg: '#000',
      activeIcon: <FaXTwitter size={24} color={'white'} />,
      inactiveIcon: <FaXTwitter size={24} color={'gray'} />,
    },
    {
      sns: data.lineurl,
      href: data.lineurl,
      isInstagram: false,
      bg: 'white',
      activeIcon: <FaLine size={45} color={'#06c755'} />,
      inactiveIcon: <FaLine size={45} color={'gray'} />,
    },
    {
      sns: data.url,
      href: data.url,
      isInstagram: false,
      bg: 'momo.100',
      activeIcon: <IoMdHome size={30} color={'white'} />,
      inactiveIcon: <IoMdHome size={30} color={'gray'} />,
    },
  ];

  return (
    <Box as={'article'}>
      <Box maxW={900} mx={'auto'} pb={{ base: 15, md: 156 }} minH={'calc(100vh - 200px)'}>
        {data.thumbnail ? (
          <Image src={data.thumbnail?.url} alt={data.title} w={'100%'} maxW={900} h={'auto'} />
        ) : (
          <Image
            src={`${IMAGEBASEURL}/no-image.webp`}
            alt={'No Image'}
            w={'100%'}
            maxW={620}
            h={'auto'}
          />
        )}{' '}
        <Box
          pt={{ base: '30px', md: '80px' }}
          pb={{ base: '30px', md: '20px' }}
          px={4}
          mt={8}
          mb={8}
          borderTop={'1px solid #000'}
        >
          <Heading
            as={'h1'}
            fontSize={{ base: '1.5rem', md: '2.5rem' }}
            textAlign={'left'}
            lineHeight={1.5}
          >
            {data.title}
          </Heading>
          <Box
            px={{ base: 4, md: 0 }}
            mt={5}
            mx={{ base: 'auto', md: 0 }}
            display={{ base: 'block', md: 'flex' }}
            justifyContent={'end'}
            gap={3}
          >
            {data.instagramid ? (
              <Link
                href={`https://www.instagram.com/${data.instagramid}?ref=badge`}
                isExternal
                className={styles.instagramButton}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                borderRadius={7}
                h={12}
                px={6}
                _hover={{ textDecoration: 'none', opacity: 0.7 }}
                color={'white'}
                fontWeight={'bold'}
                my={{ base: 1, md: 0 }}
              >
                <FaInstagram className={styles.instagramIcon} size={32} color="white" />
                <Box as={'span'} ml={1} zIndex={2}>{`${data.interviewed}さんをフォロー`}</Box>
              </Link>
            ) : (
              ''
            )}
            <Box display={'flex'} gap={3}>
              <Link
                href={`https://www.facebook.com/share.php?u=${fullPath}`}
                isExternal
                rel={'nofollow noopener'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                bg={'#1877f2'}
                borderRadius={7}
                h={12}
                px={3}
                _hover={{ textDecoration: 'none', opacity: 0.7 }}
                color={'white'}
                fontWeight={'bold'}
                my={{ base: 1, md: 0 }}
              >
                <FaFacebookF size={26} color="white" />
                <Box as={'span'} ml={1} zIndex={2}>
                  記事をシェア
                </Box>
              </Link>
              <Link
                href={`https://x.com/share?url=${fullPath}&text=${data.title}&via=irifune333&related=${data.xid}`}
                isExternal
                rel={'nofollow noopener'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                bg={'#000'}
                borderRadius={7}
                h={12}
                px={3}
                _hover={{ textDecoration: 'none', opacity: 0.7 }}
                color={'white'}
                fontWeight={'bold'}
                my={{ base: 1, md: 0 }}
              >
                <FaXTwitter size={24} color="white" />
                <Box as={'span'} ml={1} zIndex={2}>
                  記事をシェア
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
        {isShowToc ? <TableOfContents toc={toc} /> : ''}
        {devidedContents.map((content, i) => (
          <>
            <Box
              key={i}
              px={4}
              className={styles.content}
              dangerouslySetInnerHTML={{
                __html: `${formatRichText(content)}`,
              }}
            />
            {data.instagramid || data.facebookurl || data.xid || data.lineurl || data.url ? (
              <Box px={4} py={8}>
                <Grid
                  templateColumns={{ base: 'repeat(5, 1fr)', md: 'repeat(6, 1fr)' }}
                  gap={3}
                  maxW={{ base: 330, md: 700 }}
                  mx={'auto'}
                  position={'relative'}
                  p={'1rem 2rem'}
                  bg={'momo.600'}
                  border={'2px dashed #000'}
                >
                  <GridItem
                    colSpan={{ base: 5, md: 1 }}
                    w={{ base: '100%', md: 300 }}
                    mx={'auto'}
                    textAlign={'center'}
                    fontWeight={'bold'}
                    fontSize={{ base: 'medium', md: 'large' }}
                    lineHeight={10}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Text mr={2}>{`${data.interviewed}さんをフォローする`}</Text>
                    <FaArrowCircleRight size={24} />
                  </GridItem>
                  {interviewedSNSLinks.map((link, i) =>
                    link.sns ? (
                      <GridItem w={10} mx={'auto'} key={i}>
                        <Link
                          href={link.href}
                          isExternal
                          className={link.isInstagram ? styles.instagramButton : ''}
                          bg={link.bg}
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'center'}
                          borderRadius={7}
                          h={10}
                          _hover={{ textDecoration: 'none', opacity: 0.7 }}
                        >
                          {link.activeIcon}
                        </Link>
                      </GridItem>
                    ) : (
                      <GridItem w={10} mx={'auto'}>
                        <Box
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'center'}
                          borderRadius={7}
                          h={10}
                          bg={'momo.300'}
                        >
                          {link.inactiveIcon}
                        </Box>
                      </GridItem>
                    ),
                  )}
                </Grid>
                <Text textAlign={'center'} fontSize={{ base: 'small', md: 'medium' }} mt={2}>
                  ※ 一方的な営業・勧誘目的で連絡を取るのはお控えください。
                </Text>
              </Box>
            ) : (
              ''
            )}
          </>
        ))}
        <Box fontSize={'large'} display={'flex'} justifyContent={'end'} px={8}>
          <PublishedDate
            date={data.publishedAt || data.createdAt}
            simple={true}
            fontSize={'large'}
          />
          <Text ml={1}>公開</Text>
        </Box>
      </Box>
    </Box>
  );
}
