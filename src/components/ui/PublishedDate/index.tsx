import { FC } from 'react';
import { IMAGEBASEURL } from '@/constants';
import { formatDate } from '@/lib/date';
import Image from 'next/image';

type Props = {
  date: string;
  simple?: boolean;
};

export const PublishedDate: FC<Props> = ({ date, simple = false }) => {
  return (
    <span className="flex items-center gap-2 text-sm leading-4">
      {!simple && <Image src={`${IMAGEBASEURL}/clock.svg`} alt="時計" width={12} height={12} />}
      <span>{simple ? formatDate(date) : `${formatDate(date)} 公開`}</span>
    </span>
  );
};
