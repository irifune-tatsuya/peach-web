import { Box, Heading, Image, Link, ListItem, OrderedList, Text } from '@chakra-ui/react';
import styles from './layout.module.css';
import { TopSwiper } from '@/components/TopSwiper';
import { LIMIT05, ARTICLEFILTER, CONTACT, NEWSFILTER, IMAGEBASEURL } from '@/constants';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLine } from 'react-icons/fa';
import { ContactButton } from '@/components/ContactButton';
import { getList } from '@/libs/microcms';
import React from 'react';
import SideScrollArticleList from '@/components/SideScrollArticleList';
import { ViewMoreButton } from '@/components/ViewMoreButton';
import ContentTitle from '@/components/ContentTitle';
import ArticleList from '@/components/ArticleList';

export const revalidate = 60;

const swiperImages = [
  { src: `${IMAGEBASEURL}/top/top-slider1.webp`, alt: 'キービジュアル1' },
  { src: `${IMAGEBASEURL}/top/top-slider2.webp`, alt: 'キービジュアル2' },
  { src: `${IMAGEBASEURL}/top/top-slider3.webp`, alt: 'キービジュアル3' },
];

const businessLinks = [
  { href: '/reason', title: '選ばれる理由', titleEn: 'Reason' },
  { href: '/service', title: 'サービス内容', titleEn: 'Service' },
  { href: '/pricing', title: '料金体系', titleEn: 'Pricing' },
];

const bottomLinks = [
  { href: '/contact', src: `${IMAGEBASEURL}/top/contact.webp`, alt: 'お問い合わせ' },
  { href: '/faq', src: `${IMAGEBASEURL}/top/faq.webp`, alt: 'よくあるご質問' },
];

