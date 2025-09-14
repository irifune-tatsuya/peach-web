import { getList } from '@/libs/microcms';
import { LIMIT12, PEACHFILTER, IMAGEBASEURL, CONTACT } from '@/constants';
import Pagination from '@/components/Pagination';
import GridArticleList from '@/components/GridArticleList';
import { Box, Heading, Image, Link, Text } from '@chakra-ui/react';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import SearchField from '@/components/SearchField';
import { TopSwiper } from '@/components/TopSwiper';
import styles from './layout.module.css';
import React, { Suspense } from 'react';
import { IoMail } from 'react-icons/io5';
import { FaLine } from 'react-icons/fa';
import ButtonArea from '@/components/ButtonArea';

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
  {
    src: `${IMAGEBASEURL}/peach-fight/peach-fight-bg.webp`,
    alt: 'ピーチファイ',
    borderRadius: 60,
    h: '80vh',
  },
];

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
          top={{ base: '45%', sm: '40%', md: '40%', lg: '40%' }}
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          zIndex={2}
          w={'85%'}
          maxW={'700px'}
        >
          <Box w={'100%'} className={styles.message}>
            <Image
              src={`${IMAGEBASEURL}/${category}/peach-fight-logo.webp`}
              alt={'岡山のチャレンジ応援マガジン「ピーチファイ」'}
              w={'100%'}
              h={'auto'}
              maxW={700}
            />
          </Box>
        </Box>
        <Link
          href={'/contact'}
          position={'absolute'}
          zIndex={2}
          bottom={{ base: '-20px', md: '30px' }}
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          w={145}
          h={145}
          borderRadius={'50%'}
          border={'2px solid #000000'}
          bg={'white'}
          cursor={'pointer'}
          className={styles.entryButton}
        >
          <Text
            position={'absolute'}
            top={0}
            bottom={0}
            left={0}
            right={0}
            m={'auto'}
            display={'block'}
            w={124}
            h={124}
            className={styles.entryCircle}
          >
            <Image
              src={`${IMAGEBASEURL}/${category}/entry_circle.webp`}
              alt={'エントリーサークル'}
              w={124}
              h={124}
            />
          </Text>
          <Text
            position={'absolute'}
            top={'50%'}
            left={'50%'}
            transform={'translate(-50%, -50%)'}
            w={'50px'}
            h={'46.4px'}
          >
            <Image
              src={`${IMAGEBASEURL}/${category}/entry_momo.webp`}
              alt={'エントリーボタン'}
              w={'50px'}
              h={'46.4px'}
            />
          </Text>
        </Link>
        <Box mx={{ base: 4, md: 10 }} my={{ base: 8, md: 0 }}>
          <TopSwiper images={swiperImages} />
        </Box>
      </Box>
      <Box maxW={1152} mx={'auto'} p={4} pb={{ base: 15, md: 156 }} pt={{ base: 15, md: 0 }}>
        <Box as={'nav'} display={'flex'} justifyContent={{ base: 'center', md: 'start' }} mb={20}>
          <Suspense fallback={<Box>読み込み中...</Box>}>
            <SearchField category={category} />
          </Suspense>
        </Box>
        <GridArticleList articles={data.contents} category={category} />
        <Pagination totalCount={data.totalCount} basePath={`/${category}`} />
      </Box>
      <Box maxW={1152} mx={'auto'} p={4}>
        <Heading mb={8} color={'momo.100'}>
          岡山のチャレンジ応援WEBマガジン
        </Heading>
        <Box display={{ base: 'block', md: 'flex' }} justifyContent={'space-between'}>
          <Box w={{ base: '100%', md: 450, lg: 600 }}>
            <Text fontSize={{ base: 'medium', lg: 'x-large' }} fontWeight={'bold'} mt={4}>
              「ピーチファイ」は、岡山県内（ときどき県外）の
              <Box as={'span'} color={'momo.100'}>
                起業家や新しいビジネスを展開する会社の従業員様の熱い想いを取材するWEBマガジン
              </Box>
              です。
            </Text>
            <Text fontSize={{ base: 'medium', lg: 'x-large' }} fontWeight={'bold'} mt={4}>
              異業種交流会では聴くことができない詳しい事業内容や起業家の想い、プライベートな側面など身近な起業家のストーリーを通じて、あなたの心にも火を灯しましょう！取材をされた方と取材を読んだ方がつながり、新しいチャレンジが連鎖することで地元岡山がより盛り上がればと思っております！
            </Text>
            <Text fontSize={{ base: 'medium', lg: 'x-large' }} fontWeight={'bold'} mt={4}>
              また、ピーチファイでは
              <Box as={'span'} color={'momo.100'}>
                取材を受けたい起業家、会社の従業員様も大募集
              </Box>
              しております。
            </Text>
          </Box>
          <Box mt={{ base: 20, md: 0 }}>
            <Image
              src={`${IMAGEBASEURL}/${category}/entrepreneurs.webp`}
              alt={'起業家様や新しいビジネスを展開する会社の従業員様'}
              w={'100%'}
              maxW={500}
              h={'auto'}
              maxH={500}
            />
          </Box>
        </Box>
      </Box>
      <ButtonArea buttons={ContactButtons} bg="#ffffff" />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
