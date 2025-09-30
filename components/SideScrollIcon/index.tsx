import { IMAGEBASEURL } from '@/constants';
import Image from 'next/image';

type Props = {
  className?: string;
};

export default function SideScrollIcon({ className }: Props) {
  const defaultClasses = 'block md:hidden mt-[15px] sm:mt-[30px] ml-[10px] mb-[10px]';

  return (
    <Image
      src={`${IMAGEBASEURL}/common/side-scroll.webp`}
      alt="横にスクロールできます"
      width={60}
      height={20}
      className={`${defaultClasses} ${className || ''}`}
    />
  );
}
