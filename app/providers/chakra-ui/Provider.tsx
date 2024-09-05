import { ChakraProvider } from '@chakra-ui/react';

const theme = {
  colors: {
    momo: {
      100: '#ff7bac',
      200: '#febdd6',
      300: '#eeeeee',
    },
  },
  breakpoints: {
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
};

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
