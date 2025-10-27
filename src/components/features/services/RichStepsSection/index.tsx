import type { ReactNode } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { InfoCardItem } from '@/types/service';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

type Props = {
  title: ReactNode;
  steps: InfoCardItem[];
};

export const RichStepsSection = ({ title, steps }: Props) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle className="text-center mb-16">{title}</SectionTitle>
        <div className="relative space-y-12 before:absolute before:inset-y-0 before:w-0.5 before:bg-gray-200 before:left-6 md:before:left-1/2 md:before:-translate-x-1/2 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative md:grid md:grid-cols-2 md:items-center md:gap-12"
            >
              <div className="absolute top-1 left-6 w-4 h-4 rounded-full bg-momo-100 border-4 border-white md:left-1/2 md:-translate-x-1/2" />
              <div
                className={`relative w-full aspect-square rounded-lg overflow-hidden shadow-lg mt-8 md:mt-0 ${
                  index % 2 === 1 ? 'md:order-last' : ''
                }`}
              >
                <Image
                  src={step.image.url}
                  alt={step.image.alt}
                  width={step.image.width}
                  height={step.image.height}
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>
              <div className="pt-5 md:pt-0 pl-12 md:pl-0">
                <Badge className="inline-block bg-momo-100 text-white mb-2">STEP {index + 1}</Badge>
                <h3 className="mt-1 text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
