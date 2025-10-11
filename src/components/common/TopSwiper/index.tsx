'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

type SlideImage = {
  h?: string;
  src: string;
  alt: string;
  borderRadius?: number;
};

type Props = {
  images: SlideImage[];
};

export const TopSwiper: FC<Props> = ({ images }) => {
  const imageHeightClass = 'h-[calc(100vh-55px)] md:h-[calc(100vh-76px)]';

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      speed={2500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect={'fade'}
      className="w-full"
      allowTouchMove={false}
    >
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <div className={`relative w-screen ${image.h ?? imageHeightClass}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              style={{
                borderRadius: `${image.borderRadius ?? 0}px`,
              }}
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
