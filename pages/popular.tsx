import { Container, SimpleGrid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { useGetMangaListQuery, Manga } from '../generated/graphql';
import HorizontalCard from '../components/HorizontalCard';

const Popular: NextPage = () => {
  const [result] = useGetMangaListQuery();

  return (
    <div>
      <Head>
        <title>Dango Manga - Popular</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container paddingTop={20} maxW="container.xl">
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
            {result.data?.getMangaList &&
              result.data?.getMangaList.map((manga) => (
                <HorizontalCard key={manga?.id} manga={manga as Manga} />
              ))}
          </SimpleGrid>
        </Container>
      </main>
    </div>
  );
};

export default Popular;
