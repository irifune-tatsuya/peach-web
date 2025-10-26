'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

type SnsCardData = {
  title: string;
  imageUrl: string;
  alt: string;
  description: string;
};

type Props = {
  disadvantagesOfSnsData: SnsCardData[];
};

export const SnsDisadvantagesSlider = ({ disadvantagesOfSnsData }: Props) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={'auto'}
      spaceBetween={24}
      grabCursor={true}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
      className="!pb-6"
    >
      {disadvantagesOfSnsData.map((card, index) => (
        <SwiperSlide key={index} className="!w-auto">
          <div className="w-[calc(100vw-4rem)] max-w-[300px] min-w-[280px] h-full shadow-lg rounded-xl border border-momo-300 overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="relative p-2 bg-momo-200 z-10 rounded-full mx-3 mt-3">
              <h3 className="text-lg font-bold text-center">{card.title}</h3>
              <div className="absolute left-1/2 -bottom-2 w-0 h-0 -translate-x-1/2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-momo-200" />
            </div>
            <div className="relative w-full max-w-[240px] mx-auto aspect-square">
              <Image
                src={card.imageUrl}
                alt={card.alt}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <p className="px-6 py-3 text-left flex-grow">{card.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
