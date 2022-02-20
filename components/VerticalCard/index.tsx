import { Image, Box, Text, Flex, Button } from '@chakra-ui/react';
import { useHover } from 'usehooks-ts';
import type { NextPage } from 'next';
import { memo, useRef } from 'react';

import { GetMangaDetailsResponse } from '../../generated/graphql';

interface IVerticalCardProps {
  manga: Partial<GetMangaDetailsResponse>;
}

const Component: NextPage<IVerticalCardProps> = ({ manga }) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <Box
      ref={hoverRef}
      bg="tomato"
      width="100%"
      background="rgba( 255, 255, 255, 0.1 )"
      borderRadius={10}
      overflow="hidden"
      padding={3}
      _hover={{
        borderWidth: 1,
        borderColor: 'rgba( 255, 255, 255, 0.8 )',
        borderStyle: 'solid',
        boxShadow: '0px 0px 40px rgba(255, 255, 255, 0.15)',
      }}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Image
          src={manga.thumbnail}
          objectFit="cover"
          alt={`${manga.name} cover image`}
          width="full"
          borderRadius={10}
          height={isHover ? 'calc(300px - 50px)' : '300px'}
        />
        <Text
          color="brand.800"
          marginTop={2}
          fontFamily="sans-serif"
          fontWeight={600}
          letterSpacing="wide"
        >
          {manga.name && manga.name?.length > 20
            ? manga.name?.substring(0, 20) + '...'
            : manga.name}
        </Text>
        {isHover && (
          <Button width="full" marginTop={2} height={10}>
            View
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export const VerticalCard = memo(Component);
