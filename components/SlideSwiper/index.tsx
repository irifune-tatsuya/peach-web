'use client';

import Image from 'next/image';
import { EffectCreative, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';

type Img = {
  pcSrc: string;
  spSrc: string;
  alt: string;
};

type Props = {
  images: Img[];
};

export const SlideSwiper = ({ images }: Props) => {
  return (
    <Swiper
      effect={'creative'}
      creativeEffect={{
        prev: {
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      modules={[EffectCreative, Autoplay]}
      centeredSlides={true}
      slidesPerView={'auto'}
      loop={true}
      speed={2500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.map((item, i) => (
        <SwiperSlide key={i}>
          <Image
            src={item.pcSrc}
            alt={item.alt}
            width={1220}
            height={1060}
            className="hidden h-auto w-full md:block"
            priority={i === 0}
            sizes="(min-width: 768px) 80vw, 100vw"
          />
          <Image
            src={item.spSrc}
            alt={item.alt}
            width={680}
            height={960}
            className="block h-auto w-full md:hidden"
            priority={i === 0}
            sizes="(min-width: 768px) 80vw, 100vw"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
