import { Metadata } from 'next';

const pageTitle = '実績&デザイン集';
const description = '起業家様向けの小さなランディングページデザインです。';

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
