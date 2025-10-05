'use client';
import { NextPage } from 'next';
import Link from 'next/link';
import { MENU } from '@/constants';
import { IoMail, IoCloseOutline } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';
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

function useMediaQuery(query: string): boolean {
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
}

type Props = {
  isOpen: boolean;
  onCloseAction: () => void;
};

export const NavDrawer: NextPage<Props> = ({ isOpen, onCloseAction }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const side = isDesktop ? 'right' : 'bottom';

  return (
    <Sheet open={isOpen} onOpenChange={onCloseAction}>
      <SheetContent side={side} className="bg-white">
        <SheetHeader className="flex flex-row justify-end">
          <SheetTitle className="sr-only">ナビゲーションメニュー</SheetTitle>
          <SheetDescription className="sr-only">
            サイトの主要なページへ移動するためのナビゲーションです。
          </SheetDescription>
          <SheetClose asChild>
            <button className="hidden h-12 w-12 rounded-full bg-momo-300 p-2 md:block">
              <IoCloseOutline className="h-full w-full" />
            </button>
          </SheetClose>
        </SheetHeader>
        <div className="pt-10">
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
                    <FaArrowRight className="text-momo-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <SheetFooter className="md:hidden">
          <div className="flex w-full items-center justify-between px-2">
            <Link href="/contact" className="block text-center" onClick={onCloseAction}>
              <div className="flex h-full max-w-[200px] items-center justify-center rounded-[30px] bg-momo-100 px-['2em'] py-['1em'] text-sm font-bold text-white">
                <IoMail size={'1.5em'} />
                <span className="ml-4">お問い合わせ</span>
              </div>
            </Link>
            <SheetClose asChild>
              <button className="block h-12 w-12 rounded-full bg-momo-300 p-2 md:hidden">
                <IoCloseOutline className="h-full w-full" />
              </button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
