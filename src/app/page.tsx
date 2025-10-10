import Image from 'next/image';
import Link from 'next/link';
import { TopSwiper } from '@/components/common/TopSwiper';
import {
  LIMIT05,
  ARTICLEFILTER,
  CONTACT,
  NEWSFILTER,
  IMAGEBASEURL,
  PEACHFILTER,
} from '@/constants';
import { FaInstagram, FaLine } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { ContactButton } from '@/components/ui/ContactButton';
import { getList } from '@/lib/microcms';
import { SideScrollArticleList } from '@/components/features/SideScrollArticleList';
import { ViewMoreButton } from '@/components/features/ViewMoreButton';
import ContentTitle from '@/components/features/ContentTitle';
import { ArticleList } from '@/components/common/ArticleList';
import { SideScrollIcon } from '@/components/ui/SideScrollIcon';

export const revalidate = 3600;

const swiperImages = [
  { src: `${IMAGEBASEURL}/top/top-slider1.webp`, alt: 'キービジュアル1' },
  { src: `${IMAGEBASEURL}/top/top-slider2.webp`, alt: 'キービジュアル2' },
  { src: `${IMAGEBASEURL}/top/top-slider3.webp`, alt: 'キービジュアル3' },
];

const businessLinks = [
  { href: '/reason', title: '選ばれる理由', titleEn: 'Reason' },
  { href: '/service', title: 'サービス内容', titleEn: 'Service' },
  { href: '/pricing', title: '料金体系', titleEn: 'Pricing' },
  { href: '/achievements', title: '実績&デザイン集', titleEn: 'Achievements' },
];

const bottomLinks = [
  {
    href: '/contact',
    src: `${IMAGEBASEURL}/top/contact.webp`,
    titleJp: 'お問い合わせ',
    titleEn: 'contact',
  },
  { href: '/faq', src: `${IMAGEBASEURL}/top/faq.webp`, titleJp: 'よくあるご質問', titleEn: 'FAQ' },
  {
    href: '/newsletter',
    src: `${IMAGEBASEURL}/top/newsletter.webp`,
    titleJp: 'ニュースレターのご案内',
    titleEn: 'Newsletter',
  },
];

export default async function Home() {
  const articleData = await getList({
    limit: LIMIT05,
    filters: ARTICLEFILTER,
  });
  const peachFightData = await getList({
    limit: LIMIT05,
    filters: PEACHFILTER,
  });
  const newsData = await getList({
    limit: LIMIT05,
    filters: NEWSFILTER,
  });

  return (
    <>
      <div
        id="key-visual"
        className="relative w-screen overflow-hidden h-[calc(100vh-55px)] md:h-[calc(100vh-76px)]"
      >
        <h1 className="sr-only">合同会社ピーチウェブ公式サイト</h1>
        <div className="absolute left-1/2 top-1/2 z-20 w-[80%] max-w-lg -translate-x-1/2 -translate-y-1/2 animate-[var(--animate-fade-in)]">
          <div className="w-full">
            <Image
              src={`${IMAGEBASEURL}/top/message.svg`}
              alt="あなたの仕事が永く愛されますように"
              width={512}
              height={288}
              className="h-auto w-full"
            />
            <p className="mt-8 text-center font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">
              I hope you and your business <br />
              will be loved for many years to come.
            </p>
          </div>
        </div>
        <TopSwiper images={swiperImages} />
      </div>
      <section>
        <div className="flex items-center justify-center gap-3 bg-momo-300 p-2 md:hidden">
          <Link href={CONTACT.instagram} target="_blank">
            <FaInstagram className="h-10 w-10" />
          </Link>
          <Link href={CONTACT.X} target="_blank">
            <FaSquareXTwitter className="h-10 w-10" />
          </Link>
          <Link href={CONTACT.line} target="_blank">
            <FaLine className="h-10 w-10" />
          </Link>
          <ContactButton />
        </div>
      </section>
      <section className="pb-14 pt-14 md:pb-[184px] md:pt-[124px]">
        <div className="mx-auto max-w-6xl px-4">
          <ContentTitle titleEn="Business" titleJp="事業内容" mb={12} />
          <div className="justify-between md:flex">
            <div className="w-full md:w-[49%]">
              <p className="mb-20 text-center text-lg font-bold leading-relaxed md:mb-8 md:text-left lg:text-xl">
                あなたの仕事の魅力を最大限発揮する
                <br />
                ホームページの制作・運用を通じて
                <br />
                <span className="text-momo-100">永く愛されるブランド作りを行います。</span>
              </p>
              <ViewMoreButton href={'/thought'} size={'large'} />
            </div>
            <ol className="mx-0 mt-20 w-full list-none border-t-2 border-solid border-momo-400 font-bold md:mt-0 md:w-[49%]">
              {businessLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="grid items-center gap-x-3 border-b-2 border-solid border-momo-400 px-8 py-6 grid-cols-[40px_auto] grid-rows-2 md:block hover:no-underline transition-colors hover:bg-momo-100 hover:text-white"
                  >
                    <span className="mr-4 text-momo-500 row-span-2">{`0${i + 1}`}</span>
                    <span className="mr-4 text-xl">{item.title}</span>
                    <span>{item.titleEn}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="pb-[30px] md:pb-24">
        <div className="mx-auto w-full max-w-5xl p-4">
          <Link href={'/peach-fight'} className="block w-full overflow-hidden">
            <Image
              src={`${IMAGEBASEURL}/top/peach_fight_banner.webp`}
              alt={'岡山のチャレンジ応援マガジンピーチファイ'}
              width={1080}
              height={538}
              className="rounded-[32px] transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </Link>
        </div>
      </section>
      <section className="pb-24 md:pb-48">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-center justify-between md:mb-12">
            <ContentTitle titleEn="Peach Fight" titleJp="ピーチファイ" mb={0} />
            <ViewMoreButton href={'/peach-fight'} size={'small'} />
          </div>
          <SideScrollIcon />
          <SideScrollArticleList articles={peachFightData.contents} category={'peach-fight'} />
        </div>
      </section>
      <section className="pb-24 md:pb-48">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-center justify-between md:mb-12">
            <ContentTitle titleEn="Article" titleJp="新着記事" mb={0} />
            <ViewMoreButton href={'/article'} size={'small'} />
          </div>
          <SideScrollIcon />
          <SideScrollArticleList articles={articleData.contents} category={'article'} />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-24 md:pb-5">
        <div className="mb-8 flex items-center justify-between md:mb-12">
          <ContentTitle titleEn="News" titleJp="ニュース" mb={0} />
          <ViewMoreButton href={'/news'} size={'small'} />
        </div>
        <ArticleList articles={newsData.contents} category={'news'} />
      </section>
      <section className="mb-14 bg-momo-300 px-8 py-14 md:py-5">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col justify-center gap-14 md:flex-row">
            {bottomLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="relative z-10 block max-w-[300px] overflow-hidden hover:no-underline"
              >
                <Image
                  src={item.src}
                  alt={item.titleJp}
                  width={300}
                  height={200}
                  className="h-auto w-full transition-transform duration-300 ease-in-out hover:scale-125"
                />
                <div className="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 text-center font-bold text-white">
                  <p className="text-xl">{item.titleJp}</p>
                  <p className="text-lg">{item.titleEn}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
