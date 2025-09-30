'use client';

import Image from 'next/image';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// SwiperのCSSは引き続きここでインポートするよ
import 'swiper/css';
import 'swiper/css/effect-fade';

/**
 * 画像データの型定義
 * もとの 'Image' 型が next/image と被っちゃうから 'SlideImage' に名前変えたよん😉
 */
type SlideImage = {
  h?: string;
  src: string;
  alt: string;
  borderRadius?: number;
};

type Props = {
  images: SlideImage[];
};

export const TopSwiper = ({ images }: Props) => {
  // Chakraのレスポンシブ指定 `h={{ base: '...', md: '...' }}` を
  // Tailwindのクラスに変換！これで同じ表示になるはず！
  const imageHeightClass = 'h-[calc(100vh-55px)] md:h-[calc(100vh-76px)]';

  return (
    <Swiper
      // モジュールはそのまま
      modules={[Autoplay, EffectFade]}
      // フェード効果のときは、一度に1枚表示がキレイに見えるから`1`にしたよ
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      speed={2500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect={'fade'}
      // もとのCSS Modulesの代わりに、直接 `w-full` を指定！
      // これで画面幅いっぱいに広がるはず！
      className="w-full"
      // フェードアニメーションがメインだから、スワイプ操作はオフにしとくとリッチな感じになるかも？
      allowTouchMove={false}
    >
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          {/*
            next/imageの`fill`プロパティを使うために、
            親のdivに`relative`とサイズを指定するのがモダンな書き方なんだ！
          */}
          <div className={`relative w-screen ${image.h ?? imageHeightClass}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              style={{
                // borderRadiusはstyleで直接指定！
                borderRadius: `${image.borderRadius ?? 0}px`,
              }}
              // SEO対策！✨ LCP（ページの表示速度）のために
              // 最初の画像だけ`priority`で優先的に読み込んじゃお！
              priority={i === 0}
              // `fill`使うときは、`sizes`も指定しとくとパフォーマンス的にGood！
              sizes="100vw"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
