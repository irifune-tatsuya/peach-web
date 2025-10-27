import {
  ServiceData,
  Dialogue,
  BusinessIssue,
  HagupeEquation,
  InfoCardItem,
  ServiceWorry,
  ServicePlan,
  ServiceOption,
} from '@/types/service';
import { IMAGEBASEURL } from '@/constants';
import { dialogueImgClientQuestion, dialogueImgStaffAnswer } from './commonData';

const serviceNameJp = 'はぐぺ';
const serviceNameEn = 'hagupe';

const hagupeImgPath = `${IMAGEBASEURL}/services/${serviceNameEn}`;

export const hagupeData: ServiceData = {
  id: serviceNameEn,
  titleEn: serviceNameEn,
  titleJp: serviceNameJp,
  catchphrase: 'スモールビジネスに育むホームページを！',
  mainVisual: {
    url: `${hagupeImgPath}/main-visual.webp`,
    width: 2560,
    height: 1400,
    alt: `ホームページ制作サービス「${serviceNameJp}」を象徴する桃のメインビジュアル`,
  },
  titleImage: {
    url: `${hagupeImgPath}/title-hagupe.webp`,
    width: 913,
    height: 271,
    alt: `${serviceNameJp} ロゴ`,
  },
  metaDescription: `ピーチウェブのホームページ・ランディングページ制作サービス「${serviceNameJp}」をご紹介。わかりやすい料金体系、SEO対策、ハイパフォーマンス、文章や画像のご用意もワンパッケージで全て実現します。個人事業主様のスタートもホームページリニューアルも全力応援いたします。`,
  descriptionHtml: `
    <p>新規事業のスタートもホームページのリニューアルも「${serviceNameJp}」にお任せ！</p>
    <p>はぐペは、スモールビジネスを営むあなたの事業成長とともに "はぐくむ" ホームページ・ランディングページ制作サービスです。</p>
    <p>最初は1枚ページのWEB名刺でスタートできて、あとからブログ機能やページの追加など機能を増やすことができます。</p>
    <p>いきなり高い費用をかけたり、あとでリニューアルする必要がないため、ずーっと経済的に始められます。</p>
  `,
  relatedFaqTagId: serviceNameEn,
};

export const hagupeWorries: ServiceWorry[] = [
  {
    id: 'w1',
    text: '開業したけど集客ってどうすればいいの！',
  },
  {
    id: 'w2',
    text: '名刺だけじゃ自分のサービスを伝えきれない！',
  },
  {
    id: 'w3',
    text: '自分のビジネスを広く発信しなきゃ！',
  },
  {
    id: 'w4',
    text: '見込みのお客様を見つけなきゃ！',
  },
];

export const hagupeIssuesDialogue: Dialogue[] = [
  {
    id: 'hid1',
    speaker: 'client',
    text: '確かにお客様から注文をいただくのにに手こずっているんですけど、ホームページで解決できるんですか...？',
    image: dialogueImgClientQuestion,
  },
  {
    id: 'hid2',
    speaker: 'staff',
    text: 'そうですね！ホームページはスモールビジネスの集客の問題点である「リード獲得」と「コンバージョン率」を改善できる可能性がありますよ。',
    image: dialogueImgStaffAnswer,
  },
  {
    id: 'hid3',
    speaker: 'client',
    text: 'リード...？コンバージョン...？なんだか難しそう...。私たちみたいな小さい会社でも、本当に集客できるようになるんですか？',
    image: dialogueImgClientQuestion,
  },
  {
    id: 'hid4',
    speaker: 'staff',
    text: 'もちろんです！まずはあなたの問題点がリードなのか、コンバージョンなのか考えてみましょう！',
    image: dialogueImgStaffAnswer,
  },
];

