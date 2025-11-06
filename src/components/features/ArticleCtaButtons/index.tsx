import Link from 'next/link';
import Image from 'next/image';
import type { CtaButton as CmsCtaButtonType } from '@/types/microcms';
import { IMAGEBASEURL } from '@/constants';
import { CtaButton } from '@/components/ui/CtaButton';

const commonImgPath = `${IMAGEBASEURL}/common`;
const CHARACTER_IMAGE_PATH = `${commonImgPath}/charactor-smile.webp`;
const BACKGROUND_IMAGE_PATH = `${commonImgPath}/contact-bg.webp`;

type Props = {
  buttons?: CmsCtaButtonType[];
};

export const ArticleCtaButtons = ({ buttons = [] }: Props) => {
  const cmsButtons = (buttons || [])
    .map((button) => {
      if (!button.linkText || !button.linkUrl) {
        return null;
      }
      const isExternal =
        button.linkUrl.startsWith('http://') || button.linkUrl.startsWith('https://');

      return {
        key: `cms-${button.linkUrl}`,
        text: button.linkText,
        url: button.linkUrl,
        isExternal: isExternal,
        variant: isExternal ? 'secondary' : 'default',
      };
    })
    .filter(
      (
        button,
      ): button is NonNullable<typeof button> & {
        variant: 'default' | 'secondary';
      } => Boolean(button),
    );

  const contactButton = {
    key: 'default-contact',
    text: 'お問い合わせはこちら',
    url: '/contact',
    isExternal: false,
    variant: 'default' as const,
  };

  const allButtons: {
    key: string;
    text: string;
    url: string;
    isExternal: boolean;
    variant: 'default' | 'secondary';
  }[] = [...cmsButtons, contactButton];

  return (
    <div className="mt-16 mb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <Image
            src={BACKGROUND_IMAGE_PATH}
            alt="背景"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-12">
            <div className="relative w-48 md:w-1/3 aspect-[600/703] flex-shrink-0 order-1 md:order-none mt-8 md:mt-12">
              <Image
                src={CHARACTER_IMAGE_PATH}
                alt="笑顔のキャラクター"
                fill
                className="object-contain"
                sizes="(max-width: 767px) 192px, 33vw"
                priority
              />
              <div className="absolute left-1/2 -translate-x-1/2 -top-10 bg-white p-2 rounded-lg shadow-md text-sm font-semibold text-gray-800 whitespace-nowrap z-20 w-fit">
                読んでくれてありがとう！
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
              </div>
            </div>
            <div className="text-center text-white order-2 md:order-none w-full md:w-2/3">
              <h2 className="font-bold leading-tight mb-6">この記事に関連する情報はこちら</h2>
              <div className="flex flex-col gap-4 max-w-md mx-auto md:mx-0">
                {allButtons.map((btn) => (
                  <CtaButton
                    key={btn.key}
                    variant={btn.variant}
                    size="xl"
                    className="w-full"
                    asChild
                  >
                    <Link
                      href={btn.url}
                      {...(btn.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {btn.text}
                    </Link>
                  </CtaButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
