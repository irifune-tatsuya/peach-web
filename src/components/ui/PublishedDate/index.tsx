import { FC } from 'react';
import { IMAGEBASEURL } from '@/constants';
import { formatDate } from '@/lib/date';
import Image from 'next/image';
import { Clock } from 'lucide-react';

type Props = {
  date: string;
  simple?: boolean;
};

export const PublishedDate: FC<Props> = ({ date, simple = false }) => {
  return (
    <span className="flex items-center gap-1 text-sm leading-4">
      {!simple && <Clock size={14} />}
      <span>{simple ? formatDate(date) : `${formatDate(date)} 公開`}</span>
    </span>
  );
};
