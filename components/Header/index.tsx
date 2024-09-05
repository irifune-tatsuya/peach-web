import styles from './index.module.css';
import { MENU } from '@/constants';
import { Box, Image, Link, UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { IoMail } from 'react-icons/io5';
// import { FaGripLines } from 'react-icons/fa';

export default function Header() {
  return (
    <Box
      as="header"
      py={16}
      px={24}
      h={76}
      position={'fixed'}
      top={0}
      w={'100%'}
      bg={'white'}
      display={{ base: 'none', md: 'block' }}
    >
      <Box display={'flex'}>
        <Link href="/">
          <Image
            src="/common/rectangle_logo.svg"
            width={{ md: 150, lg: 190 }}
            height={'auto'}
            alt="ピーチウェブ"
          />
        </Link>
        <Box as="nav" ml={'auto'} display={'flex'} alignItems={'center'} height={'100%'}>
          <UnorderedList
            display={'flex'}
            alignItems={'center'}
            height={'100%'}
            listStyleType={'none'}
            gap={32}
            mr={32}
            fontWeight={'bold'}
          >
            {MENU.map((item, i) => (
              <ListItem key={i}>
                <Link
                  fontSize={{ base: 'small', lg: 'medium' }}
                  display={'block'}
                  py={10}
                  href={item.href}
                  _hover={{
                    color: 'momo.100',
                  }}
                >
                  {item.title}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
          <Link display={'block'} href="/contact" textAlign={'center'}>
            <Box
              py={'0.5em'}
              px={'1.5em'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              height={'100%'}
              className={'slide-btn'}
              borderRadius={30}
              fontSize={{ base: 'small', lg: 'medium' }}
            >
              <IoMail size={'1.5em'} />
              <Text ml={4}>お問い合わせ</Text>
            </Box>
          </Link>
          {/* <Button>
            <Box display={'flex'} flexFlow={'column'} alignItems={'center'}>
              <FaGripLines size={'2rem'} />
              <span className={styles.menu}>Menu</span>
            </Box>
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
}
