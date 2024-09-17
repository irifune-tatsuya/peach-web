import { formatRichText } from '@/libs/utils';
import { renderToc } from '@/libs/render-toc';
import { type Article } from '@/libs/microcms';
import PublishedDate from '../PublishedDate';
import styles from './index.module.css';
import { Box, Heading, Image, Link } from '@chakra-ui/react';
import TableOfContents from '../TableOfContents';
import { FaInstagram } from 'react-icons/fa';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  const toc = renderToc(data.content);
  return (
    <Box as={'article'} maxW={{ base: 'auto', md: 620 }} mx={'auto'}>
      <Image src={data.thumbnail?.url} className={styles.thumbnail} w={'100%'} h={'auto'} />
      <Heading
        as={'h1'}
        mt={{ base: '30px', md: '72px' }}
        mb={5}
        fontSize={'xx-large'}
        textAlign={'left'}
        className={styles.title}
        px={4}
        lineHeight={1.5}
      >
        {data.title}
      </Heading>
      <Box
        px={4}
        h={'37px'}
        mb={5}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box display={'flex'} alignItems={'center'}>
          <Image
            src={'/article/momo-icon.png'}
            alt={'ピーチウェブアイコン'}
            w={'37px'}
            h={'37px'}
            borderRadius="full"
          />
          <Box display={'flex'} flexFlow={'column'} fontSize={'small'} ml={2}>
            <Box as={'span'}>合同会社ピーチウェブ</Box>
            <PublishedDate date={data.publishedAt || data.createdAt} simple={true} />
          </Box>
        </Box>
        <Box display={'flex'}>
          <Link
            href={'https://www.instagram.com/irifune3333?ref=badge'}
            isExternal
            className={styles.instagramButton}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            h={37}
            w={120}
            _hover={{ textDecoration: 'none', opacity: 0.7 }}
          >
            <FaInstagram className={styles.instagramIcon} size={20} color="white" />
            <Box
              as={'span'}
              fontSize={'small'}
              fontWeight={'bold'}
              color="white"
              lineHeight={'20px'}
              ml={1}
              position={'relative'}
            >
              Follow Me
            </Box>
          </Link>
        </Box>
      </Box>
      <TableOfContents toc={toc} />
      <Box
        px={4}
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
    </Box>
  );
}
