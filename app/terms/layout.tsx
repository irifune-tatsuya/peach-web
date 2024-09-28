import { Metadata } from 'next';

const pageTitle = 'プライバシーポリシー';
const description =
  'ホームページの制作・運用、事業計画の見直しなどを通じてWEBブランディングを行う岡山の会社ピーチウェブの公式サイトです。こちらはプライバシポリシーのページです。';

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
