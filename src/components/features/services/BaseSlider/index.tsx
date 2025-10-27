'use client';

import { useId } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';

type Props = {
  children: React.ReactNode;
};

export const BaseSlider = ({ children }: Props) => {
  const uniqueId = useId();
  const prevClass = `swiper-button-prev-${uniqueId}`;
  const nextClass = `swiper-button-next-${uniqueId}`;

  return (
    <div className="relative pt-12">
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={20}
        grabCursor={true}
        className="!pb-6"
        navigation={{
          nextEl: `.${nextClass}`,
          prevEl: `.${prevClass}`,
        }}
      >
        {children}
      </Swiper>
      <div className="hidden lg:flex gap-4 absolute -top-8 right-4 z-10 bg-momo-300/50 rounded-full py-2 px-4">
        <button
          className={`${prevClass} p-2 bg-white rounded-full shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <ChevronLeft className="w-6 h-6 text-momo-100" />
        </button>
        <button
          className={`${nextClass} p-2 bg-white rounded-full shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <ChevronRight className="w-6 h-6 text-momo-100" />
        </button>
      </div>
    </div>
  );
};
