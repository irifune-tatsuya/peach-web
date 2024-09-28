import { Metadata } from 'next';

const pageTitle = '選ばれる理由';
const description =
  '弊社の強み、他社と比較して選ばれる理由についてお話します。ホームページ制作は高い！どんなページが良いか一緒に考えてほしいという方は弊社の強みに共感していただけると思います！';

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
