import { Metadata } from 'next';

const pageTitle = '特定商取引法に基づく表記';
const description =
  '合同会社ピーチウェブの特定商取引法に基づく表記ページです。事業者名、住所、連絡先、販売価格、支払い方法、返品条件など、お取引に関する大切な情報を掲載しています。安心してサービスをご利用いただくために、事前にご確認ください。';

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
