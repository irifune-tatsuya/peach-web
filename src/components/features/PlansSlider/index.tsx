'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ServicePlan } from '@/types/microcms';
import { Badge } from '@/components/ui/badge';

const formatPrice = (price: number, isStarting: boolean, type: '月額' | '単発') => {
  const formatted = price.toLocaleString();
  const prefix = isStarting ? '〜' : '';
  const suffix = type === '月額' ? '円/月' : '円';
  return `${formatted}${suffix}${prefix}`;
};

type Props = {
  plansData: ServicePlan[];
};

export const PlansSlider = ({ plansData }: Props) => {
  return (
    <Swiper
      initialSlide={1}
      slidesPerView={1.2}
      spaceBetween={16}
      centeredSlides={true}
      freeMode={true}
      mousewheel={true}
      grabCursor={true}
      className="!pb-6 -mx-4 px-4"
      breakpoints={{
        768: {
          slidesPerView: 2.2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      }}
    >
      {plansData.map((plan, index) => (
        <SwiperSlide key={index} className="!h-auto">
          <Card className="h-full flex flex-col shadow-lg rounded-xl overflow-hidden border border-momo-100">
            <CardHeader className="p-5 relative">
              {plan.eye_catch && (
                <Badge className="absolute top-4 left-4 bg-momo-100 text-white shadow">
                  {plan.eye_catch}
                </Badge>
              )}
              <CardTitle className="font-bold text-momo-100 pt-10 text-center">
                {plan.plan_name}
              </CardTitle>
              <div className="mt-1 text-center">
                <span className="inline-flex items-center gap-1">
                  <span className="inline-block bg-momo-300 px-2 py-0.5 rounded text-xs font-bold">
                    {plan.plan_type}
                  </span>
                  <span className="text-2xl font-bold">{plan.price.toLocaleString()}</span>
                  <span className="text-sm pt-1">
                    円{plan.plan_type === '月額' ? '/月' : ''}
                    <span className="text-xs"> / 税別</span>
                    {plan.is_starting_price && '〜'}
                  </span>
                </span>
              </div>
            </CardHeader>
            <div className="px-6">
              <div className="w-16 h-px bg-momo-100 mx-auto" />
            </div>
            <CardContent className="p-6 flex-grow">
              <div
                className="prose prose-sm max-w-none prose-ul:list-none prose-ul:pl-0 prose-li:flex prose-li:items-start prose-li:gap-2 prose-li:before:content-['✓'] prose-li:before:text-momo-100 prose-li:before:font-bold"
                dangerouslySetInnerHTML={{ __html: plan.plan_description }}
              />
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
