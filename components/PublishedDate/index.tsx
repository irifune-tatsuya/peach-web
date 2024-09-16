import { formatDate } from '@/libs/utils';
import { Box, Image } from '@chakra-ui/react';

type Props = {
  date: string;
  simple?: boolean;
};

export default function PublishedDate({ date, simple = false }: Props) {
  return (
    <Box
      as={'span'}
      p={0}
      display={'flex'}
      gap={2}
      alignItems={'center'}
      lineHeight={4}
      fontSize={'small'}
    >
      {!simple ? <Image src="/clock.svg" alt="時計" w={3} h={3} /> : null}
      {!simple ? formatDate(date) + ' 公開' : formatDate(date)}
    </Box>
  );
}
