import { Box, Heading } from '@chakra-ui/react';

type Props = {
  titleEn: string;
  titleJp: string;
};

export default function Title({ titleEn, titleJp }: Props) {
  return (
    <Box pt={{ base: 9, md: 118 }} pb={18} color={'momo.100'}>
      <Box maxW={1152} mx={'auto'} p={4}>
        <Box display={'inline-block'} pr={1}>
          <Box fontSize={'medium'} fontWeight={'bold'}>
            {titleJp}
          </Box>
          <Heading as={'h1'}>{titleEn}</Heading>
        </Box>
      </Box>
    </Box>
  );
}
