'use client';

import { Box, Link, Text, Icon } from '@chakra-ui/react';
import { IoMail } from 'react-icons/io5';
import { NextPage } from 'next';
import { ElementType } from 'react';

interface ContactButtonProps {
  href?: string;
  text?: string;
  IconComponent?: ElementType;
  iconSize?: string;
}

export const ContactButton: NextPage<ContactButtonProps> = ({
  href = '/contact',
  text = 'お問い合わせ',
  IconComponent = IoMail,
  iconSize = '1.5em',
}) => {
  const isExternal = href.startsWith('http');

  return (
    <Link
      display={'block'}
      href={href}
      textAlign={'center'}
      _hover={{ textDecoration: 'none' }}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <Box
        py={'0.5em'}
        px={'1.5em'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'100%'}
        borderRadius={40}
        border={2}
        borderStyle={'solid'}
        borderColor={'momo.100'}
        color={'momo.100'}
        fontWeight={'bold'}
        className={'contactButton'}
        transition="all 0.2s ease-in-out"
        _hover={{
          bg: 'momo.100',
          color: 'white',
        }}
      >
        <Icon as={IconComponent} boxSize={iconSize} />
        <Text ml={2} _hover={{ textDecorationLine: 'none' }}>
          {text}
        </Text>
      </Box>
    </Link>
  );
};
