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
      <div className="mx-auto max-w-6xl p-4 pb-[60px] md:pb-[624px]">
        <div className="mx-auto max-w-[960px] pb-16 text-lg font-medium leading-loose">
          <p>
            合同会社ピーチウェブへのご質問、仕事のご依頼、「ピーチファイ」インタビューへのご希望、その他弊社へのご相談などを受け付けております。
            <br />
            下記のフォームへご入力の上、送信してください。
            <br />※
            弊社はお問い合わせいただいたメールのIPアドレスを取得、一時的に保管している場合があります。
          </p>
        </div>
        <ContactForm />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
