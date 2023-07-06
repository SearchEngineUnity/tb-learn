export default {
  name: 'heroHeader',
  title: 'Hero Header',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'H1 Heading',
      description: 'Heading Color from Section Design will apply to this text.',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'H2 Heading',
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
