import { Breadcrumbs } from '@/components/Breadcrumbs';
import Title from '@/components/Title';
import { IMAGEBASEURL } from '@/constants';
import { ACHIEVEMENTS } from '@/constants/achievements';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { CreativeWork, BreadcrumbList, WithContext } from 'schema-dts';

export const revalidate = 3600;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const currentSlug = params.slug;
  const achievement = ACHIEVEMENTS.find((item) => item.slug === currentSlug);
  const title = achievement ? achievement.name : '制作実績のご紹介';
  const description = achievement
    ? achievement.point
    : 'ピーチウェブが制作したホームページの実績やホームページデザインの提案をするページとなります。制作をご検討中の方や具体的なサイトのイメージを持ちたい方向けに役立てていただけますと幸いです。';

  return {
    title: `${title}様の制作実績`,
    description: description,
    openGraph: {
      title: `${title}様の制作実績`,
      description: description,
      type: 'article',
    },
    twitter: {
      title: `${title}様の制作実績`,
      description: description,
    },
  };
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const currentSlug = params.slug;
  const achievement = ACHIEVEMENTS.find((item) => item.slug === currentSlug);

  if (!achievement) {
    notFound();
  }

  const breadcrumbs = [
    {
      title: 'ホーム',
      href: '/',
      isCurrentPage: false,
    },
    {
      title: '実績&デザイン集',
      href: '/achievements',
      isCurrentPage: false,
    },
    {
      title: `${achievement.name}様の制作実績`,
      href: `/achievements/${currentSlug}`,
      isCurrentPage: true,
    },
  ];

  const buttonBaseClasses =
    'flex items-center justify-center gap-2 rounded-lg p-3 text-center font-bold transition-opacity hover:opacity-80';

  const title = `${achievement.name}様の制作実績`;

  const creativeWorkJsonLd: WithContext<CreativeWork> = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description: achievement.point,
    url: `${siteConfig.url}/achievements/${currentSlug}`,
    author: {
      '@type': 'Organization',
      '@id': siteConfig.url,
      name: siteConfig.name,
    },
    image: [
      `${IMAGEBASEURL}/achievements/${achievement.slug}/fullpage_sp.webp`,
      `${IMAGEBASEURL}/achievements/${achievement.slug}/fullpage_pc.webp`,
    ],
    exampleOfWork: {
      '@type': 'WebSite',
      url: achievement.href,
    },
  };

  const breadcrumbJsonLd: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.title,
      item: `${siteConfig.url}${breadcrumb.href}`,
    })),
  };

  return (
    <>
      <JsonLd jsonLdData={creativeWorkJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title titleEn={'制作実績のご紹介'} titleJp={`${achievement.name}様`} />
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fcdee9] to-white pt-[88px] pb-[90px] md:pt-32 md:pb-44">
        <div className="mx-auto max-w-4xl p-4">
          <div className="flex justify-center">
            <a
              href={achievement.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBaseClasses} mb-8 w-full max-w-sm bg-momo-100 text-white`}
            >
              <span>サイトを見る</span>
              <FaExternalLinkAlt />
            </a>
          </div>

          <Tabs defaultValue="sp" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="sp">スマホ版</TabsTrigger>
              <TabsTrigger value="pc">パソコン版</TabsTrigger>
              <TabsTrigger value="details">サイト解説</TabsTrigger>
            </TabsList>
            <TabsContent value="sp" className="mt-6">
              <div className="flex justify-center">
                <Image
                  src={`${IMAGEBASEURL}/achievements/${achievement.slug}/fullpage_sp.webp`}
                  alt={`${achievement.name}様のスマホサイト`}
                  width={430}
                  height={1200}
                  className="h-auto w-full max-w-[430px]"
                />
              </div>
            </TabsContent>
            <TabsContent value="pc" className="mt-6">
              <Image
                src={`${IMAGEBASEURL}/achievements/${achievement.slug}/fullpage_pc.webp`}
                alt={`${achievement.name}様のパソコンサイト`}
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </TabsContent>
            <TabsContent value="details" className="mt-6">
              <div className="space-y-6 rounded-lg border bg-white p-6">
                <div>
                  <span className="rounded-md bg-momo-100 px-4 py-2 font-bold text-white">
                    ご依頼主様
                  </span>
                  <p className="px-5 pt-3">{achievement.name}</p>
                </div>
                <div>
                  <span className="rounded-md bg-momo-100 px-4 py-2 font-bold text-white">
                    業 種
                  </span>
                  <p className="px-5 pt-3">{achievement.typeOfIndustry}</p>
                </div>
                <div>
                  <span className="rounded-md bg-momo-100 px-4 py-2 font-bold text-white">
                    制作物
                  </span>
                  <p className="px-5 pt-3">ランディングページ</p>
                </div>
                <div>
                  <span className="rounded-md bg-momo-100 px-4 py-2 font-bold text-white">
                    テーマ
                  </span>
                  <p className="px-5 pt-3">{achievement.theme}</p>
                </div>
                <div>
                  <span className="rounded-md bg-momo-100 px-4 py-2 font-bold text-white">
                    ターゲット
                  </span>
                  <p className="px-5 pt-3">{achievement.target}</p>
                </div>
                <div>
                  <span className="rounded-md bg-momo-100 px-4 py-2 font-bold text-white">
                    制作のポイント
                  </span>
                  <p className="px-5 pt-3">{achievement.point}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex flex-col items-center justify-center gap-2">
            <a
              href={achievement.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBaseClasses} w-full max-w-sm bg-momo-100 text-white`}
            >
              <span>サイトを見る</span>
              <FaExternalLinkAlt />
            </a>
            <Link
              href="/achievements"
              className={`${buttonBaseClasses} w-full max-w-sm bg-momo-200 text-black`}
            >
              実績一覧に戻る
            </Link>
          </div>
        </div>
      </section>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
