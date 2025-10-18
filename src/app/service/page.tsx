import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ButtonArea } from '@/components/common/ButtonArea';
import { SideScrollIcon } from '@/components/ui/SideScrollIcon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CONTACT, IMAGEBASEURL } from '@/constants';
import Image from 'next/image';
import { FaLine } from 'react-icons/fa';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { Service, FAQPage, Question, BreadcrumbList, WithContext } from 'schema-dts';
import { BadgeJapaneseYen, CircleCheck, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const pageTitle = 'サービス紹介';

const description =
  'ピーチウェブのWEBブランディングのサービスについてご紹介します。ホームページを作るだけでなく記事を更新してお客様との信頼関係を醸成できるサービスを目指しております。';

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: pageTitle,
    href: '/service',
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

const linkButtons = [
  {
    href: '/contact',
    children: 'フォームからお問い合わせ',
    icon: <Mail className="mr-1 !h-5 !w-5" />,
    variant: 'default',
  },
  {
    href: CONTACT.line,
    children: 'LINEからお問い合わせ',
    icon: <FaLine className="mr-1 !h-5 !w-5" />,
    variant: 'line',
  },
] as const;

const services = [
  {
    title: 'ホームページを無料制作',
    description:
      'お客様との面談を通じて事業内容や強み、想定するお客様を明確にします。その後、面談内容をもとにフルカスタマイズホームページを制作。WEBブランディングにはホームページが不可欠であるため、通常30万円〜50万円相当を無料でお作りします。',
  },
  {
    title: '毎月4回の記事更新',
    description:
      'ユーザーが何度も訪問したくなるホームページに成長させるためにブログ記事、お知らせ、FAQなどの記事を毎月4回投稿します。記事の内容については毎月のお打ち合わせで確定し、下書きのやり取りを経て実際に公開されます。',
  },
  {
    title: '運用レポートの発行',
    description:
      '毎月1回のお打ち合わせの際に「運用レポート」を発行いたします。人気の記事の確認やユーザーの傾向などを踏まえてWEBブランディングを進めることで、継続的なPDCAを回していきます。',
  },
  {
    title: '有料級オプションが標準',
    description:
      '他の制作会社では有料オプションとなってしまう「専門ツールを使用したSEO対策」、「チラシやポスターなどのデザイン制作1点」「ページの修正」「お客様先へのご訪問」などが全て月額料金内で標準で含まれております。',
  },
];

const brandingScenario = [
  {
    title: 'コンセプトの明確化',
    description:
      '経営コンサルティングのA社は、弊社サービスを利用してWEBブランディングを推進します。まずはコンセプトを面談で整理しました。',
  },
  {
    title: 'ホームページの制作',
    description:
      '面談の結果、A社は実績豊富な創業支援と商品開発を押し出すことにしました。駆け出しの起業家に向けたホームページを制作します。',
  },
  {
    title: '顧客の検索',
    description:
      '起業家のキーワード検索により、たまたまA社の記事を見つけました。しかし他のコンテンツがないと信頼してよいかわかりません。',
  },
  {
    title: 'ブログ記事やFAQの充実',
    description:
      '顧客は何度も訪れたくなるようなホームページを希望しています。安心感を持ってもらえるように記事更新を進めていきましょう。',
  },
  {
    title: 'A社を認知',
    description:
      '更新される記事に何度も触れて起業家はA社を認知します。「経営コンサルティングならA社かな？」と認識してくれたみたいです。',
  },
  {
    title: 'サービス利用',
    description:
      '十分にA社を理解した起業家は、ついにお問い合わせをしました。ホームページと同じ雰囲気のA社に納得してくださったようです。',
  },
  {
    title: 'さらに記事更新',
    description:
      '一度サービスを利用した起業家ですが、A社がその後に更新した記事を見て、「新たな課題」を発見しました。「A社って頼れるな！」',
  },
  {
    title: 'リピートや口コミの発生',
    description:
      '起業家からのリピートや口コミがあれば、すかさず対応して記事にするA社。これにより起業家はさらに愛着を持ってくださいます。',
  },
  {
    title: 'ブランドの確率',
    description:
      'こうしてターゲットを絞って、情報を出し続けたA社は県内有数の「創業支援コンサルティング起業」として認知されるようになりました。',
  },
];

const steps = [
  {
    title: 'お問い合わせ',
    description:
      '以下のリンクのフォームまたはLINEからサービスのお問い合わせをお願いいたします。サービス利用を悩んでいる方も気軽にご質問いただけますと幸いです。',
  },
  {
    title: '面談',
    description:
      'お問い合わせ内容に基づいて直接面談に伺います。訪問が難しいエリアの場合は、ZOOMによるオンライン面談をご提案させて頂く場合がございます。',
  },
  {
    title: '契約&ヒアリング',
    description:
      'サービス内容にご納得いただけましたら契約及びヒアリングをさせていただきます。ヒアリング内容に基づいてホームページの方向性を決めてまいります。',
  },
  {
    title: '初回制作',
    description:
      'ホームページの制作は概ね2ヶ月頂戴しております。その間に進捗報告や追加のヒアリング、写真素材や会社ロゴの提供依頼をさせて頂く場合がございます。',
  },
  {
    title: 'ホームページ公開',
    description:
      '制作したホームページの内容にご納得いただけましたら正式に公開させていただきます。公開後から月額課金がスタートいたしますので、月額契約も行います。',
  },
  {
    title: '毎月のお打ち合わせ',
    description:
      '制作したホームページの記事更新のお打ち合わせをさせていただきます。過去1カ月の運用レポートもご提出し状況についてお話させていただきます。',
  },
  {
    title: '記事更新',
    description:
      '毎月のお打ち合わせ内容に基づいて記事更新を行います。公開前の事前確認については下書きを送信して確認いただいた後、公開させていただきます。',
  },
];

const faq = [
  {
    q: 'どうしてホームページ制作が無料なのですか？',
    a: '弊社のWEBブランディングの本質は、ターゲットに刺さるような豊富なコンテンツを用意して繰り返しコミュニケーションを取ることです。つまりホームページそのものはコンテンツの受け皿なだけなので付随サービスとして無料としております。',
  },
  {
    q: 'ホームページ制作の実費は請求されますか？',
    a: '月額請求開始時に実費を請求させていただきます。想定される内訳は「独自ドメインの取得費用（年払い）」「ホームページの画像管理費用」「ホームページの仕様により発生する外部サービスの費用」などです。合計5,000円〜10,000円程度とお考えください。',
  },
  {
    q: 'ホームページの制作期間はどれくらいですか？',
    a: '事業内容の理解からコンセプトの設定、ホームページで必要な画像やデザインの準備等ございますので、通常2カ月程度いただいております。',
  },
  {
    q: 'ホームページ制作の進捗は報告してくれますか？',
    a: '仮ドメインを発行してホームページの制作状況をリアルタイムで確認いただくことができます。また概ね2週間に1回程度ご訪問の上、進捗状況や不明点の確認をさせていただきます。',
  },
  {
    q: '月額料金はいつから発生しますか？',
    a: '完成したホームページの公開が開始した日から、月額料金のご請求が始まります。',
  },
  {
    q: 'どの程度集客できますか？',
    a: 'じっくりコンテンツを制作している関係上、長期的な視点での集客になると思っていただけますと幸いです。比較的短期での成果を期待される方は、特定の商品サービスをPRするランディングページの制作依頼や弊社ビジネスパートナーが行っているWEB集客コンサルティングのご提案をさせていただきます。',
  },
  {
    q: 'すでにホームページがあるのですが、そちらの運用をしてもらえますか？',
    a: 'ホームページに使われている技術によって回答が変わりますので、お問い合わせフォームからご連絡いただけますと幸いです。WordPressで作成されたコーポレートサイトであれば、運用を行える可能性があります。',
  },
  {
    q: '自分で運用したいのでレクチャーしてもらうことはできますか？',
    a: '記事更新の方法をレクチャーさせていただくことは可能です。ただしホームページ内のソースコードのレクチャーについては専門知識が必要であり、正しく表示されなくなる可能性があるためお断りしております。',
  },
  {
    q: 'どんな記事がターゲットに受けますか？',
    a: 'お客様を動かすのは「感情」か「勘定」を喚起することと言われております。「感情」は感動やワクワクなどの感情を喚起することですが非常に再現性の低い領域となります。もう一つの「勘定」は実用性やオトクさを喚起することです。弊社はこの「勘定」を喚起できるようにターゲットにとって有益な記事更新を届けるべきだと考えております。',
  },
  {
    q: 'オプションメニューにないサービスもお願いしてもよいですか？',
    a: 'もちろんです。弊社で対応できるものであれば、何でもご相談ください！独自ドメインのメールアドレスを使えるようにしてほしい、情報誌の広告記事をデザインしてほしい、動画制作をしてほしいなどビジネスパートナーとともに解決いたします。',
  },
  {
    q: '解約はいつでもできますか？',
    a: '契約期間の縛りを設けておりませんので、基本的にいつでもお申し出ください。',
  },
  {
    q: '解約後のホームページはどうなりますか？',
    a: '解約時点で月額の累積支払い金額が、ホームページの制作料24万円を上回っている場合は実費のみ負担いただく形で公開を維持することができます。短期間での解約で制作料24万円に達していない場合は解約後、公開停止となります。',
  },
];

const StoryCard = ({
  item,
  index,
  type,
  imageUrl,
}: {
  item: { title: string; description: string };
  index: number;
  type: 'シナリオ' | 'ステップ';
  imageUrl: string;
}) => (
  <Card className="min-w-[280px] w-auto max-w-[350px] snap-start flex-shrink-0">
    <CardHeader>
      <Image
        src={imageUrl}
        alt={item.title}
        width={310}
        height={174}
        className="rounded-t-lg"
        loading="lazy"
      />
    </CardHeader>
    <CardContent className="space-y-4">
      <CardTitle className="text-base md:text-lg">
        <Badge>
          {type}
          {index + 1}
        </Badge>
        <p className="mt-2">{item.title}</p>
      </CardTitle>
      <p className="text-sm md:text-base">{item.description}</p>
    </CardContent>
  </Card>
);

const serviceJsonLd: WithContext<Service> = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WEBブランディング事業',
  description: description,
  url: `${siteConfig.url}/service`,
  provider: {
    '@type': 'Organization',
    '@id': siteConfig.url,
    name: siteConfig.name,
  },
  serviceType: 'WEBブランディング',
};

