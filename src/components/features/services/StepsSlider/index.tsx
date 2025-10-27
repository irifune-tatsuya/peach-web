'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BaseSlider } from '@/components/features/services/BaseSlider';
import type { InfoCardItem } from '@/types/service';

type Props = {
  steps: InfoCardItem[];
};

export const StepsSlider = ({ steps }: Props) => {
  return (
    <BaseSlider>
      {steps.map((step, index) => (
        <SwiperSlide key={step.id} className="!w-auto !h-auto">
          <div className="w-[80vw] max-w-[300px] relative h-full flex flex-col shadow-xl rounded-2xl overflow-hidden p-6 pt-12">
            <span className="absolute top-0 left-4 z-10 text-6xl font-extrabold text-momo-100 select-none leading-none">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col flex-grow">
              <div className="relative w-full aspect-[3/2] overflow-hidden mb-4">
                <Image
                  src={step.image.url}
                  alt={step.image.alt}
                  width={step.image.width}
                  height={step.image.height}
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 767px) 80vw, (max-width: 1023px) 40vw, 30vw"
                />
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed flex-grow">{step.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </BaseSlider>
  );
};
