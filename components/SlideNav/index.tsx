'use client';

import { Box, VStack, Heading, Link as ChakraLink, HStack, Icon } from '@chakra-ui/react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link as ScrollLink } from 'react-scroll';

interface TocItem {
  id: string;
  title: string;
  level?: number;
}

interface SlideNavProps {
  data: TocItem[];
  activeId: string;
  setActiveId: (id: string) => void;
}

const SlideNav: React.FC<SlideNavProps> = ({ data, activeId, setActiveId }) => {
  return (
    <Box as="nav" p={5} bg="white" boxShadow="md" borderRadius="lg">
      <Heading
        as="h2"
        size="sm"
        mb={4}
        pb={3}
        textAlign="center"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        目次
      </Heading>
      <VStack as="ul" align="stretch" spacing={1}>
        {data.map((item) => {
          const isActive = activeId === item.id;
          const isSubLevel = item.level === 2;

          return (
            <Box as="li" key={item.id} listStyleType="none">
              <ChakraLink
                as={ScrollLink}
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                onSetActive={(to: string) => setActiveId(to)}
                display="block"
                py={2}
                px={3}
                borderRadius="md"
                transition="all 0.2s ease-in-out"
                cursor="pointer"
                bg={isActive ? 'momo.600' : 'transparent'}
                color={isActive ? 'momo.100' : 'gray.700'}
                fontWeight={isActive ? 'bold' : 'normal'}
                _hover={{
                  bg: 'gray.100',
                }}
                fontSize={isSubLevel ? 'sm' : 'md'}
                pl={isSubLevel ? 4 : 2}
              >
                <HStack>
                  <Icon as={MdKeyboardArrowRight} color={isActive ? 'momo.100' : 'gray.400'} />
                  <Box as="span" flex="1">
                    {item.title}
                  </Box>
                </HStack>
              </ChakraLink>
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
};

export default SlideNav;
