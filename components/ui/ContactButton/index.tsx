'use client';

import { FC } from 'react';
import { ElementType } from 'react';
import Link from 'next/link';
import { IoMail } from 'react-icons/io5';

interface ContactButtonProps {
  href?: string;
  text?: string;
  IconComponent?: ElementType;
  iconSize?: string;
}

export const ContactButton: FC<ContactButtonProps> = ({
  href = '/contact',
  text = 'お問い合わせ',
  IconComponent = IoMail,
  iconSize = '1.5em',
}) => {
  const isExternal = href.startsWith('http');

  return (
    <Link
      href={href}
      className="block text-center hover:no-underline"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <div className="flex h-full items-center justify-center rounded-[40px] border-2 border-solid border-momo-100 py-[0.5em] px-[1.5em] font-bold text-momo-100 transition-all duration-200 ease-in-out hover:bg-momo-100 hover:text-white">
        <IconComponent size={iconSize} />
        <span className="ml-2 hover:no-underline">{text}</span>
      </div>
    </Link>
  );
};
