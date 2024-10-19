import { Metadata } from 'next';

const pageTitle = 'ニュースレターのご案内';
const description =
  'ピーチウェブの最新情報をいち早くお届けするニュースレターの登録と解除をご利用できるページとなります。';

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
