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

const swiperImages = [
  { src: `/01_sp.jpg`, alt: 'キービジュアル1' },
  { src: `/02_sp.jpg`, alt: 'キービジュアル2' },
  { src: `/03_sp.jpg`, alt: 'キービジュアル3' },
];

export default async function Pricing() {
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
            <Image src={'/images/logo.png'} alt={'ロゴ'} w={{ base: 50, md: 70, xl: 160 }} />
          </Heading>
          <Box as={'nav'}></Box>
        </Box>
        <Box id={'wrapper'} p={0} position={'relative'} mx={'auto'} minH={{ md: '100vh' }}>
          <Box mb={100}>
            <Box id={'slideSwiper'} mt={{ base: 81, md: 120 }} ml={{ base: 35, md: 180, xl: 300 }}>
              <SlideSwiper />
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
                    src={'/images/ceo-square.jpg'}
                    alt={''}
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
                  <Box as={'span'} color={'blue.600'} fontWeight={'bold'}>
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
            base: 'url("/images/mission_bg_sp.jpg")',
            md: 'url("/images/mission_bg_pc.jpg")',
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
            私たちのミッションは、SNS発信を通じて企業の魅力とブランドを適切なターゲットに「ワンストップ」でお届けすることです。
          </Text>
        </Center>
        <Center pb={20}>
          <Image
            src={'/images/mission_circle.png'}
            alt={''}
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
            base: 'url("/images/voice_bg_sp.jpg")',
            md: 'url("/images/voice_bg_pc.jpg")',
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
            textAlign={{ lg: 'center' }}
            fontWeight={'bold'}
            fontSize={{ base: 'medium', md: 'larger' }}
            letterSpacing={4}
            lineHeight={2}
          >
            お客様からいただいた喜びの声をご紹介します。
          </Text>
        </Center>
        <Center pb={20}>
          <Box w={{ base: '95vw', md: '60vw' }}>
            <CoverflowSwiper />
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
            src={'/images/footer.jpg'}
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
              <ListItem w={{ base: 108 }} display={'inline-block'} verticalAlign={'middle'}>
                <Link href={'#lp01-top'} color={'white'}>
                  <Box as={'span'} display={'block'} fontSize={'large'} fontWeight={'bold'}>
                    TOP
                  </Box>
                  <Box as={'span'} display={'block'} fontSize={'small'}>
                    トップ
                  </Box>
                </Link>
              </ListItem>
              <ListItem w={{ base: 108 }} display={'inline-block'} verticalAlign={'middle'}>
                <Link href={'#lp01-greeting'} color={'white'}>
                  <Box as={'span'} display={'block'} fontSize={'large'} fontWeight={'bold'}>
                    Greeting
                  </Box>
                  <Box as={'span'} display={'block'} fontSize={'small'}>
                    ごあいさつ
                  </Box>
                </Link>
              </ListItem>
              <ListItem w={{ base: 108 }} display={'inline-block'} verticalAlign={'middle'}>
                <Link href={'#lp01-mission'} color={'white'}>
                  <Box as={'span'} display={'block'} fontSize={'large'} fontWeight={'bold'}>
                    Our Mission
                  </Box>
                  <Box as={'span'} display={'block'} fontSize={'small'}>
                    ミッション
                  </Box>
                </Link>
              </ListItem>
              <ListItem w={{ base: 108 }} display={'inline-block'} verticalAlign={'middle'}>
                <Link href={'#lp01-voice'} color={'white'}>
                  <Box as={'span'} display={'block'} fontSize={'large'} fontWeight={'bold'}>
                    Voice
                  </Box>
                  <Box as={'span'} display={'block'} fontSize={'small'}>
                    お客様の声
                  </Box>
                </Link>
              </ListItem>
            </SimpleGrid>
          </UnorderedList>
        </Box>
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
