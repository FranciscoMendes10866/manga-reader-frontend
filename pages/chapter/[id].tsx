import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useGetChapterQuery } from '../../generated/graphql';

const ChapterReader = () => {
  const router = useRouter();
  const { id } = router.query;

  const [result] = useGetChapterQuery({
    variables: {
      chapterId: id as string,
    },
  });

  return (
    <div>
      <h1>{result.data?.chapter?.name}</h1>
      {result.data?.chapter?.pages?.map((page, index) => (
        <div key={index}>
          <Image
            src={page?.url as string}
            alt=""
            width={700}
            height={'100%'}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default ChapterReader;
