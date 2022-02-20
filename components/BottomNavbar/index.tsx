import { Flex, Text } from '@chakra-ui/react';
import { MdDynamicFeed } from 'react-icons/md';
import { RiSearch2Fill } from 'react-icons/ri';
import { BsFillBookmarkFill } from 'react-icons/bs';
import type { NextPage } from 'next';
import Link from 'next/link';

export const BottomNavbar: NextPage = () => (
  <Flex
    height={90}
    alignItems="center"
    justifyContent="space-evenly"
    background="brand.900"
    position="fixed"
    bottom="0"
    width="full"
    color="brand.800"
    borderTopRadius={32}
    shadow="dark-lg"
    border="1.5px solid rgba( 255, 255, 255, 0.18 )"
  >
    <Link href="/">
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <MdDynamicFeed size={27} />
        <Text marginTop={1}>Featured</Text>
      </Flex>
    </Link>
    <Link href="/browse">
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <RiSearch2Fill size={26} />
        <Text marginTop={1}>Browse</Text>
      </Flex>
    </Link>
    <Link href="/">
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <BsFillBookmarkFill size={22} />
        <Text marginTop={1}>Favorited</Text>
      </Flex>
    </Link>
  </Flex>
);
