'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; // 👈 useStateをインポート
import { ImDisplay } from 'react-icons/im';
import { IoBookOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import { MenuButton } from '@/components/ui/MenuButton';
import { NavDrawer } from '@/components/common/NavDrawer';
import { IMAGEBASEURL } from '@/constants';
import React from 'react';

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex gap-4 w-full h-24 items-start justify-center bg-momo-300 fixed bottom-0 z-10 md:hidden pt-5">
        <Link href="/article" className="flex w-14 flex-col items-center hover:no-underline">
          <IoBookOutline size={'2rem'} className="text-momo-100" />
          <span className="mt-[0.2em] text-[10px]">新着記事</span>
        </Link>

        <Link href="/service" className="flex w-14 flex-col items-center hover:no-underline">
          <ImDisplay size={'2rem'} className="text-momo-100" />
          <span className="mt-[0.2em] text-[10px] font-bold">サービス</span>
        </Link>

        <Link href="/" className="flex w-14 flex-col items-center hover:no-underline">
          <Image
            src={`${IMAGEBASEURL}/common/nav-momo.webp`}
            alt={'ホームに戻る'}
            width={32}
            height={32}
            className="h-auto w-8"
          />
          <span className="mt-[0.4em] text-[10px] font-bold">ホーム</span>
        </Link>

        <Link href="/contact" className="flex w-14 flex-col items-center hover:no-underline">
          <GoMail size={'2rem'} className="text-momo-100" />
          <span className="mt-[0.2em] text-[10px] font-bold">お問合せ</span>
        </Link>

        <MenuButton onToggle={() => setIsOpen(!isOpen)} />
      </nav>
      <NavDrawer isOpen={isOpen} onCloseAction={() => setIsOpen(false)} />
    </>
  );
};
