import { FC } from 'react';

type Props = {
  titleEn: string;
  titleJp: string;
  mb: number;
};

export const ContentTitle: FC<Props> = ({ titleEn, titleJp, mb }) => {
  return (
    <h2 className="font-bold text-momo-100" style={{ marginBottom: `${mb}px` }}>
      <span className="text-xl tracking-[0.08em] md:text-2xl">{titleEn}</span>
      <span className="ml-2 text-sm">{titleJp}</span>
    </h2>
  );
};

export default ContentTitle;
