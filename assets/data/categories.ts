interface ICategory {
  value: string;
}

const list: ICategory[] = [
  {
    value: 'Action',
  },
  {
    value: 'Comedy',
  },
  {
    value: 'Ecchi',
  },
  {
    value: 'School life',
  },
  {
    value: 'Romance',
  },
  {
    value: 'Slice of life',
  },
  {
    value: 'Shounen',
  },
  {
    value: 'Smut',
  },
  {
    value: 'Adventure',
  },
  {
    value: 'Isekai',
  },
  {
    value: 'Magic',
  },
  {
    value: 'Martial arts',
  },
  {
    value: 'Tragedy',
  },
  {
    value: 'Demons',
  },
  {
    value: 'Drama',
  },
  {
    value: 'Supernatural',
  },
  {
    value: 'Shounen ai',
  },
  {
    value: 'Shoujo',
  },
  {
    value: 'Fantasy',
  },
  {
    value: 'Harem',
  },
  {
    value: 'Sci fi',
  },
  {
    value: 'Yaoi',
  },
  {
    value: 'Mature',
  },
  {
    value: 'Psychological',
  },
  {
    value: 'Seinen',
  },
  {
    value: 'Mystery',
  },
  {
    value: 'Superhero',
  },
  {
    value: 'Historical',
  },
];

export default list.reduce((acc: ICategory[], curr: ICategory) => {
  const exists = acc.find((item) => item.value === curr.value);
  if (!exists) {
    acc.push(curr);
  }
  return acc;
}, []);
