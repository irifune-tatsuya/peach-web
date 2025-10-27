import Image from 'next/image';
import { IMAGEBASEURL } from '@/constants';
import Link from 'next/link';
import { CtaButton } from '@/components/ui/CtaButton';

type Props = {
  title: string;
  text: string;
};

const commonImgPath = `${IMAGEBASEURL}/common`;

export const ContactSection = ({ title, text }: Props) => {
  return (
    <section className="bg-momo-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <Image
            src={`${commonImgPath}/contact-bg.webp`}
            alt="お問い合わせ背景"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-12">
            <div className="relative w-48 md:w-1/3 aspect-[600/703] flex-shrink-0 order-1 md:order-none">
              <Image
                src={`${commonImgPath}/charactor-smile.webp`}
                alt="笑顔のキャラクター"
                fill
                className="object-contain"
                sizes="(max-width: 767px) 192px, 33vw"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left text-white order-2 md:order-none">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{title}</h2>
              <p className="text-base md:text-lg text-white/90 mb-6">{text}</p>
              <div className="flex justify-center">
                <Link href="/contact" passHref>
                  <CtaButton size="xl" className="btn-slide-hover">
                    お問い合わせはこちらから
                  </CtaButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
