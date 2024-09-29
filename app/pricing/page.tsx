import { Breadcrumbs } from '@/components/Breadcrumbs';
import Title from '@/components/Title';
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import SideScrollIcon from '@/components/SideScrollIcon';
import styles from './layout.module.css';
import { ImDisplay } from 'react-icons/im';
import { IMAGEBASEURL } from '@/constants';
import React from 'react';

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: '料金体系',
    href: '/pricing',
    isCurrentPage: true,
  },
];

const basicPriceData = [
  {
    title: 'Starter',
    price: '50,000円/月',
    homepage: ['ブログ機能付きホームページ', '初回制作費無料', 'TOP + 3ページ作成'],
    contents: ['基本的なSEO対策', '記事更新2回/月', '毎月運用レポート発行'],
  },
  {
    title: 'Basic',
    subtTitle: 'おすすめ！',
    price: '60,000円/月',
    homepage: ['ブログ機能付きホームページ', '初回制作費無料', 'TOP + 6ページ作成'],
    contents: [
      '専用ツールによるSEO対策',
      '記事更新4回/月',
      'デザイン制作1点/月',
      '毎月運用レポート発行',
    ],
  },
  {
    title: 'Premium',
    price: '120,000円/月',
    homepage: ['ブログ機能付きホームページ', '初回制作費無料', 'TOP + 10ページ作成'],
    contents: [
      '専用ツールによるSEO対策',
      '記事更新4回/月',
      'ページ追加1枚/月',
      'デザイン制作2点/月',
      '毎月運用レポート発行',
      '6万円相当の選べるオプション',
    ],
  },
];

const monthlyOptionData = {
  title: '月額制オプション',
  contents: [
    {
      title: 'LINEアカウント運用',
      price: '20,000円/月〜',
    },
    {
      title: 'Googleリスティング広告',
      price: '50,000円/月〜',
    },
    {
      title: 'バナー広告',
      price: '50,000円/月〜',
    },
    {
      title: 'SNS広告',
      price: '50,000円/月〜',
    },
  ],
};

const singleOptionData = {
  title: '単発オプション',
  contents: [
    {
      title: '追加デザイン制作',
      price: '5,000円/点〜',
    },
    {
      title: 'チラシ・ポスター制作',
      price: '7,000円/点〜',
    },
    {
      title: 'パワーポイント資料作成',
      price: '10,000円/件〜',
    },
    {
      title: '追加ページの制作',
      price: '10,000円/枚〜',
    },
    {
      title: 'ランディングページ作成',
      price: '100,000円/枚〜',
    },
    {
      title: 'ホームページ制作のみ',
      price: '240,000円/件〜',
    },
  ],
};

