'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

type Merit = {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
};

type Props = {
  meritsData: Merit[];
};

export const MeritsSlider = ({ meritsData }: Props) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView="auto"
      spaceBetween={20}
      grabCursor={true}
      className="!pb-6"
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
    >
      {meritsData.map((merit, index) => (
        <SwiperSlide key={index} className="!w-auto">
          <div className="w-[70vw] min-w-[320px] max-w-[calc(100vw-4rem)] md:max-w-[380px] bg-momo-300/50 border-2 border-momo-100 shadow-md rounded-2xl overflow-hidden p-6 flex flex-col h-full">
            <div className="flex flex-col items-center">
              <span className="w-12 h-12 md:w-28 md:h-14 rounded-full bg-momo-100 text-white font-bold text-xl flex items-center justify-center">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-4 text-center">
                {merit.title}
              </h3>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mt-6">
              <Image
                src={merit.imageUrl}
                alt={merit.alt}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 767px) 80vw, 400px"
              />
            </div>
            <p className="mt-6 text-base text-gray-700 leading-relaxed flex-grow">
              {merit.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
