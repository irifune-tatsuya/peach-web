'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { MENU, CONTACT } from '@/constants';
import { Mail, X, ArrowRight } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { RiQuillPenLine } from 'react-icons/ri';
import { FaInstagram, FaLine } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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

  const highlightMenus = MENU.filter((item) => item.type === 'highlight');
  const mainMenus = MENU.filter((item) => item.type === 'main');
  const footerMenus = MENU.filter((item) => item.type === 'footer');

  return (
    <Sheet open={isOpen} onOpenChange={onCloseAction}>
      <SheetContent side={side} className="flex h-full flex-col bg-white pb-10 px-0 md:p-0">
        <SheetTitle className="sr-only">ナビゲーションメニュー</SheetTitle>
        <SheetDescription className="sr-only">
          サイトの主要なページへ移動するためのナビゲーションです。
        </SheetDescription>
        <div className="hidden md:flex items-center justify-end py-3 px-7">
          <SheetClose asChild>
            <Button variant="gray" className="h-12 w-12 p-2">
              <X className="!h-6 !w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
        </div>
        <div className="flex-1 overflow-y-auto px-6 pb-20 pt-10 md:pt-5">
          <nav>
            <ul className="mb-8 space-y-2">
              {highlightMenus.map((item, i) => (
                <li key={i}>
                  <Button
                    asChild
                    className="h-20 w-full justify-between rounded-lg text-left p-4 btn-slide-hover"
                  >
                    <Link href={item.href} className="w-full" onClick={onCloseAction}>
                      {item.title === 'ピーチファイ' ? (
                        <div>
                          <span className="block text-xs font-medium">
                            岡山のチャレンジ応援マガジン
                          </span>
                          <span className="text-lg">ピーチファイ</span>
                        </div>
                      ) : (
                        <span className="text-lg">{item.title}</span>
                      )}
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
            <ul className="list-none">
              {mainMenus.map((item, i) => (
                <li key={i} className="border-b border-momo-500">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-2 py-4 font-semibold hover:text-momo-100 hover:no-underline"
                    onClick={onCloseAction}
                  >
                    {item.title}
                    <ArrowRight className="!h-5 !w-5" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-4 justify-center items-center">
              <Button asChild variant="link" size="icon" className="bg-momo-500">
                <Link href={CONTACT.X} target="_blank">
                  <FaXTwitter className="!h-5 !w-5 text-white" />
                </Link>
              </Button>
              <Button asChild variant="link" size="icon" className="bg-momo-500">
                <Link href={CONTACT.note} target="_blank">
                  <RiQuillPenLine className="!h-5 !w-5 text-white" />
                </Link>
              </Button>
            </div>
            <Separator className="my-4" />
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {footerMenus.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="text-xs text-gray-500 hover:text-momo-600 hover:underline"
                  onClick={onCloseAction}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <SheetFooter className="fixed bottom-0 left-0 z-10 w-full bg-white/80 py-4 px-6 backdrop-blur-sm md:hidden">
          <div className="flex w-full items-center justify-between gap-4">
            <Button asChild variant="default" className="flex-1 !h-16">
              <Link href="/contact" onClick={onCloseAction} className="!text-lg">
                <Mail className="mr-2 !h-6 !w-6" />
                お問い合わせ
              </Link>
            </Button>
            <SheetClose asChild>
              <Button variant="gray" className="h-16 w-16 flex-shrink-0 p-2">
                <X className="!h-6 !w-6" />
                <span className="sr-only">メニューを閉じる</span>
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
