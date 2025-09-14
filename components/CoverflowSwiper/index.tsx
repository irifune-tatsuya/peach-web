'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import styles from './index.module.css';
import React from 'react';

export const CoverflowSwiper = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <Swiper
      spaceBetween={0}
      effect={'coverflow'}
      slidesPerView={'auto'}
      centeredSlides={true}
      grabCursor={true}
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
      {children.map((item, i) => (
        <SwiperSlide className={styles.swiperSlide} key={i}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
