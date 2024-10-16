import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';

type toc = {
  text?: string;
  id?: string;
  name?: string;
};

type Props = {
  toc: toc[];
};

export default function TableOfContents({ toc }: Props) {
  return (
    <>
      {toc.length > 0 ? (
        <Box as={'nav'} p={4} my={9}>
          <Accordion allowToggle defaultIndex={[0]} bg={'momo.300'}>
            <AccordionItem>
              <Heading as={'h2'}>
                <AccordionButton fontWeight={'bold'}>
                  <AccordionIcon />
                  <Box as={'span'} py={2} fontSize={'large'}>
                    目次
                  </Box>
                </AccordionButton>
              </Heading>
              <AccordionPanel>
                <UnorderedList listStyleType={'none'} pl={0}>
                  {toc.map((item) => (
                    <Link to={item.id || ''} smooth={true} duration={200} offset={-76}>
                      <ListItem
                        key={item.id}
                        py={2}
                        fontSize={'small'}
                        textDecoration={'underline'}
                        cursor={'pointer'}
                        className={`toc-${item.name}`}
                      >
                        {item.text}
                      </ListItem>
                    </Link>
                  ))}
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      ) : (
        ''
      )}
    </>
  );
}