export const checkIssuesleadConversion: BusinessIssue[] = [
  {
    id: 'cilc1',
    title: 'そもそも知られていない！',
    description:
      '良い商品やサービスや商品を持っているのに、売り込みが苦手で動けない。だから注文の連絡が一向に来ない...。',
    image: {
      url: `${hagupeImgPath}/problem-lead.webp`,
      width: 1080,
      height: 1080,
      alt: `リード獲得に悩みを抱える女性`,
    },
    keyword: 'リード獲得',
  },
  {
    id: 'cilc2',
    title: '相手に魅力が刺さってない！',
    description:
      '色んな人と名刺交換しまくったり、SNSのフォロワーも集まっているのに見込みのお客様からの反応がない...。',
    image: {
      url: `${hagupeImgPath}/problem-cv.webp`,
      width: 1080,
      height: 1080,
      alt: `コンバージョン率に悩みを抱える女性`,
    },
    keyword: 'コンバージョン率',
  },
  {
    id: 'cilc3',
    title: 'どっちも問題かも！',
    description:
      '自分の商品やサービスに自信が持てない。人と会わないし、SNSもわかからない。それじゃ売れるわけないか...。',
    image: {
      url: `${hagupeImgPath}/problem-lead-and-cv.webp`,
      width: 1080,
      height: 1080,
      alt: `リード獲得とコンバージョン率、両方を悩む女性`,
    },
    keyword: '集客活動してない',
  },
];

export const hagupeEquation: HagupeEquation = {
  leadInitiatives: [
    '各ページのSEO対策と継続的なブログ更新',
    'SNS運用によるページ誘導',
    'Web広告の運用',
    'MEO対策（Googleビジネスプロフィール）',
  ],
  cvInitiatives: [
    '伝わるランディングページ制作',
    'ストレスないお問い合わせフォームへの導線設計',
    'お客様の声や導入事例の充実',
    '分かりやすい料金プランの提示',
  ],
};

export const hagupeProposalDialogue: Dialogue[] = [
  {
    id: 'hpd1',
    speaker: 'client',
    text: '問題解決の方程式や対策はわかったけど、やることが多くて大変そう...。',
    image: dialogueImgClientQuestion,
  },
  {
    id: 'hpd2',
    speaker: 'staff',
    text: 'そうですよね。リード獲得でもコンバージョン率でも、いずれの問題であっても集客の第一歩にはホームページ制作をおすすめします。',
    image: dialogueImgStaffAnswer,
  },
  {
    id: 'hpd3',
    speaker: 'client',
    text: 'どうしてホームページなんですか？SNSとか無料で手軽に始めるほうが良さそうなのに...。',
    image: dialogueImgClientQuestion,
  },
  {
    id: 'hpd4',
    speaker: 'staff',
    text: 'わかります！ところがWeb集客の最初の段階でホームページを作ると、こんなにたくさんのメリットがあるんですよ！',
    image: dialogueImgStaffAnswer,
  },
];

export const homepageMerits: InfoCardItem[] = [
  {
    id: 'hpm1',
    title: 'あなたの魅力を棚卸しできる',
    description:
      'ホームページ制作は、まず「何を伝えるか」を考えることから始まります。あなたのビジネスの強み、ターゲット、競合調査など「棚卸し」の機会になります。',
    image: {
      url: `${hagupeImgPath}/merit-plan-review.webp`,
      width: 800,
      height: 480,
      alt: `ビジネスの棚卸し要素`,
    },
  },
  {
    id: 'hpm2',
    title: 'あなたの魅力が100%伝わる',
    description:
      'SNSとは違って、ホームページは「あなたが自由に発信できる場所」です。写真、テキスト、デザインを使ってあなたの魅力を精一杯届けることができます。',
    image: {
      url: `${hagupeImgPath}/merit-web-design.webp`,
      width: 800,
      height: 480,
      alt: `Webデザインにこだわる`,
    },
  },
  {
    id: 'hpm3',
    title: '集客成功の方程式が使える',
    description:
      'ブログ更新でリード獲得し、サービスページの改善でコンバージョン率のアップを狙います。ホームページはこの両方を同時に改善できる最強のツールです。',
    image: {
      url: `${hagupeImgPath}/merit-sales-improvement.webp`,
      width: 800,
      height: 480,
      alt: `ホームページの分析を行う画面`,
    },
  },
  {
    id: 'hpm4',
    title: 'あなたの信頼性が高まる',
    description:
      'キチンとしたホームページがあるとあなたの本気度と信頼感が伝わります。名刺交換やSNSフォローの後、お客様が見に来る「あなたの本拠地」となります。',
    image: {
      url: `${hagupeImgPath}/merit-trust.webp`,
      width: 800,
      height: 480,
      alt: `信頼感のある女性の握手`,
    },
  },
];

