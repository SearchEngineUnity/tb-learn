export default {
  name: 'muiColorSet',
  title: 'Mui Color Set',
  type: 'object',
  fields: [
    {
      name: 'light',
      title: 'Light',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'main',
      title: 'Main',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'dark',
      title: 'Dark',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'contrastText',
      title: 'Contrast Text',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
  ],
};
