import { Breadcrumbs } from '@/components/Breadcrumbs';
import Title from '@/components/Title';
import { IMAGEBASEURL } from '@/constants';
import Image from 'next/image';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { AboutPage, BreadcrumbList, WithContext } from 'schema-dts';

const pageTitle = 'ピーチな想い';
const description =
  '弊社のミッション、ビジョン、代表のご挨拶についてお話します。合同会社ピーチウェブ代表社員入船たち屋からのご挨拶もざいます。共感していただけることを願っております。';

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
    title: 'ピーチな思い',
    href: '/thought',
    isCurrentPage: true,
  },
];

const valueData = [
  {
    title: '深い理解',
    content:
      '経営コンサルタントに匹敵するビジネスプラン構築能力と、お客様のペースに合わせて共感しながらお話を伺うことができる傾聴能力が弊社の事業の出発点です。単におしゃれなデザインをご提案するのではなく、あなたの仕事を深く理解して共に良いホームページをお作りします。',
  },
  {
    title: '想いを形に',
    content:
      'ビジネスプランを理解し戦略を立てただけでは良いホームページにはなりません。ブランドには統一されたトーンやマナーが設定されており、それに基づいた洗練されたクリエイティブが欠かせません。お客様に喜んでいただけるフルカスタマイズデザインをご提案します。',
  },
  {
    title: '温もりを大切に',
    content:
      '直接顔を合わせるからそこ、お話できることも多いかと思います。弊社は直接訪問でのお打ち合わせを大切にしております。お客様の大切な世界観を形にするブランディングにおいてお客様の放つ雰囲気やお言葉が何よりも頼りになります。',
  },
];

const companyData = [
  {
    title: '会社名',
    content: '合同会社ピーチウェブ',
  },
  {
    title: '所在地',
    content: '〒704-8176 岡山県岡山市東区中川町405-1 ヴィンテージ・プレイス201',
  },
  {
    title: '資本金',
    content: '30万円',
  },
  {
    title: '代表社員',
    content: '入船 達也',
  },
];

