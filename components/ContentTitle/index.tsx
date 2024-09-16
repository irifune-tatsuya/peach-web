import { Box, Heading } from '@chakra-ui/react';

type Props = {
  TitleEn: string;
  TitleJp: string;
  mb: number;
};

export default function ContentTitle({ TitleEn, TitleJp, mb }: Props) {
  return (
    <Heading as={'h2'} mb={mb} color={'momo.100'}>
      <Box
        as={'span'}
        fontSize={{ base: 'x-large', md: 'xx-large' }}
        fontWeight={'bold'}
        letterSpacing={'0.08em'}
      >
        {TitleEn}
      </Box>
      <Box as={'span'} fontSize={'small'} fontWeight={'bold'} ml={2}>
        {TitleJp}
      </Box>
    </Heading>
  );
}
