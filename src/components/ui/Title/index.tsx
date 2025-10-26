import { FC } from 'react';

type Props = {
  titleEn: string;
  titleJp: string;
};
export const Title: FC<Props> = ({ titleEn, titleJp }) => {
  return (
    <div className="py-9 md:py-20 bg-gradient-to-r from-momo-600 to-white">
      <div className="mx-auto max-w-6xl p-4">
        <div className="">
          <h1 className="text-lg md:text-2xl font-bold">{titleJp}</h1>
          <p className="text-3xl md:text-5xl font-bold">{titleEn}</p>
        </div>
      </div>
    </div>
  );
};
