import { Metadata } from 'next';

const pageTitle = '料金体系';
const description =
  'ピーチウェブが提供するWEBブランディングの料金体系をご案内いたします。分かりやすく安心感のあるプライスでご納得いただけるかと思います。';

export const metadata: Metadata = {
  title: pageTitle,
  description: description,
  openGraph: {
    title: pageTitle,
    description: description,
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return [children];
}
