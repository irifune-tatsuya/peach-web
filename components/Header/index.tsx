'use client';
import { CONTACT, IMAGEBASEURL } from '@/constants';
import { NextPage } from 'next';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLine } from 'react-icons/fa';
import { MenuButton } from '../MenuButton';
import { NavDrawer } from '../NavDrawer';
import { ContactButton } from '../ContactButton';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const Header: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="page-header"
      className="hidden h-[76px] w-full bg-white px-6 py-3 fixed top-0 z-10 md:block"
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
          <Link href={CONTACT.instagram} target="_blank">
            <FaInstagram size={'2em'} />
          </Link>
          <Link href={CONTACT.X} target="_blank">
            <FaSquareXTwitter size={'2em'} />
          </Link>
          <Link href={CONTACT.line} target="_blank">
            <FaLine size={'2em'} />
          </Link>
          <nav className="ml-auto flex h-full items-center">
            <ContactButton />
          </nav>
          <MenuButton onToggle={() => setIsOpen(!isOpen)} />
        </div>
        <NavDrawer onCloseAction={() => setIsOpen(false)} isOpen={isOpen} />
      </div>
    </header>
  );
};
