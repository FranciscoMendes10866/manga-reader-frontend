import { Flex, Text, Box, Container, Button } from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';
import Image from 'next/image';

import logo from '../../assets/logo-min.png';

export const Navbar = () => {
  return (
    <Flex
      height={20}
      justifyContent="center"
      alignItems="center"
      width="full"
      background="brand.900"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" justifyContent="center">
            <Box height={10} width={10} overflow="hidden">
              <Image src={logo} alt="Dan Abramov" />
            </Box>
            <Box marginLeft={4}>
              <Text fontSize="md" fontWeight="bold" color="white">
                Dango Manga
              </Text>
            </Box>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Box cursor="pointer">
              <Text
                fontSize="sm"
                fontWeight="medium"
                letterSpacing="wider"
                color="brand.800"
              >
                Featured
              </Text>
            </Box>
            <Box marginLeft={6} cursor="pointer">
              <Text
                fontSize="sm"
                fontWeight="medium"
                letterSpacing="wider"
                color="brand.800"
              >
                Latest
              </Text>
            </Box>
            <Box marginLeft={6} cursor="pointer">
              <Text
                fontSize="sm"
                fontWeight="medium"
                letterSpacing="wider"
                color="brand.800"
              >
                Browse
              </Text>
            </Box>
            <Box marginLeft={6} cursor="pointer">
              <Text
                fontSize="sm"
                fontWeight="medium"
                letterSpacing="wider"
                color="brand.800"
              >
                Favorited
              </Text>
            </Box>
          </Flex>
          <Box>
            <Button variant="ghost" color="brand.800">
              <BiSearchAlt size={22} />
            </Button>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};
