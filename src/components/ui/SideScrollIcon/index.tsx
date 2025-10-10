import { FC } from 'react';
import { cn } from '@/lib/utils';
import { IMAGEBASEURL } from '@/constants';
import Image from 'next/image';

type Props = {
  className?: string;
};

export const SideScrollIcon: FC<Props> = ({ className }) => {
  const defaultClasses = 'block md:hidden mt-[15px] sm:mt-[30px] ml-[10px] mb-[10px]';

  return (
    <Image
      src={`${IMAGEBASEURL}/common/side-scroll.webp`}
      alt="横にスクロールできます"
      width={60}
      height={20}
      className={cn(defaultClasses, className)}
    />
  );
};