export const hagupeStrengths: InfoCardItem[] = [
  {
    id: 'str1',
    title: '制作過程をチェック',
    description:
      'ページの制作過程をいつでも見られる専用URLを発行します。「もっと明るい色にして！」「もっと大人っぽい雰囲気で！」などの修正を気軽に連絡できるので、あなたの世界観を100%表現できるんです。',
    image: {
      url: `${hagupeImgPath}/strength-check-the-process.webp`,
      width: 600,
      height: 400,
      alt: `ホームページ制作の進捗をスマホで確認する女性`,
    },
  },
  {
    id: 'str2',
    title: '文章も画像もご用意',
    description:
      '文章も画像も用意しなくて大丈夫。すべてのプランでSEO対応の文章と商用OKな画像をご用意します。また文言の変更や画像の差し替えなどの簡単な修正は公開から3ヶ月間は無料で何度でも対応します。',
    image: {
      url: `${hagupeImgPath}/strength-text-and-photos.webp`,
      width: 600,
      height: 400,
      alt: `写真も文章もご用意`,
    },
  },
  {
    id: 'str3',
    title: 'レスポンシブ対応',
    description:
      'スマホでもタブレットでもパソコンでも見やすい「レスポンシブデザイン」を基本採用しています。スマホはアプリ風、タブレット以上はパソコンサイト風みたいなデザインにもすることができるんです。',
    image: {
      url: `${hagupeImgPath}/strength-responsive-design.webp`,
      width: 600,
      height: 400,
      alt: `パソコン・タブレット、スマホに同じホームページが表示されている`,
    },
  },
  {
    id: 'str4',
    title: '最新&最高性能を',
    description:
      '人気のWordPressですが、公開から20年以上経って限界が近づいています。弊社はNetflixやInstagram、Airbnbなどの大手人気サービスが採用するモダンな開発手法で最高の性能とSEO対応を両立しています。',
    image: {
      url: `${hagupeImgPath}/strength-high-performance.webp`,
      width: 600,
      height: 400,
      alt: `Googleスピードインサイトにて90以上のハイスコア`,
    },
  },
];

export const hagupePlans: ServicePlan[] = [
  {
    id: 'pln1',
    planName: '育まないLPプラン',
    planType: '単発',
    price: 150000,
    isStartingPrice: false,
    planLead:
      '企業の商品サービスを期間限定で案内するシンプルなランディングページ制作プランです。Google広告などへの出稿を前提としているためSEO対策をカットすることで費用を抑えることができます。',
    planList: [
      'ページ1枚作成',
      '公開後の運用費無料',
      'SNSアカウントへのリンクボタン',
      'お問い合わせフォーム付き',
      '文章や画像が全てご用意',
      'スマホ&パソコンデザイン対応',
      '制作過程が見える専用URL発行',
      '公開後3ヶ月は文言&画像差し替えOK',
    ],
  },
  {
    id: 'pln2',
    eyeCatch: 'おすすめ！',
    planName: '小さく育むパーソナルプラン',
    planType: '単発',
    price: 250000,
    isStartingPrice: false,
    planLead:
      '個人の方などスモールビジネスをスタートときにピッタリのプランです。TOPページであなたの商品サービスをご紹介して、ブログ更新でアクセス数増加を狙うことができます。',
    planList: [
      '育まないLPプランのサービスをすべて含む',
      'モダンな内部SEO対策を追加',
      'ブログ機能と関連ページを追加',
      'ブログ更新のマニュアルを納品',
      'Googleアナリティクスの登録',
      'Googleマップにビジネス登録',
    ],
  },
  {
    id: 'pln3',
    planName: '大きく育むコーポレートプラン',
    planType: '単発',
    price: 600000,
    isStartingPrice: true,
    planLead:
      '本格的なコーポレートページを作る方、リニューアルの方におすすめです！モダンな製作技術でWordPress製のサイトに負けないパフォーマンスとSEO対策を実現します。',
    planList: [
      '小さく育むパーソナルプランのサービスすべて含む',
      '9枚までページ追加（合計10枚）',
      '商品情報などを管理できるデータベース機能',
      'データベース管理画面マニュアル納品',
    ],
  },
];

