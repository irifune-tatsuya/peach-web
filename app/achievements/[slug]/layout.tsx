import { Metadata } from 'next';

const pageTitle = '実績&デザイン提案';
const description =
  'ピーチウェブが制作したホームページの実績の他、ホームページデザインの提案を行います。制作をご検討中の方や具体的なサイトのイメージを持ちたい方向けのご提案ページとなります。';

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
