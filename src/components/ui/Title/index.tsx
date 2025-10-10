import React from 'react';

type Props = {
  titleEn: string;
  titleJp: string;
};

export default function Title({ titleEn, titleJp }: Props) {
  return (
    <div className="pt-9 pb-10 text-momo-100 md:pt-[118px] md:pb-[72px]">
      <div className="mx-auto max-w-6xl p-4">
        <div className="inline-block pr-1">
          <p className="text-base font-bold">{titleJp}</p>
          <h1 className="text-4xl font-bold md:text-5xl">{titleEn}</h1>
        </div>
      </div>
    </div>
  );
}
