import '@fontsource/poppins';
import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    brand: {
      900: 'rgb(21, 34, 50, 1)',
      800: 'rgb(211, 213, 243, 1)',
      700: 'rgb(11,22,34, 1)',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});
