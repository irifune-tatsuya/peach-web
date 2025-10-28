import Image from 'next/image';
import Link from 'next/link';
import { LIMIT05, ARTICLEFILTER, NEWSFILTER, IMAGEBASEURL, PEACHFILTER } from '@/constants';
import { getList } from '@/lib/microcms';
import { LatestArticleList } from '@/components/features/LatestArticleList';
import { ViewMoreButton } from '@/components/features/ViewMoreButton';
import { SectionHeading } from '@/components/features/SectionHeading';
import { ArticleList } from '@/components/common/ArticleList';
import { MainArticleCard } from '@/components/features/MainArticleCard';
import { ArticleSubList } from '@/components/features/ArticleSubList';
import { ChevronRight } from 'lucide-react';

export const revalidate = 3600;

const businessLinks = [
  { href: '/thought', title: 'ピーチな想い' },
  { href: '/services/hagupe', title: 'ホームページ制作「はぐぺ」' },
  { href: '/achievements', title: '実績&デザイン集' },
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
    titleJp: 'ニュースレター',
    titleEn: 'Newsletter',
  },
];

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

const HomePage = () => {
  return (
    <>
      <section
        id="key-visual"
        className="relative w-screen overflow-hidden h-screen md:h-[calc(100vh-76px)]"
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
        <Image
          src={`${IMAGEBASEURL}/top/key-visual.webp`}
          alt="ピーチウェブ TOPページの背景画像"
          fill
          className="object-cover z-10"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 z-15" aria-hidden="true" />
      </section>
      <section id="peach-fight" className="py-10 md:py-18 bg-momo-600">
        <div className="mx-auto w-full md:max-w-[735px] lg:max-w-[900px] xl:max-w-6xl px-4">
          <div className="md:mb-6 flex items-center justify-between">
            <SectionHeading titleEn="Magazine" titleJp="ピーチファイ" />
            <ViewMoreButton href={'/peach-fight'} size={'small'} />
          </div>
          <p className="mb-8 md:mb-12 px-2 text-sm md:text-lg font-bold lg:w-3/4">
            「ピーチファイ」は、岡山県内外の起業家様や新規ビジネスを展開する従業員様の
            <span className="text-momo-100">熱き想いを取材したインタビューWEBマガジン</span>。
            あなたの心に火を付ける起業家の生き様をぜひご一読ください！
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-11 lg:gap-8">
            <div className="lg:col-span-6 md:w-[500px] lg:w-full md:justify-self-center lg:justify-self-auto">
              <MainArticleCard article={peachFightData.contents[0]} />
            </div>
            <div className="mt-8 lg:mt-0 lg:col-span-5">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-momo-100 pb-4">
                新着インタビュー
              </h3>
              <ArticleSubList articles={peachFightData.contents.slice(1, 5)} />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-18">
        <div className="mx-auto w-full md:max-w-[735px] lg:max-w-[900px] xl:max-w-6xl px-4">
          <div className="flex items-center justify-between md:mb-6">
            <SectionHeading titleEn="Articles" titleJp="ピーチブログ" />
            <ViewMoreButton href={'/article'} size={'small'} />
          </div>
          <p className="mb-8 md:mb-12 px-2 text-sm md:text-lg font-bold lg:w-3/4">
            「ピーチブログ」は、これからWebで集客を始めてみたい方、ホームページ制作の依頼をしたい方に役立つ情報をお届けしています。
          </p>
          <LatestArticleList articles={articleData.contents} category={'article'} />
        </div>
      </section>
      <section className="pt-14 pb-10 md:py-18 bg-momo-300">
        <div className="mx-auto w-full md:max-w-[735px] lg:max-w-[900px] xl:max-w-6xl px-4">
          <SectionHeading titleEn="Business" titleJp="事業内容" />
          <div className="md:flex md:justify-center md:items-center">
            <div className="w-full">
              <p className="mb-20 text-center text-lg font-bold leading-relaxed md:mb-8 md:text-left lg:text-xl">
                あなたの仕事の魅力を最大限発揮する
                <br />
                ホームページの制作・運用を通じて
                <br />
                <span className="text-momo-100">永く愛されるブランド作りを行います。</span>
              </p>
              <ViewMoreButton href={'/thought'} size={'large'} />
            </div>
            <ol className="mx-0 mt-20 w-full list-none border-t-2 border-solid border-momo-400 font-bold md:mt-0">
              {businessLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="w-full flex items-center justify-between gap-x-3 border-b-2 border-solid border-momo-400 px-4 py-8 hover:no-underline transition-colors hover:bg-momo-100 hover:text-white"
                  >
                    <p>
                      <span className="mr-2 md:mr-5 text-2xl text-momo-200">{`0${i + 1}`}</span>
                      <span className="text-lg">{item.title}</span>{' '}
                    </p>
                    <ChevronRight />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-18">
        <div className="mx-auto w-full md:max-w-[735px] lg:max-w-[900px] xl:max-w-6xl px-4">
          <div className="md:mb-12 flex items-center justify-between">
            <SectionHeading titleEn="News" titleJp="お知らせ" />
            <ViewMoreButton href={'/news'} size={'small'} />
          </div>
          <ArticleList articles={newsData.contents} category={'news'} />
        </div>
      </section>
      <section className="md:mb-14 bg-momo-300 py-10 md:py-18">
        <div className="mx-auto w-full md:max-w-[735px] lg:max-w-[900px] xl:max-w-6xl px-4">
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            {bottomLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="relative z-10 block w-[300px] mx-auto overflow-hidden hover:no-underline"
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
};

export default HomePage;
