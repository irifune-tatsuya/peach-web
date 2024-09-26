import { Metadata } from 'next';

const pageTitle = 'サービス内容';
const description =
  'ピーチウェブのWEBブランディングのサービスについてご紹介します。ホームページを作るだけでなく記事を更新してお客様との信頼関係を醸成できるサービスを目指しております。';

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
