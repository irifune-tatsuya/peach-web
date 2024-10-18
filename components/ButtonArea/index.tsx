import { Box, Link, Text } from '@chakra-ui/react';
import { IoMail } from 'react-icons/io5';
import { NextPage } from 'next';
import styles from './index.module.css';
import { CONTACT } from '@/constants';
import { FaLine } from 'react-icons/fa';
import React from 'react';
import SimpleButton from '../SimpleButton';

type Button = {
  bg?: string;
  color?: string;
  href: string;
  isExternal: boolean;
  title: string;
  icon: React.ReactNode;
};

type Props = {
  bg?: string;
  buttons: Array<Button>;
};

export default function ButtonArea({
  bg = 'momo.300',
  buttons,
}: Props) {
  return (
    <Box
      display={{ base: 'block', md: 'flex' }}
      gap={8}
      justifyContent={'center'}
      py={10}
      px={10}
      bg={bg}
    >
      {buttons.map((button, i) => (
        <SimpleButton
          key={i}
          bg={button.bg}
          color={button.color}
          href={button.href}
          isExternal={button.isExternal}
          title={button.title}
          icon={button.icon}
        />
      ))}
    </Box>
  );
}
