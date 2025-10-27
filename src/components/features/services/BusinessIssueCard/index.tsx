import type { ReactNode } from 'react';
import { BusinessIssue } from '@/types/service';
import Image from 'next/image';

type Props = {
  issue: BusinessIssue;
};

export const BusinessIssueCard = ({ issue }: Props) => {
  return (
    <div className="w-[80vw] max-w-[350px] snap-center flex-shrink-0 bg-white shadow-lg rounded-xl border border-momo-300 overflow-hidden transition-transform duration-300 hover:-translate-y-6">
      <div className="relative p-2 bg-momo-200 z-10 rounded-full mx-3 mt-3">
        <h3 className="text-lg font-bold text-center">{issue.title}</h3>
        <div className="absolute left-1/2 -bottom-2 w-0 h-0 -translate-x-1/2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-momo-200" />
      </div>
      <div className="relative w-full max-w-[240px] mx-auto aspect-square">
        <Image
          src={issue.image.url}
          alt={issue.image.alt}
          width={issue.image.width}
          height={issue.image.height}
          className="object-cover"
        />
      </div>
      <p className="px-6 pt-3 text-left">{issue.description}</p>
      <div className="p-4 m-3 bg-momo-100 rounded-lg text-center">
        <p className="text-white opacity-80">そんなあなたの問題は...</p>
        <p className="text-2xl font-bold text-white mt-1">{issue.keyword}</p>
      </div>
    </div>
  );
};
