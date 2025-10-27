'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BaseSlider } from '@/components/features/services/BaseSlider';
import type { InfoCardItem } from '@/types/service';

type Props = {
  cards: InfoCardItem[];
};

export const DisadvantagesSlider = ({ cards }: Props) => {
  return (
    <BaseSlider>
      {cards.map((card) => (
        <SwiperSlide key={card.id} className="!w-auto !h-auto">
          <div className="w-[80vw] max-w-[300px] h-full shadow-lg rounded-xl border border-momo-300 overflow-hidden transition-transform duration-300 hover:-translate-y-2">
            <div className="relative p-2 bg-momo-200 z-10 rounded-full mx-3 mt-3">
              <h3 className="text-lg font-bold text-center">{card.title}</h3>
              <div className="absolute left-1/2 -bottom-2 w-0 h-0 -translate-x-1/2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-momo-200" />
            </div>
            <div className="relative w-full max-w-[240px] mx-auto aspect-square">
              <Image
                src={card.image.url}
                alt={card.image.alt}
                width={card.image.width}
                height={card.image.height}
                className="object-cover"
                loading="lazy"
              />
            </div>
            <p className="px-6 py-3 text-left flex-grow">{card.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </BaseSlider>
  );
};
