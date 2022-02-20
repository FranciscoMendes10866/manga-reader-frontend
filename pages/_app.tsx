import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'urql';

import theme from '../utils/theme';
import urqlClient from '../graphql/client';
import { Navbar, BottomNavbar } from '../components';
import { useScreen } from '../hooks';

const App = ({ Component, pageProps }: AppProps) => {
  const isDesktop = useScreen();

  return (
    <Provider value={urqlClient}>
      <ChakraProvider theme={theme}>
        <Box>
          {isDesktop ? <Navbar /> : <BottomNavbar />}
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
        </Box>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