export const hagupeOptions: ServiceOption[] = [
  {
    id: 'op1',
    optionName: 'ページ追加：1枚あたり',
    optionType: '単発',
    optionPrice: 30000,
    isStartingPrice: false,
    optionDescription:
      'ページを1枚追加制作します。デザイン料の他、商用利用可能な画像や文章のご用意、必要なバナー画像の制作費などをすべて含みます。当社でホームページ・ランディングページを制作した方限定とオプションとなります。',
  },
  {
    id: 'op2',
    optionName: 'ブログ記事執筆代行：1本あたり',
    optionType: '単発',
    optionPrice: 5000,
    isStartingPrice: false,
    optionDescription:
      '2,000文字程度のSEO対策されたブログ記事原稿を執筆します。継続的な制作依頼プランもご用意しております。',
  },
  {
    id: 'op3',
    optionName: 'モダンな内部SEO対策を追加',
    optionType: '単発',
    optionPrice: 30000,
    isStartingPrice: false,
    optionDescription:
      '全てのページに高度なSEO対策である構造化データ（JSON-LD）の追加、パンくずリストの追加、PWA機能（ホームページをiPhoneのホーム画面に追加するとアプリのように動作する機能）の追加、Googleアナリティクスの登録の4つの対策をします。小さく育むパーソナルプラン以上の方は標準でお付けしております。',
  },
  {
    id: 'op4',
    optionName: 'ブログ機能の追加',
    optionType: '単発',
    optionPrice: 80000,
    isStartingPrice: false,
    optionDescription:
      'ブログ機能と関連するページの追加、ブログのマニュアル納品、Googleアナリティクスの登録までを行います。小さく育むパーソナルプラン以上の方は標準でお付けしております。',
  },
  {
    id: 'op5',
    optionName: 'データベース機能の追加',
    optionType: '単発',
    optionPrice: 80000,
    isStartingPrice: false,
    optionDescription:
      '従業員データや商品データなどを保存するデータベース機能を追加します。管理者ログイン機能、管理画面、マニュアル納品なども合わせて行います。大きく育むコーポレートプランの方は標準でお付けしております。',
  },
  {
    id: 'op6',
    optionName: 'Googleリスティング広告の出稿',
    optionType: '単発',
    optionPrice: 10000,
    isStartingPrice: true,
    optionDescription:
      '1ヶ月単位で最小10,000円から出稿代行をお受けします。出稿金額に応じて出稿代行手数料が発生いたします。',
  },
  {
    id: 'op7',
    optionName: 'ロゴ・アイコン制作',
    optionType: '単発',
    optionPrice: 80000,
    isStartingPrice: true,
    optionDescription:
      'ホームページだけでなく、名刺やポスター等にも使用できるロゴ・アイコンを提携デザイナーに制作依頼することができます。デザインの複数提案、カラーなどの調整、複数の形式での納品など丸ごとワンパッケージで対応します。',
  },
  {
    id: 'op8',
    optionName: '【岡山市近隣の方限定】写真撮影',
    optionType: '単発',
    optionPrice: 100000,
    isStartingPrice: true,
    optionDescription:
      'ホームページだけでなく、SNSやポスター等にも使用できる写真撮影を提携カメラマンに依頼することができます。商品と人物の両方の撮影、写真のレタッチ、複数のサイズ納品など丸ごとワンパッケージで対応します。こちらのプランは岡山市、倉敷市、総社市、瀬戸内市、赤磐市周辺の方限定のプランとなっております。',
  },
];

