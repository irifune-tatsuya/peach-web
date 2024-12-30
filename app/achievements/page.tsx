import { Breadcrumbs } from '@/components/Breadcrumbs';
import Title from '@/components/Title';
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { IMAGEBASEURL } from '@/constants';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ACHIEVEMENTS } from '@/constants/achievements';

const breadcrumbs = [
  {
    title: 'ホーム',
    href: '/',
    isCurrentPage: false,
  },
  {
    title: '実績&デザイン集',
    href: '/achievements',
    isCurrentPage: true,
  },
];

export default async function Pricing() {
  return (
    <>
      <Title titleEn={'Achievements & Designs'} titleJp={'実績&デザイン集'} />
      <Box
        bg={'linear-gradient(to bottom, #fcdee9, #ffffff);'}
        position={'relative'}
        overflow={'hidden'}
        pt={{ base: 88, md: 120 }}
        pb={{ base: 90, md: 180 }}
      >
        <Box p={4} maxW={1152} mx={'auto'}>
          <Box>
            <Heading as={'h2'} mr={4} size={{ base: 'md', md: 'lg' }} display={'flex'}>
              <FaCheckCircle color={'#ff7bac'} />
              <Box as={'span'} ml={2}>
                制作実績
              </Box>
            </Heading>
          </Box>
          <Box
            maxW={960}
            mx={'auto'}
            py={8}
            fontSize={{ base: 'medium', md: 'large' }}
            fontWeight={500}
            lineHeight={2}
          >
            <Text>弊社で制作したホームページ、ランディングページの実績をご紹介します。</Text>
          </Box>
          <Box w={'100%'}>
            <SimpleGrid
              fontSize={'large'}
              fontWeight={'normal'}
              columns={{ base: 2, md: 3, lg: 4 }}
              spacing={6}
              gap={2}
            >
              {ACHIEVEMENTS.map((item, i) => (
                <Card
                  key={i}
                  rounded={'lg'}
                  transition={'transform 0.2s ease'}
                  _hover={{ transform: 'scale(1.02)' }}
                >
                  <CardBody p={2}>
                    <Heading
                      as={'h3'}
                      fontSize={{ base: 'x-small', md: 'medium' }}
                      textAlign={'center'}
                      py={3}
                    >
                      {`${item.name}様`}
                    </Heading>
                    <Link href={`achievements/${item.slug}`}>
                      <Image
                        src={`${IMAGEBASEURL}/achievements/${item.slug}/thumbnail.webp`}
                        alt={`${item.name}様の制作実績`}
                      />
                    </Link>
                    <Stack py={5}>
                      <Link
                        bg={'momo.100'}
                        color={'white'}
                        fontWeight={'bold'}
                        fontSize={'small'}
                        textAlign={'center'}
                        p={3}
                        rounded={'lg'}
                        href={item.href}
                        isExternal
                        _hover={{ textDecoration: 'none', opacity: 0.8 }}
                      >
                        <Box
                          as={'span'}
                          display={'flex'}
                          justifyContent={'center'}
                          alignItems={'center'}
                          gap={1}
                        >
                          <Box as={'span'}>サイトを見る</Box>
                          <FaExternalLinkAlt />
                        </Box>
                      </Link>
                      <Link
                        bg={'momo.200'}
                        fontWeight={'bold'}
                        fontSize={'small'}
                        textAlign={'center'}
                        p={3}
                        rounded={'lg'}
                        href={`achievements/${item.slug}`}
                        _hover={{ textDecoration: 'none', opacity: 0.8 }}
                      >
                        <Box as={'span'}>詳細を見る</Box>
                      </Link>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
