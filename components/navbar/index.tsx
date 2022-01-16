import { Flex, Text, Box, Container, Image, Button } from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';

export const Navbar = () => {
  return (
    <Flex
      position="fixed"
      height={20}
      justifyContent="center"
      alignItems="center"
      width="full"
      // background="brand.900"
      background="transparent"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          <Box height={10} width={10} borderRadius={6} overflow="hidden">
            <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          </Box>
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
