'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Article } from '@/lib/microcms';
import { LandscapeCard } from '@/components/ui/LandscapeCard';
import { PortraitCard } from '@/components/ui/PortraitCard';

import 'swiper/css';

type Props = {
  articles: Article[];
  category: string;
};

export const LatestArticleList: FC<Props> = ({ articles, category }) => {
  if (!articles || articles.length === 0) {
    return <p className="p-4">記事がありません。</p>;
  }

  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={'auto'}
      spaceBetween={16}
      centerInsufficientSlides={true}
      className="!py-2 !px-1"
    >
      {articles.map((article) => (
        <SwiperSlide key={article.id} className="!w-auto transition-opacity hover:opacity-80">
          {category === 'article' ? (
            <LandscapeCard article={article} category={category} />
          ) : (
            <PortraitCard article={article} category={category} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