export default async function Pricing() {
  return (
    <>
      <Title titleEn={'Pricing'} titleJp={'料金体系'} />
      <Box
        bg={'linear-gradient(to bottom, #fcdee9, #ffffff);'}
        position={'relative'}
        overflow={'hidden'}
        pt={{ base: 88, md: 120 }}
        pb={{ base: 90, md: 180 }}
      >
        <Box p={4} maxW={1152} mx={'auto'}>
          <Box>
            <Heading as={'h2'} mr={4} size={{ base: 'md', md: 'lg' }} display={'flex'}>
              <FaCheckCircle color={'#ff7bac'} />
              <Box as={'span'} ml={2}>
                基本料金
              </Box>
            </Heading>
          </Box>
          <Box
            maxW={960}
            mx={'auto'}
            py={8}
            fontSize={{ base: 'medium', md: 'large' }}
            fontWeight={500}
            lineHeight={2}
          >
            <Text>
              毎月の基本料金だけでも十分WEBブランディングを実現できます。始めのうちはオプションがないベーシックプランでのご導入をおすすめします。
            </Text>
          </Box>
          <Box w={'100%'}>
            <SideScrollIcon display={['block', 'block', 'block', 'none']} />
            <Box
              m={{ base: 1, md: 0 }}
              listStyleType={'none'}
              display={'flex'}
              justifyContent={{ base: 'start', lg: 'center' }}
              gap={{ base: 4, lg: 12 }}
              overflow={'scroll'}
              overflowY={'hidden'}
              overflowX={{ base: 'scroll', lg: 'hidden' }}
              sx={{
                scrollSnapType: 'x mandatory',
              }}
              alignItems="start"
            >
              {basicPriceData.map((item, i) => (
                <Card minW={280} w={'auto'} bg={'white'} key={i}>
                  <CardBody>
                    <Stack mt="6" spacing="5">
                      <Heading as={'h3'} size={'lg'}>
                        <Box display={'flex'} alignItems={'center'}>
                          <Image
                            src={`${IMAGEBASEURL}/pricing/plan-icon${i + 1}.webp`}
                            alt={item.title}
                            w={7}
                            h={7}
                          />
                          <Box as={'span'} ml={2}>
                            {item.title}
                          </Box>
                          <Box as={'span'} ml={2} fontSize={'medium'} color={'momo.100'}>
                            {item.subtTitle}
                          </Box>
                        </Box>
                      </Heading>
                      <Text fontSize={'large'} fontWeight={'bold'} textAlign={'end'}>
                        {item.price}
                      </Text>
                      <Box>
                        {item.homepage.map((text, i) => (
                          <Text key={i}>{text}</Text>
                        ))}
                      </Box>
                      <Table variant="striped" colorScheme="gray">
                        <Tbody>
                          {item.contents.map((text, i) => (
                            <Tr key={i}>
                              <Td px={1} py={2}>
                                {text}
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            </Box>
            <Text fontSize={'small'} textAlign={'center'}>
              ※ 料金は全て税別です。
            </Text>
            <Box py={10}>
              <Link
                display={'block'}
                w={250}
                mx={'auto'}
                href="/service"
                textAlign={'center'}
                _hover={{ textDecoration: 'none' }}
                className={styles.contactButton}
              >
                <Box
                  py={'1em'}
                  px={'2em'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  height={'100%'}
                  borderRadius={40}
                  bg={'momo.100'}
                  color={'white'}
                  fontWeight={'bold'}
                >
                  <ImDisplay size={'1.5em'} />
                  <Text ml={2}>サービス内容を見る</Text>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        bg={'linear-gradient(to bottom, #fcdee9, #ffffff);'}
        position={'relative'}
        overflow={'hidden'}
        pt={{ base: 88, md: 120 }}
        pb={{ base: 90, md: 180 }}
      >
        <Box p={4} maxW={1152} mx={'auto'}>
          <Box>
            <Heading as={'h2'} mr={4} size={{ base: 'md', md: 'lg' }} display={'flex'}>
              <FaCheckCircle color={'#ff7bac'} />
              <Box as={'span'} ml={2}>
                オプション料金
              </Box>
            </Heading>
          </Box>
          <Box
            maxW={960}
            mx={'auto'}
            py={8}
            fontSize={{ base: 'medium', md: 'large' }}
            fontWeight={500}
            lineHeight={2}
          >
            <Text>
              毎月の基本料金に加えてさらに成果を出したい方向けのオプションとなります。オプションには月額制
              / 単発がございます。
            </Text>
          </Box>
          <Box w={'100%'}>
            <Box display={{ base: 'block', md: 'flex' }} gap={8} justifyContent={'center'}>
              <Table>
                <Thead>
                  <Tr>
                    <Th fontSize={'medium'} textAlign={'center'} bg={'momo.600'} colSpan={2}>
                      {monthlyOptionData.title}
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {monthlyOptionData.contents.map((item, i) => (
                    <Tr key={i}>
                      <Td px={{ base: 1, lg: 6 }}>{item.title}</Td>
                      <Td px={{ base: 1, lg: 6 }} textAlign={'right'}>
                        {item.price}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Table mt={{ base: 10, md: 0 }}>
                <Thead>
                  <Tr>
                    <Th fontSize={'medium'} textAlign={'center'} bg={'momo.600'} colSpan={2}>
                      {singleOptionData.title}
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {singleOptionData.contents.map((item, i) => (
                    <Tr key={i}>
                      <Td px={{ base: 1, lg: 6 }}>{item.title}</Td>
                      <Td px={{ base: 1, lg: 6 }} textAlign={'right'}>
                        {item.price}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
            <Text fontSize={'small'} textAlign={'center'}>
              ※ 料金は全て税別です。
            </Text>
          </Box>
        </Box>
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
