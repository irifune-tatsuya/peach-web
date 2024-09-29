import { Metadata } from 'next';

const pageTitle = 'プライバシーポリシー';
const description = 'ピーチウェブのWebサービスをご利用いただく際のご利用規約をまとめたページです。';

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
