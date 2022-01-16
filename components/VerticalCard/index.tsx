import { Image, Box, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { memo } from 'react';

import { Manga } from '../../generated/graphql';

interface IVerticalCardProps {
  manga: Manga;
}

const VerticalCard: NextPage<IVerticalCardProps> = ({ manga }) => (
  <Box>
    <Box
      bg="tomato"
      height="250px"
      width={{ sm: 'full', md: 180 }}
      background="rgba( 255, 255, 255, 0.1 )"
      boxShadow="0 8px 32px 0 rgba( 7, 6, 7, 0.05 )"
      backdropFilter="blur( 4px )"
      borderRadius={10}
      border="1.5px solid rgba( 255, 255, 255, 0.18 )"
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
    <Text color="brand.800" marginTop={2}>
      {manga.name}
    </Text>
  </Box>
);

export default memo(VerticalCard);
