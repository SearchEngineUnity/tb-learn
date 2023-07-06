export default {
  name: 'header',
  title: 'Header',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'H2 Heading',
      description: 'Heading Color from Section Design will apply to this text.',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'H3 Heading',
      description: 'Subheading Color from Section Design will apply to this text.',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'minPT',
    },
  ],
};
