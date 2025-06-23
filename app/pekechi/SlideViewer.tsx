'use client';

import { useState, useEffect } from 'react';
import { Box, Grid, GridItem, Heading, VStack } from '@chakra-ui/react';
import CustomImage from '@/components/CustomImage';
import { IMAGEBASEURL } from '@/constants';
import SlideNav from '@/components/SlideNav';
import { ContactButton } from '@/components/ContactButton';
import { FaCalendarAlt } from 'react-icons/fa';

interface Slide {
  id: string;
  fileName: string;
  altText: string;
  tocTitle?: string;
  level?: number;
}

interface SlideViewerProps {
  slides: Slide[];
}

export default function SlideViewer({ slides }: SlideViewerProps) {
  const tocData = slides
    .filter((slide) => slide.tocTitle)
    .map((slide) => ({
      id: slide.id,
      title: slide.tocTitle!,
      level: slide.level || 1,
    }));

  const [activeTocId, setActiveTocId] = useState('');

  return (
    <>
      <Heading
        as={'h1'}
        w={'100%'}
        bg={'momo.100'}
        color={'white'}
        py={{ base: 4, md: 5 }}
        textAlign={'center'}
        fontSize={{ base: 'x-large', md: 'xxx-large' }}
      >
        <Box as={'span'} fontSize={{ base: 'small', md: 'large' }}>
          Webから新規ファンを増やすX運用代行
        </Box>
        <Box as={'br'} />
        【ぺけち】のご案内
      </Heading>
      <Box
        maxW="1200px"
        mx="auto"
        pt={{ base: 8, md: 16 }}
        pb={{ base: 40, md: 16 }}
        px={{ base: 4, md: 8 }}
      >
        <Grid templateColumns={{ md: '250px 1fr' }} gap={8}>
          <GridItem as="aside" display={{ base: 'none', md: 'block' }}>
            <Box position="sticky" top="80px">
              <SlideNav data={tocData} activeId={activeTocId} setActiveId={setActiveTocId} />
            </Box>
          </GridItem>
          <GridItem>
            <VStack spacing={{ base: 6, md: 10 }}>
              {slides.map((slide) => (
                <Box key={slide.id} id={slide.id} w="100%">
                  <CustomImage
                    src={`${IMAGEBASEURL}/pekechi/${slide.fileName}`}
                    alt={slide.altText}
                    priority={slide.id === 'slide-01' || slide.id === 'slide-02'}
                    w="100%"
                    aspectRatio={16 / 9}
                    boxShadow="lg"
                    borderRadius="md"
                    overflow="hidden"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                </Box>
              ))}
            </VStack>
          </GridItem>
        </Grid>
        <Box pt={{ base: 10, md: 16 }} textAlign="center" maxW="310px" mx="auto">
          <ContactButton
            text="オンラインミーティングの予約"
            href="https://calendar.app.google/PZsqsKjFUZ6a3StDA"
            IconComponent={FaCalendarAlt}
            iconSize="1.2rem"
          />
        </Box>
      </Box>
    </>
  );
}
