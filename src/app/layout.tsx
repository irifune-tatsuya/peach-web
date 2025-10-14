import './globals.css';
import { Metadata } from 'next';
import { NavBar } from '@/components/common/NavBar';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { GoogleAnalytics } from '@/components/common/GoogleAnalytics/';
import { IMAGEBASEURL } from '@/constants';
import { Suspense } from 'react';
import { JsonLd } from '@/components/common/JsonLd';
import { siteConfig } from '@/config/site';
import type { Organization, WebSite } from 'schema-dts';

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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const organizationJsonLd: Organization = {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
    telephone: siteConfig.telephone,
    foundingDate: siteConfig.foundingDate,
    sameAs: [siteConfig.sns.instagram, siteConfig.sns.facebook, siteConfig.sns.x],
  };

  const webSiteJsonLd: WebSite = {
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/article/search?q={search_term_string}`,
      queryInput: 'required name=search_term_string',
    } as any,
  };

  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <head>
        <link
          rel={'apple-touch-icon'}
          href={'/apple-touch-icon.png'}
          type={'image/png'}
          sizes={'180x180'}
        />
        <JsonLd jsonLdData={{ '@context': 'https://schema.org', ...organizationJsonLd }} />
        <JsonLd jsonLdData={{ '@context': 'https://schema.org', ...webSiteJsonLd }} />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body suppressHydrationWarning={true}>
        <Header />
        <main className="mx-auto mt-0 md:mt-[76px] pb-[96px] md:pb-0">{children}</main>
        <ScrollToTopButton />
        <NavBar />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
