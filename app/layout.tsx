import { Box } from '@chakra-ui/react';
import './globals.css';
import { Metadata } from 'next';
import { NavBar } from '@/components/NavBar';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { Provider } from './providers/chakra-ui/Provider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics/';
import { IMAGEBASEURL } from '@/constants';
import { Suspense } from 'react';

const siteName = 'ピーチウェブ -岡山のWEBブランディングサービス-';
const description =
  'あなたのビジネスが永く愛されますようWEBブランディングで岡山の企業をサポートする合同会社ピーチウェブの公式サイトです。';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
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
        alt: siteName,
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
    nocache: false,
    noarchive: false,
    noimageindex: false,
    nosnippet: false,
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <head>
        <link
          rel={'apple-touch-icon'}
          href={'/apple-touch-icon.png'}
          type={'image/png'}
          sizes={'180x180'}
        />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
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
}
