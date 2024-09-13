'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    momo: {
      100: '#ff7bac',
      200: '#febdd6',
      300: '#eeeeee',
      400: '#e0e0e0',
    },
  },
});

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
