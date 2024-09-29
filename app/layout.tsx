import { Box } from '@chakra-ui/react';
import './globals.css';
import { Metadata, NextPage } from 'next';
import { NavBar } from '@/components/NavBar';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { Provider } from './providers/chakra-ui/Provider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics/';
import { IMAGEBASEURL } from '@/constants';

const siteName = 'ピーチウェブ -岡山のWEBブランディングサービス-';
const description =
  'あなたのビジネスが永く愛されますようWEBブランディングで岡山の企業をサポートする合同会社ピーチウェブの公式サイトです。';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: {
    template: `%s | ${siteName} `,
    default: `ホーム | ${siteName}`,
  },
  description: description,
  openGraph: {
    title: siteName,
    description: description,
    url: '/',
    siteName: siteName,
    images: [
      {
        url: `${IMAGEBASEURL}/ogp.jpg`,
        width: 800,
        height: 600,
      },
      {
        url: `${IMAGEBASEURL}/ogp-alt.jpg`,
        width: 1800,
        height: 1600,
        alt: siteName,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  icons: {
    icon: `/favicon.ico`,
    apple: `/apple-touch-icon.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: description,
    creator: '@irifune333',
    images: {
      url: `${IMAGEBASEURL}/ogp.jpg`,
      alt: siteName,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
};

type Props = {
  children: React.ReactNode;
};

const RootLayout: NextPage<Props> = ({ children }) => {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <head>
        <GoogleAnalytics />
      </head>
      <body suppressHydrationWarning={true}>
        <Provider>
          <Header />
          <Box as="main" mt={{ base: 0, md: 76 }} mx={'auto'}>
            {children}
          </Box>
          <ScrollToTopButton />
          <NavBar />
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
