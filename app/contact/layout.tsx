import { Metadata } from 'next';

const pageTitle = 'お問い合わせ';
const description =
  'ピーチウェブのサービスに関する業務ご依頼やご質問等、気になることは何でもフォームよりご連絡くださいませ。後日代表よりご返信させていただきます。';

export const metadata: Metadata = {
  title: pageTitle,
  description: description,
  openGraph: {
    title: pageTitle,
    description: description,
    type: 'article',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return [children];
}
