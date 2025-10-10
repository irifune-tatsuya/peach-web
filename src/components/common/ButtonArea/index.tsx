import React from 'react';
import SimpleButton from '@/components/ui/SimpleButton';
import { cn } from '@/lib/utils';

type Button = {
  bgClassName?: string;
  textClassName?: string;
  href: string;
  isExternal: boolean;
  title: string;
  icon: React.ReactNode;
};

type Props = {
  buttons: Array<Button>;
  className?: string;
};

export default function ButtonArea({ buttons, className }: Props) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-4 px-10 py-10 md:flex-row md:justify-center md:gap-8',
        className,
      )}
    >
      {buttons.map((button, i) => (
        <SimpleButton
          key={i}
          bgClassName={button.bgClassName}
          textClassName={button.textClassName}
          href={button.href}
          isExternal={button.isExternal}
          title={button.title}
          icon={button.icon}
          className="w-full max-w-xs md:w-auto"
        />
      ))}
    </div>
  );
}
