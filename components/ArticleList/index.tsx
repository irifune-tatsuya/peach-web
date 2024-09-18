import { Article } from '@/libs/microcms';
import { Box, Link, ListItem, OrderedList, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import PublishedDate from '../PublishedDate';

type Props = {
  articles: Article[];
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
    <OrderedList
      borderTop={1}
      borderStyle={'solid'}
      borderColor={'momo.400'}
      listStyleType={'none'}
      m={0}
    >
      {articles.map((item, i) => (
        <ListItem key={i} borderBottom={1} borderStyle={'solid'} borderColor={'momo.400'} p={0}>
          <Link
            href={`/${category}/${item.id}`}
            display={{ base: 'block', md: 'flex' }}
            py={6}
            px={5}
            alignItems={`center`}
            _hover={{ textDecoration: 'none' }}
          >
            <Box display={'flex'}>
              <PublishedDate date={item.publishedAt || item.createdAt} simple={true} />
              <Tag
                size={'sm'}
                ml={6}
                whiteSpace={'nowrap'}
                justifyContent={'center'}
                py={2}
                px={3}
                fontSize={'xx-small'}
                fontWeight={'bold'}
              >
                {category === 'news' ? 'お知らせ' : 'よくあるご質問'}
              </Tag>
            </Box>
            <Box ml={{ base: 0, md: 8 }} mt={{ base: 3, md: 0 }} lineHeight={1.5}>
              <Text className={'articleTitle'}>{item.title}</Text>
            </Box>
          </Link>
        </ListItem>
      ))}
    </OrderedList>
  );
}