export const hagupeSnsDialogue: Dialogue[] = [
  {
    id: 'hsd1',
    speaker: 'client',
    text: '制作プランも見たけど、先に無料のSNSから始めるのじゃだめなのかな？',
    image: dialogueImgClientQuestion,
  },
  {
    id: 'hsd2',
    speaker: 'staff',
    text: 'なるほど。SNSから始める方も多いようですが、集客になれないうちに始めるとデメリットも目立つのでおすすめしていません。',
    image: dialogueImgStaffAnswer,
  },
  {
    id: 'hsd3',
    speaker: 'client',
    text: 'SNSを先にスタートさせるのことのデメリット？集客に慣れてからのほうがいいんですね。',
    image: dialogueImgClientQuestion,
  },
  {
    id: 'hsd4',
    speaker: 'staff',
    text: 'そうですね、せっかくですからSNSから集客を始めるデメリットと上手なWeb集客の方法を見ていきましょう。',
    image: dialogueImgStaffAnswer,
  },
];

export const disadvantagesOfSns: InfoCardItem[] = [
  {
    id: 'dos1',
    title: '投稿に時間がとられる！',
    description:
      '本業も忙しいのに毎日1~3回分の投稿を考えなきゃアカウントが埋もれる...。時間もプレッシャーもかかりすぎ！',
    image: {
      url: `${hagupeImgPath}/disadvantages-of-sns-long-post-time.webp`,
      width: 1080,
      height: 1080,
      alt: `投稿する時間がもったいない問題`,
    },
  },
  {
    id: 'dos2',
    title: '成果が出るまでが遠い！',
    description:
      'SNSはあくまでコミュニケーションツール。見込みのお客様がファンになって購入するまで時間がかかり過ぎる...。',
    image: {
      url: `${hagupeImgPath}/disadvantages-of-sns-long-lead-time.webp`,
      width: 1080,
      height: 1080,
      alt: `ファンになって購入するまでのリードタイムが長い`,
    },
  },
  {
    id: 'dos3',
    title: '事業全体を説明しにくい！',
    description:
      'あなたに興味を持ってくれるフォロワーさんが現れても、SNS投稿には文字数制限があって全てを説明できない。',
    image: {
      url: `${hagupeImgPath}/disadvantages-of-sns-hard-to-explain.webp`,
      width: 1080,
      height: 1080,
      alt: `SNSでは事業全体を説明することができない`,
    },
  },
  {
    id: 'dos4',
    title: '注文受付がしにくい！',
    description:
      'SNSのDMでは個別の受注フォームがない...。結局ECサイトやアンケートサイトに誘導しなきゃいけない。',
    image: {
      url: `${hagupeImgPath}/disadvantages-of-sns-difficult-to-accept.webp`,
      width: 1080,
      height: 1080,
      alt: `SNSのDmでは注文受付がしにくい`,
    },
  },
  {
    id: 'dos5',
    title: '凍結されたらおしまい！',
    description:
      'SNSは運営権限でアカウントを勝手に凍結します。これまでの投稿もフォロワーも取り返せなくなると大変...。',
    image: {
      url: `${hagupeImgPath}/disadvantages-of-sns-account-suspension.webp`,
      width: 1080,
      height: 1080,
      alt: `アカウント凍結リスク問題`,
    },
  },
];

