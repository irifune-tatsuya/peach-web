'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Article } from '@/lib/microcms';
import { LandscapeCard } from '@/components/ui/LandscapeCard';
import { PortraitCard } from '@/components/ui/PortraitCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

type Props = {
  articles: Article[];
  category: string;
};

export const LatestArticleList: FC<Props> = ({ articles, category }) => {
  if (!articles || articles.length === 0) {
    return <p className="p-4">記事がありません。</p>;
  }

  return (
    <div className="relative group">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.latest-swiper-button-next',
          prevEl: '.latest-swiper-button-prev',
        }}
        slidesPerView={'auto'}
        spaceBetween={16}
        centerInsufficientSlides={true}
        className="!py-2 !px-1"
      >
        {articles.map((article) => (
          <SwiperSlide
            key={article.id}
            className="!w-[80vw] md:!w-100 transition-opacity hover:opacity-80"
          >
            {category === 'article' ? (
              <LandscapeCard article={article} category={category} />
            ) : (
              <PortraitCard article={article} category={category} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="latest-swiper-button-prev absolute top-1/2 -translate-y-1/2 left-4 z-10 p-2 bg-white/80 rounded-full shadow-md transition-opacity duration-300 hidden md:flex group-hover:opacity-100 opacity-0">
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button className="latest-swiper-button-next absolute top-1/2 -translate-y-1/2 right-4 z-10 p-2 bg-white/80 rounded-full shadow-md transition-opacity duration-300 hidden md:flex group-hover:opacity-100 opacity-0">
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
};
