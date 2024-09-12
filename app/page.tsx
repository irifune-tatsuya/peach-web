import { Box, Heading, Image, Text } from '@chakra-ui/react';
import styles from './layout.module.css';
import { NextPage } from 'next';
import { TopSwiper } from '@/components/TopSwiper';

export const revalidate = 60;

const swiperImages = [
  { src: '/top/top-slider1.jpg', alt: 'キービジュアル1' },
  { src: '/top/top-slider2.jpg', alt: 'キービジュアル2' },
  { src: '/top/top-slider3.jpg', alt: 'キービジュアル3' },
];

const Home: NextPage = () => {
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
          zIndex={3}
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
              mt={32}
            >
              I hope you and your business <Box as="br" />
              will be loved for many years to come.
            </Text>
          </Box>
        </Box>
        <TopSwiper images={swiperImages} />
      </Box>
    </>
  );
};

export default Home;
