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

  const iconButtonStyle = cn('rounded-full w-9 h-9', 'bg-white/50 hover:bg-white/80 text-momo-900');

  return (
    <>
      <nav className="fixed bottom-8 left-0 right-0 z-50 flex w-full justify-end gap-5 items-center px-6 md:hidden">
        <div
          className={cn(
            'flex items-center gap-1 p-1.5',
            'rounded-full',
            'bg-neutral-200/80 backdrop-blur-lg shadow-lg',
          )}
        >
          <Button asChild variant="ghost" size="icon" className={iconButtonStyle}>
            <Link href="/">
              <House className="!h-4 !w-4" />
              <span className="sr-only">ホーム</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className={iconButtonStyle}>
            <Link href="/article">
              <Rss className="!h-4 !w-4" />
              <span className="sr-only">ピーチブログ</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className={iconButtonStyle}>
            <Link href="/peach-fight">
              <BookOpen className="!h-4 !w-4" />
              <span className="sr-only">岡山のチャレンジ応援マガジンピーチファイ</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" className={cn(iconButtonStyle, 'w-auto px-3')}>
            <Link href="/contact" className="flex items-center !gap-1 text-sm">
              <Mail className="!h-4 !w-4" />
              <span>お問い合わせ</span>
            </Link>
          </Button>
        </div>
        <MenuButton onToggle={() => setIsOpen(!isOpen)} className="shadow-lg" />
      </nav>
      <NavDrawer isOpen={isOpen} onCloseAction={() => setIsOpen(false)} />
    </>
  );
};
