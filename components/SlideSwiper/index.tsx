'use client';

import { Image } from '@chakra-ui/react';
import { EffectCreative, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { NextPage } from 'next';

type Img = {
  pcSrc: string;
  spSrc: string;
  alt: string;
};

type Props = {
  images: Img[];
};

export const SlideSwiper: NextPage<Props> = ({ images }) => {
  return (
    <Swiper
      effect={'creative'}
      creativeEffect={{
        prev: {
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      modules={[EffectCreative, Autoplay]}
      centeredSlides={true}
      slidesPerView={'auto'}
      loop={true}
      speed={2500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.map((item, i) => (
        <SwiperSlide key={i}>
          <Image
            src={item.pcSrc}
            alt={item.alt}
            w={'100%'}
            h={'auto'}
            display={{ base: 'none', md: 'block' }}
          />
          <Image
            src={item.spSrc}
            alt={item.alt}
            w={'100%'}
            h={'auto'}
            display={{ base: 'block', md: 'none' }}
          />
        </SwiperSlide>
      ))}
      {/* <SwiperSlide>
        <Image
          src="/images/keyvisual2_pc.jpg"
          alt=""
          w={'100%'}
          h={'auto'}
          display={{ base: 'none', md: 'block' }}
        />
        <Image
          src="/images/keyvisual2_sp.jpg"
          alt=""
          w={'100%'}
          h={'auto'}
          display={{ base: 'block', md: 'none' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/keyvisual3_pc.jpg"
          alt=""
          w={'100%'}
          h={'auto'}
          display={{ base: 'none', md: 'block' }}
        />
        <Image
          src="/images/keyvisual3_sp.jpg"
          alt=""
          w={'100%'}
          h={'auto'}
          display={{ base: 'block', md: 'none' }}
        />
      </SwiperSlide> */}
    </Swiper>
  );
};
