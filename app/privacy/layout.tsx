import { Metadata } from 'next';

const pageTitle = 'プライバシーポリシー';
const description =
  'お問い合わせフォーム等で収集したお客様の個人情報の保護規定についてご案内しているプライバシポリシーのページです。';

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
