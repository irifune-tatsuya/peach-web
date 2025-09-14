'use client';

import { Icon } from '@chakra-ui/react';
import { NextPage } from 'next';
import { MdKeyboardArrowUp } from 'react-icons/md';
import styles from './index.module.css';

export const ScrollToTopButton: NextPage = () => {
  return (
    <Icon
      display={{ base: 'block', md: 'none' }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      position="fixed"
      right={3}
      bottom={28}
      as={MdKeyboardArrowUp}
      color={'momo.100'}
      boxSize={'50px'}
      borderRadius={'50%'}
      p={2}
      bg={'white'}
      zIndex={10}
      className={styles.button}
    />
  );
};
