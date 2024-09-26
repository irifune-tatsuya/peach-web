import { Box, Link, Text } from '@chakra-ui/react';
import { IoMail } from 'react-icons/io5';
import { NextPage } from 'next';
import styles from './layout.module.css';
import { CONTACT } from '@/constants';
import { FaLine } from 'react-icons/fa';

export const ContactButtonArea: NextPage = () => {
  return (
    <>
      <Box
        display={{ base: 'block', md: 'flex' }}
        gap={8}
        justifyContent={'center'}
        py={10}
        px={{ base: 10 }}
        bg={'momo.300'}
      >
        <Link
          display={'block'}
          href="/contact"
          textAlign={'center'}
          _hover={{ textDecoration: 'none' }}
          className={styles.contactButton}
        >
          <Box
            py={'1em'}
            px={'2em'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'100%'}
            borderRadius={40}
            bg={'momo.100'}
            color={'white'}
            fontWeight={'bold'}
          >
            <IoMail size={'1.5em'} />
            <Text ml={2}>フォームからお問い合わせ</Text>
          </Box>
        </Link>
        <Link
          mt={{ base: 4, md: 0 }}
          display={'block'}
          href={CONTACT.line}
          isExternal
          textAlign={'center'}
          _hover={{ textDecoration: 'none' }}
          className={styles.contactButton}
        >
          <Box
            py={'1em'}
            px={'2em'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'100%'}
            borderRadius={40}
            bg={'#06c755'}
            color={'white'}
            fontWeight={'bold'}
          >
            <FaLine size={'1.5em'} />
            <Text ml={2}>LINEでお問い合わせ</Text>
          </Box>
        </Link>
      </Box>
    </>
  );
};
