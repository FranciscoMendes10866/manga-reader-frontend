import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Button,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { BsStarFill as Star } from 'react-icons/bs';
import Head from 'next/head';
import { useMemo } from 'react';
import dayjs from 'dayjs';

import {
  useGetLatestMangaUpdatesQuery,
  GetMangaDetailsResponse,
} from '../generated/graphql';
import { VerticalCard } from '../components';
import { useScreen } from '../hooks';

type IAccumulator = {
  id: string;
  latestChapter: string;
};

const Home: NextPage = () => {
  const isDesktop = useScreen();
  const [result] = useGetLatestMangaUpdatesQuery();

  const latestManga = useMemo(() => {
    if (!result.data?.latest) return [];

    const list = result.data.latest;

    const remapped = list
      .map((manga) => ({
        id: manga?.ID,
        chapters: manga?.chapters,
      }))
      .reduce((acc: IAccumulator[], curr) => {
        const { chapters } = curr;

        chapters?.sort((a, b) => {
          const aDate = dayjs(a?.CreatedAt);
          const bDate = dayjs(b?.CreatedAt);
          return aDate.isBefore(bDate) ? -1 : 1;
        });

        const latestChapter = chapters?.[0]?.CreatedAt;

        if (!latestChapter) return acc;
        else acc.push({ id: curr.id as string, latestChapter });

        return acc;
      }, []);

    remapped.sort((a, b) => {
      const aDate = dayjs(a.latestChapter);
      const bDate = dayjs(b.latestChapter);
      return aDate.isBefore(bDate) ? -1 : 1;
    });

    const firstFifteenElementsIds = remapped.slice(0, 15).map((el) => el.id);

    return list.filter((el) =>
      firstFifteenElementsIds.includes(el?.ID as string)
    );
  }, [result.data]);

  return (
    <div>
      <Head>
        <title>Dango Manga - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container paddingTop={isDesktop ? 20 : 10} maxW="container.xl">
          <Box
            position="relative"
            marginBottom={isDesktop ? 28 : 14}
            padding={10}
          >
            <Heading
              color="rgba(255, 255, 255, 0.8)"
              fontSize={140}
              fontWeight={900}
              fontFamily="sans-serif"
              letterSpacing="wide"
              lineHeight="none"
              textAlign="left"
            >
              Discover And Collect Your Mangas
            </Heading>
            <Box position="absolute" bottom="120" right="220">
              <Star size={22} color="rgba(255, 255, 255, 0.3)" />
            </Box>
            <Box position="absolute" top="32" left="-10">
              <Star size={14} color="rgba(255, 255, 255, 0.2)" />
            </Box>
            <Box position="absolute" top="-22" right="350">
              <Star size={18} color="rgba(255, 255, 255, 0.1)" />
            </Box>
            <Box position="absolute" bottom="-20" left="250">
              <Star size={16} color="rgba(255, 255, 255, 0.1)" />
            </Box>
          </Box>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingBottom={isDesktop ? 20 : 10}
          >
            <Text
              fontSize={20}
              color="rgba(255, 255, 255, 0.4)"
              fontWeight={500}
              letterSpacing="wide"
            >
              Manga Reader
            </Text>
            <Text
              fontSize={38}
              color="white"
              letterSpacing="wide"
              fontFamily="sans-serif"
              fontWeight={600}
            >
              Latest Drops
            </Text>
          </Flex>
          <SimpleGrid
            columns={{ sm: 2, md: 3, lg: 5 }}
            spacing={isDesktop ? 6 : 4}
          >
            {latestManga.map((manga) => (
              <VerticalCard
                key={manga?.ID}
                manga={manga as GetMangaDetailsResponse}
              />
            ))}
          </SimpleGrid>
          <Flex
            width="full"
            padding="60px 0px 120px 0px"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              size="lg"
              boxShadow="0px 10px 60px rgba(255, 255, 255, 0.3)"
            >
              View More
            </Button>
          </Flex>
        </Container>
      </main>
    </div>
  );
};

export default Home;
