import type { ReactNode } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';

type Props = {
  title: ReactNode;
  children: ReactNode;
};

export const ThreeCardsSlider = ({ title, children }: Props) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>{title}</SectionTitle>
        <div className="pt-12 flex lg:justify-center snap-x snap-mandatory gap-6 overflow-x-auto pb-6 md:pb-0">
          {children}
        </div>
      </div>
    </section>
  );
};
