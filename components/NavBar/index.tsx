'use client';
import { Box, Image, Link, Text, useDisclosure } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ImDisplay } from 'react-icons/im';
import { IoBookOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import { MenuButton } from '../MenuButton';
import { NavDrawer } from '../NavDrawer';
import { IMAGEBASEURL } from '@/constants';
import React from 'react';

export const NavBar: NextPage = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <>
      <Box
        as="nav"
        py={'0.5em'}
        px={'2em'}
        position={'fixed'}
        bottom={0}
        zIndex={10}
        w={'100%'}
        bg={'momo.300'}
        display={{ base: 'flex', md: 'none' }}
        justifyContent={'space-between'}
        alignItems={'flex-end'}
      >
        <Link
          href="/article"
          display={'flex'}
          flexFlow={'column'}
          alignItems={'center'}
          w={10}
          _hover={{ textDecoration: 'none' }}
        >
          <IoBookOutline size={'1.5rem'} color={'ff7bac'} />
          <Text fontSize={'xx-small'} fontWeight={'bold'} mt={'0.1em'}>
            新着記事
          </Text>
        </Link>
        <Link
          href="/service"
          display={'flex'}
          flexFlow={'column'}
          alignItems={'center'}
          w={10}
          _hover={{ textDecoration: 'none' }}
        >
          <ImDisplay size={'1.5rem'} color={'ff7bac'} />
          <Text fontSize={'xx-small'} fontWeight={'bold'} mt={'0.1em'}>
            サービス
          </Text>
        </Link>
        <Link
          href="/"
          display={'flex'}
          flexFlow={'column'}
          alignItems={'center'}
          w={10}
          _hover={{ textDecoration: 'none' }}
        >
          <Image
            src={`${IMAGEBASEURL}/common/nav-momo.webp`}
            alt={'ホームに戻る'}
            w={'1.5rem'}
            h={'auto'}
          />
          <Text fontSize={'xx-small'} fontWeight={'bold'} mt={'0.1em'}>
            ホーム
          </Text>
        </Link>
        <Link
          href="/contact"
          display={'flex'}
          flexFlow={'column'}
          alignItems={'center'}
          w={10}
          _hover={{ textDecoration: 'none' }}
        >
          <GoMail size={'1.5rem'} color={'ff7bac'} />
          <Text fontSize={'xx-small'} fontWeight={'bold'} mt={'0.1em'}>
            お問合せ
          </Text>
        </Link>
        <MenuButton onToggle={onToggle} />
      </Box>
      <NavDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};
