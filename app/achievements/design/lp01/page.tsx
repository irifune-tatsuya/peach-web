import { Breadcrumbs } from '@/components/Breadcrumbs';
import {
  Box,
  Center,
  Heading,
  Image,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import styles from './layout.module.css';
import { SlideSwiper } from '@/components/SlideSwiper';
import { CoverflowSwiper } from '@/components/CoverflowSwiper';
import { Lp01VoiceCard } from '@/components/Lp01VoiceCard';
import { IMAGEBASEURL } from '@/constants';

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
    title: 'LPデザイン01',
    href: '/achievements/design/lp01',
    isCurrentPage: true,
  },
];

const pageName = 'lp01';

const swiperImages = [
  {
    pcSrc: `${IMAGEBASEURL}/achievements/${pageName}/keyvisual1_pc.webp`,
    spSrc: `${IMAGEBASEURL}/achievements/${pageName}/keyvisual1_sp.webp`,
    alt: 'ランディングデザインのキービジュアル1',
  },
  {
    pcSrc: `${IMAGEBASEURL}/achievements/${pageName}/keyvisual2_pc.webp`,
    spSrc: `${IMAGEBASEURL}/achievements/${pageName}/keyvisual2_sp.webp`,
    alt: 'ランディングデザインのキービジュアル2',
  },
  {
    pcSrc: `${IMAGEBASEURL}/achievements/${pageName}/keyvisual3_pc.webp`,
    spSrc: `${IMAGEBASEURL}/achievements/${pageName}/keyvisual3_sp.webp`,
    alt: 'ランディングデザインのキービジュアル3',
  },
];

const voices = [
  {
    src: `${IMAGEBASEURL}/achievements/${pageName}/voice1.webp`,
    name: '株式会社△△商事様',
    text: 'ターゲットを若年層に絞ったことで求人応募者の年代と応募総数が増えました。フォロワーが増えたことで新卒採用以外のタイミングでも求人募集をかけやすくなりました。',
  },
  {
    src: `${IMAGEBASEURL}/achievements/${pageName}/voice2.webp`,
    name: '○○ガーデンショップ様',
    text: '季節に応じたフラワーギフトの提案をSNSから発信するようにご提案いただきました。投稿文章や写真の添削をしていただいてSNSのクオリティがアップしました。',
  },
  {
    src: `${IMAGEBASEURL}/achievements/${pageName}/voice3.webp`,
    name: '□□社会保険労務士事務所様',
    text: '専門知識を活かした発信よりも事務所で働くスタッフにフォーカスした投稿を提案いただき、新しいお客様を開拓できました。今後はリール動画制作でもお力添えいただければと思います。',
  },
  {
    src: `${IMAGEBASEURL}/achievements/${pageName}/voice4.webp`,
    name: '☆☆ベーカリー様',
    text: '最初は具体的にお仕事依頼しなかったのですが、無料相談の段階でSNSのポイントや目標を教えていただき助かりました。その後、仕事を依頼してからも変わらずサポートしてもらってます。',
  },
];

const footerLinks = [
  {
    enTitle: 'TOP',
    jpTitle: 'トップ',
    href: `#${pageName}-top`,
  },
  {
    enTitle: 'Greeting',
    jpTitle: 'ごあいさつ',
    href: `#${pageName}-greeting`,
  },
  {
    enTitle: 'Our Mission',
    jpTitle: 'ミッション',
    href: `#${pageName}-mission`,
  },
  {
    enTitle: 'Voice',
    jpTitle: 'お客様の声',
    href: `#${pageName}-voice`,
  },
];

