import type { ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ServiceOption } from '@/types/service';

const formatOptionPrice = (type: '月額' | '単発', price: number, isStarting: boolean) => {
  const formattedPrice = price.toLocaleString();
  const suffix = isStarting ? '〜' : '';
  return `${type} ${formattedPrice}円 / 税別${suffix}`;
};

type Props = {
  title: ReactNode;
  options: ServiceOption[];
};

export const OptionsSection = ({ title, options }: Props) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>{title}</SectionTitle>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4 pt-12">
          {options.map((option, index) => (
            <AccordionItem
              key={option.id}
              value={`item-${option.id}`}
              className="border border-momo-200 rounded-lg overflow-hidden shadow-sm"
              disabled={!option.optionDescription}
            >
              <AccordionTrigger
                className={`flex justify-between items-center w-full p-4 text-left font-medium hover:no-underline [&>svg]:h-7 [&>svg]:w-7 [&[data-state=open]>svg]:rotate-180 transition-none`}
                style={{ cursor: option.optionDescription ? 'pointer' : 'default' }}
              >
                <div className="flex flex-col flex-1 pr-4">
                  <span className="text-base md:text-lg">{option.optionName}</span>
                  <span className="text-sm md:text-base text-momo-100 font-semibold whitespace-nowrap mt-1 md:mt-0">
                    {formatOptionPrice(
                      option.optionType,
                      option.optionPrice,
                      option.isStartingPrice,
                    )}
                  </span>
                </div>
              </AccordionTrigger>
              {option.optionDescription && (
                <AccordionContent className="p-4">
                  <p className="text-sm leading-relaxed">{option.optionDescription}</p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
