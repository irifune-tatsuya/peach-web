import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import Title from '@/components/ui/Title';
import { IMAGEBASEURL } from '@/constants';
import { ACHIEVEMENTS } from '@/constants/achievements';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type {
  CollectionPage,
  CreativeWork,
  ItemList,
  BreadcrumbList,
  WithContext,
} from 'schema-dts';

const pageTitle = '実績&デザイン集';
const description =
  'ピーチウェブが制作したホームページの実績やホームページデザインの提案をするページとなります。制作をご検討中の方や具体的なサイトのイメージを持ちたい方向けに役立てていただけますと幸いです。';

export const metadata: Metadata = {
  title: pageTitle,
  description: description,
  openGraph: {
    title: pageTitle,
    description: description,
    type: 'article',
  },
};

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: '実績&デザイン集',
    href: '/achievements',
    isCurrentPage: true,
  },
];

const designLinks = [
  {
    name: 'ランディングページ01',
    slug: 'lp01',
  },
];

export default async function Achievements() {
  const sectionClasses =
    'relative overflow-hidden bg-gradient-to-b from-[#fcdee9] to-white pt-[88px] pb-[90px] md:pt-32 md:pb-44';
  const gridClasses = 'grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-3 lg:grid-cols-4';
  const cardClasses =
    'group overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-200 ease-in-out hover:scale-105';
  const buttonBaseClasses =
    'flex items-center justify-center gap-1 rounded-lg p-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-80';

  const collectionPageJsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/achievements`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        ...ACHIEVEMENTS.map((item, index) => ({
          '@type': 'CreativeWork',
          position: index + 1,
          name: `${item.name}様 制作実績`,
          url: `${siteConfig.url}/achievements/${item.slug}`,
        })),
        ...designLinks.map((item, index) => ({
          '@type': 'CreativeWork',
          position: ACHIEVEMENTS.length + index + 1,
          name: item.name,
          url: `${siteConfig.url}/achievements/design/${item.slug}`,
        })),
      ],
    } as ItemList,
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
      <JsonLd jsonLdData={collectionPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title titleEn={'Achievements & Designs'} titleJp={'実績&デザイン集'} />
      <section className={sectionClasses}>
        <div className="mx-auto max-w-6xl p-4">
          <h2 className="flex items-center text-xl font-bold md:text-2xl">
            <FaCheckCircle className="mr-2 text-momo-100" />
            <span>制作実績</span>
          </h2>
          <div className="mx-auto max-w-4xl py-8 font-medium leading-loose text-base md:text-lg">
            <p>弊社で制作したホームページ、ランディングページの実績をご紹介します。</p>
          </div>
          <div className={gridClasses}>
            {ACHIEVEMENTS.map((item) => (
              <div key={item.slug} className={cardClasses}>
                <div className="p-2">
                  <h3 className="py-3 text-center text-xs font-bold md:text-base">{`${item.name}様`}</h3>
                  <Link href={`/achievements/${item.slug}`}>
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md">
                      <Image
                        src={`${IMAGEBASEURL}/achievements/${item.slug}/thumbnail.webp`}
                        alt={`${item.name}様の制作実績`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-col gap-2 py-5">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${buttonBaseClasses} bg-momo-100`}
                    >
                      <span>サイトを見る</span>
                      <FaExternalLinkAlt />
                    </a>
                    <Link
                      href={`/achievements/${item.slug}`}
                      className={`${buttonBaseClasses} bg-momo-200 !text-black`}
                    >
                      <span>詳細を見る</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={sectionClasses}>
        <div className="mx-auto max-w-6xl p-4">
          <h2 className="flex items-center text-xl font-bold md:text-2xl">
            <FaCheckCircle className="mr-2 text-momo-100" />
            <span>デザイン提案</span>
          </h2>
          <div className="mx-auto max-w-4xl py-8 font-medium leading-loose text-base md:text-lg">
            <p>
              ホームページやランディングページのデザイン提案です。気に入るものはありますでしょうか？
            </p>
          </div>
          <div className={gridClasses}>
            {designLinks.map((item) => (
              <div key={item.slug} className={cardClasses}>
                <div className="p-2">
                  <h3 className="py-3 text-center text-xs font-bold md:text-base">{item.name}</h3>
                  <Link href={`/achievements/design/${item.slug}`}>
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md">
                      <Image
                        src={`${IMAGEBASEURL}/achievements/${item.slug}/thumbnail.webp`}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-col gap-2 py-5">
                    <Link
                      href={`/achievements/design/${item.slug}`}
                      className={`${buttonBaseClasses} bg-momo-200 !text-black`}
                    >
                      <span>デザインを見る</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
