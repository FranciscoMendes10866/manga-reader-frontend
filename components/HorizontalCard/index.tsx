import {
  Image,
  Box,
  Text,
  Flex,
  Badge,
  HStack,
  Heading,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { memo } from 'react';

import { Manga } from '../../generated/graphql';

interface IHorizontalCardProps {
  manga: Manga;
}

const HorizontalCard: NextPage<IHorizontalCardProps> = ({ manga }) => (
  <Flex
    padding={2}
    background="rgba( 255, 255, 255, 0.1 )"
    boxShadow="0 8px 32px 0 rgba( 7, 6, 7, 0.05 )"
    backdropFilter="blur( 4px )"
    borderRadius={10}
    border="1.5px solid rgba( 255, 255, 255, 0.18 )"
    cursor="pointer"
  >
    <Box
      bg="tomato"
      height={170}
      width={160}
      borderRadius={10}
      overflow="hidden"
    >
      <Image
        src={manga.thumbnail as string}
        objectFit="cover"
        alt={`${manga.name} cover image`}
        height="full"
        width="full"
      />
    </Box>
    <Flex
      flexDirection="column"
      marginLeft={4}
      width="full"
      justifyContent="start"
    >
      <Heading
        color="brand.800"
        letterSpacing="wide"
        fontSize="lg"
        marginTop={2}
      >
        {manga.name}
      </Heading>
      <HStack spacing={2} marginTop={4}>
        <Badge
          variant="subtle"
          background="brand.800"
          color="brand.900"
          width="max-content"
        >
          Action
        </Badge>
        <Badge
          variant="subtle"
          background="brand.800"
          color="brand.900"
          width="max-content"
        >
          Smut
        </Badge>
      </HStack>
      <Text
        color="brand.800"
        fontSize="sm"
        lineHeight="taller"
        letterSpacing="wide"
        marginTop={4}
      >
        {(manga.description as string).length > 110
          ? manga.description?.substring(0, 110) + '...'
          : manga.description}
      </Text>
    </Flex>
  </Flex>
);

export default memo(HorizontalCard);
