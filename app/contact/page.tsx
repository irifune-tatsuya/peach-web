import { Box, Text } from '@chakra-ui/react';
import Title from '@/components/Title';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import React from 'react';

export const revalidate = 3600;

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: 'お問い合わせ',
    href: '/contact',
    isCurrentPage: true,
  },
];

export default function Contact() {
  return (
    <>
      <Title titleEn={'Contact'} titleJp={'お問い合わせ'} />
      <Box maxW={1152} mx={'auto'} p={4} pb={{ base: 15, md: 156 }}>
        <Box maxW={960} mx={'auto'} pb={16} fontSize={'large'} fontWeight={500} lineHeight={2}>
          <Text>
            合同会社ピーチウェブへのご質問、仕事のご依頼、「ピーチファイ」インタビューへのご希望、その他弊社へのご相談などを受け付けております。
            <Box as={'br'} />
            下記のフォームへご入力の上、送信してください。
            <Box as={'br'} />※
            弊社はお問い合わせいただいたメールのIPアドレスを取得、一時的に保管している場合があります。
          </Text>
        </Box>
        <ContactForm />
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
