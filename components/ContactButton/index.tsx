import { Box, Link, Text } from '@chakra-ui/react';
import { IoMail } from 'react-icons/io5';
import { NextPage } from 'next';

export const ContactButton: NextPage = () => {
  return (
    <Link
      display={'block'}
      href="/contact"
      textAlign={'center'}
      _hover={{ textDecoration: 'none' }}
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
      >
        <IoMail size={'1.5em'} />
        <Text ml={4} _hover={{ textDecorationLine: 'none' }}>
          お問い合わせ
        </Text>
      </Box>
    </Link>
  );
};
