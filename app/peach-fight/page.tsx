import { getList } from '@/libs/microcms';
import { LIMIT12, PEACHFILTER, IMAGEBASEURL } from '@/constants';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import { Box, Image, Text } from '@chakra-ui/react';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import SearchField from '@/components/SearchField';
import { TopSwiper } from '@/components/TopSwiper';
import styles from './layout.module.css';
import React from 'react';

export const revalidate = 3600;

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: '岡山のチャレンジ応援マガジン「ピーチファイ」',
    href: '/peach-fight',
    isCurrentPage: true,
  },
];

const swiperImages = [
  { src: `${IMAGEBASEURL}/peach-fight/peach-fight-banner.webp`, alt: 'ピーチファイ' },
];

export default async function PeachFight() {
  const category = 'peach-fight';
  const data = await getList({
    limit: LIMIT12,
    filters: PEACHFILTER,
  });
  return (
    <>
      <Box display={'none'}>
        <Title titleEn={'ピーチファイ'} titleJp={'岡山のチャレンジ応援マガジン'} />
      </Box>
      <Box id={'key-visual'} h={'100vh'} position={'relative'} overflow={'hidden'}>
        <Box
          position={'absolute'}
          top={{ base: '42%', sm: '40%', md: '40%', lg: '40%' }}
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          zIndex={2}
          w={'95%'}
          maxW={'600px'}
        >
          <Box w={'100%'} className={styles.message}>
            <Image
              src={`${IMAGEBASEURL}/peach-fight/peach-fight-logo.webp`}
              alt={'岡山のチャレンジ応援マガジン「ピーチファイ」'}
              w={'100%'}
              h={'auto'}
              maxW={600}
            />
            <Text
              color={'white'}
              fontSize={{ base: '1em', sm: 'large', md: 'larger', lg: 'x-large' }}
              fontWeight={'bold'}
              lineHeight={2}
              mt={12}
            >
              あなたは仕事に全力投球していますか？
              <Box as={'br'} />
              <Box as={'br'} />
              岡山のチャレンジ応援マガジン「ピーチファイ」は
              <Box as={'br'} />
              経営者様・起業家様へのインタビューを通じて
              <Box as={'br'} />
              仕事のワクワクを共有するWEBメディアです。
              <Box as={'br'} />
              <Box as={'br'} />
              インタビューに応じてくださる経営者様も
              <Box as={'br'} />
              大募集しております！
            </Text>
          </Box>
        </Box>
        <Image
          src={`${IMAGEBASEURL}/peach-fight/momotaro.webp`}
          alt={'桃太郎とピーチな人たち！'}
          w={'100%'}
          maxW={600}
          position={'absolute'}
          bottom={{ base: '-1.7%', lg: '-2.4%' }}
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          zIndex={2}
        />
        <TopSwiper images={swiperImages} />
      </Box>
      <Box maxW={1152} mx={'auto'} p={4} pb={{ base: 15, md: 156 }}>
        <Box as={'nav'} display={'flex'} justifyContent={{ base: 'center', md: 'start' }} mb={20}>
          <SearchField category={category} />
        </Box>
        <GridArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} />
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
