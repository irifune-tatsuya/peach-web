import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Box, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { StartMailMagazineForm } from '@/components/StartMailMagazineForm';
import { StopMailMagazineForm } from '@/components/StopMailMagazineForm';
import { IMAGEBASEURL } from '@/constants';

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: 'ニュースレター',
    href: '/newsletter',
    isCurrentPage: true,
  },
];

const NewsletterContents = [
  {
    title: '新着記事の情報',
    text: 'コンテンツ制作やホームページ制作に役立つ情報を発信しています。新着情報をいち早くお届けします。',
    href: '/article',
  },
  {
    title: 'ピーチファイの更新情報',
    text: '岡山のチャレンジする起業家・経営者を応援するWEBマガジン「ピーチファイ」の更新もお知らせします。',
    href: '/peach-fight',
  },
  {
    title: 'サービスの最新情報',
    text: 'WEBブランディングやホームページ制作などサービスに関する情報をお届けします。',
    href: '/service',
  },
  {
    title: 'ピーチウェブからのお知らせ',
    text: '異業種交流会への参加情報やイベント参加情報、その他の会社情報をお届けします。',
    href: '/news',
  },
];

export default async function Terms() {
  return (
    <>
      <Box bg={'momo.100'} py={{ base: 8, md: 20 }}>
        <Box
          mx={'auto'}
          display={{ base: 'block', md: 'flex' }}
          w={{ base: '90%', md: '80%', lg: '50%' }}
          maxW={1152}
          justifyContent={'space-between'}
          alignItems={'center'}
          flexDirection={'row-reverse'}
        >
          <Image
            src={`${IMAGEBASEURL}/newsletter/top-image.webp`}
            alt={'ニュースレタートップイメージ'}
            maxW={'400px'}
            w={'100%'}
            h={'auto'}
          />
          <Box display={'inline-block'} color={'white'} mt={{ base: 10, md: 0 }}>
            <Text fontSize={'large'} fontWeight={'bold'}>
              ニュースレターのご案内
            </Text>
            <Heading as={'h1'}>Newsletter</Heading>
          </Box>
        </Box>
      </Box>
      <Box maxW={1152} mx={'auto'} p={4}>
        <Box as={'section'} pt={{ base: 10, md: '70px' }}>
          <Box pb={5}>
            <Heading as={'h2'} mr={4} display={'inline-block'}>
              When is the next article update?
            </Heading>
            <Box as={'span'} fontSize={'small'} fontWeight={500} letterSpacing={'0.08em'}>
              次の記事更新はいつ？
            </Box>
          </Box>
          <Text>
            ピーチウェブのニュースレターは
            <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
              毎週1回程度
            </Box>
            のペースで更新予定です。新着記事のご案内やサービスに関する最新情報をお届けします。
          </Text>
        </Box>
        <Box as={'section'} py={{ base: 10, md: '70px' }}>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={{ base: 10, md: 20 }}
          >
            {NewsletterContents.map((content, i) => (
              <GridItem colSpan={1} key={i}>
                <Link href={content.href} _hover={{ opacity: 0.7 }}>
                  <Image
                    src={`${IMAGEBASEURL}/newsletter/newsletter-content${i + 1}.webp`}
                    alt={content.title}
                  />
                </Link>
                <Heading as={'h3'} fontSize={'larger'} my={5}>
                  {content.title}
                </Heading>
                <Text>{content.text}</Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box as={'section'} bg={'momo.600'} py={{ base: 10, md: '70px' }}>
        <Box maxW={1152} mx={'auto'} p={4}>
          <Box pb={5}>
            <Heading as={'h2'} mr={4} display={'inline-block'}>
              Subscribe
            </Heading>
            <Box as={'span'} fontSize={'small'} fontWeight={500} letterSpacing={'0.08em'}>
              購読登録
            </Box>
          </Box>
          <Text pb={10}>
            こちらのフォームよりニュースレターの購読登録をすることができます。もちろん、
            <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
              登録無料でいつでも配信停止
            </Box>
            が可能です。
          </Text>
          <Suspense fallback={<Box color={'white'}>フォームを読み込んでいます...</Box>}>
            <StartMailMagazineForm />
          </Suspense>
        </Box>
      </Box>
      <Box as={'section'} py={{ base: 10, md: '70px' }}>
        <Box maxW={1152} mx={'auto'} p={4}>
          <Box pb={5}>
            <Heading as={'h2'} mr={4} display={'inline-block'}>
              Unsubscribe
            </Heading>
            <Box as={'span'} fontSize={'small'} fontWeight={500} letterSpacing={'0.08em'}>
              配信停止
            </Box>
          </Box>
          <Text pb={10}>こちらのフォームよりニュースレターの配信停止をすることができます。</Text>
          <Suspense fallback={<Box>フォームを読み込んでいます...</Box>}>
            <StopMailMagazineForm />
          </Suspense>
        </Box>
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
