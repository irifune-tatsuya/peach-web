import { FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { type VariantProps } from 'class-variance-authority';

type ButtonType = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: VariantProps<typeof buttonVariants>['variant'];
  size?: VariantProps<typeof buttonVariants>['size'];
};

type Props = {
  buttons: ReadonlyArray<ButtonType>;
  className?: string;
};

export const ButtonArea: FC<Props> = ({ buttons, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-4 px-10 py-10 md:flex-row md:justify-center md:gap-8',
        className,
      )}
    >
      {buttons.map((button, i) => {
        const isExternal = button.href.startsWith('http');
        return (
          <Button
            key={i}
            asChild
            variant={button.variant || 'default'}
            size={button.size || 'default'}
            className="w-full max-w-xs md:w-auto btn-slide-hover"
          >
            <Link
              href={button.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
            >
              <span className="relative z-10 flex items-center">
                {button.icon}
                {button.children}
              </span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
};
