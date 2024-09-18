import { Article } from '@/libs/microcms';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import ArticleCard from '../ArticleCard';

type Props = {
  articles: Article[];
  category: string;
};

export default function SideScrollArticleList({ articles, category }: Props) {
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
        <ListItem
          key={i}
          w={['65vw', '65vw', '300px', '350px']}
          maxW={350}
          _hover={{ opacity: 0.6 }}
        >
          <ArticleCard article={article} category={category} maxW={350} />
        </ListItem>
      ))}
    </UnorderedList>
  );
}
