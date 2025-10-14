'use client';

import { FC } from 'react';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-scroll';
import { List } from 'lucide-react';

type TocItem = {
  text?: string;
  id?: string;
  name?: string;
};

type Props = {
  toc: TocItem[];
};

export const TableOfContents: FC<Props> = ({ toc }) => {
  if (!toc || toc.length === 0) {
    return null;
  }

  return (
    <nav className="my-9 mx-4 p-2 rounded-lg bg-momo-300 shadow-lg">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="px-4 font-bold hover:no-underline">
            <div className="flex items-center gap-2">
              <List className="h-5 w-5" />
              <span className="py-2 text-lg">目次</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2">
            <ul className="list-none space-y-1 p-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id || ''}
                    smooth={true}
                    duration={200}
                    offset={-76}
                    className={`toc-${item.name} block cursor-pointer px-4 py-2 text-sm transition-all hover:pl-6`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  );
};
