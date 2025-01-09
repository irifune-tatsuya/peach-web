import { Metadata } from 'next';

const pageTitle = 'ランディングページデザイン提案01';
const description =
  '若々しい起業家のためのランディングページデザインで、多くの写真を使用して視覚的に訴求できるように心がけました。こちらは起業家の挨拶セクションとなります。';

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
