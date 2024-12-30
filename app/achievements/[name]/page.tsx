import { Breadcrumbs } from '@/components/Breadcrumbs';
import Title from '@/components/Title';
import {
  Box,
  Center,
  Image,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from '@chakra-ui/react';
import { IMAGEBASEURL } from '@/constants';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: '実績&デザイン提案',
    href: '/achievements',
    isCurrentPage: true,
  },
];

const achievements = [
  {
    name: '株式会社ななカンパニー',
    slug: 'nanacompany',
    href: '',
    typeOfIndustry: '不動産業',
    typeOfProduction: 'ランディングページ',
    theme: 'オンライン不動産サービスのPR',
    target:
      '大都市圏での引っ越しを検討する20~30代の方、仕事や子育てにお忙しくされていて来店が難しい方',
    point:
      'デザインはご依頼主様のテーマカラーに合わせてオレンジを中心としたカラフルな色味にしました。ランディングページで重要なトップ部分は親しみやすいイラスト画像を採用し、ターゲットが「自分ごと」だと思ってもらえるように丸枠にイメージ写真がスライドされるようにしております。ライティングは、仕事に子育てに忙しくされている方に寄り添って、具体的なお悩みの記述、実施手順の明確さ、よくある質問で不安の解消を心がけております。',
  },
];

export default async function Pricing() {
  return (
    <>
      <Title titleEn={`制作実績のご紹介`} titleJp={`${achievements[0].name}様`} />
      <Box
        bg={'linear-gradient(to bottom, #fcdee9, #ffffff);'}
        position={'relative'}
        overflow={'hidden'}
        pt={{ base: 88, md: 120 }}
        pb={{ base: 90, md: 180 }}
      >
        <Box p={4} maxW={810} mx={'auto'}>
          <Center>
            <Link
              display={'block'}
              bg={'momo.100'}
              color={'white'}
              fontWeight={'bold'}
              textAlign={'center'}
              p={3}
              mb={8}
              w={350}
              rounded={'lg'}
              href={achievements[0].href}
              isExternal
              _hover={{ textDecoration: 'none', opacity: 0.8 }}
            >
              <Box
                as={'span'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={1}
              >
                <Box as={'span'}>サイトを見る</Box>
                <FaExternalLinkAlt />
              </Box>
            </Link>
          </Center>
          <Tabs colorScheme={'pink'} w={'100%'}>
            <TabList>
              <Tab>スマホ版</Tab>
              <Tab>パソコン版</Tab>
              <Tab>サイト解説</Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0}>
                <Center>
                  <Image
                    src={`${IMAGEBASEURL}/achievements/${achievements[0].slug}/fullpage_sp.webp`}
                    alt={`${achievements[0].name}様のスマホサイト`}
                    w={'100%'}
                    h={'auto'}
                    maxW={'430px'}
                  />
                </Center>
              </TabPanel>
              <TabPanel px={0}>
                <Image
                  src={`${IMAGEBASEURL}/achievements/${achievements[0].slug}/fullpage_pc.webp`}
                  alt={`${achievements[0].name}様のパソコンサイト`}
                  w={'100%'}
                  h={'auto'}
                />
              </TabPanel>
              <TabPanel px={0}>
                <Box>
                  <Tag bg={'momo.100'} color={'white'} fontWeight={'bold'} py={2} px={4}>
                    ご依頼主様
                  </Tag>
                  <Text py={3} px={5}>
                    {achievements[0].name}
                  </Text>
                </Box>
                <Box mt={4}>
                  <Tag bg={'momo.100'} color={'white'} fontWeight={'bold'} py={2} px={4}>
                    業 種
                  </Tag>
                  <Text py={3} px={5}>
                    {achievements[0].typeOfIndustry}
                  </Text>
                </Box>
                <Box mt={4}>
                  <Tag bg={'momo.100'} color={'white'} fontWeight={'bold'} py={2} px={4}>
                    制作物
                  </Tag>
                  <Text py={3} px={5}>
                    ランディングページ
                  </Text>
                </Box>
                <Box mt={4}>
                  <Tag bg={'momo.100'} color={'white'} fontWeight={'bold'} py={2} px={4}>
                    テーマ
                  </Tag>
                  <Text py={3} px={5}>
                    {achievements[0].theme}
                  </Text>
                </Box>
                <Box mt={4}>
                  <Tag bg={'momo.100'} color={'white'} fontWeight={'bold'} py={2} px={4}>
                    ターゲット
                  </Tag>
                  <Text py={3} px={5}>
                    {achievements[0].target}
                  </Text>
                </Box>
                <Box mt={4}>
                  <Tag bg={'momo.100'} color={'white'} fontWeight={'bold'} py={2} px={4}>
                    制作のポイント
                  </Tag>
                  <Text py={3} px={5}>
                    {achievements[0].point}
                  </Text>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Center>
          <Link
            display={'block'}
            bg={'momo.100'}
            color={'white'}
            fontWeight={'bold'}
            textAlign={'center'}
            p={3}
            mt={8}
            w={350}
            rounded={'lg'}
            href={achievements[0].href}
            isExternal
            _hover={{ textDecoration: 'none', opacity: 0.8 }}
          >
            <Box
              as={'span'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={1}
            >
              <Box as={'span'}>サイトを見る</Box>
              <FaExternalLinkAlt />
            </Box>
          </Link>
        </Center>
        <Center>
          <Link
            display={'block'}
            bg={'momo.200'}
            fontWeight={'bold'}
            textAlign={'center'}
            p={3}
            mt={2}
            w={350}
            rounded={'lg'}
            href={`/achievements`}
            _hover={{ textDecoration: 'none', opacity: 0.8 }}
          >
            実績一覧に戻る
          </Link>
        </Center>
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
