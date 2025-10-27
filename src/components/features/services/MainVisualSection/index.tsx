import { ServiceData } from '@/types/service';
import Image from 'next/image';

type Props = {
  data: ServiceData;
};

export const MainVisualSection = ({ data }: Props) => {
  const { mainVisual, titleJp, catchphrase, titleImage } = data;
  return (
    <section className="relative h-screen md:h-[calc(100vh-76px)] overflow-hidden">
      <Image
        src={mainVisual.url}
        alt={mainVisual.alt}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-momo-100/20" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute left-1/2 top-2/5 z-20 w-[80%] max-w-lg -translate-x-1/2 -translate-y-1/3">
        <h1 className="sr-only">{titleJp}</h1>
        {catchphrase && (
          <div className="relative mb-[1rem] max-w-md z-10">
            <div className="p-4 bg-white rounded-xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <p className="text-center font-bold text-momo-100 text-sm sm:text-base md:text-lg lg:text-xl">
                {catchphrase}
              </p>
              <div
                className="absolute left-1/2 -bottom-2 w-0 h-0 -translate-x-1/2
                        border-l-[10px] border-l-transparent
                        border-r-[10px] border-r-transparent
                        border-t-[10px] border-t-white"
              />
            </div>
          </div>
        )}
        <div className="w-full flex flex-col items-center">
          {titleImage && (
            <div className="relative w-full max-w-md">
              <Image
                src={titleImage.url}
                alt={`${titleJp}のロゴ}`}
                width={titleImage.width}
                height={titleImage.height}
                className="h-auto w-full"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
