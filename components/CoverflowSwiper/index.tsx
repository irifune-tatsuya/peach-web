'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import styles from './index.module.css';
import { NextPage } from 'next';
import React from 'react';

type Props = {
  childrens: React.ReactNode[];
};

export const CoverflowSwiper: NextPage<Props> = ({ childrens }) => {
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
      {childrens.map((item, i) => (
        <SwiperSlide className={styles.swiperSlide} key={i}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
