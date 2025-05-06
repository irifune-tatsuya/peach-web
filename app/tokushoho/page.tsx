import { Breadcrumbs } from '@/components/Breadcrumbs';
import styles from './layout.module.css';
import Title from '@/components/Title';
import { Box, Center, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { ContactButton } from '@/components/ContactButton';

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

export default async function Tokushoho() {
  return (
    <>
      <Title titleEn={'Tokushoho'} titleJp={'特定商取引法に基づく表記'} />
      <Box maxW={1152} mx={'auto'} p={4} fontSize={'small'} pb={{ base: 15, md: 156 }}>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          1.事業者の名称
        </Heading>
        <Text mb={12}>合同会社ピーチウェブ</Text>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          2.代表者または通信販売に関する業務の責任者の氏名
        </Heading>
        <Text mb={12}>代表社員 入船 達也 (いりふね たつや)</Text>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          3. 所在地
        </Heading>
        <Text mb={12}>
          〒704-8176
          <br />
          岡山県岡山市東区中川町405-1
          <br />
          ヴィンテージ・プレイス201号
        </Text>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          4. 電話番号
        </Heading>
        <Text mb={12}>
          080-1641-0445（受付時間：平日9:00~21:00）
          <br />
          <br />
          ※お電話でのお問い合わせも承っておりますが、お客様からのお問い合わせ内容を正確に把握し、より迅速かつ適切に対応させていただくため、可能な限り下記のお問い合わせフォームをご利用いただけますようお願い申し上げます。
          <br />
          <br />
          <Center>
            <ContactButton />
          </Center>
        </Text>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          5.メールアドレス
        </Heading>
        <Text mb={12}>irifune@peach-web.co.jp</Text>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          6.ホームページURL
        </Heading>
        <Text mb={12}>https://www.peach-web.co.jp/</Text>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          7.販売価格（役務の対価）
        </Heading>
        <Text>表示価格は特に記載がない限り、すべて税抜価格です。別途消費税を申し受けます。</Text>
        <UnorderedList mb={12}>
          <ListItem>
            ホームページ制作サービス
            <UnorderedList>
              <ListItem>
                お客様のご要望に応じて個別にお見積りいたします。まずはお気軽にご相談ください。
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            Webブランディングサービス
            <UnorderedList>
              <ListItem>Starterプラン：50,000円</ListItem>
              <ListItem>Basicプラン：60,000円</ListItem>
              <ListItem>Premiumプラン：120,000円</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            コミュニティ月額会員サービス
            <UnorderedList>
              <ListItem>個人プラン：4,000円/月</ListItem>
              <ListItem>法人プラン：5,000円/月</ListItem>
              <ListItem>
                非会員様のオフラインイベントへのゲスト参加費：
                <UnorderedList>
                  <ListItem>
                    参加区分に応じた月額料金相当額に500円を加算した金額となります。
                  </ListItem>
                  <ListItem>（例：個人参加の場合、4,000円 + 500円 = 4,500円/回）</ListItem>
                  <ListItem>
                    詳細につきましては、各イベントのご案内ページをご確認いただくか、事前にお問い合わせください。
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          8.商品代金・役務の対価以外に必要となる費用
        </Heading>
        <UnorderedList mb={12}>
          <ListItem>銀行振込でのお支払いの場合、振込手数料はお客様のご負担となります。</ListItem>
          <ListItem>
            （ホームページ制作の場合、サーバー契約費用、ドメイン取得・維持費用、有料素材費用、外部サービス利用料など、制作内容によって別途実費が必要となる場合がございます。その場合は事前にお見積りいたします。
          </ListItem>
          <ListItem>
            インターネット接続料金その他の電気通信回線の通信に関する費用はお客様にて別途ご用意いただく必要があります（金額は、お客様が契約した各事業者が定める通り）。
          </ListItem>
        </UnorderedList>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          9.お支払い方法
        </Heading>
        <UnorderedList mb={12}>
          <ListItem>銀行振込</ListItem>
          <ListItem>
            クレジットカード決済（利用可能なカードブランド：VISA, Master, JCBなど）
          </ListItem>
        </UnorderedList>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          10.お支払い時期
        </Heading>
        <UnorderedList mb={12}>
          <ListItem>
            ホームページ制作サービス
            <UnorderedList>
              <ListItem>ご契約時に、お見積り金額の30％を前金としてお支払いいただきます。</ListItem>
              <ListItem>ご納品完了後、7日以内に残りの70％をお支払いください。</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            Webブランディングサービス
            <UnorderedList>
              <ListItem>ご契約日を起算日（＝毎月の課金日）とします。</ListItem>
              <ListItem>
                毎月の起算日に当月分のサービス料金をご請求いたしますので、同月の末日までにお支払いをお願いいたします。
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            コミュニティ月額会員サービス
            <UnorderedList>
              <ListItem>初回：お申込み手続きの完了時にお支払いいただきます。</ListItem>
              <ListItem>
                2回目以降：翌月分の月額料金を、前月の末日に自動決済にてお支払いいただきます。
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            日割り計算について
            <UnorderedList>
              <ListItem>
                どのサービスについても、月額料金などの日割り計算によるご請求やご返金は行っておりませんので、あらかじめご了承ください。
              </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          11.役務の提供時期
        </Heading>
        <UnorderedList mb={12}>
          <ListItem>
            ホームページ制作サービス
            <UnorderedList>
              <ListItem>
                ご契約締結後、お客様との打ち合わせに基づき制作を開始し、通常2週間～3ヶ月程度で納品いたします。制作内容や規模により変動する場合は、個別にご案内いたします。
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            Webブランディングサービス
            <UnorderedList>
              <ListItem>
                ご契約いただいたプランに基づき、毎月定期的にお客様のブログ更新代行や関連コンテンツ作成などのブランディング支援作業を行います。
              </ListItem>
              <ListItem>
                具体的な作業開始日や毎月の作業内容・スケジュールは、ご契約プランおよびお客様との事前協議により決定し、契約期間中継続してサービスを提供いたします。
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            コミュニティ月額会員サービス
            <UnorderedList>
              <ListItem>
                お支払い手続き完了後、直ちにコミュニティへの参加が可能となり、各種コンテンツや特典をご利用いただけます。
              </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          12.返品・キャンセル・解約について
        </Heading>
        <UnorderedList mb={12}>
          <ListItem>
            ホームページ制作サービス
            <UnorderedList>
              <ListItem>
                本サービスはオーダーメイドでの制作となるため、原則として制作着手後のお客様都合によるキャンセル、およびそれに伴うご返金はお受けいたしかねます。
              </ListItem>
              <ListItem>
                やむを得ない事情によりキャンセルをご希望される場合は、作業の進捗状況に応じて、既に着手した作業分の実費または所定のキャンセル料をご請求させていただく場合がございます。
              </ListItem>
              <ListItem>
                当社の責に帰すべき事由がある場合は、お客様と協議の上、誠意をもって対応させていただきます。
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            Webブランディングサービス
            <UnorderedList>
              <ListItem>本サービスは月単位でのご契約となります。</ListItem>
              <ListItem>
                サービスの性質上、既にお支払いいただいた料金のご返金、および当月分の作業に着手した後のキャンセル（日割り計算によるご返金等）は原則としてお受けできませんので、あらかじめご了承ください。
              </ListItem>
              <ListItem>
                解約をご希望の場合は、次回契約更新日（毎月の起算日となります）の15日前までに、指定の連絡方法にてその旨をご連絡ください。期日までにご連絡いただけましたら、翌月以降のサービス提供及びご請求を停止いたします。
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            コミュニティ月額会員サービス
            <UnorderedList>
              <ListItem>
                デジタルコンテンツというサービスの性質上、一度お支払いいただいた月額料金のご返金は、理由の如何を問わず原則としてお受けできません。
              </ListItem>
              <ListItem>
                解約をご希望の場合は、次回自動決済予定日の5日前までに、メールまたはお問い合わせフォームより解約のご連絡を行ってください。お手続きが完了しますと、次回以降の請求は発生せず、現在の利用期間終了をもって自動的に解約となります。利用期間終了までは引き続きサービスをご利用いただけます。
              </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          13.ソフトウェアの動作環境（コミュニティサービス等で必要な場合）
        </Heading>
        <UnorderedList mb={12}>
          <ListItem>OS：Windows 10以降, macOS Catalina以降, iOS 14以降, Android 10以降</ListItem>
          <ListItem>ブラウザ：Google Chrome 最新版, Safari 最新版, Microsoft Edge 最新版</ListItem>
          <ListItem>その他：インターネット接続環境が必須です。</ListItem>
        </UnorderedList>
        <Heading as="h2" my="20px" fontSize={'large'} className={styles.title}>
          14.特別な販売条件（ある場合のみ記載）
        </Heading>
        <UnorderedList>
          <ListItem>ホームページ制作サービスは、月に受注可能な件数に限りがございます。</ListItem>
          <ListItem>
            コミュニティサービスは、18歳未満の方や事業の決済者様以外のご利用はご遠慮いただいております。
          </ListItem>
        </UnorderedList>
        <br />
        <br />
        <Text textAlign="end">以上</Text>
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
