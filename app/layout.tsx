import { Box } from '@chakra-ui/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import styles from './layout.module.css';
import { Provider } from './providers/chakra-ui/Provider';
import { NextPage } from 'next';

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

const RootLayout: NextPage<Props> = (props) => {
  const { children } = props;
  return (
    <html lang="ja">
      <body>
        <Provider>
          <Header />
          <Box as="main" className={styles.main} mt={{ base: 0, lg: 76 }}>
            {children}
          </Box>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