const faqJsonLd: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(
    (item) =>
      ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      } as Question),
  ),
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

const ServicePage = () => {
  return (
    <>
      <JsonLd jsonLdData={serviceJsonLd} />
      <JsonLd jsonLdData={faqJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <section className="relative h-[300px] w-full md:h-[600px]">
        <Image
          src={`${IMAGEBASEURL}/service/title.webp`}
          alt="サービス内容トップ画像"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 bg-momo-100/80 py-4 text-center text-xl font-bold text-white backdrop-blur-sm md:py-5 md:text-4xl">
          <span className="text-sm md:text-lg">顧客との長期的な信頼関係を構築する</span>
          <br />
          WEBブランディング事業
        </h1>
      </section>
      <section className="bg-white pt-16 md:pt-24">
        <div className="mx-4 max-w-4xl rounded-lg bg-momo-300 py-8 lg:mx-auto">
          <p className="text-center font-bold text-base md:text-lg">
            こんな
            <span className="mx-1 text-xl font-bold text-momo-100 md:text-2xl">お悩み</span>
            ございませんか？
          </p>
          <div className="mt-3 items-center justify-center gap-4 md:flex">
            <div className="mx-auto h-[250px] w-[250px] md:mx-0">
              <Image
                src={`${IMAGEBASEURL}/service/issue.webp`}
                alt="こんなお悩みはございませんか？"
                width={250}
                height={250}
              />
            </div>
            <ul className="mt-8 list-none px-4 font-bold text-base md:mt-0 md:text-lg">
              <li className="border-t border-b border-gray-300 px-5 py-3">
                SNSを始めたが更新が面倒くさい！
              </li>
              <li className="border-b border-gray-300 px-5 py-3">
                WEBの集客を実感したことがない！
              </li>
              <li className="border-b border-gray-300 px-5 py-3">
                ちゃんとしたホームページは高い！
              </li>
              <li className="border-b border-gray-300 px-5 py-3">BtoBなのでWEB活用が難しい！</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 items-center justify-center gap-4 bg-momo-100 py-8 text-white md:flex">
          <Image
            src={`${IMAGEBASEURL}/service/solution.webp`}
            alt="解決策をご提案"
            width={300}
            height={300}
            loading="lazy"
            className="mx-auto md:mx-0"
          />
          <div className="text-center font-bold">
            <p className="mx-auto text-sm md:mx-0 md:text-base">その悩みまるっと解決！</p>
            <p className="mt-6 text-base md:text-lg lg:text-xl">
              顧客との長期的な信頼関係を構築する
            </p>
            <div className="flex justify-center">
              <Image
                src={`${IMAGEBASEURL}/service/service-title.webp`}
                alt="ピーチウェブのWEBブランディングサービス"
                width={500}
                height={20}
                loading="lazy"
                className="h-auto max-h-16 w-full max-w-md"
              />
            </div>
            <div className="mx-auto mt-5 max-w-sm space-y-2 text-base font-bold text-momo-100 md:max-w-md md:text-lg">
              <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                <p className="flex-1 rounded-full bg-white px-5 py-2 text-center whitespace-nowrap">
                  ホームページ無料作成
                </p>
                <p className="flex-1 rounded-full bg-white px-5 py-2 text-center whitespace-nowrap">
                  月額5万円から
                </p>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                <p className="flex-1 rounded-full bg-white px-5 py-2 text-center whitespace-nowrap">
                  SEO対策付き
                </p>
                <p className="flex-1 rounded-full bg-white px-5 py-2 text-center whitespace-nowrap">
                  オリジナルデザイン
                </p>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                <p className="flex-1 rounded-full bg-white px-5 py-2 text-center whitespace-nowrap">
                  記事更新毎月4回
                </p>
                <p className="flex-1 rounded-full bg-white px-5 py-2 text-center whitespace-nowrap">
                  追加デザイン制作
                </p>
              </div>
            </div>
          </div>
        </div>
        <ButtonArea buttons={linkButtons} />
      </section>
      <section className="bg-white pt-20 md:pt-40">
        <div className="mx-auto max-w-6xl p-4">
          <h2 className="flex items-center text-xl font-bold md:text-2xl">
            <CircleCheck className="text-momo-100" />
            <span className="ml-2">WEBブランディングとは？</span>
          </h2>
          <div className="mx-auto max-w-4xl pt-8 font-medium leading-loose text-base md:text-lg">
            <p>
              弊社のWEBブランディングは
              <span className="font-bold text-momo-100">
                「企業や商品サービスの認知度とイメージを向上させ、顧客との信頼関係を長期的に構築すること」
              </span>
              と定義しています。
              <br />
              短期的な売上を求めるのではなく、リピート、口コミ、固定ファンの獲得までを狙って、永く愛される企業や商品サービスに育てることを目標にしております。ベーシックプラン（月額6万円・税別）では以下のようなサービスを提供します。
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            {services.map((item, i) => (
              <div
                key={i}
                className={`mt-10 items-center gap-8 md:mt-20 md:flex ${
                  i % 2 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                <Image
                  src={`${IMAGEBASEURL}/service/service${i + 1}.webp`}
                  alt={item.title}
                  width={400}
                  height={267}
                  loading="lazy"
                  className="mx-auto h-auto w-full max-w-md flex-shrink-0 md:mx-0"
                />
                <div className="mt-8 md:mt-0">
                  <h3 className="border-b-2 border-dashed border-momo-100/50 text-xl font-bold text-momo-100">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-loose text-base md:text-lg">{item.description}</p>
                </div>
              </div>
            ))}
            <div className="py-20 flex justify-center">
              <Button asChild variant="default" className="btn-slide-hover">
                <Link href="/contact">
                  <BadgeJapaneseYen className="!h-5 !w-5" />
                  価格とプランを見る
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[linear-gradient(-225deg,_#eeeeee_0%,_#ffffff_56%,_#eeeeee_100%)] pt-20 md:pt-32">
        <div className="mx-auto max-w-6xl p-4">
          <h2 className="flex items-center text-xl font-bold md:text-2xl">
            <CircleCheck className="text-momo-100" />
            <span className="ml-2">ブランディングストーリー</span>
          </h2>
          <div className="mx-auto max-w-4xl pt-8 font-medium leading-loose text-base md:text-lg">
            <p>
              WEB上のブランドはどのように醸成されるのでしょうか？ここではとある経営コンサルティング会社を想定して、弊社のサービスでブランド化する流れをご紹介します。
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4">
          <SideScrollIcon />
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto py-4">
            {brandingScenario.map((step, i) => (
              <StoryCard
                key={i}
                item={step}
                index={i}
                type="シナリオ"
                imageUrl={`${IMAGEBASEURL}/service/scenario${i + 1}.webp`}
              />
            ))}
          </div>
        </div>
        <div className="bg-momo-100 py-10">
          <div className="items-center justify-center gap-8 md:flex">
            <div className="flex flex-col items-center">
              <Image
                src={`${IMAGEBASEURL}/service/ceo-circle.webp`}
                alt="ピーチウェブ代表社員 入船達也"
                width={300}
                height={300}
                loading="lazy"
                className="h-[200px] w-[200px] rounded-full object-cover md:h-[300px] md:w-[300px]"
              />
              <p className="mt-4 text-center font-bold text-white">
                合同会社ピーチウェブ
                <br />
                代表社員　入船　達也
              </p>
            </div>
            <div className="mt-8 text-center font-bold text-white md:mt-0">
              <div className="mx-auto max-w-xs rounded-lg bg-white p-4 text-momo-100 md:max-w-md">
                <p>
                  シナリオ通りに記事更新を
                  <br className="lg:hidden" />
                  続けるのは大変ですよね...
                </p>
              </div>
              <div className="mt-4 flex items-end justify-center">
                <Image
                  src={`${IMAGEBASEURL}/service/service-title.webp`}
                  alt="ピーチウェブのWEBブランディングサービス"
                  width={400}
                  height={64}
                  loading="lazy"
                  className="h-auto w-full max-w-[300px] lg:max-w-[400px]"
                />
                <p>なら</p>
              </div>
              <p className="mt-5 leading-loose text-lg md:text-xl">
                全部丸投げしていいんです。
                <br />
                お客様はWEBを気にすることなく
                <br />
                「事業に全力投球」してください！
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 md:pt-32">
        <div className="mx-auto max-w-6xl p-4">
          <h2 className="flex items-center text-xl font-bold md:text-2xl">
            <CircleCheck className="text-momo-100" />
            <span className="ml-2">サービスの流れ</span>
          </h2>
        </div>
        <div className="mx-auto max-w-6xl px-4">
          <SideScrollIcon />
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto py-4">
            {steps.map((step, i) => (
              <StoryCard
                key={i}
                item={step}
                index={i}
                type="ステップ"
                imageUrl={`${IMAGEBASEURL}/service/step${i + 1}.webp`}
              />
            ))}
          </div>
        </div>
        <ButtonArea buttons={linkButtons} />
      </section>
      <section className="px-4 pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="mx-auto max-w-6xl">
          <h2 className="flex items-center text-xl font-bold md:text-2xl">
            <CircleCheck className="text-momo-100" />
            <span className="ml-2">よくあるご質問</span>
          </h2>
          <Accordion type="single" collapsible className="mx-auto mt-10 w-full max-w-4xl">
            {faq.map((item, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger className="bg-momo-600 px-4 text-left font-bold leading-loose text-base hover:no-underline md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="p-4 leading-loose text-base md:text-lg">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default ServicePage;
