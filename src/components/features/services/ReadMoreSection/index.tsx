import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { MoveDown } from 'lucide-react';

type Props = {
  icon: LucideIcon;
  title: ReactNode;
  readMoreText: string;
};

export const ReadMoreSection = ({ icon: Icon, title, readMoreText }: Props) => {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center">
        <div className="flex justify-center items-center gap-4">
          <Icon className="w-12 h-12 text-momo-100" />
          <h3 className="text-2xl md:text-3xl font-bold text-start">{title}</h3>
        </div>
        <p className="mt-8 text-lg font-bold">{readMoreText}</p>
        <MoveDown className="w-16 h-16 mx-auto mt-8 text-momo-100 animate-bounce" />
      </div>
    </section>
  );
};
