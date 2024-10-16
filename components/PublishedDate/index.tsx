import { IMAGEBASEURL } from '@/constants';
import { formatDate } from '@/libs/utils';
import { Box, Image } from '@chakra-ui/react';

type Props = {
  date: string;
  simple?: boolean;
  fontSize?: string;
};

export default function PublishedDate({ date, simple = false, fontSize = 'small' }: Props) {
  return (
    <Box
      as={'span'}
      p={0}
      display={'flex'}
      gap={2}
      alignItems={'center'}
      lineHeight={4}
      fontSize={fontSize}
    >
      {!simple ? (
        <Image src={`${IMAGEBASEURL}/clock.svg`} alt={'時計'} w={3} h={3} loading={'lazy'} />
      ) : null}
      {!simple ? formatDate(date) + ' 公開' : formatDate(date)}
    </Box>
  );
}
