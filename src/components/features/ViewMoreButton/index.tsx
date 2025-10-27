import { FC } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

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
            font-bold relative
            ${isSmall ? 'tracking-[1.5px]' : 'tracking-[2px]'}
            after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-momo-100 after:transition-all after:duration-300 group-hover:after:w-full
          `}
        >
          View More
        </span>
        <div
          className={`
            relative rounded-full bg-momo-100 transition-transform
            group-hover:scale-125
            ${isSmall ? 'ml-3 h-10 w-10 md:ml-6' : 'ml-8 h-14 w-14'}
          `}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ChevronRight
              className={`
                text-white transition-transform group-hover:scale-125
                ${isSmall ? '!h-4 !w-4' : '!h-5 !w-5'}
              `}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
