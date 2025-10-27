import Image from 'next/image';
import type { ComponentProps } from 'react';
import { IMAGEBASEURL } from '@/constants';

type Props = {
  children: React.ReactNode;
  variant?: 'momo' | 'white';
  className?: string;
} & ComponentProps<'h2'>;

export const SectionTitle = ({ children, variant = 'momo', className = '', ...props }: Props) => {
  const iconSrc =
    variant === 'white'
      ? `${IMAGEBASEURL}/common/h2-icon-white.svg`
      : `${IMAGEBASEURL}/common/h2-icon-momo.svg`;

  const textColor = variant === 'white' ? 'text-white' : 'text-gray-800';

  return (
    <h2
      className={`flex items-center gap-2 text-xl font-bold md:text-2xl ${textColor} ${className}`}
      {...props}
    >
      <div className="relative h-10 w-10 flex-shrink-0">
        <Image src={iconSrc} alt="ピーチウェブの桃ロゴ" fill />
      </div>
      <span>{children}</span>
    </h2>
  );
};
