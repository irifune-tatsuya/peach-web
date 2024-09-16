import { Article } from '@/libs/microcms';
import {
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  ListItem,
  Stack,
  UnorderedList,
} from '@chakra-ui/react';
import PublishedDate from '../PublishedDate';
import styles from './index.module.css';

type Props = {
  articles?: Article[];
  category: string;
};

export default function ArticleList({ articles, category }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <UnorderedList
      m={{ base: 1, md: 0 }}
      listStyleType={'none'}
      fontSize={'large'}
      fontWeight={'normal'}
      display={'flex'}
      gap={4}
      overflow={'scroll'}
      overflowY={'hidden'}
      sx={{
        scrollSnapType: 'x mandatory',
      }}
      alignItems="start"
    >
      {articles.map((article, i) => (
        <ListItem key={i} w={['65vw', '65vw', '300px', '350px']} maxW={350}>
          <Card size="sm">
            <Link href={`/${category}/${article.id}`} _hover={{ textDecoration: 'none' }}>
              <CardBody p={0}>
                {article.thumbnail ? (
                  <Image
                    src={article.thumbnail?.url}
                    alt={article.title}
                    w={['65vw', '65vw', '300px', '350px']}
                    maxW={350}
                    h={'auto'}
                  />
                ) : (
                  <Image
                    src="/no-image.png"
                    alt="No Image"
                    w={['65vw', '65vw', '300px', '350px']}
                    maxW={350}
                    h={'auto'}
                  />
                )}
                <Stack p={2}>
                  <Heading size={'sm'} my={2} className={styles.articleTitle}>
                    {article.title}
                  </Heading>
                  <PublishedDate date={article.publishedAt || article.createdAt} />
                </Stack>
              </CardBody>
            </Link>
          </Card>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
