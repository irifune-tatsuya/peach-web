'use client';

import { Image } from '@chakra-ui/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './index.module.css';
import { NextPage } from 'next';

type Image = {
  h?: string;
  src: string;
  alt: string;
  borderRadius?: number;
};

type Props = { images: Array<Image> };

export const TopSwiper: NextPage<Props> = (props) => {
  const { images } = props;
  const imageH = { base: 'calc(100vh - 55px)', md: 'calc(100vh - 76px)' };
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      slidesPerView={'auto'}
      centeredSlides={true}
      loop={true}
      speed={2500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect={'fade'}
      className={styles.slideWrapper}
    >
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <Image
            borderRadius={image.borderRadius ?? 0}
            src={image.src}
            objectFit={'cover'}
            alt={image.alt}
            w={'100vw'}
            h={image.h ?? imageH}
            loading={'lazy'}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
