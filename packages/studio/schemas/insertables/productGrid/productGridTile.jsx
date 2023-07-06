import { BsFillCreditCard2FrontFill } from 'react-icons/bs';

export default {
  name: 'productGridTile',
  title: 'Product Grid Tile',
  type: 'object',
  icon: BsFillCreditCard2FrontFill,
  fields: [
    {
      title: 'Special Tag Text',
      name: 'specialTagText',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      title: 'Tile Image',
      name: 'tileImage',
      type: 'tileImage',
      validation: (Rule) => [
        Rule.custom((value) => (value?.asset ? true : 'An image is required')),
        Rule.custom((value) => (value?.alt ? true : 'An alt is required.')),
      ],
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'noHeadingsPT',
    },
    {
      title: 'Button Text',
      name: 'btnText',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'btnLink',
      title: 'Button Link',
      description: 'Only one link can be added.',
      type: 'array',
      of: [
        { type: 'internalLocal' },
        { type: 'internalGlobal' },
        { type: 'externalLink' },
        { type: 'affiliateLink' },
        { type: 'jumpLink' },
      ],
      initialValue: 'affiliateLink',
      validation: (Rule) => [
        Rule.length(1).error('Must contain only one item'),
        Rule.required().error('Field is required'),
      ],
    },
    {
      title: 'Page Jump Link',
      name: 'jumpLink',
      type: 'jumpLink',
    },
  ],
  preview: {
    select: {
      media: 'tileImage.image',
      alt: 'tileImage.alt',
      name: 'name',
    },
    prepare({ alt, name, media }) {
      return {
        title: alt || name,
        media,
      };
    },
  },
};
