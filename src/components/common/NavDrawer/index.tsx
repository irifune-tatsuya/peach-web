'use client';

import { FC } from 'react';
import Link from 'next/link';
import { MENU } from '@/constants';
import { Mail, X, ArrowRight } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

type Props = {
  isOpen: boolean;
  onCloseAction: () => void;
};

export const NavDrawer: FC<Props> = ({ isOpen, onCloseAction }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const side = isDesktop ? 'right' : 'bottom';

  return (
    <Sheet open={isOpen} onOpenChange={onCloseAction}>
      <SheetContent side={side} className="bg-white flex flex-col h-full">
        <SheetHeader className="flex flex-row justify-end">
          <SheetTitle className="sr-only">ナビゲーションメニュー</SheetTitle>
          <SheetDescription className="sr-only">
            サイトの主要なページへ移動するためのナビゲーションです。
          </SheetDescription>
          <SheetClose asChild>
            <button className="hidden h-12 w-12 rounded-full bg-momo-300 p-2 md:block">
              <X className="h-full w-full" />
            </button>
          </SheetClose>
        </SheetHeader>
        <div className="py-10 flex-1 overflow-y-auto">
          <nav className="flex justify-center md:justify-end">
            <ul className="w-full list-none">
              {MENU.map((item, i) => (
                <li key={i} className="border-b border-momo-400">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-2 py-4 font-bold hover:text-momo-100 hover:no-underline"
                    onClick={onCloseAction}
                  >
                    {item.title}
                    <ArrowRight className="text-momo-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <SheetFooter className="md:hidden">
          <div className="flex w-full items-center justify-between px-2">
            <Button asChild>
              <Link href="/contact">
                <Mail className="!h-5 !w-5" />
                お問い合わせ
              </Link>
            </Button>
            <SheetClose asChild>
              <button className="block h-12 w-12 rounded-full bg-momo-300 p-2 md:hidden">
                <X className="h-full w-full" />
              </button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
