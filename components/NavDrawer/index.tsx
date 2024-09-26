import {
  Box,
  Link,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  Icon,
  UnorderedList,
  ListItem,
  DrawerHeader,
  useBreakpointValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { MENU } from '@/constants';
import { IoMail, IoCloseOutline } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const NavDrawer: NextPage<Props> = ({ isOpen, onClose }) => {
  const placement = useBreakpointValue({ base: 'bottom', md: 'right' }) as
    | 'left'
    | 'right'
    | 'top'
    | 'bottom';
  return (
    <Drawer isOpen={isOpen} placement={placement} onClose={onClose} autoFocus={false}>
      <DrawerOverlay />
      <DrawerContent bg={'white'}>
        <DrawerHeader display={'flex'} justifyContent={'end'}>
          <Icon
            display={{ base: 'none', md: 'block' }}
            onClick={onClose}
            as={IoCloseOutline}
            w={12}
            h={12}
            borderRadius={'50%'}
            p={2}
            bg={'momo.300'}
          />
        </DrawerHeader>
        <DrawerBody pt={10}>
          <Box as="nav" display={'flex'} justifyContent={{ base: 'center', md: 'end' }}>
            <UnorderedList listStyleType={'none'} w={'100%'}>
              {MENU.map((item, i) => (
                <ListItem borderBottom={'1px'} borderColor={'momo.400'} key={i}>
                  <Link
                    href={item.href}
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    fontWeight={'bold'}
                    py={4}
                    px={2}
                    _hover={{ textDecoration: 'none', color: 'momo.100' }}
                  >
                    {item.title}
                    <Icon as={FaArrowRight} color={'momo.100'} />
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </DrawerBody>
        <DrawerFooter display={{ base: 'block', md: 'none' }}>
          <Box
            w={'100%'}
            px={2}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Link display={'block'} href="/contact" textAlign={'center'}>
              <Box
                py={'1em'}
                px={'2em'}
                maxW={200}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'100%'}
                bg={'momo.100'}
                color={'white'}
                fontWeight={'bold'}
                borderRadius={30}
                fontSize={'small'}
              >
                <IoMail size={'1.5em'} />
                <Text ml={4}>お問い合わせ</Text>
              </Box>
            </Link>
            <Icon
              display={{ base: 'block', md: 'none' }}
              onClick={onClose}
              as={IoCloseOutline}
              w={12}
              h={12}
              borderRadius={'50%'}
              p={2}
              bg={'momo.300'}
            />
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
