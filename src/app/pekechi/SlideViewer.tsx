'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar } from 'lucide-react';
import { CustomImage } from '@/components/ui/CustomImage';
import { IMAGEBASEURL } from '@/constants';
import { SlideNav } from '@/components/features/SlideNav';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface Slide {
  id: string;
  fileName: string;
  altText: string;
  tocTitle?: string;
  level?: number;
}

interface SlideViewerProps {
  slides: Slide[];
}

const AnimatedSlide = ({ slide }: { slide: Slide }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      id={slide.id}
      className={`transition-all duration-800 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[200px]'
      }`}
    >
      <CustomImage
        src={`${IMAGEBASEURL}/pekechi/${slide.fileName}`}
        alt={slide.altText}
        priority={slide.id === 'slide-01' || slide.id === 'slide-02'}
        sizes="(max-width: 768px) 100vw, 900px"
        wrapperClassName="aspect-video w-full overflow-hidden rounded-md shadow-lg"
      />
    </div>
  );
};

const SlideViewer = ({ slides }: SlideViewerProps) => {
  const tocData = slides
    .filter((slide) => slide.tocTitle)
    .map((slide) => ({
      id: slide.id,
      title: slide.tocTitle!,
      level: slide.level || 1,
    }));

  const [activeTocId, setActiveTocId] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <h1 className="w-full bg-momo-100 py-4 text-center text-xl font-bold text-white md:py-5 md:text-5xl">
        <span className="text-sm md:text-lg">Webから新規ファンを増やすX運用代行</span>
        <br />
        【ぺけち】のご案内
      </h1>
      <div className="sticky top-0 z-10 mt-0 bg-white shadow-sm md:hidden">
        <Collapsible open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full text-momo-100 btn-slide-hover">
              {isMobileMenuOpen ? (
                <X className="mr-2 h-4 w-4" />
              ) : (
                <Menu className="mr-2 h-4 w-4" />
              )}
              目次を見る
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="max-h-[50vh] overflow-y-auto border-t border-gray-200 p-4">
              <SlideNav
                data={tocData}
                activeId={activeTocId}
                setActiveId={setActiveTocId}
                onLinkClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <div className="mx-auto max-w-[1200px] px-4 pb-40 pt-8 md:px-8 md:pb-16 md:pt-16">
        <div className="md:grid md:grid-cols-[250px_1fr] md:gap-8">
          <aside className="hidden md:block">
            <div className="sticky top-20">
              <SlideNav data={tocData} activeId={activeTocId} setActiveId={setActiveTocId} />
            </div>
          </aside>
          <div>
            <div className="flex flex-col space-y-6 md:space-y-10">
              {slides.map((slide) => (
                <AnimatedSlide key={slide.id} slide={slide} />
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[310px] pt-10 text-center md:pt-16">
          <Button asChild variant="default" className="btn-slide-hover">
            <Link href="https://calendar.app.google/PZsqsKjFUZ6a3StDA" target="_blank">
              <Calendar className="!h-5 !w-5" />
              オンラインミーティングの予約
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SlideViewer;
