import { Image } from '@chakra-ui/react';
import React from 'react';

type Props = {
  mt?: Array<string>;
  ml?: Array<string>;
  display?: Array<string>;
};

export default function SideScrollIcon(props: Props) {
  const {
    mt = { base: '15px', sm: '30px' },
    ml = { base: '10px' },
    display = { base: 'block', md: 'none' },
  } = props;
  return (
    <Image
      src={'/common/side-scroll.png'}
      alt="横にスクロールできます"
      display={display}
      mt={mt}
      ml={ml}
      mb="10px"
      w="125px"
      h="auto"
    />
  );
}
