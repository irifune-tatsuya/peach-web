'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ServiceStep } from '@/types/microcms';

type Props = {
  stepsData: ServiceStep[];
};

export const StepsSlider = ({ stepsData }: Props) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1.2}
      spaceBetween={16}
      grabCursor={true}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
      className="!pb-12 md:!pb-16"
      breakpoints={{
        768: {
          slidesPerView: 2.5,
          spaceBetween: 24,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
          centeredSlides: false,
        },
      }}
    >
      {stepsData.map((step, index) => (
        <SwiperSlide key={index} className="!h-auto">
          <div className="relative h-full flex flex-col shadow-xl rounded-2xl overflow-hidden p-6 pt-12">
            <span className="absolute top-0 left-4 z-10 text-6xl font-extrabold text-momo-100 select-none leading-none">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col flex-grow">
              {step.step_image && (
                <div className="relative w-full aspect-[3/2] overflow-hidden mb-4">
                  <Image
                    src={step.step_image.url}
                    alt={step.step_title || ''}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 767px) 80vw, (max-width: 1023px) 40vw, 30vw"
                  />
                </div>
              )}
              {step.step_title && <h3 className="text-lg font-bold">{step.step_title}</h3>}
              {step.step_description && (
                <p className="mt-2 text-sm leading-relaxed flex-grow">{step.step_description}</p>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
