import { Metadata } from 'next';

const pageTitle = '実績&デザイン集';
const description =
  'ピーチウェブが制作したホームページの実績やホームページデザインの提案をするページとなります。制作をご検討中の方や具体的なサイトのイメージを持ちたい方向けに役立てていただけますと幸いです。';

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
