'use client';

import { FC, useState } from 'react';
import { CONTACT, IMAGEBASEURL } from '@/constants';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLine } from 'react-icons/fa';
import { MenuButton } from '@/components/ui/MenuButton';
import { NavDrawer } from '@/components/common/NavDrawer';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="page-header"
      className="hidden h-[76px] w-full bg-white px-6 py-3 fixed top-0 z-50 md:block"
    >
      <div className="flex justify-between">
        <Link href="/">
          <Image
            src={`${IMAGEBASEURL}/common/rectangle_logo.svg`}
            width={190}
            height={40}
            className="h-auto w-[150px] lg:w-[190px]"
            alt={'ピーチウェブヘッダーロゴ'}
            priority
          />
        </Link>
        <div className="flex items-center gap-5">
          <nav className="ml-auto flex h-full items-center">
            <Button asChild>
              <Link href="/contact" className="!text-lg !lg:text-xl">
                <Mail className="!h-6 !w-6" />
                お問い合わせ
              </Link>
            </Button>
          </nav>
          <MenuButton onToggle={() => setIsOpen(!isOpen)} />
        </div>
        <NavDrawer onCloseAction={() => setIsOpen(false)} isOpen={isOpen} />
      </div>
    </header>
  );
};
