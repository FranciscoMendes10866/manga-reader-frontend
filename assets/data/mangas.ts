import { Manga } from '../../generated/graphql';

function generateRandomString() {
  return Math.random().toString(36).substr(2, 12);
}

const example: Manga = {
  name: 'One Piece',
  description: 'Desc',
  thumbnail:
    'https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx131640-JWaxxtv3bvfg.jpg',
};

let i = 0;
const data: Manga[] = [];

for (i = 0; i < 10; i++) {
  data.push({
    ...example,
    id: generateRandomString(),
  });
}

export default data;
