'use client';

import { Icon } from '@chakra-ui/react';
import { NextPage } from 'next';
import { IoIosArrowUp } from 'react-icons/io';
import styles from './index.module.css';

export const ScrollToTopButton: NextPage = () => {
  return (
    <Icon
      display={{ base: 'block', md: 'none' }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      position="fixed"
      right={3}
      bottom={20}
      as={IoIosArrowUp}
      color={'momo.100'}
      w={10}
      h={10}
      borderRadius={'50%'}
      p={2}
      bg={'white'}
      zIndex={10}
      className={styles.button}
    />
  );
};
