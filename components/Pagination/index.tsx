import { LIMIT30 } from '@/constants';
import { Box, Link, ListItem, UnorderedList } from '@chakra-ui/react';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export default function Pagination({ totalCount, current = 1, basePath = '', q }: Props) {
  const pages = Array.from({ length: Math.ceil(totalCount / LIMIT30) }).map((_, i) => i + 1);
  return (
    <UnorderedList
      listStyleType={'none'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      p={6}
      mt={6}
    >
      {pages.map((p) => (
        <ListItem mx={1} key={p}>
          {current !== p ? (
            <Link
              href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              w={9}
              h={9}
              borderRadius={'4px'}
            >
              {p}
            </Link>
          ) : (
            <Box
              as={'span'}
              bg={'momo.300'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              w={9}
              h={9}
              borderRadius={'4px'}
            >
              {p}
            </Box>
          )}
        </ListItem>
      ))}
    </UnorderedList>
  );
}
