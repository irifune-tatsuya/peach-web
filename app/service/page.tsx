import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Link,
  ListItem,
  Stack,
  Tag,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './layout.module.css';
import SideScrollIcon from '@/components/SideScrollIcon';
import { ContactButtonArea } from '@/components/ContactButtonArea';
import { ImCoinYen } from 'react-icons/im';
import { IMAGEBASEURL } from '@/constants';

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: 'サービス内容',
    href: '/service',
    isCurrentPage: true,
  },
];

const services = [
  {
    title: 'ホームページを無料制作',
    description:
      'お客様との面談を通じて事業内容や強み、想定するお客様を明確にします。その後、面談内容をもとにフルカスタマイズホームページを制作。WEBブランディングにはホームページが不可欠であるため、通常30万円〜50万円相当を無料でお作りします。',
    flexDirection: 1,
  },
  {
    title: '毎月4回の記事更新',
    description:
      'ユーザーが何度も訪問したくなるホームページに成長させるためにブログ記事、お知らせ、FAQなどの記事を毎月4回投稿します。記事の内容については毎月のお打ち合わせで確定し、下書きのやり取りを経て実際に交際枯れます。',
    flexDirection: 2,
  },
  {
    title: '運用レポートの発行',
    description:
      '毎月1回のお打ち合わせの際に「運用レポート」を発行いたします。人気の記事の確認やユーザーの傾向などを踏まえてWEBブランディングを進めることで、継続的なPDCAを回していきます。',
    flexDirection: 1,
  },
  {
    title: '有料級オプションが標準',
    description:
      '他の制作会社では有料オプションとなってしまう「専門ツールを使用したSEO対策」、「チラシやポスターなどのデザイン制作1点」「ページの修正」「お客様先へのご訪問」などが全て月額料金内で標準で含まれております。',
    flexDirection: 2,
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
      '十分にA社を理解した起業家は、ついにお問い合わせをしました。ホームページ同じ雰囲気のA社に納得してくださったようです。',
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
    q: '解約後はいつでもできますか？',
    a: '契約期間の縛りを設けておりませんので、基本的にいつでもお申し出ください。',
  },
  {
    q: '解約後のホームページはどうなりますか？',
    a: '解約時点で月額の累積支払い金額が、ホームページの制作料24万円を上回っている場合は実費のみ負担いただく形で公開を維持することができます。短期間での解約で制作料24万円に達していない場合は解約後、公開停止となります。',
  },
];

