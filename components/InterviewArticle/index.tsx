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
import { IMAGEBASEURL, CONTACT } from '@/constants';
import { FaArrowCircleRight } from 'react-icons/fa';

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
            display={'flex'}
            justifyContent={'end'}
          >
            <Grid
              templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
              gap={{ base: 1, md: 3 }}
              w={{ base: '100%' }}
              maxW={604}
            >
              {data.instagramid ? (
                <GridItem colSpan={{ base: 2, md: 1 }} w={{ base: '100%', md: 260 }}>
                  <Link
                    href={`https://www.instagram.com/${data.instagramid}?ref=badge`}
                    isExternal
                    className={styles.instagramButton}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={7}
                    h={12}
                    _hover={{ textDecoration: 'none', opacity: 0.7 }}
                    color={'white'}
                    fontWeight={'bold'}
                    my={{ base: 1, md: 0 }}
                  >
                    <FaInstagram className={styles.instagramIcon} size={32} color="white" />
                    <Box as={'span'} ml={1} zIndex={2}>{`${data.interviewed}さんをフォロー`}</Box>
                  </Link>
                </GridItem>
              ) : (
                ''
              )}
              {data.facebookid ? (
                <GridItem w={{ base: '100%', md: 160 }}>
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
                </GridItem>
              ) : (
                ''
              )}
              {data.xid ? (
                <GridItem w={{ base: '100%', md: 160 }}>
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
                </GridItem>
              ) : (
                ''
              )}
            </Grid>
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
            <Box px={4} py={8}>
              <Text textAlign={'center'} fontSize={{ base: 'small', md: 'medium' }}>
                ※ 一方的な営業・勧誘目的で連絡を取るのはお控えください。
              </Text>
              <Grid
                templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
                gap={{ base: 1, md: 3 }}
                w={{ base: '100%' }}
                maxW={520}
                mt={3}
                mx={'auto'}
                position={'relative'}
                p={'1rem 2rem calc(1rem + 10px)'}
                bg={'momo.600'}
                _before={{
                  position: 'absolute',
                  top: '-8px',
                  left: '-8px',
                  w: '100%',
                  h: '100%',
                  content: '""',
                  border: '2px solid #000',
                }}
              >
                {data.instagramid ? (
                  <GridItem
                    colSpan={{ base: 3, md: 1 }}
                    w={279}
                    mx={'auto'}
                    textAlign={'center'}
                    fontWeight={'bold'}
                    fontSize={'large'}
                    lineHeight={10}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Text mr={2}>{`${data.interviewed}さんをフォローする`}</Text>
                    <FaArrowCircleRight size={30} />
                  </GridItem>
                ) : (
                  ''
                )}
                {data.instagramid ? (
                  <GridItem w={{ base: 90, md: 10 }}>
                    <Link
                      href={`https://www.instagram.com/${data.instagramid}?ref=badge`}
                      isExternal
                      className={styles.instagramButton}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      borderRadius={7}
                      h={10}
                      _hover={{ textDecoration: 'none', opacity: 0.7 }}
                    >
                      <FaInstagram className={styles.instagramIcon} size={32} color="white" />
                    </Link>
                  </GridItem>
                ) : (
                  ''
                )}
                {data.facebookid ? (
                  <GridItem w={{ base: 90, md: 10 }}>
                    <Link
                      href={`https://www.facebook.com/profile.php?id=${data.facebookid}`}
                      isExternal
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      bg={'#1877f2'}
                      borderRadius={7}
                      h={10}
                      _hover={{ textDecoration: 'none', opacity: 0.7 }}
                    >
                      <FaFacebookF size={26} color="white" />
                    </Link>
                  </GridItem>
                ) : (
                  ''
                )}
                {data.xid ? (
                  <GridItem w={{ base: 90, md: 10 }}>
                    <Link
                      href={`https://twitter.com/${data.xid}`}
                      isExternal
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      bg={'#000'}
                      borderRadius={7}
                      h={10}
                      _hover={{ textDecoration: 'none', opacity: 0.7 }}
                    >
                      <FaXTwitter size={24} color="white" />
                    </Link>
                  </GridItem>
                ) : (
                  ''
                )}
              </Grid>
            </Box>
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
