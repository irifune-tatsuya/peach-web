import { ServiceData } from '@/types/service';
import Image from 'next/image';

type Props = {
  data: ServiceData;
};

export const ServiceIntroductionSection = ({ data }: Props) => {
  const { mainVisual, titleJp, titleImage, catchphrase, descriptionHtml } = data;
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${mainVisual.url})` }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="w-full md:w-3/4 xl:w-7/12 md:ml-10 xl:ml-0">
          <h2 className="sr-only">{titleJp}</h2>
          {titleImage && (
            <div className="relative w-full max-w-md mt-2">
              <Image
                src={titleImage.url}
                alt={titleImage.alt}
                width={titleImage.width}
                height={titleImage.height}
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          )}
          {data.catchphrase && (
            <p className="mt-8 text-2xl md:text-3xl font-bold">{data.catchphrase}</p>
          )}
          <div
            className="mt-6 text-base md:text-lg leading-relaxed prose prose-sm md:prose-base max-w-none"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        </div>
      </div>
    </section>
  );
};