export default async function Service() {
  return (
    <>
      <Box w={'100%'} h={{ base: 300, md: 600 }} position={'relative'}>
        <Image
          src={`${IMAGEBASEURL}/service/title.webp`}
          alt={'サービス内容トップ画像'}
          objectFit={'cover'}
          w={'100vw'}
          h={{ base: 300, md: 600 }}
        />
        <Heading
          as={'h1'}
          w={'100%'}
          position={'absolute'}
          top={'50%'}
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          zIndex={2}
          bg={'momo.100'}
          color={'white'}
          py={{ base: 4, md: 5 }}
          textAlign={'center'}
          fontSize={{ base: 'x-large', md: 'xxx-large' }}
        >
          <Box as={'span'} fontSize={{ base: 'small', md: 'large' }}>
            顧客との長期的な信頼関係を構築する
          </Box>
          <Box as={'br'} />
          WEBブランディング事業
        </Heading>
      </Box>
      <Box bg={'white'} position={'relative'} overflow={'hidden'} pt={{ base: 88, md: 120 }}>
        <Box
          maxW={960}
          mx={{ base: 4, lg: 'auto' }}
          py={8}
          bg={'momo.300'}
          borderRadius={12}
          className={styles.arrowBottom}
        >
          <Text fontSize={{ base: 'medium', md: 'large' }} fontWeight={'bold'} textAlign={'center'}>
            こんな
            <Box
              as={'span'}
              color={'momo.100'}
              fontSize={{ base: 'x-large', md: 'xx-large' }}
              mx={1}
            >
              お悩み
            </Box>
            ございませんか？
          </Text>
          <Box
            mt={3}
            display={{ base: 'block', md: 'flex' }}
            justifyContent={'center'}
            gap={4}
            alignItems={'center'}
          >
            <Box mx={{ base: 'auto', md: 0 }} w={250} h={250}>
              <Image
                src={`${IMAGEBASEURL}/service/issue.webp`}
                alt={'こんなお悩みはございませんか？'}
                w={250}
                h={250}
              />
            </Box>
            <UnorderedList
              mt={{ base: 8, md: 0 }}
              ml={0}
              px={4}
              listStyleType={'none'}
              fontSize={{ base: 'medium', md: 'large' }}
              fontWeight={'bold'}
            >
              <ListItem
                px={5}
                py={3}
                borderBottom={'1px solid #c3c3c3'}
                borderTop={'1px solid #c3c3c3'}
              >
                SNSを始めたが更新が面倒くさい！
              </ListItem>
              <ListItem px={5} py={3} borderBottom={'1px solid #c3c3c3'}>
                WEBの集客を実感したことがない！
              </ListItem>
              <ListItem px={5} py={3} borderBottom={'1px solid #c3c3c3'}>
                ちゃんとしたホームページは高い！
              </ListItem>
              <ListItem px={5} py={3} borderBottom={'1px solid #c3c3c3'}>
                BtoBなのでWEB活用が難しい！
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <Box
          mt={8}
          py={8}
          bg={'momo.100'}
          color={'white'}
          display={{ base: 'block', md: 'flex' }}
          justifyContent={'center'}
          gap={4}
          alignItems={'center'}
        >
          <Box w={300} h={300} mx={{ base: 'auto', md: 0 }}>
            <Image
              src={`${IMAGEBASEURL}/service/solution.webp`}
              alt={'解決策をご提案'}
              w={300}
              h={300}
              loading={'lazy'}
            />
          </Box>
          <Box fontWeight={'bold'} textAlign={'center'}>
            <Text
              fontSize={{ base: 'small', md: 'medium' }}
              mx={{ base: 'auto', md: 0 }}
              className={styles.solutionArrowBottom}
            >
              その悩みまるっと解決！
            </Text>
            <Text fontSize={{ base: 'medium', md: 'large', lg: 'x-large' }} mt={6}>
              顧客との長期的な信頼関係を構築する
            </Text>
            <Center>
              <Image
                src={`${IMAGEBASEURL}/service/service-title.webp`}
                alt={'ピーチウェブのWEBブランディングサービス'}
                w={'100%'}
                h={'auto'}
                maxW={500}
                maxH={20}
                loading={'lazy'}
              />
            </Center>
            <Box
              textAlign={{ base: 'center', md: 'start' }}
              color={'momo.100'}
              fontSize={{ base: 'medium', md: 'large', lg: 'larger' }}
              maxW={{ md: 400, lg: 440 }}
              mx={'auto'}
            >
              <Box
                mt={5}
                display={'flex'}
                flexFlow={{ base: 'column', md: 'row' }}
                gap={{ base: 2, md: 4 }}
              >
                <Text className={styles.solutionTag} mx={{ base: 5, md: 0 }}>
                  ホームページ無料作成
                </Text>
                <Text className={styles.solutionTag} mx={{ base: 5, md: 0 }}>
                  月額5万円から
                </Text>
              </Box>
              <Box
                mt={2}
                display={'flex'}
                flexFlow={{ base: 'column', md: 'row' }}
                gap={{ base: 2, md: 4 }}
              >
                <Text className={styles.solutionTag} mx={{ base: 5, md: 0 }}>
                  SEO対策付き
                </Text>
                <Text className={styles.solutionTag} mx={{ base: 5, md: 0 }}>
                  オリジナルデザイン
                </Text>
              </Box>
              <Box
                mt={2}
                display={'flex'}
                flexFlow={{ base: 'column', md: 'row' }}
                gap={{ base: 2, md: 4 }}
              >
                <Text className={styles.solutionTag} mx={{ base: 5, md: 0 }}>
                  記事更新毎月4回
                </Text>
                <Text className={styles.solutionTag} mx={{ base: 5, md: 0 }}>
                  追加デザイン制作
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <ContactButtonArea />
      </Box>
      <Box bg={'white'} position={'relative'} overflow={'hidden'} pt={{ base: 20, md: 40 }}>
        <Box p={4} maxW={1152} mx={'auto'}>
          <Box>
            <Heading as={'h2'} mr={4} size={{ base: 'md', md: 'lg' }} display={'flex'}>
              <FaCheckCircle color={'#ff7bac'} />
              <Box as={'span'} ml={2}>
                WEBブランディングとは？
              </Box>
            </Heading>
          </Box>
          <Box
            maxW={960}
            mx={'auto'}
            pt={8}
            fontSize={{ base: 'medium', md: 'large' }}
            fontWeight={500}
            lineHeight={2}
          >
            <Text>
              弊社のWEBブランディングは
              <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
                「企業や商品サービスの認知度とイメージを向上させ、顧客との信頼関係を長期的に構築すること」
              </Box>
              と定義しています。
              <Box as={'br'} />
              短期的な売上を求めるのではなく、リピート、口コミ、固定ファンの獲得までを狙って、永く愛される企業や商品サービスに育てることを目標にしております。ベーシックプラン（月額6万円・税別）では以下のようなサービスを提供します。
            </Text>
          </Box>
          <Box maxW={960} mx={'auto'}>
            {services.map((item, i) => (
              <Box
                display={{ base: 'block', md: 'flex' }}
                flexDirection={item.flexDirection % 2 ? 'row' : 'row-reverse'}
                gap={8}
                mt={{ base: 20, md: 120, lg: 40 }}
                key={i}
              >
                <Image
                  src={`${IMAGEBASEURL}/service/service${i + 1}.webp`}
                  alt={item.title}
                  w={400}
                  h={267}
                  loading={'lazy'}
                />
                <Box mt={{ base: 8, md: 0 }}>
                  <Heading
                    as={'h3'}
                    color={'momo.100'}
                    fontSize={'x-large'}
                    borderBottom={'dashed 2px #febdd6'}
                  >
                    {item.title}
                  </Heading>
                  <Text mt={4} lineHeight={2} fontSize={{ base: 'medium', md: 'large' }}>
                    {item.description}
                  </Text>
                </Box>
              </Box>
            ))}
            <Box py={10}>
              <Link
                display={'block'}
                w={250}
                mx={'auto'}
                href="/pricing"
                textAlign={'center'}
                _hover={{ textDecoration: 'none' }}
                className={styles.contactButton}
              >
                <Box
                  py={'1em'}
                  px={'2em'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  height={'100%'}
                  borderRadius={40}
                  bg={'momo.100'}
                  color={'white'}
                  fontWeight={'bold'}
                >
                  <ImCoinYen size={'1.5em'} />
                  <Text ml={2}>価格とプランを見る</Text>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={'relative'}
        overflow={'hidden'}
        pt={{ base: 88, md: 120 }}
        bg={'linear-gradient(-225deg, #eeeeee 0%, #ffffff 56%, #eeeeee 100%);'}
      >
        <Box p={4} maxW={1152} mx={'auto'}>
          <Box>
            <Heading as={'h2'} mr={4} size={{ base: 'md', md: 'lg' }} display={'flex'}>
              <FaCheckCircle color={'#ff7bac'} />
              <Box as={'span'} ml={2}>
                ブランディングストーリー
              </Box>
            </Heading>
            <Box
              maxW={960}
              mx={'auto'}
              pt={8}
              fontSize={{ base: 'medium', md: 'large' }}
              fontWeight={500}
              lineHeight={2}
            >
              <Text>
                WEB上のブランドはどのように醸成されるのでしょうか？ここではとある経営コンサルティング会社を想定して、弊社のサービスでブランドする流れをご紹介します。
              </Text>
            </Box>
          </Box>
          <SideScrollIcon display={['block']} />
          <Box
            listStyleType={'none'}
            display={'flex'}
            gap={4}
            overflow={'scroll'}
            overflowY={'hidden'}
            sx={{
              scrollSnapType: 'x mandatory',
            }}
            alignItems="start"
          >
            {brandingScenario.map((step, i) => (
              <Card minW={280} w={'auto'} maxW={350} key={i}>
                <CardBody>
                  <Image
                    src={`${IMAGEBASEURL}/service/scenario${i + 1}.webp`}
                    alt={step.title}
                    minW={240}
                    w={'100%'}
                    maxW={310}
                    h={'auto'}
                    loading={'lazy'}
                  />
                  <Stack mt="6" spacing="5">
                    <Heading as={'h3'} size={{ base: 'sm', md: 'md' }}>
                      <Tag size={'sm'} bg={'momo.100'} color={'white'}>{`シナリオ${i + 1}`}</Tag>
                      <Text mt={2}>{step.title}</Text>
                    </Heading>
                    <Text fontSize={{ base: 'small', md: 'medium' }}>{step.description}</Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </Box>
        </Box>
        <Box bg={'momo.100'} py={10}>
          <Box
            display={{ base: 'block', md: 'flex' }}
            justifyContent={'center'}
            alignItems={'center'}
            gap={8}
          >
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Image
                src={`${IMAGEBASEURL}/service/ceo-circle.webp`}
                alt={'ピーチウェブ代表社員 入船達也'}
                h={300}
                w={300}
                loading={'lazy'}
              />
              <Text color={'white'} textAlign={'center'} fontWeight={'bold'} mt={4}>
                合同会社ピーチウェブ
                <Box as={'br'} />
                代表社員　入船　達也
              </Text>
            </Box>
            <Box
              textAlign={'center'}
              fontWeight={'bold'}
              maxW={{ base: 400, lg: 600 }}
              fontSize={{ base: 'large', md: 'x-large' }}
              color={'white'}
            >
              <Text className={styles.balloon} color={'momo.100'}>
                シナリオ通りに記事更新を
                <Box as={'br'} display={{ base: 'block', lg: 'none' }} />
                続けるのは大変ですよね...
              </Text>
              <Box display={'flex'} justifyContent={'center'} alignItems={'end'}>
                <Image
                  src={`${IMAGEBASEURL}/service/service-title.webp`}
                  alt={'ピーチウェブのWEBブランディングサービス'}
                  w={{ base: 300, lg: 400 }}
                  h={{ base: '48px', lg: '64px' }}
                  loading={'lazy'}
                />
                <Text>なら</Text>
              </Box>
              <Text mt={5} lineHeight={2}>
                全部丸投げしていいんです。
                <Box as={'br'} />
                お客様はWEBを気にすることなく
                <Box as={'br'} />
                「事業に全力投球」してください！
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box position={'relative'} overflow={'hidden'} pt={{ base: 88, md: 120 }}>
        <Box p={4} maxW={1152} mx={'auto'}>
          <Box>
            <Heading as={'h2'} mr={4} size={{ base: 'md', md: 'lg' }} display={'flex'}>
              <FaCheckCircle color={'#ff7bac'} />
              <Box as={'span'} ml={2}>
                サービスの流れ
              </Box>
            </Heading>
          </Box>
          <SideScrollIcon display={['block']} />
          <Box
            listStyleType={'none'}
            display={'flex'}
            gap={4}
            overflow={'scroll'}
            overflowY={'hidden'}
            sx={{
              scrollSnapType: 'x mandatory',
            }}
            alignItems="start"
          >
            {steps.map((step, i) => (
              <Card minW={280} w={'auto'} maxW={350} key={i}>
                <CardBody>
                  <Image
                    src={`${IMAGEBASEURL}/service/step${i + 1}.webp`}
                    alt={step.title}
                    minW={240}
                    w={'100%'}
                    maxW={310}
                    h={'auto'}
                    loading={'lazy'}
                  />
                  <Stack mt="6" spacing="5">
                    <Heading as={'h3'} size={{ base: 'sm', md: 'md' }}>
                      <Tag size={'sm'} bg={'momo.100'} color={'white'}>{`ステップ${i + 1}`}</Tag>
                      <Text mt={2}>{step.title}</Text>
                    </Heading>
                    <Text fontSize={{ base: 'small', md: 'medium' }}>{step.description}</Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </Box>
        </Box>
        <ContactButtonArea />
      </Box>
      <Box p={4} maxW={1152} mx={'auto'} pt={{ base: 88, md: 120 }}>
        <Box>
          <Heading as={'h2'} mr={4} size={{ base: 'md', md: 'lg' }} display={'flex'}>
            <FaCheckCircle color={'#ff7bac'} />
            <Box as={'span'} ml={2}>
              よくあるご質問
            </Box>
          </Heading>
        </Box>
        <Accordion maxW={960} mx={'auto'} pt={10}>
          {faq.map((item, i) => (
            <AccordionItem key={i}>
              <Heading as={'h3'} bg={'momo.600'}>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={{ base: 'medium', md: 'large' }}
                    fontWeight={'bold'}
                    lineHeight={2}
                  >
                    {item.q}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4} fontSize={{ base: 'medium', md: 'large' }} lineHeight={2}>
                {item.a}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
