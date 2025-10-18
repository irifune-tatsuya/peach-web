'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Mail, Rss, House } from 'lucide-react';
import { MenuButton } from '@/components/ui/MenuButton';
import { NavDrawer } from '@/components/common/NavDrawer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconButtonStyle = cn('w-12 h-12 bg-white');

  return (
    <>
      <nav className="fixed bottom-4 left-0 right-0 z-50 flex w-full justify-between items-center px-6 md:hidden">
        <div
          className={cn(
            'flex items-center gap-2 p-2',
            'rounded-full',
            'bg-neutral-200/80 backdrop-blur-lg shadow-lg',
          )}
        >
          <Button asChild variant="ghost" size="icon" className={iconButtonStyle}>
            <Link href="/">
              <House className="!h-6 !w-6" />
              <span className="sr-only">ホーム</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className={iconButtonStyle}>
            <Link href="/article">
              <Rss className="!h-6 !w-6" />
              <span className="sr-only">ピーチブログ</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className={iconButtonStyle}>
            <Link href="/peach-fight">
              <BookOpen className="!h-6 !w-6" />
              <span className="sr-only">岡山のチャレンジ応援マガジンピーチファイ</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="default"
            size="icon"
            className={`${iconButtonStyle} bg-momo-100`}
          >
            <Link href="/contact">
              <Mail className="!h-6 !w-6" />
              <span className="sr-only">お問い合わせ</span>
            </Link>
          </Button>
        </div>
        <MenuButton onToggle={() => setIsOpen(!isOpen)} className="shadow-lg" />
      </nav>
      <NavDrawer isOpen={isOpen} onCloseAction={() => setIsOpen(false)} />
    </>
  );
};
