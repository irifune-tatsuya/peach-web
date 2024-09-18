import { Article } from '@/libs/microcms';
import { Box, Grid, GridItem, ListItem, SimpleGrid, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import ArticleCard from '../ArticleCard';

type Props = {
  articles: Article[];
  category: string;
};

export default function GridArticleList({ articles, category }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <SimpleGrid
      fontSize={'large'}
      fontWeight={'normal'}
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={6}
    >
      {articles.map((article, i) => (
        <Box key={i} _hover={{ opacity: 0.6 }}>
          <ArticleCard article={article} category={category} maxW={450} />
        </Box>
      ))}
    </SimpleGrid>
  );
}
