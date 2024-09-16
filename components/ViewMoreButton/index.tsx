'use client';

import { Box, Link, Icon } from '@chakra-ui/react';
import styles from './index.module.css';
import { NextPage } from 'next';
import { FiArrowRight } from 'react-icons/fi';

type Props = {
  href: string;
  size: 'large' | 'small';
};

export const ViewMoreButton: NextPage<Props> = ({ href, size }) => {
  let sizeData: {
    letterSpacing: number;
    circleBase: number;
    circleMd: number;
    mlBase: number;
    mlMd: number;
    IconW: number;
  };

  if (size === 'small') {
    sizeData = {
      letterSpacing: 1.5,
      circleBase: 30,
      circleMd: 10,
      mlBase: 3,
      mlMd: 6,
      IconW: 3,
    };
  } else {
    sizeData = {
      letterSpacing: 2,
      circleBase: 62,
      circleMd: 62,
      mlBase: 30,
      mlMd: 46,
      IconW: 4,
    };
  }
  return (
    <Box display={{ base: 'flex', md: 'block' }} justifyContent={'center'}>
      <Link
        href={href}
        textDecoration={'none'}
        _hover={{ textDecoration: 'none', coler: 'momo.100' }}
        display={'flex'}
        alignItems={'center'}
      >
        <Box
          as={'span'}
          fontWeight={'bold'}
          fontSize={'small'}
          letterSpacing={sizeData.letterSpacing}
          textDecoration={'underline'}
          textUnderlineOffset={3}
          className={styles.viewMoreText}
        >
          View More
        </Box>
        <Box
          w={{ base: sizeData.circleBase, md: sizeData.circleMd }}
          h={{ base: sizeData.circleBase, md: sizeData.circleMd }}
          bg={'momo.100'}
          ml={{ base: sizeData.mlBase, md: sizeData.mlMd }}
          position={'relative'}
          borderRadius={'50%'}
          className={styles.viewMoreButton}
        >
          <Box position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>
            <Icon as={FiArrowRight} color={'white'} w={sizeData.IconW} h={'auto'} />
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
