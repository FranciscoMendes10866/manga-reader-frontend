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

export type Categories = {
  __typename?: 'Categories';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  ID?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Chapters = {
  __typename?: 'Chapters';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  ID?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['String']>;
  manga_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GetAllMangasResponse = {
  __typename?: 'GetAllMangasResponse';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  ID?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Categories>>>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type GetChapterResponse = {
  __typename?: 'GetChapterResponse';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  ID?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['String']>;
  manga_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pages?: Maybe<Array<Maybe<Pages>>>;
};

export type GetMangaDetailsResponse = {
  __typename?: 'GetMangaDetailsResponse';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  ID?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['String']>;
  chapters?: Maybe<Array<Maybe<Chapters>>>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type Pages = {
  __typename?: 'Pages';
  CreatedAt?: Maybe<Scalars['String']>;
  DeletedAt?: Maybe<Scalars['String']>;
  ID?: Maybe<Scalars['String']>;
  UpdatedAt?: Maybe<Scalars['String']>;
  chapter_id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllMangas?: Maybe<Array<Maybe<GetAllMangasResponse>>>;
  getChapter?: Maybe<GetChapterResponse>;
  getLatestMangaUpdates?: Maybe<Array<Maybe<GetMangaDetailsResponse>>>;
  getMangaDetails?: Maybe<GetMangaDetailsResponse>;
};

export type QueryGetChapterArgs = {
  chapterId: Scalars['ID'];
};

export type QueryGetMangaDetailsArgs = {
  mangaId: Scalars['ID'];
};

export type GetAllMangasQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllMangasQuery = {
  __typename?: 'Query';
  list?:
    | Array<
        | {
            __typename?: 'GetAllMangasResponse';
            ID?: string | null | undefined;
            name?: string | null | undefined;
            thumbnail?: string | null | undefined;
            description?: string | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type GetLatestMangaUpdatesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetLatestMangaUpdatesQuery = {
  __typename?: 'Query';
  latest?:
    | Array<
        | {
            __typename?: 'GetMangaDetailsResponse';
            ID?: string | null | undefined;
            name?: string | null | undefined;
            thumbnail?: string | null | undefined;
            chapters?:
              | Array<
                  | {
                      __typename?: 'Chapters';
                      ID?: string | null | undefined;
                      CreatedAt?: string | null | undefined;
                    }
                  | null
                  | undefined
                >
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export const GetAllMangasDocument = gql`
  query getAllMangas {
    list: getAllMangas {
      ID
      name
      thumbnail
      description
    }
  }
`;

export function useGetAllMangasQuery(
  options: Omit<Urql.UseQueryArgs<GetAllMangasQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetAllMangasQuery>({
    query: GetAllMangasDocument,
    ...options,
  });
}
export const GetLatestMangaUpdatesDocument = gql`
  query getLatestMangaUpdates {
    latest: getLatestMangaUpdates {
      ID
      name
      thumbnail
      chapters {
        ID
        CreatedAt
      }
    }
  }
`;

export function useGetLatestMangaUpdatesQuery(
  options: Omit<
    Urql.UseQueryArgs<GetLatestMangaUpdatesQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetLatestMangaUpdatesQuery>({
    query: GetLatestMangaUpdatesDocument,
    ...options,
  });
}
