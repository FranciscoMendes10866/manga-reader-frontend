import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Chapter = {
  __typename?: 'Chapter';
  id?: Maybe<Scalars['ID']>;
  mangaId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['String']>;
};

export type Manga = {
  __typename?: 'Manga';
  chapters?: Maybe<Array<Maybe<Chapter>>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getMangaDetails?: Maybe<Manga>;
  getMangaList?: Maybe<Array<Maybe<Manga>>>;
};

export type QueryGetMangaDetailsArgs = {
  mangaId: Scalars['ID'];
};

export type GetMangaListQueryVariables = Exact<{ [key: string]: never }>;

export type GetMangaListQuery = {
  __typename?: 'Query';
  getMangaList?:
    | Array<
        | {
            __typename?: 'Manga';
            id?: string | null | undefined;
            name?: string | null | undefined;
            thumbnail?: string | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export const GetMangaListDocument = gql`
  query getMangaList {
    getMangaList {
      id
      name
      thumbnail
    }
  }
`;

export function useGetMangaListQuery(
  options: Omit<Urql.UseQueryArgs<GetMangaListQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetMangaListQuery>({
    query: GetMangaListDocument,
    ...options,
  });
}
