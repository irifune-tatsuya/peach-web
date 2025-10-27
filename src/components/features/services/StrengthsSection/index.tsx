import { SectionTitle } from '@/components/ui/SectionTitle';
import { InfoCardItem } from '@/types/service';
import Image from 'next/image';

type Props = {
  titleJp: string;
  strengths: InfoCardItem[];
};

export const StrengthsSection = ({ titleJp, strengths }: Props) => {
  return (
    <section className="bg-momo-600 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>
          「{titleJp}」が選ばれる{strengths.length}つの強み
        </SectionTitle>
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-12 lg:gap-y-16">
          {strengths.map((strength, index) => (
            <div
              key={strength.id}
              className={`lg:flex lg:items-center lg:gap-12  ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } bg-white shadow-lg rounded-xl overflow-hidden lg:shadow-none lg:bg-transparent lg:rounded-none`}
            >
              <div className="relative w-full aspect-[3/2] lg:flex-1 lg:h-auto rounded-t-xl lg:rounded-xl overflow-hidden">
                <Image
                  src={strength.image.url}
                  alt={strength.image.alt}
                  width={strength.image.width}
                  height={strength.image.height}
                  className="object-cover lg:static lg:w-full lg:h-full"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 50vw"
                />
              </div>
              <div className="p-6 lg:p-0 lg:flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-momo-100 opacity-50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold">{strength.title}</h3>
                </div>
                <p className="mt-4 leading-relaxed">{strength.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
