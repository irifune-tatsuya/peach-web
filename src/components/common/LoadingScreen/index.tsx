import { FC } from 'react';
import { IMAGEBASEURL } from '@/constants';
import Image from 'next/image';

export const LoadingScreen: FC = () => {
  return (
    <div className="flex h-screen items-start justify-center bg-white pt-[30vh]">
      <div className="text-center animate-pulse">
        <Image
          src={`${IMAGEBASEURL}/common/loading.webp`}
          alt="ローディング中..."
          width={200}
          height={200}
          priority
        />
      </div>
    </div>
  );
};
