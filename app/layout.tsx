// import { getTagList } from '@/libs/microcms';
// import { LIMIT } from '@/constants';
import { Box } from '@chakra-ui/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';
import { Provider } from './providers/chakra-ui/Provider';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Simple Blog',
  description: 'A simple blog presented by microCMS',
  openGraph: {
    title: 'Simple Blog',
    description: 'A simple blog presented by microCMS',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  // const tags = await getTagList({
  //   limit: LIMIT,
  // });
  return (
    <html lang="ja">
      <body>
        <Provider>
          <Header />
          {/* <Nav tags={tags.contents} /> */}
          <Box as="main" className={styles.main} mt={76}>
            {children}
          </Box>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
