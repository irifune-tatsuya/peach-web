import { Breadcrumbs } from '@/components/Breadcrumbs';
import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StartMailMagazineForm } from '@/components/StartMailMagazineForm';
import { StopMailMagazineForm } from '@/components/StopMailMagazineForm';
import { IMAGEBASEURL } from '@/constants';

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: 'ニュースレター',
    href: '/newsletter',
    isCurrentPage: true,
  },
];

const NewsletterContents = [
  // ... (ここのデータは変更なし)
];

export default async function Newsletter() {
  return (
    <>
      {/* ヒーローセクション */}
      <div className="bg-momo-100 py-8 md:py-20">
        <div className="mx-auto flex w-[90%] max-w-6xl flex-col-reverse items-center justify-between md:w-[80%] md:flex-row lg:w-1/2">
          <Image
            src={`${IMAGEBASEURL}/newsletter/top-image.webp`}
            alt={'ニュースレタートップイメージ'}
            width={400}
            height={400}
            className="h-auto w-full max-w-[400px]"
          />
          <div className="mt-10 inline-block text-white md:mt-0">
            <p className="text-lg font-bold">ニュースレターのご案内</p>
            <h1 className="text-4xl font-bold">Newsletter</h1>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl p-4">
        {/* 次の記事更新はいつ？ */}
        <section className="pt-10 md:pt-[70px]">
          <div className="pb-5">
            <h2 className="mr-4 inline-block text-2xl font-bold">
              When is the next article update?
            </h2>
            <span className="text-sm font-medium tracking-[0.08em]">次の記事更新はいつ？</span>
          </div>
          <p>
            ピーチウェブのニュースレターは
            <span className="font-bold text-momo-100">毎週1回程度</span>
            のペースで更新予定です。新着記事のご案内やサービスに関する最新情報をお届けします。
          </p>
        </section>

        {/* 配信コンテンツ */}
        <section className="py-10 md:py-[70px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
            {NewsletterContents.map((content, i) => (
              <div key={i}>
                <Link href={content.href} className="hover:opacity-70">
                  <Image
                    src={`${IMAGEBASEURL}/newsletter/newsletter-content${i + 1}.webp`}
                    alt={content.title}
                    width={500}
                    height={300}
                    className="h-auto w-full"
                  />
                </Link>
                <h3 className="my-5 text-xl font-bold">{content.title}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 購読登録 */}
      <section className="bg-momo-600 py-10 md:py-[70px]">
        <div className="mx-auto max-w-6xl p-4">
          <div className="pb-5">
            <h2 className="mr-4 inline-block text-2xl font-bold">Subscribe</h2>
            <span className="text-sm font-medium tracking-[0.08em]">購読登録</span>
          </div>
          <p className="pb-10">
            こちらのフォームよりニュースレターの購読登録をすることができます。もちろん、
            <span className="font-bold text-momo-100">登録無料でいつでも配信停止</span>
            が可能です。
          </p>
          <Suspense fallback={<div className="text-white">フォームを読み込んでいます...</div>}>
            <StartMailMagazineForm />
          </Suspense>
        </div>
      </section>

      {/* 配信停止 */}
      <section className="py-10 md:py-[70px]">
        <div className="mx-auto max-w-6xl p-4">
          <div className="pb-5">
            <h2 className="mr-4 inline-block text-2xl font-bold">Unsubscribe</h2>
            <span className="text-sm font-medium tracking-[0.08em]">配信停止</span>
          </div>
          <p className="pb-10">
            こちらのフォームよりニュースレターの配信停止をすることができます。
          </p>
          <Suspense fallback={<div>フォームを読み込んでいます...</div>}>
            <StopMailMagazineForm />
          </Suspense>
        </div>
      </section>

      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
