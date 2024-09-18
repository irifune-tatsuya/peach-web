import styles from './index.module.css';
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
        <Box as={'nav'} p={4} my={9} fontSize={'small'}>
          <Accordion allowToggle defaultIndex={[0]} bg={'momo.300'}>
            <AccordionItem>
              <Heading as={'h2'}>
                <AccordionButton fontWeight={'bold'}>
                  <AccordionIcon />
                  <Box as={'span'} py={2}>
                    目次
                  </Box>
                </AccordionButton>
              </Heading>
              <AccordionPanel>
                <UnorderedList listStyleType={'none'} pl={0}>
                  {toc.map((item) => (
                    <ListItem key={item.id} py={1} className={`toc-${item.name}`}>
                      {item.text}
                    </ListItem>
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
