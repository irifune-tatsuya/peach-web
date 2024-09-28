import { Breadcrumbs } from '@/components/Breadcrumbs';
import Title from '@/components/Title';
import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Link,
  ListItem,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';
import styles from './layout.module.css';
import SideScrollIcon from '@/components/SideScrollIcon';
import { ImDisplay } from 'react-icons/im';
import { ImCoinYen } from 'react-icons/im';
import { IMAGEBASEURL } from '@/constants';

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

const togetherData = [
  {
    title: '顔の見えるホームページ屋さん',
    content:
      'ホームページ制作会社の多くは、オンライン上でサービスが完結するよう「申込み〜打合せ〜納品〜追加提案」まで一度も担当者が会社やお店を訪れないというケースがあります。弊社では、お客様先へ足を運んで、ご納得いくようサービス提供を行ってまいります。',
  },
  {
    title: '丁寧なヒアリング',
    content:
      '経営コンサルタントが使用するフレームワークを使用して、丁寧にお客様の事業の理解いたします。ヒアリング内容は運用時に目的を達成したかどうかの指標としても生かされます。ホームページを作りたいけど、どうやって注文すればよいかわからないという方に弊社はおすすめです。',
  },
  {
    title: '標準の運用サービスが充実',
    content:
      'ホームページは作って終わりではありません。継続的なSEO対策、ブログやお知らせ記事の更新、メニューやメッセージが変わった場合の改修作業などが標準プランの範囲内で全て対応しております。他社様ですとこれらのサービスが追加プションというケースも珍しくありません。',
  },
];

const designData = [
  {
    title: 'レスポンシブ対応',
    content:
      'パソコン、タブレット、スマートフォンなどあらゆる画面サイズに対応したユニバーサルなデザインを指します。レスポンシブ対応がきちんとされていることで、各デバイスでの閲覧性が向上し、お客様により的確に自社の世界観を伝えることができます。',
  },
  {
    title: 'オリジナルバナーデザイン',
    content:
      '昨今人気の「生成AIによるイラスト」や「海外のフリーフォト」はサイトの世界観を壊す可能性があります。弊社ではホームページ内の画像デザインも料金内で一括して行います。これによりちぐはぐで怪しげな雰囲気をなくし、お客様に安心と信頼感をお届けします。',
  },
  {
    title: 'テンプレートなし',
    content:
      '弊社では基本的にテンプレートから選んでサイトを構築することがございません。お客様によってブランディングの方向が異なるため当然のことと思っております。制作までの事前打合せでお時間をいただきますが、その分他にはない個性的なサイトをお届けします。',
  },
];

