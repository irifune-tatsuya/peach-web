import { Article } from '@/libs/microcms';
import styles from './index.module.css';
import PublishedDate from '../PublishedDate';
import { Card, CardBody, Heading, Image, Link, Stack } from '@chakra-ui/react';
import { IMAGEBASEURL } from '@/constants';

type Props = {
  article: Article;
  category: string;
  maxW: number;
};

export default function ArticleCard({ article, category, maxW }: Props) {
  return (
    <Card minW={250} w={'auto'} maxW={maxW}>
      <Link href={`/${category}/${article.id}`} _hover={{ textDecoration: 'none' }}>
        <CardBody p={0}>
          {article.thumbnail ? (
            <Image src={article.thumbnail?.url} alt={article.title} w={'100%'} h={'auto'} />
          ) : (
            <Image
              src={`${IMAGEBASEURL}/no-image.webp`}
              alt={'No Image'}
              w={'100%'}
              maxW={450}
              h={'auto'}
              loading={'lazy'}
            />
          )}
          <Stack p={2}>
            <Heading size={'sm'} my={1} className={styles.articleTitle} h={10}>
              {article.title}
            </Heading>
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </Stack>
        </CardBody>
      </Link>
    </Card>
  );
}
