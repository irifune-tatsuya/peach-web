'use client';
import { CONTACT } from '@/constants';
import { Box, Image, Link, useDisclosure } from '@chakra-ui/react';
import { NextPage } from 'next';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLine } from 'react-icons/fa';
import { MenuButton } from '../MenuButton';
import { NavDrawer } from '../NavDrawer';
import { ContactButton } from '../ContactButton';

export const Header: NextPage = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box
      as="header"
      py={3}
      px={6}
      h={76}
      position={'fixed'}
      top={0}
      zIndex={10}
      w={'100%'}
      bg={'white'}
      display={{ base: 'none', md: 'block' }}
    >
      <Box display={'flex'} justifyContent={'space-between'}>
        <Link href="/">
          <Image
            src="/common/rectangle_logo.svg"
            width={{ md: 150, lg: 190 }}
            height={'auto'}
            alt={'ピーチウェブ'}
          />
        </Link>
        <Box display={'flex'} alignItems={'center'} gap={5}>
          <Link href={CONTACT.instagram} target="_blank">
            <FaInstagram size={'2em'} />
          </Link>
          <Link href={CONTACT.facebook} target="_blank">
            <FaFacebookSquare size={'2em'} />
          </Link>
          <Link href={CONTACT.line} target="_blank">
            <FaLine size={'2em'} />
          </Link>
          <Box as="nav" ml={'auto'} display={'flex'} alignItems={'center'} height={'100%'}>
            <ContactButton />
          </Box>
          <MenuButton onToggle={onToggle} />
        </Box>
        <NavDrawer onClose={onClose} isOpen={isOpen} />
      </Box>
    </Box>
  );
};
