import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SideScrollIcon } from '@/components/ui/SideScrollIcon';
import { Title } from '@/components/ui/Title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IMAGEBASEURL } from '@/constants';
import Image from 'next/image';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { AboutPage, BreadcrumbList, WithContext } from 'schema-dts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Monitor, CircleCheck } from 'lucide-react';
import { BadgeJapaneseYen } from 'lucide-react';

const pageTitle = '選ばれる理由';

const description =
  '弊社の強み、他社と比較して選ばれる理由についてお話します。ホームページ制作は高い！どんなページが良いか一緒に考えてほしいという方は弊社の強みに共感していただけると思います！';

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: '選ばれる理由',
    href: '/reason',
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

const togetherData = [
  {
    title: '顔の見えるホームページ屋さん',
    content:
      'ホームページ制作会社の多くは、オンライン上でサービスが完結するよう「申込み〜打合せ〜納品〜追加提案」まで一度も担当者が会社やお店を訪れないというケースがあります。弊社では、お客様先へ足を運んで、ご納得いくようサービス提供を行ってまいります。',
    image: `${IMAGEBASEURL}/reason/together1.webp`,
  },
  {
    title: '丁寧なヒアリング',
    content:
      '経営コンサルタントが使用するフレームワークを使用して、丁寧にお客様の事業の理解いたします。ヒアリング内容は運用時に目的を達成したかどうかの指標としても生かされます。ホームページを作りたいけど、どうやって注文すればよいかわからないという方に弊社はおすすめです。',
    image: `${IMAGEBASEURL}/reason/together2.webp`,
  },
  {
    title: '標準の運用サービスが充実',
    content:
      'ホームページは作って終わりではありません。継続的なSEO対策、ブログやお知らせ記事の更新、メニューやメッセージが変わった場合の改修作業などが標準プランの範囲内で全て対応しております。他社様ですとこれらのサービスが追加プションというケースも珍しくありません。',
    image: `${IMAGEBASEURL}/reason/together3.webp`,
  },
];

const designData = [
  {
    title: 'レスポンシブ対応',
    content:
      'パソコン、タブレット、スマートフォンなどあらゆる画面サイズに対応したユニバーサルなデザインを指します。レスポンシブ対応がきちんとされていることで、各デバイスでの閲覧性が向上し、お客様により的確に自社の世界観を伝えることができます。',
    image: `${IMAGEBASEURL}/reason/design1.webp`,
  },
  {
    title: 'オリジナルバナーデザイン',
    content:
      '昨今人気の「生成AIによるイラスト」や「海外のフリーフォト」はサイトの世界観を壊す可能性があります。弊社ではホームページ内の画像デザインも料金内で一括して行います。これによりちぐはぐで怪しげな雰囲気をなくし、お客様に安心と信頼感をお届けします。',
    image: `${IMAGEBASEURL}/reason/design2.webp`,
  },
  {
    title: 'テンプレートなし',
    content:
      '弊社では基本的にテンプレートから選んでサイトを構築することがございません。お客様によってブランディングの方向が異なるため当然のことと思っております。制作までの事前打合せでお時間をいただきますが、その分他にはない個性的なサイトをお届けします。',
    image: `${IMAGEBASEURL}/reason/design3.webp`,
  },
];

const ReasonCard = ({ item }: { item: { title: string; content: string; image: string } }) => (
  <Card className="min-w-[280px] w-auto max-w-[350px] snap-start flex-shrink-0">
    <CardHeader>
      <Image
        src={item.image}
        alt={item.title}
        width={310}
        height={174}
        className="rounded-t-lg"
        loading="lazy"
      />
    </CardHeader>
    <CardContent className="space-y-5">
      <CardTitle className="text-base md:text-lg">{item.title}</CardTitle>
      <p className="text-sm md:text-base">{item.content}</p>
    </CardContent>
  </Card>
);

const aboutPageJsonLd: WithContext<AboutPage> = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: pageTitle,
  description: description,
  url: `${siteConfig.url}/reason`,
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

