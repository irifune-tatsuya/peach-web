import { FC } from 'react';

type Props = {
  titleEn: string;
  titleJp: string;
};

export const SectionHeading: FC<Props> = ({ titleEn, titleJp }) => {
  return (
    <div className="relative flex items-center py-8">
      <h2 className="relative z-10">
        <span
          className="text-stroke absolute -top-4 left-0 select-none text-4xl md:text-7xl font-black uppercase text-transparent opacity-20 md:-top-12"
          aria-hidden="true"
        >
          {titleEn}
        </span>
        <span className="relative block text-2xl md:text-4xl font-bold text-momo-100">
          {titleJp}
        </span>
      </h2>
    </div>
  );
};
