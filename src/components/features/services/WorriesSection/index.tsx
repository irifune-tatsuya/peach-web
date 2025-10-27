import Image from 'next/image';
import { ServiceWorry } from '@/types/service';
import { IMAGEBASEURL } from '@/constants';
import { CircleCheck } from 'lucide-react';

type Props = {
  worries: ServiceWorry[];
};

const commonImgPath = `${IMAGEBASEURL}/services`;

export const WorriesSection = ({ worries }: Props) => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-4 max-w-5xl rounded-lg bg-momo-300 py-8 lg:mx-auto">
        <h2 className="text-center font-bold text-lg md:text-2xl">
          こんな
          <span className="mx-1 text-2xl md:text-4xl font-bold text-momo-100">お悩み</span>
          ございませんか？
        </h2>
        <div className="mt-3 items-center justify-center gap-2 md:flex px-2 md:px-4">
          <div className="relative w-full aspect-square mx-auto md:w-full md:max-w-[250px] lg:max-w-[300px] md:h-auto md:mx-0 md:flex-shrink-0">
            <Image
              src={`${commonImgPath}/issue.webp`}
              alt="こんなお悩みはございませんか？"
              width={500}
              height={500}
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, 300px"
            />
          </div>
          <ul className="mt-0 w-full md:max-w-[550px] list-none px-4 font-bold text-base lg:text-xl lg:text-center md:flex-1">
            {worries.map((worry, index) => (
              <li
                key={worry.id}
                className={`
                    flex items-center gap-3
                    border-b border-gray-300 px-5 py-3
                    ${index === 0 ? 'border-t' : ''}
                  `}
              >
                <CircleCheck className="!h-5 !w-5 flex-shrink-0 text-momo-100" />
                <span>{worry.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
