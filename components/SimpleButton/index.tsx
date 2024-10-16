import { Box, Link, Text } from '@chakra-ui/react';
import styles from './index.module.css';
import React from 'react';

type Props = {
  bg?: string;
  color?: string;
  href: string;
  isExternal: boolean;
  title: string;
  icon: React.ReactNode;
};

export default function SimpleButton({
  bg = 'momo.100',
  color = 'white',
  href,
  isExternal = false,
  title,
  icon,
}: Props) {
  return (
    <>
      <Link
        display={'block'}
        href={href}
        isExternal={isExternal}
        textAlign={'center'}
        _hover={{ textDecoration: 'none' }}
        className={styles.contactButton}
      >
        <Box
          py={'1em'}
          px={'2em'}
          my={{ base: 2, md: 0 }}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'100%'}
          borderRadius={40}
          bg={bg}
          color={color}
          fontWeight={'bold'}
        >
          {icon}
          <Text ml={2}>{title}</Text>
        </Box>
      </Link>
    </>
  );
}
