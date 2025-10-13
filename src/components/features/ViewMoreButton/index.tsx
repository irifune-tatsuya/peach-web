import { FC } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

type Props = {
  href: string;
  size: 'large' | 'small';
};

export const ViewMoreButton: FC<Props> = ({ href, size }) => {
  const isSmall = size === 'small';

  return (
    <div className="flex justify-center md:block">
      <Link href={href} className="group flex justify-center items-center no-underline">
        <span
          className={`
            font-bold text-sm underline underline-offset-3
            transition-colors group-hover:text-momo-100
            ${isSmall ? 'tracking-[1.5px]' : 'tracking-[2px]'}
          `}
        >
          View More
        </span>
        <div
          className={`
            relative rounded-full bg-momo-100 transition-transform
            group-hover:scale-110
            ${
              isSmall
                ? 'ml-3 h-[40px] w-[40px] md:ml-6'
                : 'ml-[30px] h-[62px] w-[62px] md:ml-[46px]'
            }
          `}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <FiArrowRight
              className={`
                text-white
                ${isSmall ? 'h-4 w-4' : 'h-5 w-5'}
              `}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
