import { Metadata } from 'next';

const pageTitle = 'ピーチな想い';
const description =
  '弊社のミッション、ビジョン、バリューについてお話します。合同会社ピーチウェブ代表社員入船たち屋からのご挨拶もざいます。共感していただけることを願っております。';

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
