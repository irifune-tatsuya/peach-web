import type { ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Article } from '@/types/microcms';

type Props = {
  title: ReactNode;
  faqs: Article[];
};

export const FaqsSection = ({ title, faqs }: Props) => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <SectionTitle className="text-center mb-12">{title}</SectionTitle>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-l-4 border-momo-300 data-[state=open]:border-momo-100 transition-colors pl-4"
            >
              <AccordionTrigger className="py-4 pr-4 text-left text-base md:text-lg font-medium hover:no-underline">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="pb-4 pr-4">
                <div
                  className="prose prose-sm max-w-none leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.content }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