export default async function Home() {
  const articleData = await getList({
    limit: LIMIT05,
    filters: ARTICLEFILTER,
  });
  const newsData = await getList({
    limit: LIMIT05,
    filters: NEWSFILTER,
  });
  return (
    <>
      <Box
        id={'key-visual'}
        w={'100%'}
        h={{ base: 'calc(100vh - 55px)', md: 'calc(100vh - 76px)' }}
        position={'relative'}
        overflow={'hidden'}
      >
        <Heading as={'h1'} display={'none'}>
          合同会社ピーチウェブ公式サイト
        </Heading>
        <Box
          position={'absolute'}
          top={{ base: '50%', sm: '60%', lg: '50%' }}
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          zIndex={2}
          w={'95%'}
          maxW={'500px'}
        >
          <Box w={'100%'}>
            <Image
              src={`${IMAGEBASEURL}/top/message.svg`}
              alt={'あなたの仕事が永く愛されますように'}
              className={styles.message}
            />
            <Text
              color={'white'}
              fontSize={{ base: 'small', sm: 'medium', md: 'large', lg: 'x-large' }}
              fontWeight={'bold'}
              textAlign={'center'}
              mt={8}
            >
              I hope you and your business <Box as="br" />
              will be loved for many years to come.
            </Text>
          </Box>
        </Box>
        <TopSwiper images={swiperImages} />
      </Box>
      <Box as="section">
        <Box
          display={{ base: 'flex', md: 'none' }}
          justifyContent={'center'}
          alignItems={'center'}
          gap={3}
          p={2}
          bg={'momo.300'}
        >
          <Link href={CONTACT.instagram} target="_blank">
            <FaInstagram size={'2.5em'} />
          </Link>
          <Link href={CONTACT.facebook} target="_blank">
            <FaFacebookSquare size={'2.5em'} />
          </Link>
          <Link href={CONTACT.line} target="_blank">
            <FaLine size={'2.5em'} />
          </Link>
          <ContactButton />
        </Box>
      </Box>
      <Box as="section" pt={{ base: 54, md: 124 }} pb={{ base: 54, md: 184 }}>
        <Box mx={'auto'} maxW={1152} px={4}>
          <ContentTitle TitleEn="Business" TitleJp="事業内容" mb={12} />
          <Box display={{ base: 'block', md: 'flex' }} justifyContent={'space-between'}>
            <Box w={{ base: '100%', md: '49%' }}>
              <Text
                fontSize={{ base: 'large', md: 'x-large' }}
                fontWeight={'bold'}
                lineHeight={'1.8em'}
                textAlign={{ base: 'center', md: 'left' }}
                mb={{ base: 20, md: 8 }}
              >
                あなたの仕事の魅力を最大限発揮する
                <Box as="br" />
                ホームページの制作・運用を通じて
                <Box as="br" />
                <Box as="span" color={'momo.100'}>
                  永く愛されるブランド作りを行います。
                </Box>
              </Text>
              <ViewMoreButton href={'/thought'} size={'large'} />
            </Box>
            <OrderedList
              w={{ base: '100%', md: '49%' }}
              listStyleType={'none'}
              mx={0}
              mt={{ base: 20, md: 0 }}
              borderTop={2}
              borderColor={'momo.400'}
              borderStyle={'solid'}
              fontWeight={'bold'}
            >
              {businessLinks.map((item, i) => (
                <ListItem key={i}>
                  <Link
                    href={item.href}
                    display={{ base: 'grid', md: 'block' }}
                    alignItems={'center'}
                    gridAutoFlow={'column'}
                    gridTemplateColumns={'40px auto'}
                    gridTemplateRows={'auto auto'}
                    gap={'0 12px'}
                    px={'2em'}
                    py={'1.5em'}
                    borderBottom={2}
                    borderColor={'momo.400'}
                    borderStyle={'solid'}
                    className={styles.slideColorButton}
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Box as={'span'} mr={4} color={'momo.500'} gridRow={'1 / span 2'}>
                      {`0${i + 1}`}
                    </Box>
                    <Box as={'span'} mr={4} fontSize={{ base: 'x-large' }}>
                      {item.title}
                    </Box>
                    <Box as={'span'}>{item.titleEn}</Box>
                  </Link>
                </ListItem>
              ))}
            </OrderedList>
          </Box>
        </Box>
      </Box>
      <Box as="section" pb={{ base: 100, md: 200 }}>
        <Box w={'100%'} maxW={1080} mx={'auto'}>
          <Link href={'/peach-fight'} w={'100%'} overflow={'hidden'}>
            <Image
              src={`${IMAGEBASEURL}/top/peach_fight_banner.webp`}
              alt={'岡山のチャレンジ応援マガジンピーチファイ'}
              transition={'transform 0.3s ease'}
              _hover={{ transform: 'scale(1.1)' }}
            />
          </Link>
        </Box>
      </Box>
      <Box as="section" pb={{ base: 100, md: 200 }}>
        <Box mx={'auto'} maxW={1152} px={4}>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            mb={{ base: 8, md: 12 }}
          >
            <ContentTitle TitleEn="Article" TitleJp="新着記事" mb={0} />
            <ViewMoreButton href={'/article'} size={'small'} />
          </Box>
          <SideScrollArticleList articles={articleData.contents} category={'article'} />
        </Box>
      </Box>
      <Box as="section" pb={{ base: 100, md: 20 }} maxW={1152} px={4} mx={'auto'}>
        <Box>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            mb={{ base: 8, md: 12 }}
          >
            <ContentTitle TitleEn="News" TitleJp="ニュース" mb={0} />
            <ViewMoreButton href={'/news'} size={'small'} />
          </Box>
        </Box>
        <ArticleList articles={newsData.contents} category={'news'} />
      </Box>
      <Box
        as="section"
        pt={{ base: 54, md: 20 }}
        pb={{ base: 54, md: 20 }}
        px={8}
        mb={14}
        bg={'momo.300'}
      >
        <Box mx={'auto'} maxW={1152} px={4}>
          <Box
            display={'flex'}
            gap={14}
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent={'center'}
          >
            {bottomLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                display={'inline-block'}
                maxW={767}
                overflow={'hidden'}
              >
                <Image
                  src={item.src}
                  alt={item.src}
                  w={'100%'}
                  h={'auto'}
                  transition={'transform 0.3s ease'}
                  _hover={{ transform: 'scale(1.2)' }}
                />
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
