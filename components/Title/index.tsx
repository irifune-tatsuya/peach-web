import { Box, Heading } from '@chakra-ui/react';
import styles from './index.module.css';

type Props = {
  titleEn: string;
  titleJp: string;
};

export default function Title({ titleEn, titleJp }: Props) {
  return (
    <>
      <Box
        pt={{ base: 9, md: 118 }}
        pb={{ base: 10, md: '72px' }}
        color={'momo.100'}
        className={styles.animation}
      >
        <Box maxW={1152} mx={'auto'} p={4}>
          <Box display={'inline-block'} pr={1}>
            <Box fontSize={'medium'} fontWeight={'bold'}>
              {titleJp}
            </Box>
            <Heading as={'h1'}>{titleEn}</Heading>
          </Box>
        </Box>
      </Box>
    </>
  );
}
