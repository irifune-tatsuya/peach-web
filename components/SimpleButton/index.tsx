import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
  bgClassName?: string;
  textClassName?: string;
  href: string;
  isExternal: boolean;
  title: string;
  icon: React.ReactNode;
  className?: string;
};

export default function SimpleButton({
  bgClassName,
  textClassName,
  href,
  isExternal = false,
  title,
  icon,
  className,
}: Props) {
  return (
    <Button
      asChild
      className={cn(
        'h-full rounded-full px-8 py-4 font-bold transition-transform duration-300 hover:scale-105',
        bgClassName,
        textClassName,
        className,
      )}
    >
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {icon}
        <span className="ml-2">{title}</span>
      </Link>
    </Button>
  );
}