export const webMarketingSteps: InfoCardItem[] = [
  {
    id: 'wms1',
    title: '「Web上の本拠地」を作ろう',
    description:
      'まずはWeb上の本拠地として見込みのお客様にあなたを説明するためのホームページを制作しましょう。プラットフォームの都合に左右されず、アカウント凍結リスクもありません。',
    image: {
      url: `${hagupeImgPath}/web-marketing-step1.webp`,
      width: 1080,
      height: 1080,
      alt: `Web上の本拠地となるホームページ`,
    },
  },
  {
    id: 'wms2',
    title: '良質な記事でファンを育てる',
    description:
      '焦って毎日投稿する必要はありません。ホームページのブログ機能を活用し、お客様にとって役に立つ情報を発信。じっくり時間をかけて信頼関係とファンを育てていきましょう。',
    image: {
      url: `${hagupeImgPath}/web-marketing-step2.webp`,
      width: 1080,
      height: 1080,
      alt: `良質なコンテンツを作成する`,
    },
  },
  {
    id: 'wms3',
    title: 'お問い合わせへ自然に誘導',
    description:
      'ホームページなら、訪れた見込み客を自然な流れで「お問い合わせ」や「資料請求」へ誘導する設計が可能です。SNSよりも短期間で確実にコンバージョンへ繋げやすくなります。',
    image: {
      url: `${hagupeImgPath}/web-marketing-step3.webp`,
      width: 1080,
      height: 1080,
      alt: `お問い合わせへ誘導する`,
    },
  },
  {
    id: 'wms4',
    title: 'SNSは「拡散役」として活用',
    description:
      '本拠地ができたら、SNSはホームページへ誘導するための「拡散役」として活用します。万が一アカウントに問題が起きても、大切なWeb資産（ホームページ）は安全ですよ。',
    image: {
      url: `${hagupeImgPath}/web-marketing-step4.webp`,
      width: 1080,
      height: 1080,
      alt: `SNSを戦略的に活用する`,
    },
  },
];

export const hagupeSteps: InfoCardItem[] = [
  {
    id: 'stp1',
    title: 'お問い合わせ',
    description:
      '以下のリンクからご連絡をお待ちしてます。ご提案までは無料対応、かつ提案後のしつこい営業もございませんので、気軽にご連絡くださいね。',
    image: {
      url: `${hagupeImgPath}/step1-contact.webp`,
      width: 600,
      height: 400,
      alt: `スマホからお問い合わせする女性`,
    },
  },
  {
    id: 'stp2',
    title: 'ヒアリング',
    description:
      'ホームページの希望を伺うヒアリングを実施します。岡山県内企業様は訪問も可能ですが、基本はGoogleMeetによるオンライン形式となります。',
    image: {
      url: `${hagupeImgPath}/step2-hearing.webp`,
      width: 600,
      height: 400,
      alt: `オンラインでヒアリングを受ける女性`,
    },
  },
  {
    id: 'stp3',
    title: 'ご提案&お見積り',
    description:
      'ヒアリング結果をもとに制作するホームページのご提案とお見積りをいたします。提案に対して気になる点などあれば何でもお聞きくださいね。',
    image: {
      url: `${hagupeImgPath}/step3-proposal.webp`,
      width: 600,
      height: 400,
      alt: `ホームページ制作の提案を受ける女性`,
    },
  },
  {
    id: 'stp4',
    title: '契約&前金入金',
    description:
      'ご提案に納得いただけましたら契約となります。契約後は前金のご請求をさせていただきます。',
    image: {
      url: `${hagupeImgPath}/step4-contract.webp`,
      width: 600,
      height: 400,
      alt: `ホームページ制作の契約を決める握手`,
    },
  },
  {
    id: 'stp5',
    title: '製作開始&専用URL発行',
    description:
      '前金入金及び素材の提供がある場合はそれらを受け取ったら制作開始となります。専閲覧URLを発行して随時ご報告しながら進めさせていただきます。',
    image: {
      url: `${hagupeImgPath}/step5-start.webp`,
      width: 600,
      height: 400,
      alt: `ホームページ制作をする男性とスマホから制作過程を確認する女性`,
    },
  },
];