const ReasonPage = () => {
  return (
    <>
      <JsonLd jsonLdData={aboutPageJsonLd} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title titleEn={'Reasons'} titleJp={'選ばれる理由'} />
      <section className="relative overflow-hidden bg-[linear-gradient(-225deg,_#eeeeee_0%,_#ffffff_56%,_#eeeeee_100%)] pt-[88px] pb-[90px] md:pt-32 md:pb-44">
        <div className="mx-auto max-w-6xl p-4">
          <h2 className="flex items-center text-xl font-bold md:text-2xl">
            <CircleCheck className="text-momo-100" />
            <span className="ml-2">一緒に作るWEBブランディング</span>
          </h2>
          <div className="mx-auto max-w-4xl py-8 font-medium leading-loose text-base md:text-lg">
            <p>
              ピーチウェブのサービスがお客様に選ばれる理由の1つ目は、
              <span className="font-bold text-momo-100">「丸投げ」</span>
              にしながらも
              <span className="font-bold text-momo-100">「一緒に作り上げる」</span>
              ことができるお客様と弊社の距離感にあります。このちょうどいい距離感を守るために以下のような配慮を行っております。
            </p>
          </div>
          <div className="w-full">
            <SideScrollIcon />
            <div className="m-1 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto md:m-0">
              {togetherData.map((item, i) => (
                <ReasonCard item={item} key={i} />
              ))}
            </div>
          </div>
          <div className="mt-10 py-10 flex justify-center">
            <Button asChild variant="default" className="btn-slide-hover">
              <Link href="/service">
                <Monitor className="!h-5 !w-5" />
                サービス内容を見る
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white pt-[88px] pb-[90px] md:pt-32 md:pb-44">
        <div className="mx-auto max-w-6xl p-4">
          <h2 className="flex items-center text-xl font-bold md:text-2xl">
            <CircleCheck className="text-momo-100" />
            <span className="ml-2">他社様とのサービス比較</span>
          </h2>
          <div className="mx-auto max-w-4xl py-8 font-medium leading-loose text-base md:text-lg">
            <p>
              お客様に選ばれる理由の2つ目は、他社様より
              <span className="font-bold text-momo-100">
                わかりやすい料金設定とコストパフォーマンスのよさ
              </span>
              にあります。「一見固定金額のように見えて後からオプションを加算された」という
              <span className="font-bold text-momo-100">お客様の不安の声</span>
              にお答えしたいと思っております！
            </p>
          </div>
          <div className="mt-11 md:mt-16">
            <SideScrollIcon />
            <div className="m-1 overflow-x-auto md:m-0">
              <Table className="w-full min-w-[980px] text-sm">
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[150px] text-center font-bold">比較項目</TableHead>
                    <TableHead className="min-w-[160px]">
                      <div className="flex justify-center">
                        <Image
                          src={`${IMAGEBASEURL}/common/rectangle_logo.svg`}
                          alt={'ピーチウェブ'}
                          width={100}
                          height={28}
                        />
                      </div>
                    </TableHead>
                    <TableHead className="min-w-[170px] text-center font-bold">
                      マーケットプレイス
                    </TableHead>
                    <TableHead className="min-w-[160px] text-center font-bold">月額制A社</TableHead>
                    <TableHead className="min-w-[160px] text-center font-bold">
                      一括支払B社
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="bg-momo-100 font-bold text-white">HP制作費用</TableCell>
                    <TableCell className="bg-momo-200 text-center">基本無料</TableCell>
                    <TableCell className="text-center">5~30万円程度</TableCell>
                    <TableCell className="bg-momo-200 text-center">基本無料</TableCell>
                    <TableCell className="text-center">30万円以上</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-momo-100 font-bold text-white">月額費用</TableCell>
                    <TableCell className="text-center">60,000円</TableCell>
                    <TableCell className="bg-momo-200 text-center">なし</TableCell>
                    <TableCell className="text-center">10,000円以上</TableCell>
                    <TableCell className="bg-momo-200 text-center">なし</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-momo-100 font-bold text-white">価格表示</TableCell>
                    <TableCell className="bg-momo-200 text-center">HPにて記載</TableCell>
                    <TableCell className="bg-momo-200 text-center">商品ページに記載</TableCell>
                    <TableCell className="text-center">なし</TableCell>
                    <TableCell className="text-center">なし</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-momo-100 font-bold text-white">
                      デザイン自由度
                    </TableCell>
                    <TableCell className="bg-momo-200 text-center">高い</TableCell>
                    <TableCell className="text-center">制作者による</TableCell>
                    <TableCell className="text-center">低い</TableCell>
                    <TableCell className="text-center">高い</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-momo-100 font-bold text-white">ページ更新</TableCell>
                    <TableCell className="bg-momo-200 text-center">基本毎月4回</TableCell>
                    <TableCell className="text-center">なし</TableCell>
                    <TableCell className="text-center">追加料金が発生</TableCell>
                    <TableCell className="text-center">追加料金が発生</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-momo-100 font-bold text-white">SEO対策</TableCell>
                    <TableCell className="bg-momo-200 text-center">基本含む</TableCell>
                    <TableCell className="text-center">なし</TableCell>
                    <TableCell className="text-center">追加料金が発生</TableCell>
                    <TableCell className="text-center">追加料金が発生</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-momo-100 font-bold text-white">客先訪問</TableCell>
                    <TableCell className="bg-momo-200 text-center">毎月1回以上</TableCell>
                    <TableCell className="text-center">なし</TableCell>
                    <TableCell className="text-center">なし</TableCell>
                    <TableCell className="text-center">追加料金が発生</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-10 py-10 flex justify-center">
              <Button asChild variant="default" className="btn-slide-hover">
                <Link href="/pricing">
                  <BadgeJapaneseYen className="!h-5 !w-5" />
                  価格とプランを見る
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[linear-gradient(-225deg,_#eeeeee_0%,_#ffffff_56%,_#eeeeee_100%)] pt-[88px] pb-[90px] md:pt-32 md:pb-44">
        <div className="mx-auto max-w-6xl p-4">
          <h2 className="flex items-center text-xl font-bold md:text-2xl">
            <CircleCheck className="text-momo-100" />
            <span className="ml-2">フルカスタマイズデザイン</span>
          </h2>
          <div className="mt-11 md:mt-16">
            <div className="mx-auto max-w-4xl py-8 font-medium leading-loose text-base md:text-lg">
              <p>
                お客様に選ばれる理由の3つ目は、
                <span className="font-bold text-momo-100">
                  テンプレートを使用しなしフルカスタマイズデザイン
                </span>
                という点にあります。安価なホームページ制作会社にありがちな無個性でスマホ対応していないデザインには決してしません。
              </p>
            </div>
            <div className="w-full">
              <SideScrollIcon />
              <div className="m-1 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto md:m-0">
                {designData.map((item, i) => (
                  <ReasonCard item={item} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white pt-[88px] pb-[90px] md:pt-32 md:pb-44">
        <div className="mx-auto max-w-6xl p-4">
          <h2 className="flex items-center text-xl font-bold md:text-2xl">
            <CircleCheck className="text-momo-100" />
            <span className="ml-2">WEB集客との違い</span>
          </h2>
          <div className="mt-11 md:mt-16">
            <div className="mx-auto max-w-4xl py-8 font-medium leading-loose text-base md:text-lg">
              <p>
                お客様に選ばれる理由の4つ目は、弊社のサービスが
                <span className="font-bold text-momo-100">WEBブランディング</span>
                という点にあります。よく似た概念のWEB集客と比較してみると以下のようになります。
              </p>
            </div>
            <SideScrollIcon />
            <div className="m-1 overflow-x-auto md:m-0">
              <Table className="w-full min-w-[720px] text-sm">
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[100px] text-center font-bold">比較項目</TableHead>
                    <TableHead className="min-w-[300px] text-center font-bold">
                      WEBブランディング
                    </TableHead>
                    <TableHead className="min-w-[300px] text-center font-bold">WEB集客</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="bg-momo-100 text-center font-bold text-white">
                      目的
                    </TableCell>
                    <TableCell>
                      企業やサービスの認知度とイメージを向上させ、顧客との信頼関係を構築することを⽬指す。
                    </TableCell>
                    <TableCell>
                      サイトへのアクセス数を増やし、⾏動（購⼊、登録、問い合わせなど）を促すことを⽬指す。
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-momo-100 text-center font-bold text-white">
                      手法
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>ビジュアルデザインの統⼀</li>
                        <li>⼀貫したメッセージの発信</li>
                        <li>ブランド価値の訴求</li>
                        <li>⼝コミやレビューの活⽤</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>SEO対策</li>
                        <li>広告（リスティング広告、SNS広告）</li>
                        <li>商品サービスのマーケティング</li>
                        <li>メールマーケティング（メルマガ配信）</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-momo-100 text-center font-bold text-white">
                      目標
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>ブランド認知度の向上</li>
                        <li>ブランド好感度の向上</li>
                        <li>リピート率の向上</li>
                        <li>顧客ロイヤルティの向上</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>クリック数</li>
                        <li>訪問者数</li>
                        <li>成約率</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-momo-100 text-center font-bold text-white">
                      KPI
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>商品や企業名での検索数</li>
                        <li>ユーザーのホームページの滞在時間</li>
                        <li>ホームページへの再来訪率</li>
                        <li>⼝コミやレビューの数など</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>サイト全体の訪問者数</li>
                        <li>訪問者が閲覧したページの枚数</li>
                        <li>コンバージョン率</li>
                        <li>コンバージョンに必要なコスト</li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-momo-100 text-center font-bold text-white">
                      効果
                    </TableCell>
                    <TableCell>
                      ⻑期的に影響を与えるもので、⼀度築かれたブランド価値は⻑期間維持されやすい。
                    </TableCell>
                    <TableCell>
                      ⽐較的短期間でコンバージョン率が向上するが、継続的な取り組みが必要。
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-10 py-10 flex justify-center">
              <Button asChild variant="default" className="btn-slide-hover">
                <Link href="/service">
                  <Monitor className="!h-5 !w-5" />
                  サービス内容を見る
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default ReasonPage;
