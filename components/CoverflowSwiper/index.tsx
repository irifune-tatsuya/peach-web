'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
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
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Navigation, Pagination]}
      className="w-full pt-8 pb-12"
    >
      {children.map((item, i) => (
        <SwiperSlide key={i} className="!w-[75%] max-w-[400px] md:!w-[50%]">
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
