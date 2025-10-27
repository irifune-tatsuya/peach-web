import type { ReactNode } from 'react';
import { Dialogue } from '@/types/service';
import { SectionTitle } from '@/components/ui/SectionTitle';
import Image from 'next/image';

type Props = {
  title: ReactNode;
  dialogues: Dialogue[];
};

export const DialogueSection = ({ title, dialogues }: Props) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>{title}</SectionTitle>
        <div className="space-y-10 max-w-xl lg:max-w-2xl mx-auto pt-12">
          {dialogues.map((dialogue, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                dialogue.speaker === 'client' ? 'flex-row-reverse md:mr-10' : 'md:ml-10'
              }`}
            >
              <div className="relative w-full max-w-[20%] mx-auto aspect-[3/4]">
                <Image
                  src={dialogue.image.url}
                  alt={dialogue.image.alt}
                  width={dialogue.image.width}
                  height={dialogue.image.height}
                  className="flex-shrink-0 mt-1"
                />
              </div>
              <div
                className={`relative p-5 mt-5 md:mt-10 rounded-xl shadow
          ${dialogue.speaker === 'client' ? 'bg-momo-100 text-white' : 'bg-momo-300'}`}
              >
                <p className="leading-relaxed">{dialogue.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