export default async function Lp01() {
  return (
    <>
      <Box id={'lp01-top'}>
        <Box
          id={'sideBg'}
          w={{ base: 100, md: 200, xl: 350 }}
          h={{
            base: 'calc(((100vw - 35px) * (960 / 680)) + 850px)',
            md: 'calc(((100vw - 280px) * (1060 / 1220)) + 80px)',
            lg: 'calc(((100vw - 280px) * (1060 / 1220)) + 450px)',
            xl: 'calc(((100vw - 280px) * (1060 / 1220)) + 180px)',
          }}
          minH={{ md: 850 }}
          position={'absolute'}
          top={0}
          left={0}
          bottom={{ md: 0 }}
          bg={'#b7e0ff'}
          zIndex={-1}
        />
        <Box
          id={'lpHeader'}
          position={'absolute'}
          top={0}
          right={{ base: 0, md: 'auto' }}
          left={0}
          display={{ md: 'flex' }}
          flexDirection={{ md: 'column' }}
          pt={{ md: 120 }}
          px={{ md: 0 }}
          pb={{ md: 45 }}
          mx={'auto'}
          zIndex={1}
        >
          <Heading as={'h1'} position={'relative'} my={15} ml={{ base: 25, md: '50px', xl: 45 }}>
            <Image
              src={`${IMAGEBASEURL}/achievements/${pageName}/logo.webp`}
              alt={'ロゴ'}
              w={{ base: 50, md: 70, xl: 160 }}
            />
          </Heading>
          <Box as={'nav'}></Box>
        </Box>
        <Box id={'wrapper'} p={0} position={'relative'} mx={'auto'} minH={{ md: '100vh' }}>
          <Box mb={100}>
            <Box id={'slideSwiper'} mt={{ base: 81, md: 120 }} ml={{ base: 35, md: 180, xl: 300 }}>
              <SlideSwiper images={swiperImages} />
            </Box>
            <Box id={'lp01-greeting'}>
              <Box
                display={'flex'}
                justifyContent={'center'}
                pt={{ base: 100, md: 120 }}
                pb={{ base: 30 }}
              >
                <Heading
                  className={styles.braketHeading}
                  fontSize={{ base: 'large', md: 'larger', lg: 'xxx-large' }}
                >
                  Greeting
                </Heading>
              </Box>
              <Box
                display={{ md: 'flex' }}
                justifyContent={{ md: 'center' }}
                alignItems={{ md: 'center' }}
                gap={2}
                maxW={{ md: 650, lg: 800, xl: 1000 }}
                mx={'auto'}
              >
                <Center w={{ md: '30%', lg: '40%', xl: '30%' }} h={'auto'}>
                  <Image
                    src={`${IMAGEBASEURL}/achievements/${pageName}/ceo-square.webp`}
                    alt={'CEO'}
                    rounded={'full'}
                    w={{ base: '90vw', md: '100%' }}
                    h={'auto'}
                  />
                </Center>
                <Text
                  p={4}
                  mt={4}
                  w={{ md: '70%', lg: '60%', xl: '70%' }}
                  fontSize={'medium'}
                  letterSpacing={4}
                  lineHeight={2}
                >
                  こちらページは、
                  <Box as={'span'} className={styles.blueMarker}>
                    合同会社ピーチウェブのホームページデザイン見本
                  </Box>
                  となります。若々しい起業家のためのランディングページデザインで、多くの写真を使用して視覚的に訴求できるように心がけました。こちらは起業家の挨拶セクションとなります。
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box id={'lp01-mission'} position={'relative'} mt={20}>
        <Box
          id={'mission-bg'}
          maxW={{ base: 650, md: 1300 }}
          position={'absolute'}
          top={0}
          right={{ base: '40px', md: '100px', lg: '160px', xl: '240px' }}
          bottom={0}
          left={0}
          zIndex={-1}
          backgroundImage={{
            base: `url("${IMAGEBASEURL}/achievements/${pageName}/mission_bg_sp.webp")`,
            md: `url("${IMAGEBASEURL}/achievements/${pageName}/mission_bg_pc.webp")`,
          }}
        />
        <Box display={'flex'} justifyContent={'center'} pt={'80px'} pb={{ base: 30 }}>
          <Heading
            className={styles.braketHeading}
            fontSize={{ base: 'large', md: 'larger', lg: 'xxx-large' }}
          >
            Our Mission
          </Heading>
        </Box>
        <Center>
          <Text
            p={4}
            w={{ md: '70%', lg: '60%', xl: '60%' }}
            fontWeight={'bold'}
            fontSize={{ base: 'medium', md: 'larger' }}
            letterSpacing={4}
            lineHeight={2}
          >
            ミッションを紹介するセクションになります。経営者自身が顔出しで考え方を伝えることで読み手に安心感を持ってもらうことができます。
          </Text>
        </Center>
        <Center pb={20}>
          <Image
            src={`${IMAGEBASEURL}/achievements/${pageName}/mission_circle.webp`}
            alt={'提供サービス'}
            maxW={'800px'}
            w={{ base: '95vw', md: '60vw' }}
            h={'auto'}
          />
        </Center>
      </Box>
      <Box id={'lp01-voice'} position={'relative'} mt={20}>
        <Box
          id={'voice-bg'}
          maxW={{ base: 650, md: 1300 }}
          position={'absolute'}
          top={0}
          right={0}
          bottom={0}
          left={{ base: '40px', md: '100px', lg: '160px', xl: 'calc(100vw - 1300px)' }}
          zIndex={-1}
          backgroundImage={{
            base: `url("${IMAGEBASEURL}/achievements/${pageName}/voice_bg_sp.webp")`,
            md: `url("${IMAGEBASEURL}/achievements/${pageName}/voice_bg_pc.webp")`,
          }}
        />
        <Box display={'flex'} justifyContent={'center'} pt={'80px'} pb={{ base: 30 }}>
          <Heading
            className={styles.braketHeading}
            fontSize={{ base: 'large', md: 'larger', lg: 'xxx-large' }}
          >
            Voice
          </Heading>
        </Box>
        <Center>
          <Text
            p={4}
            w={{ md: '70%', lg: '60%', xl: '60%' }}
            fontWeight={'bold'}
            fontSize={{ base: 'medium', md: 'larger' }}
            letterSpacing={4}
            lineHeight={2}
          >
            お客様からいただいた喜びの声をご紹介するセクションになります。目に見えないサービスの場合はお客様の口コミを掲載することで利用イメージを持ってもらうことができます。
          </Text>
        </Center>
        <Center pb={20}>
          <Box w={{ base: '95vw', md: '60vw' }}>
            <CoverflowSwiper
              childrens={voices.map((item, i) => (
                <Lp01VoiceCard src={item.src} name={item.name} text={item.text} key={i} />
              ))}
            />
          </Box>
        </Center>
      </Box>
      <Box
        id={'footer'}
        mt={40}
        bg={'#2e8ad5'}
        overflowX={'hidden'}
        mx={'auto'}
        display={{ md: 'flex' }}
        flexDirection={{ md: 'row-reverse' }}
      >
        <Box
          position={{ md: 'relative' }}
          overflow={{ md: 'hidden' }}
          h={{ md: 360 }}
          display={{ md: 'flex' }}
          justifyContent={{ md: 'center' }}
          flexDirection={{ md: 'column' }}
          alignItems={{ md: 'center' }}
          flexBasis={{ md: '50%' }}
        >
          <Image
            src={`${IMAGEBASEURL}/achievements/${pageName}/footer.webp`}
            alt={'デザインページのフッター'}
            w={{ base: '100%', md: 'auto' }}
            minW={{ md: '100%' }}
            maxW={{ md: 'inherit' }}
            h={'auto'}
            minH={{ md: '100%' }}
            verticalAlign={'middle'}
            aspectRatio={'auto 800/ 360'}
            overflow={'clip'}
            position={{ md: 'absolute' }}
            top={{ md: '50%' }}
            left={{ md: '50%' }}
            transform={{ md: 'translate(-50%, -50%)' }}
          />
        </Box>
        <Box
          py={20}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          w={{ base: '100%', md: '50%' }}
        >
          <UnorderedList listStyleType={'none'} textAlign={'center'} w={{ base: 250 }} mx={'auto'}>
            <SimpleGrid columns={2} spacing={10}>
              {footerLinks.map((item, i) => (
                <ListItem
                  w={{ base: 108 }}
                  display={'inline-block'}
                  verticalAlign={'middle'}
                  key={i}
                >
                  <Link href={item.href} color={'white'}>
                    <Box as={'span'} display={'block'} fontSize={'large'} fontWeight={'bold'}>
                      {item.enTitle}
                    </Box>
                    <Box as={'span'} display={'block'} fontSize={'small'}>
                      {item.jpTitle}
                    </Box>
                  </Link>
                </ListItem>
              ))}
            </SimpleGrid>
          </UnorderedList>
        </Box>
      </Box>
      <Center my={20}>
        <Link
          display={'block'}
          bg={'momo.200'}
          fontWeight={'bold'}
          textAlign={'center'}
          p={3}
          mx={2}
          w={350}
          rounded={'lg'}
          href={`/achievements`}
          _hover={{ textDecoration: 'none', opacity: 0.8 }}
        >
          実績一覧に戻る
        </Link>
      </Center>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
