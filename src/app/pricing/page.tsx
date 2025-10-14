import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Title } from '@/components/ui/Title';
import { CircleCheck, Monitor } from 'lucide-react';
import { SideScrollIcon } from '@/components/ui/SideScrollIcon';
import { IMAGEBASEURL } from '@/constants';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { Service, Offer, BreadcrumbList, WithContext } from 'schema-dts';
import { Button } from '@/components/ui/button';

const pageTitle = '料金体系';

const description =
  'ピーチウェブが提供するWEBブランディングの料金体系をご案内いたします。分かりやすく安心感のあるプライスでご納得いただけるかと思います。';

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: '料金体系',
    href: '/pricing',
    isCurrentPage: true,
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: description,
  openGraph: {
    title: pageTitle,
    description: description,
    type: 'article',
  },
};

const basicPriceData = [
  {
    title: 'Starter',
    price: '50,000円/月',
    homepage: ['ブログ機能付きホームページ', '初回制作費無料', 'TOP + 3ページ作成'],
    contents: ['基本的なSEO対策', '記事更新2回/月', '毎月運用レポート発行'],
  },
  {
    title: 'Basic',
    subtTitle: 'おすすめ！',
    price: '60,000円/月',
    homepage: ['ブログ機能付きホームページ', '初回制作費無料', 'TOP + 6ページ作成'],
    contents: [
      '専用ツールによるSEO対策',
      '記事更新4回/月',
      '毎月運用レポート発行',
      'デザイン制作1点/月',
    ],
  },
  {
    title: 'Premium',
    price: '120,000円/月',
    homepage: ['ブログ機能付きホームページ', '初回制作費無料', 'TOP + 6ページ作成'],
    contents: [
      '専用ツールによるSEO対策',
      '記事更新4回/月',
      '毎月運用レポート発行',
      'デザイン制作1点/月',
      'ページ追加1枚/月',
      '毎月6万円分のWeb広告を出稿',
    ],
  },
];

const monthlyOptionData = {
  title: '月額制オプション',
  contents: [
    {
      title: 'LINEアカウント運用',
      price: '20,000円/月〜',
    },
    {
      title: 'Googleリスティング広告',
      price: '50,000円/月〜',
    },
    {
      title: 'バナー広告',
      price: '50,000円/月〜',
    },
    {
      title: 'SNS広告',
      price: '50,000円/月〜',
    },
  ],
};

const singleOptionData = {
  title: '単発オプション',
  contents: [
    {
      title: '追加デザイン制作',
      price: '5,000円/点〜',
    },
    {
      title: 'チラシ・ポスター制作',
      price: '7,000円/点〜',
    },
    {
      title: 'パワーポイント資料作成',
      price: '10,000円/件〜',
    },
    {
      title: '追加ページの制作',
      price: '10,000円/枚〜',
    },
    {
      title: 'ランディングページ作成',
      price: '100,000円/枚〜',
    },
    {
      title: 'ホームページ制作のみ',
      price: '240,000円/件〜',
    },
  ],
};

const serviceJsonLd: WithContext<Service> = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WEBブランディングサービス',
  description: description,
  url: `${siteConfig.url}/pricing`,
  provider: {
    '@type': 'Organization',
    '@id': siteConfig.url,
    name: siteConfig.name,
  },
  serviceType: 'WEBブランディング',
  offers: basicPriceData.map((plan) => ({
    '@type': 'Offer',
    name: plan.title,
    price: parseInt(plan.price.replace(/[^0-9]/g, '')),
    priceCurrency: 'JPY',
    description: [...plan.homepage, ...plan.contents].join('、'),
  })) as Offer[],
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

const PricingPage = () => {
  return (
    <>
      <JsonLd jsonLdData={serviceJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title titleEn={'Pricing'} titleJp={'料金体系'} />
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,_#fcdee9,_#ffffff)] pb-[90px] pt-[88px] md:pb-[180px] md:pt-[120px]">
        <div className="mx-auto max-w-6xl p-4">
          <div>
            <h2 className="flex items-center text-lg font-bold md:text-xl">
              <CircleCheck className="text-momo-100" />
              <span className="ml-2">基本料金</span>
            </h2>
          </div>
          <div className="mx-auto max-w-[960px] py-8 text-base font-medium leading-loose md:text-lg">
            <p>
              毎月の基本料金だけでも十分WEBブランディングを実現できます。始めのうちはオプションがないベーシックプランでのご導入をおすすめします。
            </p>
          </div>
          <div className="w-full">
            <SideScrollIcon className="block lg:hidden" />
            <div className="m-1 flex snap-x snap-mandatory gap-4 overflow-y-hidden overflow-x-scroll scroll-smooth lg:m-0 lg:justify-center lg:gap-12 lg:overflow-x-hidden">
              {basicPriceData.map((item, i) => (
                <Card className="min-w-[280px] flex-shrink-0 snap-center bg-white" key={i}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Image
                        src={`${IMAGEBASEURL}/pricing/plan-icon${i + 1}.webp`}
                        alt={item.title}
                        width={28}
                        height={28}
                      />
                      <span className="ml-2">{item.title}</span>
                      {item.subtTitle && (
                        <span className="ml-2 text-base text-momo-100">{item.subtTitle}</span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col space-y-5">
                    <p className="text-right text-lg font-bold">{item.price}</p>
                    <div>
                      {item.homepage.map((text, i) => (
                        <p key={i}>{text}</p>
                      ))}
                    </div>
                    <Table>
                      <TableBody>
                        {item.contents.map((text, i) => (
                          <TableRow key={i} className="[&_td]:px-1 [&_td]:py-2">
                            <TableCell>{text}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-4 text-center text-sm">※ 料金は全て税別です。</p>
            <div className="py-10 text-center">
              <Button asChild variant="default" className="mx-auto w-[250px]">
                <Link href="/service">
                  <span className="relative z-10 flex items-center">
                    <Monitor className="!h-5 !w-5" />
                    サービス内容を見る
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,_#fcdee9,_#ffffff)] pb-[90px] pt-[88px] md:pb-[180px] md:pt-[120px]">
        <div className="mx-auto max-w-6xl p-4">
          <div>
            <h2 className="flex items-center text-lg font-bold md:text-xl">
              <CircleCheck className="text-momo-100" />
              <span className="ml-2">オプション料金</span>
            </h2>
          </div>
          <div className="mx-auto max-w-[960px] py-8 text-base font-medium leading-loose md:text-lg">
            <p>
              毎月の基本料金に加えてさらに成果を出したい方向けのオプションとなります。オプションには月額制
              / 単発がございます。
            </p>
          </div>
          <div className="w-full">
            <div className="justify-center gap-8 md:flex">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead colSpan={2} className="bg-momo-600 text-center text-base">
                      {monthlyOptionData.title}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {monthlyOptionData.contents.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="px-1 lg:px-6">{item.title}</TableCell>
                      <TableCell className="px-1 text-right lg:px-6">{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Table className="mt-10 md:mt-0">
                <TableHeader>
                  <TableRow>
                    <TableHead colSpan={2} className="bg-momo-600 text-center text-base">
                      {singleOptionData.title}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {singleOptionData.contents.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="px-1 lg:px-6">{item.title}</TableCell>
                      <TableCell className="px-1 text-right lg:px-6">{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="mt-4 text-center text-sm">※ 料金は全て税別です。</p>
          </div>
        </div>
      </section>

      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default PricingPage;
