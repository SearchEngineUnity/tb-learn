export default {
  name: 'hlbColorSet',
  title: 'Highlight Box Color Set',
  type: 'object',
  fields: [
    {
      name: 'borderColor',
      title: 'Border Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'iconColor',
      title: 'Icon Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'linkColor',
      title: 'Link Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
  ],
};
