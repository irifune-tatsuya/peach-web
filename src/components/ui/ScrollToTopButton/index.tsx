'use client';

import { FC } from 'react';
import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const ScrollToTopButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      type="button"
      onClick={scrollToTop}
      aria-label="ページトップに戻る"
      variant="momo"
      size="icon"
      className={cn(
        'fixed bottom-24 md:bottom-10 lg:bottom-24 right-6 md:right-5 lg:right-10 xl:right-32 z-50 h-12 w-12 shadow-lg',
      )}
    >
      <ChevronUp className="!h-6 !w-6" />
    </Button>
  );
};
