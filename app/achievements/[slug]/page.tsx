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
import { ACHIEVEMENTS } from '@/constants/achievements';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const currentSlug = params.slug;
  const achievement = ACHIEVEMENTS.find((item) => item.slug === currentSlug);
  const title = achievement ? achievement.name : '制作実績のご紹介';
  const description = achievement
    ? achievement.point
    : 'ピーチウェブが制作したホームページの実績やホームページデザインの提案をするページとなります。制作をご検討中の方や具体的なサイトのイメージを持ちたい方向けに役立てていただけますと幸いです。';

  return {
    title: `${title}様の制作実績`,
    description: description,
    openGraph: {
      title: `${title}様の制作実績`,
      description: description,
      type: 'article',
    },
    twitter: {
      title: `${title}様の制作実績`,
      description: description,
    },
  };
}

export default async function Page({ params }: Props) {
  const currentSlug = params.slug;
  const achievement = ACHIEVEMENTS.find((item) => item.slug === currentSlug);

  if (!achievement) {
    notFound();
  }

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: '実績&デザイン集',
      href: '/achievements',
      isCurrentPage: false,
    },
    {
      title: `${achievement.name}様の制作実績`,
      href: `/achievements/${currentSlug}`,
      isCurrentPage: true,
    },
  ];

  return (
    <>
      <Title titleEn={`制作実績のご紹介`} titleJp={`${achievement.name}様`} />
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
              href={achievement.href}
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
                    src={`${IMAGEBASEURL}/achievements/${achievement.slug}/fullpage_sp.webp`}
                    alt={`${achievement.name}様のスマホサイト`}
                    w={'100%'}
                    h={'auto'}
                    maxW={'430px'}
                  />
                </Center>
              </TabPanel>
              <TabPanel px={0}>
                <Image
                  src={`${IMAGEBASEURL}/achievements/${achievement.slug}/fullpage_pc.webp`}
                  alt={`${achievement.name}様のパソコンサイト`}
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
                    {achievement.name}
                  </Text>
                </Box>
                <Box mt={4}>
                  <Tag bg={'momo.100'} color={'white'} fontWeight={'bold'} py={2} px={4}>
                    業 種
                  </Tag>
                  <Text py={3} px={5}>
                    {achievement.typeOfIndustry}
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
                    {achievement.theme}
                  </Text>
                </Box>
                <Box mt={4}>
                  <Tag bg={'momo.100'} color={'white'} fontWeight={'bold'} py={2} px={4}>
                    ターゲット
                  </Tag>
                  <Text py={3} px={5}>
                    {achievement.target}
                  </Text>
                </Box>
                <Box mt={4}>
                  <Tag bg={'momo.100'} color={'white'} fontWeight={'bold'} py={2} px={4}>
                    制作のポイント
                  </Tag>
                  <Text py={3} px={5}>
                    {achievement.point}
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
            href={achievement.href}
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