export default async function Thought() {
  const aboutPageJsonLd: WithContext<AboutPage> = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: pageTitle,
    description: description,
    url: `${siteConfig.url}/thought`,
    mainEntity: {
      '@type': 'Organization',
      '@id': siteConfig.url,
      name: siteConfig.name,
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
      <JsonLd jsonLdData={aboutPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title titleEn={'Thought'} titleJp={'ピーチな想い'} />
      <section
        className="relative overflow-hidden bg-[linear-gradient(-225deg,_#eeeeee_0%,_#ffffff_56%,_#eeeeee_100%)] pt-22 pb-[90px] md:pt-32 md:pb-44 
        before:absolute before:top-0 before:left-0 before:z-10 before:block before:h-[1116px] before:w-[1500px] before:bg-[url('/images/thought/mission-bg.svg')] before:bg-no-repeat md:before:-top-[100px] md:before:-left-[200px]"
      >
        <div className="relative z-20 mx-auto max-w-6xl p-4">
          <div>
            <h2 className="inline-block text-2xl font-bold md:text-3xl">Mission</h2>
            <span className="ml-4 text-sm font-medium tracking-wider">ミッション</span>
          </div>
          <div className="mt-11 w-[330px] md:mt-16 md:w-[440px]">
            <Image
              src={`${IMAGEBASEURL}/thought/mission-text.webp`}
              alt="あなたのビジネスが永く愛されますよう。"
              width={500}
              height={90}
              className="block h-auto w-full max-w-xs md:max-w-md lg:max-w-lg"
            />
          </div>
          <p className="mt-[50px] text-lg leading-loose md:mt-16 lg:text-xl">
            世に新しい価値を生み出す事業。
            <br />
            その尊さを、その力強さを、その温かさを、
            <br />
            WEBで発信し、未来のお客様に届ける。
            <br />
            そのために私たちは挑戦し続けます。
          </p>
        </div>
      </section>
      <section className="bg-momo-100 py-22 text-white md:py-32">
        <div className="mx-auto max-w-6xl p-4">
          <div>
            <h2 className="inline-block text-2xl font-bold md:text-3xl">Value</h2>
            <span className="ml-4 text-sm font-medium tracking-wider">ピーチウェブのバリュー</span>
          </div>
          <div className="mt-10 justify-center md:flex md:gap-12">
            {valueData.map((item, i) => (
              <section key={i} className="mt-16 md:mt-0">
                <h3
                  className="relative mb-11 pb-8 text-xl tracking-wide lg:text-2xl 
                  after:absolute after:bottom-0 after:left-0 after:block after:h-px after:w-14 after:bg-white after:content-['']"
                >
                  {item.title}
                </h3>
                <p className="font-bold tracking-tight leading-loose">{item.content}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
      <section className="overflow-hidden pt-[175px] pb-[190px]">
        <div className="relative mx-auto max-w-6xl p-4">
          <div>
            <h2 className="inline-block text-2xl font-bold md:text-3xl">Message</h2>
            <span className="ml-4 text-sm font-medium tracking-wider">メッセージ</span>
          </div>
          <div className="my-9 text-2xl font-bold leading-tight md:text-3xl">
            <p>
              企業の想いを届ける仕事だからこそ、
              <br />
              私自身も真心を込めて業務に当たります。
            </p>
          </div>
          <div className="mt-0 md:mt-24 md:flex md:gap-12">
            <div className="hidden w-[45vw] md:block">
              <Image
                src={`${IMAGEBASEURL}/thought/ceo-pc.webp`}
                alt="合同会社ピーチウェブ 代表社員 入船 達也"
                width={560}
                height={560}
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
            <div className="block md:hidden">
              <Image
                src={`${IMAGEBASEURL}/thought/ceo-sp.webp`}
                alt="合同会社ピーチウェブ 代表社員 入船 達也"
                width={400}
                height={400}
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
            <div className="mt-9 w-full md:mt-0 md:w-[45vw]">
              <p className="text-base font-medium tracking-widest leading-loose md:text-lg">
                2024年9月に創業した合同会社ピーチウェブ代表社員の入船達也と申します。
                岡山県を代表するフルーツ
                <span className="font-bold text-momo-100">「桃」</span>
                と事業領域を表す
                <span className="font-bold text-momo-100">「WEB」</span>
                が会社名の由来となっているとおり、
                地元岡山の企業をWEBの力で盛り上げたいと考えております。 桃の花言葉には
                <span className="font-bold text-momo-100">
                  「チャーミング」「気立ての良さ」「私はあなたのとりこ」「天下無敵」
                </span>
                などがあります。
                お客様のお仕事の魅力をWEB上で発信し、未来の取引先が「私はあなたのとりこ」と言ってくれるような
                仕事をお約束いたします。
                ホームページ制作をどのように発注すればよいかわからないというお客様もいらっしゃると思います。
                まずは、その不安を解消するために
                <span className="font-bold text-momo-100">直接顔を合わせて</span>
                お打ち合わせできればと思っております。
                <br />
                <br />
                合同会社ピーチウェブ
                <br />
                代表社員 入船達也
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[linear-gradient(-225deg,_#eeeeee_0%,_#ffffff_56%,_#eeeeee_100%)] py-20 md:py-36">
        <div className="mx-auto max-w-6xl p-4">
          <div className="mt-8 mb-7 md:mt-20 md:mb-11">
            <h2 className="inline-block text-2xl font-bold md:text-3xl">会社概要</h2>
            <span className="ml-4 text-sm font-medium">※ 2024年10月時点</span>
          </div>
          <div className="space-y-8 md:space-y-10">
            {companyData.map((data) => (
              <dl key={data.title} className="gap-24 border-b border-gray-200 pb-9 md:flex">
                <dt className="mb-5 w-full max-w-[200px] text-momo-100 md:mb-0 md:text-black">
                  {data.title}
                </dt>
                <dd className="leading-normal">{data.content}</dd>
              </dl>
            ))}
          </div>
        </div>
      </section>

      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