export default async function Reason() {
  return (
    <>
      <Title titleEn={'Reasons'} titleJp={'選ばれる理由'} />
      <Box
        bg={'linear-gradient(-225deg, #eeeeee 0%, #ffffff 56%, #eeeeee 100%);'}
        position={'relative'}
        overflow={'hidden'}
        pt={{ base: 88, md: 120 }}
        pb={{ base: 90, md: 180 }}
      >
        <Box p={4} maxW={1152} mx={'auto'}>
          <Box>
            <Heading as={'h2'} mr={4} size={{ base: 'md', md: 'lg' }} display={'flex'}>
              <FaCheckCircle color={'#ff7bac'} />
              <Box as={'span'} ml={2}>
                一緒に作るWEBブランディング
              </Box>
            </Heading>
          </Box>
          <Box
            maxW={960}
            mx={'auto'}
            py={8}
            fontSize={{ base: 'medium', md: 'large' }}
            fontWeight={500}
            lineHeight={2}
          >
            <Text>
              ピーチウェブのサービスがお客様に選ばれる理由の1つ目は、
              <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
                「丸投げ」
              </Box>
              にしながらも
              <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
                「一緒に作り上げる」
              </Box>
              ことができるお客様と弊社の距離感にあります。このちょうどいい距離感を守るために以下のような配慮を行っております。
            </Text>
          </Box>
          <Box w={'100%'}>
            <SideScrollIcon />
            <Box
              m={{ base: 1, md: 0 }}
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
              {togetherData.map((item, i) => (
                <Card minW={280} w={'auto'} maxW={350} key={i}>
                  <CardBody>
                    <Image src={`${IMAGEBASEURL}/reason/together${i + 1}.webp`} alt={item.title} />
                    <Stack mt="6" spacing="5">
                      <Heading as={'h3'} size={{ base: 'sm', md: 'md' }}>
                        {item.title}
                      </Heading>
                      <Text fontSize={{ base: 'small', md: 'medium' }}>{item.content}</Text>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            </Box>
          </Box>
          <Box mt={10}>
            <Box py={10}>
              <Link
                display={'block'}
                w={250}
                mx={'auto'}
                href="/service"
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
                  <ImDisplay size={'1.5em'} />
                  <Text ml={2}>サービス内容を見る</Text>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        bg={'white'}
        position={'relative'}
        overflow={'hidden'}
        pt={{ base: 88, md: 120 }}
        pb={{ base: 90, md: 180 }}
      >
        <Box p={4} maxW={1152} mx={'auto'}>
          <Box>
            <Heading as={'h2'} mr={4} size={{ base: 'md', md: 'lg' }} display={'flex'}>
              <FaCheckCircle color={'#ff7bac'} />
              <Box as={'span'} ml={2}>
                他社様とのサービス比較
              </Box>
            </Heading>
          </Box>
          <Box
            maxW={960}
            mx={'auto'}
            py={8}
            fontSize={{ base: 'medium', md: 'large' }}
            fontWeight={500}
            lineHeight={2}
          >
            <Text>
              お客様に選ばれる理由の2つ目は、他社様より
              <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
                わかりやすい料金設定とコストパフォーマンスのよさ
              </Box>
              にあります。「一見固定金額のように見えて後からオプションを加算された」という
              <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
                お客様の不安の声
              </Box>
              にお答えしたいと思っております！
            </Text>
          </Box>
          <Box mt={{ base: '44px', md: '60px' }}>
            <SideScrollIcon />
            <Box
              m={{ base: 1, md: 0 }}
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
              <Table>
                <Thead>
                  <Tr fontSize={'small'}>
                    <Th minW={150} textAlign={'center'} fontWeight={'bold'}>
                      比較項目
                    </Th>
                    <Th minW={160}>
                      <Center>
                        <Image
                          src={`${IMAGEBASEURL}/common/rectangle_logo.svg`}
                          alt={'ピーチウェブ'}
                          w={'100px'}
                          h={'auto'}
                        />
                      </Center>
                    </Th>
                    <Th minW={170} textAlign={'center'} fontWeight={'bold'}>
                      マーケットプレイス
                    </Th>
                    <Th minW={160} textAlign={'center'} fontWeight={'bold'}>
                      月額制A社
                    </Th>
                    <Th minW={160} textAlign={'center'} fontWeight={'bold'}>
                      一括支払B社
                    </Th>
                  </Tr>
                </Thead>
                <Tbody fontSize={'small'}>
                  <Tr>
                    <Td bg={'momo.200'} fontWeight={'bold'}>
                      HP制作費用
                    </Td>
                    <Td textAlign={'center'} position={'relative'} bg={'momo.600'}>
                      基本無料
                      <FaRegCircle className={styles.tableIcon} />
                    </Td>
                    <Td textAlign={'center'}>5~30万円程度</Td>
                    <Td textAlign={'center'} position={'relative'} bg={'momo.600'}>
                      基本無料
                      <FaRegCircle className={styles.tableIcon} />
                    </Td>
                    <Td textAlign={'center'}>30万円以上</Td>
                  </Tr>
                  <Tr>
                    <Td bg={'momo.200'} fontWeight={'bold'}>
                      月額費用
                    </Td>
                    <Td textAlign={'center'}>60,000円</Td>
                    <Td textAlign={'center'} position={'relative'} bg={'momo.600'}>
                      なし
                      <FaRegCircle className={styles.tableIcon} />
                    </Td>
                    <Td textAlign={'center'}>10,000円以上</Td>
                    <Td textAlign={'center'} position={'relative'} bg={'momo.600'}>
                      なし
                      <FaRegCircle className={styles.tableIcon} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td bg={'momo.200'} fontWeight={'bold'}>
                      価格表示
                    </Td>
                    <Td textAlign={'center'} position={'relative'} bg={'momo.600'}>
                      HPにて記載
                      <FaRegCircle className={styles.tableIcon} />
                    </Td>
                    <Td textAlign={'center'} position={'relative'} bg={'momo.600'}>
                      商品ページに記載
                      <FaRegCircle className={styles.tableIcon} />
                    </Td>
                    <Td textAlign={'center'}>なし</Td>
                    <Td textAlign={'center'}>なし</Td>
                  </Tr>
                  <Tr>
                    <Td bg={'momo.200'} fontWeight={'bold'}>
                      デザイン自由度
                    </Td>
                    <Td textAlign={'center'} position={'relative'} bg={'momo.600'}>
                      高い
                      <FaRegCircle className={styles.tableIcon} />
                    </Td>
                    <Td textAlign={'center'}>制作者による</Td>
                    <Td textAlign={'center'}>低い</Td>
                    <Td textAlign={'center'}>高い</Td>
                  </Tr>
                  <Tr>
                    <Td bg={'momo.200'} fontWeight={'bold'}>
                      ページ更新
                    </Td>
                    <Td textAlign={'center'} position={'relative'} bg={'momo.600'}>
                      基本毎月4回
                      <FaRegCircle className={styles.tableIcon} />
                    </Td>
                    <Td textAlign={'center'}>なし</Td>
                    <Td textAlign={'center'}>追加料金が発生</Td>
                    <Td textAlign={'center'}>追加料金が発生</Td>
                  </Tr>
                  <Tr>
                    <Td bg={'momo.200'} fontWeight={'bold'}>
                      SEO対策
                    </Td>
                    <Td textAlign={'center'} position={'relative'} bg={'momo.600'}>
                      基本含む
                      <FaRegCircle className={styles.tableIcon} />
                    </Td>
                    <Td textAlign={'center'}>なし</Td>
                    <Td textAlign={'center'}>追加料金が発生</Td>
                    <Td textAlign={'center'}>追加料金が発生</Td>
                  </Tr>
                  <Tr>
                    <Td bg={'momo.200'} fontWeight={'bold'}>
                      客先訪問
                    </Td>
                    <Td textAlign={'center'} position={'relative'} bg={'momo.600'}>
                      毎月1回以上
                      <FaRegCircle className={styles.tableIcon} />
                    </Td>
                    <Td textAlign={'center'}>なし</Td>
                    <Td textAlign={'center'}>なし</Td>
                    <Td textAlign={'center'}>追加料金が発生</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <Box mt={10}>
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
      </Box>
      <Box
        bg={'linear-gradient(-225deg, #eeeeee 0%, #ffffff 56%, #eeeeee 100%);'}
        position={'relative'}
        overflow={'hidden'}
        pt={{ base: 88, md: 120 }}
        pb={{ base: 90, md: 180 }}
      >
        <Box p={4} maxW={1152} mx={'auto'}>
          <Box>
            <Heading as={'h2'} mr={4} size={{ base: 'md', md: 'lg' }} display={'flex'}>
              <FaCheckCircle color={'#ff7bac'} />
              <Box as={'span'} ml={2}>
                フルカスタマイズデザイン
              </Box>
            </Heading>
          </Box>
          <Box mt={{ base: '44px', md: '60px' }}>
            <Box
              maxW={960}
              mx={'auto'}
              py={8}
              fontSize={{ base: 'medium', md: 'large' }}
              fontWeight={500}
              lineHeight={2}
            >
              <Text>
                お客様に選ばれる理由の3つ目は、
                <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
                  テンプレートを使用しなしフルカスタマイズデザイン
                </Box>
                という点にあります。安価なホームページ制作会社にありがちな無個性でスマホ対応していないデザインには決してしません。
              </Text>
            </Box>
            <Box w={'100%'}>
              <SideScrollIcon />
              <Box
                m={{ base: 1, md: 0 }}
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
                {designData.map((item, i) => (
                  <Card minW={280} w={'auto'} maxW={350} key={i}>
                    <CardBody>
                      <Image src={`${IMAGEBASEURL}/reason/design${i + 1}.webp`} alt={item.title} />
                      <Stack mt="6" spacing="5">
                        <Heading as={'h3'} size={{ base: 'sm', md: 'md' }}>
                          {item.title}
                        </Heading>
                        <Text fontSize={{ base: 'small', md: 'medium' }}>{item.content}</Text>
                      </Stack>
                    </CardBody>
                  </Card>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        bg={'white'}
        position={'relative'}
        overflow={'hidden'}
        pt={{ base: 88, md: 120 }}
        pb={{ base: 90, md: 180 }}
      >
        <Box p={4} maxW={1152} mx={'auto'}>
          <Box>
            <Heading as={'h2'} mr={4} size={{ base: 'md', md: 'lg' }} display={'flex'}>
              <FaCheckCircle color={'#ff7bac'} />
              <Box as={'span'} ml={2}>
                WEB集客との違い
              </Box>
            </Heading>
          </Box>
          <Box mt={{ base: '44px', md: '60px' }}>
            <Box
              maxW={960}
              mx={'auto'}
              py={8}
              fontSize={{ base: 'medium', md: 'large' }}
              fontWeight={500}
              lineHeight={2}
            >
              <Text>
                お客様に選ばれる理由の4つ目は、弊社のサービスが
                <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
                  WEBブランディング
                </Box>
                という点にあります。よく似た概念のWEB集客と比較してみると以下のようになります。
              </Text>
            </Box>
            <SideScrollIcon />
            <Box
              m={{ base: 1, md: 0 }}
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
              <Table>
                <Thead>
                  <Tr fontSize={'small'}>
                    <Th minW={100} textAlign={'center'} fontWeight={'bold'}>
                      比較項目
                    </Th>
                    <Th minW={300} textAlign={'center'} fontWeight={'bold'}>
                      WEBブランディング
                    </Th>
                    <Th minW={300} textAlign={'center'} fontWeight={'bold'}>
                      WEB集客
                    </Th>
                  </Tr>
                </Thead>
                <Tbody fontSize={'small'}>
                  <Tr>
                    <Td bg={'momo.200'} fontWeight={'bold'} textAlign={'center'}>
                      目的
                    </Td>
                    <Td>
                      企業やサービスの認知度とイメージを向上させ、顧客との信頼関係を構築することを⽬指す。
                    </Td>
                    <Td>
                      サイトへのアクセス数を増やし、⾏動（購⼊、登録、問い合わせなど）を促すことを⽬指す。
                    </Td>
                  </Tr>
                  <Tr>
                    <Td bg={'momo.200'} fontWeight={'bold'} textAlign={'center'}>
                      手法
                    </Td>
                    <Td>
                      <UnorderedList>
                        <ListItem>ビジュアルデザインの統⼀</ListItem>
                        <ListItem>⼀貫したメッセージの発信</ListItem>
                        <ListItem>ブランド価値の訴求</ListItem>
                        <ListItem>⼝コミやレビューの活⽤</ListItem>
                      </UnorderedList>
                    </Td>
                    <Td>
                      <UnorderedList>
                        <ListItem>SEO対策</ListItem>
                        <ListItem>広告（リスティング広告、SNS広告）</ListItem>
                        <ListItem>商品サービスのマーケティング</ListItem>
                        <ListItem>メールマーケティング（メルマガ配信）</ListItem>
                      </UnorderedList>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td bg={'momo.200'} fontWeight={'bold'} textAlign={'center'}>
                      目標
                    </Td>
                    <Td>
                      <UnorderedList>
                        <ListItem>ブランド認知度の向上</ListItem>
                        <ListItem>ブランド好感度の向上</ListItem>
                        <ListItem>リピート率の向上</ListItem>
                        <ListItem>顧客ロイヤルティの向上</ListItem>
                      </UnorderedList>
                    </Td>
                    <Td>
                      <UnorderedList>
                        <ListItem>クリック数</ListItem>
                        <ListItem>訪問者数</ListItem>
                        <ListItem>成約率</ListItem>
                      </UnorderedList>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td bg={'momo.200'} fontWeight={'bold'} textAlign={'center'}>
                      KPI
                    </Td>
                    <Td>
                      <UnorderedList>
                        <ListItem>商品や企業名での検索数</ListItem>
                        <ListItem>ユーザーのホームページの滞在時間</ListItem>
                        <ListItem>ホームページへの再来訪率</ListItem>
                        <ListItem>⼝コミやレビューの数など</ListItem>
                      </UnorderedList>
                    </Td>
                    <Td>
                      <UnorderedList>
                        <ListItem>サイト全体の訪問者数</ListItem>
                        <ListItem>訪問者が閲覧したページの枚数</ListItem>
                        <ListItem>コンバージョン率</ListItem>
                        <ListItem>コンバージョンに必要なコスト</ListItem>
                      </UnorderedList>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td bg={'momo.200'} fontWeight={'bold'} textAlign={'center'}>
                      効果
                    </Td>
                    <Td>
                      ⻑期的に影響を与えるもので、⼀度築かれたブランド価値は⻑期間維持されやすい。
                    </Td>
                    <Td>⽐較的短期間でコンバージョン率が向上するが、継続的な取り組みが必要。</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <Box mt={10}>
              <Box py={10}>
                <Link
                  display={'block'}
                  w={250}
                  mx={'auto'}
                  href="/service"
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
                    <ImDisplay size={'1.5em'} />
                    <Text ml={2}>サービス内容を見る</Text>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
