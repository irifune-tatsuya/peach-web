'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BaseSlider } from '@/components/features/services/BaseSlider';
import type { InfoCardItem } from '@/types/service';

type Props = {
  meritsData: InfoCardItem[];
};

export const MeritsSlider = ({ meritsData }: Props) => {
  return (
    <BaseSlider>
      {meritsData.map((merit, index) => (
        <SwiperSlide key={merit.id} className="!w-auto !h-auto">
          <div className="w-[80vw] max-w-[380px] bg-momo-300/50 border-2 border-momo-100 shadow-md rounded-2xl overflow-hidden p-6 flex flex-col h-full">
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
                src={merit.image.url}
                alt={merit.image.alt}
                width={merit.image.width}
                height={merit.image.height}
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
    </BaseSlider>
  );
};
