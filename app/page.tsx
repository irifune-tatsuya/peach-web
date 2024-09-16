import {
  Box,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Tag,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import styles from './layout.module.css';
import { TopSwiper } from '@/components/TopSwiper';
import { LIMIT04, LIMIT10, BLOGFILTER, INFORMATIONFILTER, CONTACT } from '@/constants';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLine } from 'react-icons/fa';
import { ContactButton } from '@/components/ContactButton';
import { getList } from '@/libs/microcms';
import React from 'react';
import ArticleList from '@/components/ArticleList';
import { ViewMoreButton } from '@/components/ViewMoreButton';
import ContentTitle from '@/components/ContentTitle';
import PublishedDate from '@/components/PublishedDate';

export const revalidate = 60;

const swiperImages = [
  { src: '/top/top-slider1.jpg', alt: 'キービジュアル1' },
  { src: '/top/top-slider2.jpg', alt: 'キービジュアル2' },
  { src: '/top/top-slider3.jpg', alt: 'キービジュアル3' },
];

const businessLinks = [
  { href: '/reasons', title: '選ばれる理由', titleEn: 'Reasons' },
  { href: '/service', title: 'サービス内容', titleEn: 'Service' },
  { href: '/pricing', title: '料金体系', titleEn: 'Pricing' },
];

const bottomLinks = [
  { href: '/contact', src: '/top/contact.jpg', alt: 'お問い合わせ' },
  { href: '/faq', src: '/top/faq.jpg', alt: 'よくあるご質問' },
];

export default async function Home() {
  const blogData = await getList({
    limit: LIMIT10,
    filters: BLOGFILTER,
  });
  const informationData = await getList({
    limit: LIMIT04,
    filters: INFORMATIONFILTER,
  });
  return (
    <>
      <Box id={'key-visual'} h={'100vh'} position={'relative'} overflow={'hidden'}>
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
            <Image src={'/top/message.svg'} className={styles.message} />
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
          <Link href={'peach-fight'} w={'100%'}>
            <Image
              src={'/top/peach_fight_banner.jpg'}
              alt={'岡山のチャレンジ応援マガジンピーチファイ'}
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
            <ContentTitle TitleEn="Blog" TitleJp="新着記事" mb={0} />
            <ViewMoreButton href={'/blog'} size={'small'} />
          </Box>
          <ArticleList articles={blogData.contents} category={'blog'} />
        </Box>
      </Box>
      <Box as="section" pb={{ base: 100, md: 20 }}>
        <Box mx={'auto'} maxW={1152} px={4}>
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
        <UnorderedList
          borderTop={1}
          borderStyle={'solid'}
          borderColor={'momo.400'}
          listStyleType={'none'}
          m={0}
        >
          {informationData.contents.map((item, i) => (
            <ListItem key={i} borderBottom={1} borderStyle={'solid'} borderColor={'momo.400'} p={0}>
              <Link
                href={`/information/${item.id}`}
                display={{ base: 'block', md: 'flex' }}
                py={6}
                px={5}
                alignItems={`center`}
                _hover={{ textDecoration: 'none' }}
              >
                <Box display={'flex'}>
                  <PublishedDate date={'2024.09.16'} simple={true} />
                  <Tag
                    size={'sm'}
                    ml={6}
                    whiteSpace={'nowrap'}
                    justifyContent={'center'}
                    py={2}
                    px={3}
                    fontSize={'xx-small'}
                    fontWeight={'bold'}
                  >
                    お知らせ
                  </Tag>
                </Box>
                <Box ml={{ base: 0, md: 8 }} mt={{ base: 3, md: 0 }} lineHeight={1.5}>
                  <Text className={'articleTitle'}>{item.title}</Text>
                </Box>
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
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
              <Link key={i} href={item.src} display={'inline-block'} maxW={767} overflow={'hidden'}>
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
