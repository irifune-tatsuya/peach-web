import { Metadata } from 'next';

const pageTitle = '記事の検索結果';
const description =
  '岡山のチャレンジする起業家を応援するインタビューマガジン「ピーチファイ」です。こちらのページは記事の検索結果です。';

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
