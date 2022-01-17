import { Flex, Text, Box, Container, IconButton } from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../assets/logo-min.png';

export const Navbar = () => (
  <Flex
    height={20}
    justifyContent="center"
    alignItems="center"
    width="full"
    background="transparent"
    borderBottom="1.5px solid"
    borderColor="brand.900"
  >
    <Container maxW="container.xl">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" justifyContent="center">
          <Box height={10} width={10} overflow="hidden">
            <Image src={logo} alt="dango manga logo" />
          </Box>
          <Box marginLeft={4}>
            <Text fontSize="md" fontWeight="bold" color="brand.800">
              Dango Manga
            </Text>
          </Box>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Box cursor="pointer">
            <Link href="/">
              <Text
                fontSize="sm"
                fontWeight="medium"
                letterSpacing="wider"
                color="brand.800"
              >
                Featured
              </Text>
            </Link>
          </Box>
          <Box marginLeft={6} cursor="pointer">
            <Text
              fontSize="sm"
              fontWeight="medium"
              letterSpacing="wider"
              color="brand.800"
            >
              Popular
            </Text>
          </Box>
          <Box marginLeft={6} cursor="pointer">
            <Link href="/browse">
              <Text
                fontSize="sm"
                fontWeight="medium"
                letterSpacing="wider"
                color="brand.800"
              >
                Browse
              </Text>
            </Link>
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
        <Flex>
          <IconButton
            aria-label="search-button"
            variant="ghost"
            color="brand.800"
            icon={<BiSearchAlt size={22} />}
          />
        </Flex>
      </Flex>
    </Container>
  </Flex>
);
