'use client';

import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import styles from './index.module.css';
import { NextPage } from 'next';

export const CoverflowSwiper: NextPage = () => {
  return (
    <Swiper
      spaceBetween={0}
      effect={'coverflow'}
      slidesPerView={'auto'}
      centeredSlides={true}
      gra
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={true}
      pagination={true}
      modules={[EffectCoverflow, Navigation, Pagination]}
      className={styles.swiper}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <Stack pb={8}>
          <Image src="/images/coverflow1.jpg" alt="" w={'100%'} h={'auto'} />
          <Heading fontSize={{ base: 'medium' }}>株式会社△△商事様</Heading>
          <Text fontSize={{ base: 'small' }}>
            ターゲットを若年層に絞ったことで求人応募者の年代と応募総数が増えました。フォロワーが増えたことで新卒採用以外のタイミングでも求人募集をかけやすくなりました。
          </Text>
        </Stack>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <Stack pb={8}>
          <Image src="/images/coverflow3.jpg" alt="" w={'100%'} h={'auto'} />
          <Heading fontSize={{ base: 'medium' }}>○○ガーデンショップ様</Heading>
          <Text fontSize={{ base: 'small' }}>
            季節に応じたフラワーギフトの提案をSNSから発信するようにご提案いただきました。投稿文章や写真の添削をしていただいてSNSのクオリティがアップしました。
          </Text>
        </Stack>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <Stack pb={8}>
          <Image src="/images/coverflow2.jpg" alt="" w={'100%'} h={'auto'} />
          <Heading fontSize={{ base: 'medium' }}>□□社会保険労務士事務所様</Heading>
          <Text fontSize={{ base: 'small' }}>
            専門知識を活かした発信よりも事務所で働くスタッフにフォーカスした投稿を提案いただき、新しいお客様を開拓できました。今後はリール動画制作でもお力添えいただければと思います。
          </Text>
        </Stack>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <Stack pb={8}>
          <Image src="/images/coverflow4.jpg" alt="" w={'100%'} h={'auto'} />
          <Heading fontSize={{ base: 'medium' }}>☆☆ベーカリー様</Heading>
          <Text fontSize={{ base: 'small' }}>
            最初は具体的にお仕事依頼しなかったのですが、無料相談の段階でSNSのポイントや目標を教えていただき助かりました。その後、仕事を依頼してからも変わらずサポートしてもらってます。
          </Text>
        </Stack>
      </SwiperSlide>
    </Swiper>
  );
};
