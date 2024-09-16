import { Box } from '@chakra-ui/react';
import './globals.css';
import styles from './layout.module.css';
import { Metadata, NextPage } from 'next';
import { NavBar } from '@/components/NavBar';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { Provider } from './providers/chakra-ui/Provider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const siteName = 'ピーチウェブ -岡山のWEBブランディングサービス-';
const description =
  'あなたの仕事が永く愛されますように。お客様の事業の魅力を最大限発信するWEBブランディングをご提案する岡山の会社ピーチウェブの公式サイトです。ホームページの制作・運用、事業計画の見直しなど多岐にわたってサポートいたします。';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: {
    template: `%s | ${siteName} `,
    default: `HOME | ${siteName}`,
  },
  description: description,
  openGraph: {
    title: siteName,
    description: description,
    url: '/',
    siteName: siteName,
    images: [
      {
        url: `/ogp.jpg`,
        width: 800,
        height: 600,
      },
      {
        url: `ogp-alt.jpg`,
        width: 1800,
        height: 1600,
        alt: siteName,
      },
    ],
    locale: 'ja_JP',
    type: 'article',
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
      url: `og.jpg`,
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
      <body suppressHydrationWarning={true}>
        <Provider>
          <Header />
          <Box as="main" className={styles.main} mt={{ base: 0, lg: 76 }}>
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
