import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'urql';

import theme from '../utils/theme';
import urqlClient from '../graphql/client';
import { Navbar } from '../components';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider value={urqlClient}>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Box
          top={0}
          bottom={0}
          left={0}
          right={0}
          position="absolute"
          zIndex={-1}
          height="100vh"
          minW="full"
          minH="full"
          background="brand.700"
        />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
