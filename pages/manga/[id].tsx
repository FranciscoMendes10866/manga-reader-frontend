import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { useGetMangaDetailsQuery } from '../../generated/graphql';

const MangaDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [result] = useGetMangaDetailsQuery({
    variables: {
      mangaId: id as string,
    },
  });

  const handleChapterSelection = useCallback(() => {
    router.push(`/chapter/${id}`);
  }, []);

  return (
    <div>
      <h1>{result.data?.details?.name}</h1>
      <p>{result.data?.details?.description}</p>
      <ul>
        {result.data?.details?.chapters?.map((chapter) => (
          <li key={chapter?.ID} onClick={handleChapterSelection}>
            {chapter?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MangaDetails;
