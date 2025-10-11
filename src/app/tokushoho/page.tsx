import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import Title from '@/components/ui/Title';
import React from 'react';
import { ContactButton } from '@/components/ui/ContactButton';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { AboutPage, BreadcrumbList, WithContext } from 'schema-dts';

const pageTitle = '特定商取引法に基づく表記';

const description =
  '合同会社ピーチウェブの特定商取引法に基づく表記ページです。事業者名、住所、連絡先、販売価格、支払い方法、返品条件など、お取引に関する大切な情報を掲載しています。安心してサービスをご利用いただくために、事前にご確認ください。';

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: '特定商取引法に基づく表記',
    href: '/tokushoho',
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

const headingClasses = 'my-5 border-b-2 border-momo-400 pb-2 text-lg font-bold';
const listClasses = 'mb-12 list-disc space-y-4 pl-5';
const nestedListClasses = 'mt-2 list-circle space-y-2 pl-5';
const doubleNestedListClasses = 'mt-2 list-[square] space-y-1 pl-5';

const jsonLdData: WithContext<AboutPage> = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: pageTitle,
  description: description,
  url: `${siteConfig.url}/tokushoho`,
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

const TokushohoPage = () => {
  return (
    <>
      <JsonLd jsonLdData={jsonLdData} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
      <Title titleEn={'Tokushoho'} titleJp={'特定商取引法に基づく表記'} />
      <div className="mx-auto max-w-6xl p-4 pb-[60px] text-sm md:pb-[156px]">
        <h2 className={headingClasses}>1.事業者の名称</h2>
        <p className="mb-12">合同会社ピーチウェブ</p>
        <h2 className={headingClasses}>2.代表者または通信販売に関する業務の責任者の氏名</h2>
        <p className="mb-12">代表社員 入船 達也 (いりふね たつや)</p>
        <h2 className={headingClasses}>3. 所在地</h2>
        <p className="mb-12">
          〒704-8176
          <br />
          岡山県岡山市東区中川町405-1
          <br />
          ヴィンテージ・プレイス201号
        </p>
        <h2 className={headingClasses}>4. 電話番号</h2>
        <div className="mb-12">
          080-1641-0445（受付時間：平日9:00~21:00）
          <br />
          <br />
          ※お電話でのお問い合わせも承っておりますが、お客様からのお問い合わせ内容を正確に把握し、より迅速かつ適切に対応させていただくため、可能な限り下記のお問い合わせフォームをご利用いただけますようお願い申し上げます。
          <br />
          <br />
          <div className="flex justify-center">
            <ContactButton />
          </div>
        </div>
        <h2 className={headingClasses}>5.メールアドレス</h2>
        <p className="mb-12">irifune@peach-web.co.jp</p>
        <h2 className={headingClasses}>6.ホームページURL</h2>
        <p className="mb-12">https://www.peach-web.co.jp/</p>
        <h2 className={headingClasses}>7.販売価格（役務の対価）</h2>
        <p>表示価格は特に記載がない限り、すべて税抜価格です。別途消費税を申し受けます。</p>
        <ul className={listClasses}>
          <li>
            ホームページ制作サービス
            <ul className={nestedListClasses}>
              <li>
                お客様のご要望に応じて個別にお見積りいたします。まずはお気軽にご相談ください。
              </li>
            </ul>
          </li>
          <li>
            Webブランディングサービス
            <ul className={nestedListClasses}>
              <li>Starterプラン：50,000円</li>
              <li>Basicプラン：60,000円</li>
              <li>Premiumプラン：120,000円</li>
            </ul>
          </li>
          <li>
            コミュニティ月額会員サービス
            <ul className={nestedListClasses}>
              <li>個人プラン：4,000円/月</li>
              <li>法人プラン：5,000円/月</li>
              <li>
                非会員様のオフラインイベントへのゲスト参加費：
                <ul className={doubleNestedListClasses}>
                  <li>参加区分に応じた月額料金相当額に500円を加算した金額となります。</li>
                  <li>（例：個人参加の場合、4,000円 + 500円 = 4,500円/回）</li>
                  <li>
                    詳細につきましては、各イベントのご案内ページをご確認いただくか、事前にお問い合わせください。
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <h2 className={headingClasses}>8.商品代金・役務の対価以外に必要となる費用</h2>
        <ul className={listClasses}>
          <li>銀行振込でのお支払いの場合、振込手数料はお客様のご負担となります。</li>
          <li>
            （ホームページ制作の場合、サーバー契約費用、ドメイン取得・維持費用、有料素材費用、外部サービス利用料など、制作内容によって別途実費が必要となる場合がございます。その場合は事前にお見積りいたします。
          </li>
          <li>
            インターネット接続料金その他の電気通信回線の通信に関する費用はお客様にて別途ご用意いただく必要があります（金額は、お客様が契約した各事業者が定める通り）。
          </li>
        </ul>
        <h2 className={headingClasses}>9.お支払い方法</h2>
        <ul className={listClasses}>
          <li>銀行振込</li>
          <li>クレジットカード決済（利用可能なカードブランド：VISA, Master, JCBなど）</li>
        </ul>
        <h2 className={headingClasses}>10.お支払い時期</h2>
        <ul className={listClasses}>
          <li>
            ホームページ制作サービス
            <ul className={nestedListClasses}>
              <li>ご契約時に、お見積り金額の30％を前金としてお支払いいただきます。</li>
              <li>ご納品完了後、7日以内に残りの70％をお支払いください。</li>
            </ul>
          </li>
          <li>
            Webブランディングサービス
            <ul className={nestedListClasses}>
              <li>ご契約日を起算日（＝毎月の課金日）とします。</li>
              <li>
                毎月の起算日に当月分のサービス料金をご請求いたしますので、同月の末日までにお支払いをお願いいたします。
              </li>
            </ul>
          </li>
          <li>
            コミュニティ月額会員サービス
            <ul className={nestedListClasses}>
              <li>初回：お申込み手続きの完了時にお支払いいただきます。</li>
              <li>2回目以降：翌月分の月額料金を、前月の末日に自動決済にてお支払いいただきます。</li>
            </ul>
          </li>
          <li>
            日割り計算について
            <ul className={nestedListClasses}>
              <li>
                どのサービスについても、月額料金などの日割り計算によるご請求やご返金は行っておりませんので、あらかじめご了承ください。
              </li>
            </ul>
          </li>
        </ul>
        <h2 className={headingClasses}>11.役務の提供時期</h2>
        <ul className={listClasses}>
          <li>
            ホームページ制作サービス
            <ul className={nestedListClasses}>
              <li>
                ご契約締結後、お客様との打ち合わせに基づき制作を開始し、通常2週間～3ヶ月程度で納品いたします。制作内容や規模により変動する場合は、個別にご案内いたします。
              </li>
            </ul>
          </li>
          <li>
            Webブランディングサービス
            <ul className={nestedListClasses}>
              <li>
                ご契約いただいたプランに基づき、毎月定期的にお客様のブログ更新代行や関連コンテンツ作成などのブランディング支援作業を行います。
              </li>
              <li>
                具体的な作業開始日や毎月の作業内容・スケジュールは、ご契約プランおよびお客様との事前協議により決定し、契約期間中継続してサービスを提供いたします。
              </li>
            </ul>
          </li>
          <li>
            コミュニティ月額会員サービス
            <ul className={nestedListClasses}>
              <li>
                お支払い手続き完了後、直ちにコミュニティへの参加が可能となり、各種コンテンツや特典をご利用いただけます。
              </li>
            </ul>
          </li>
        </ul>
        <h2 className={headingClasses}>12.返品・キャンセル・解約について</h2>
        <ul className={listClasses}>
          <li>
            ホームページ制作サービス
            <ul className={nestedListClasses}>
              <li>
                本サービスはオーダーメイドでの制作となるため、原則として制作着手後のお客様都合によるキャンセル、およびそれに伴うご返金はお受けいたしかねます。
              </li>
              <li>
                やむを得ない事情によりキャンセルをご希望される場合は、作業の進捗状況に応じて、既に着手した作業分の実費または所定のキャンセル料をご請求させていただく場合がございます。
              </li>
              <li>
                当社の責に帰すべき事由がある場合は、お客様と協議の上、誠意をもって対応させていただきます。
              </li>
            </ul>
          </li>
          <li>
            Webブランディングサービス
            <ul className={nestedListClasses}>
              <li>本サービスは月単位でのご契約となります。</li>
              <li>
                サービスの性質上、既にお支払いいただいた料金のご返金、および当月分の作業に着手した後のキャンセル（日割り計算によるご返金等）は原則としてお受けできませんので、あらかじめご了承ください。
              </li>
              <li>
                解約をご希望の場合は、次回契約更新日（毎月の起算日となります）の15日前までに、指定の連絡方法にてその旨をご連絡ください。期日までにご連絡いただけましたら、翌月以降のサービス提供及びご請求を停止いたします。
              </li>
            </ul>
          </li>
          <li>
            コミュニティ月額会員サービス
            <ul className={nestedListClasses}>
              <li>
                デジタルコンテンツというサービスの性質上、一度お支払いいただいた月額料金のご返金は、理由の如何を問わず原則としてお受けできません。
              </li>
              <li>
                解約をご希望の場合は、次回自動決済予定日の5日前までに、メールまたはお問い合わせフォームより解約のご連絡を行ってください。お手続きが完了しますと、次回以降の請求は発生せず、現在の利用期間終了をもって自動的に解約となります。利用期間終了までは引き続きサービスをご利用いただけます。
              </li>
            </ul>
          </li>
        </ul>
        <h2 className={headingClasses}>
          13.ソフトウェアの動作環境（コミュニティサービス等で必要な場合）
        </h2>
        <ul className={listClasses}>
          <li>OS：Windows 10以降, macOS Catalina以降, iOS 14以降, Android 10以降</li>
          <li>ブラウザ：Google Chrome 最新版, Safari 最新版, Microsoft Edge 最新版</li>
          <li>その他：インターネット接続環境が必須です。</li>
        </ul>
        <h2 className={headingClasses}>14.特別な販売条件（ある場合のみ記載）</h2>
        <ul className="list-disc space-y-4 pl-5">
          <li>ホームページ制作サービスは、月に受注可能な件数に限りがございます。</li>
          <li>
            コミュニティサービスは、18歳未満の方や事業の決済者様以外のご利用はご遠慮いただいております。
          </li>
        </ul>
        <br />
        <br />
        <p className="text-right">以上</p>
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default TokushohoPage;
