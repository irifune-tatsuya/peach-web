import Title from '@/components/ui/Title';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ContactForm } from '@/components/features/ContactForm';
import React from 'react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { ContactPage, BreadcrumbList, WithContext } from 'schema-dts';

const pageTitle = 'お問い合わせ';

const description =
  'ピーチウェブのサービスに関する業務ご依頼やご質問等、気になることは何でもフォームよりご連絡くださいませ。後日代表よりご返信させていただきます。';

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

export const metadata: Metadata = {
  title: pageTitle,
  description: description,
  openGraph: {
    title: pageTitle,
    description: description,
    type: 'article',
  },
};

const jsonLdData: WithContext<ContactPage> = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: pageTitle,
  description: description,
  url: `${siteConfig.url}/contact`,
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

const ContactPage = () => {
  return (
    <>
      <JsonLd jsonLdData={jsonLdData} />
      <JsonLd jsonLdData={breadcrumbJsonLd} />
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
};

export default ContactPage;
