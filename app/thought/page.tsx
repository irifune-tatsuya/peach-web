import { Breadcrumbs } from '@/components/Breadcrumbs';
import Title from '@/components/Title';
import { IMAGEBASEURL } from '@/constants';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

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
  return (
    <>
      <Title titleEn={'Thought'} titleJp={'ピーチな想い'} />
      <Box
        bg={'linear-gradient(-225deg, #eeeeee 0%, #ffffff 56%, #eeeeee 100%);'}
        position={'relative'}
        overflow={'hidden'}
        pt={{ base: 88, md: 120 }}
        pb={{ base: 90, md: 180 }}
        _before={{
          content: '""',
          display: 'block',
          position: 'absolute',
          width: '1500px',
          height: '1116px',
          left: { base: '0x', md: '-200px' },
          top: { base: '0px', md: '-100px' },
          backgroundImage: `url(${IMAGEBASEURL}/thought/mission-bg.svg)`,
          zIndex: 1,
        }}
      >
        <Box p={4} maxW={1152} mx={'auto'}>
          <Box position={'relative'} zIndex={2}>
            <Heading as={'h2'} mr={4} display={'inline-block'}>
              Mission
            </Heading>
            <Box as={'span'} fontSize={'small'} fontWeight={500} letterSpacing={'0.08em'}>
              ミッション
            </Box>
          </Box>
          <Box
            mt={{ base: '44px', md: '60px' }}
            w={{ base: 330, md: 440 }}
            position={'relative'}
            zIndex={2}
          >
            <Image
              src={`${IMAGEBASEURL}/thought/mission-text.webp`}
              alt={'あなたのビジネスが永く愛されますよう。'}
              maxW={{ base: 330, md: 450, lg: 500 }}
              w={'100%'}
              h={'auto'}
              display={'block'}
            />
          </Box>
          <Text
            position={'relative'}
            zIndex={2}
            mt={{ base: 50, md: 65 }}
            lineHeight={2.2}
            fontSize={{ base: 'large', lg: 'x-large' }}
          >
            世に新しい価値を生み出す事業。
            <Box as={'br'} />
            その尊さを、その力強さを、その温かさを、
            <Box as={'br'} />
            WEBで発信し、未来のお客様に届ける。
            <Box as={'br'} />
            そのために私たちは挑戦し続けます。
          </Text>
        </Box>
      </Box>
      <Box py={{ base: 88, md: 120 }} bg={'momo.100'} color={'white'}>
        <Box p={4} maxW={1152} mx={'auto'}>
          <Box>
            <Heading as={'h2'} mr={4} display={'inline-block'}>
              Value
            </Heading>
            <Box as={'span'} fontSize={'small'} fontWeight={500} letterSpacing={'0.08em'}>
              ピーチウェブのバリュー
            </Box>
          </Box>
          <Box
            display={{ base: 'block', md: 'flex' }}
            gap={12}
            justifyContent={'center'}
            mt={'40px'}
          >
            {valueData.map((item, i) => (
              <Box as={'section'} _first={{ mt: 0 }} mt={{ base: '60px', md: 0 }} key={i}>
                <Heading
                  as={'h3'}
                  fontSize={{ base: 'x-large', lg: 'xx-large' }}
                  letterSpacing={'0.04em'}
                  mb={'44px'}
                  pb={33}
                  position={'relative'}
                  _after={{
                    content: '""',
                    display: 'block',
                    w: '56px',
                    h: '1px',
                    bg: 'white',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                  }}
                >
                  {item.title}
                </Heading>
                <Text fontWeight={'bold'} letterSpacing={'0.02em'} lineHeight={2}>
                  {item.content}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box pt={175} pb={190} overflow={'hidden'}>
        <Box position={'relative'} p={4} maxW={1152} mx={'auto'}>
          <Box>
            <Heading as={'h2'} mr={4} display={'inline-block'}>
              Message
            </Heading>
            <Box as={'span'} fontSize={'small'} fontWeight={500} letterSpacing={'0.08em'}>
              メッセージ
            </Box>
          </Box>
          <Box fontSize={'xx-large'} fontWeight={'bold'} lineHeight={1.7} my={35}>
            企業の想いを届ける仕事だからこそ、
            <Box as={'br'} />
            私自身も真心を込めて業務に当たります。
          </Box>
          <Box mt={{ base: 0, md: 90 }} display={{ base: 'block', md: 'flex' }} gap={12}>
            <Box display={{ base: 'none', md: 'block' }} w={'45vw'}>
              <Image
                src={`${IMAGEBASEURL}/thought/ceo-pc.webp`}
                alt={'合同会社ピーチウェブ 代表社員 入船 達也'}
                w={'100%'}
                h={'auto'}
                loading={'lazy'}
              />
            </Box>
            <Box display={{ base: 'block', md: 'none' }}>
              <Image
                src={`${IMAGEBASEURL}/thought/ceo-sp.webp`}
                alt={'合同会社ピーチウェブ 代表社員 入船 達也'}
                w={'100%'}
                h={'auto'}
                loading={'lazy'}
              />
            </Box>
            <Text
              fontSize={{ base: 'medium', md: 'large' }}
              fontWeight={500}
              letterSpacing={{ base: 1, md: 2 }}
              lineHeight={2}
              w={{ base: '100%', md: '45vw' }}
              mt={{ base: 35, md: 0 }}
            >
              2024年9月に創業した合同会社ピーチウェブ代表社員の入船達也と申します。
              岡山県を代表するフルーツ
              <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
                「桃」
              </Box>
              と事業領域を表す
              <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
                「WEB」
              </Box>
              が会社名の由来となっているとおり、
              地元岡山の企業をWEBの力で盛り上げたいと考えております。 桃の花言葉には
              <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
                「チャーミング」「気立ての良さ」「私はあなたのとりこ」「天下無敵」
              </Box>
              などがあります。
              お客様のお仕事の魅力をWEB上で発信し、未来の取引先が「私はあなたのとりこ」と言ってくれるような
              仕事をお約束いたします。
              ホームページ制作をどのように発注すればよいかわからないというお客様もいらっしゃると思います。
              まずは、その不安を解消するために
              <Box as={'span'} color={'momo.100'} fontWeight={'bold'}>
                直接顔を合わせて
              </Box>
              お打ち合わせできればと思っております。
              <Box as={'br'} />
              <Box as={'br'} />
              合同会社ピーチウェブ
              <Box as={'br'} />
              代表社員 入船達也
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        as={'section'}
        py={{ base: '80px', md: 150 }}
        bg={'linear-gradient(-225deg, #eeeeee 0%, #ffffff 56%, #eeeeee 100%);'}
      >
        <Box p={4} maxW={1152} mx={'auto'}>
          <Box mt={{ base: 33, md: 78 }} mb={{ base: 27, md: 43 }}>
            <Heading as={'h2'} mr={4} display={'inline-block'}>
              会社概要
            </Heading>
            <Box as={'span'} fontSize={'small'} fontWeight={500}>
              ※ 2024年10月時点
            </Box>
          </Box>
          {companyData.map((data, i) => (
            <Box
              key={i}
              as={'dl'}
              pb={37}
              mb={{ base: 8, md: 10 }}
              borderBottom={'1px solid #ddd'}
              position={'relative'}
              display={{ base: 'block', md: 'flex' }}
              gap={95}
            >
              <Box
                as={'dt'}
                maxW={'200px'}
                w={'100%'}
                mb={{ base: 5, md: 0 }}
                color={{ base: 'momo.100', md: 'black' }}
              >
                {data.title}
              </Box>
              <Box as={'dd'} lineHeight={1.5}>
                {data.content}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
