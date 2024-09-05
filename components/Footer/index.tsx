import { Box, UnorderedList, ListItem, Link, Image, Text, textDecoration } from '@chakra-ui/react';
import styles from './index.module.css';
import { MENU, CONTACT } from '@/constants';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLine } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

export default function Footer() {
  return (
    <Box as="footer" pt={46} px={16} pb={86} display={{ base: 'none', md: 'block' }}>
      <Box w={'100%'} display={'flex'} justifyContent={'center'}>
        <Link href="/">
          <Image
            src="/common/square_logo.svg"
            width={'3vw'}
            height={'auto'}
            minW={100}
            maxW={100}
            alt="ピーチウェブ"
          />
        </Link>
      </Box>
      <Box display={'flex'} justifyContent={'center'} gap={40} mt={32}>
        <Box as="nav">
          <UnorderedList
            listStyleType={'none'}
            fontWeight={'bold'}
            display={'flex'}
            flexFlow={'column'}
            gap={16}
            fontSize={'small'}
          >
            {MENU.map((item, i) => (
              <ListItem key={i}>
                <Link
                  href={item.href}
                  _hover={{
                    color: 'momo.100',
                  }}
                >
                  {item.title}
                </Link>
              </ListItem>
            ))}
            <ListItem>
              <Link
                href="privacy"
                _hover={{
                  color: 'momo.100',
                }}
              >
                プライバシーポリシー
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="terms"
                _hover={{
                  color: 'momo.100',
                }}
              >
                利用規約
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Box as="address" fontStyle={'normal'} fontSize={'small'}>
            〒704-8176
            <br />
            岡山県岡山市東区中川町405-1
            <br />
            ヴィンテージ・プレイス201
          </Box>
          <Box display={'flex'} gap={20} mt={20}>
            <Link href={CONTACT.instagram} target="_blank">
              <FaInstagram size={'3em'} />
            </Link>
            <Link href={CONTACT.facebook} target="_blank">
              <FaFacebookSquare size={'3em'} />
            </Link>
            <Link href={CONTACT.line} target="_blank">
              <FaLine size={'3em'} />
            </Link>
          </Box>
          <Link
            display={'block'}
            href="/contact"
            mt={20}
            textAlign={'center'}
            borderRadius={40}
            className={'slide-btn'}
          >
            <Box
              py={'0.5em'}
              px={'1.5em'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              height={'100%'}
              className={styles.contact}
            >
              <IoMail size={'1.5em'} />
              <Text ml={4} _hover={{ textDecorationLine: 'none' }}>
                お問い合わせ
              </Text>
            </Box>
          </Link>
        </Box>
        <Box>
          <Box
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.774229050928!2d133.99540741233992!3d34.66040427282121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554093457eafe59%3A0x9de44f38a281f416!2z44CSNzA0LTgxNzYg5bKh5bGx55yM5bKh5bGx5biC5p2x5Yy65Lit5bed55S677yU77yQ77yV4oiS77yRIOODtOOCo-ODs-ODhuODvOOCuOODu-ODl-ODrOOCpOOCuQ!5e0!3m2!1sja!2sjp!4v1725538334551!5m2!1sja!2sjp"
            w={'30vw'}
            h={'100%'}
            _loading={'lazy'}
          ></Box>
        </Box>
      </Box>
      <Box w={'100%'} textAlign={'center'} mt={40}>
        <Text fontSize={'small'}>© 2024 PEACH WEB LLC</Text>
      </Box>
    </Box>
  );
}
