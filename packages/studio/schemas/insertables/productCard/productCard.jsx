import { BiNews } from 'react-icons/bi';

export default {
  name: 'productCard',
  title: 'Product Card',
  type: 'object',
  icon: BiNews,
  fieldsets: [
    {
      name: 'productCardTop',
      title: 'Product Card Top',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      title: 'Product Card Top Design',
      name: 'design',
      type: 'string',
      options: {
        list: [
          { title: 'eCommerce', value: 'eCommerce' },
          { title: 'App', value: 'app' },
          { title: 'Site', value: 'site' },
        ],
      },
      fieldset: 'productCardTop',
      validation: (Rule) => [Rule.required().error('Field is required')],
      initialValue: 'eCommerce',
    },
    {
      title: 'Product Name',
      name: 'name',
      type: 'string',
      fieldset: 'productCardTop',
      hidden: ({ parent }) => {
        const { design = '' } = parent || {};
        return !design || design === 'site';
      },
    },
    {
      title: 'Product Heading Level',
      name: 'headingLevel',
      type: 'string',
      options: {
        list: [
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
          { title: 'Non-Heading', value: 'p' },
        ],
      },
      fieldset: 'productCardTop',
      initialValue: 'p',
      hidden: ({ parent }) => {
        const { design = '' } = parent || {};
        return !design || design === 'site';
      },
    },
    {
      title: 'Rating Score',
      name: 'rating',
      type: 'number',
      fieldset: 'productCardTop',
      hidden: ({ parent }) => {
        const { design = '' } = parent || {};
        return !design;
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'productCardImage',
      fieldset: 'productCardTop',
      hidden: ({ parent }) => {
        const { design = '' } = parent || {};
        return !design;
      },
    },
    {
      title: 'Special Tag Text',
      name: 'tagText',
      type: 'string',
      fieldset: 'productCardTop',
      hidden: ({ parent }) => {
        const { design = '' } = parent || {};
        return !design;
      },
    },
    {
      title: 'Special Tag Color',
      name: 'tagColor',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'productCardTop',
      hidden: ({ parent }) => {
        const { design = '' } = parent || {};
        return !design;
      },
    },
    {
      title: 'Info Item List',
      name: 'infoList',
      type: 'array',
      of: [{ type: 'infoItem' }],
      fieldset: 'productCardTop',
      validation: (Rule) =>
        Rule.custom((infoList) => {
          return infoList && infoList?.length > 0 ? true : 'There must be at least one info item';
        }),
      hidden: ({ parent }) => {
        const { design = '' } = parent || {};
        return !design;
      },
    },
    {
      title: 'Button Set',
      name: 'btnSet',
      type: 'array',
      of: [{ type: 'btnBlockMui' }],
      fieldset: 'productCardTop',
      hidden: ({ parent }) => {
        const { design = '' } = parent || {};
        return !design || design === 'app';
      },
    },
    {
      title: 'iOS Link',
      name: 'iosLink',
      type: 'url',
      fieldset: 'productCardTop',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https'],
        }),
      hidden: ({ parent }) => {
        const { design = '' } = parent || {};
        return !design || design !== 'app';
      },
    },
    {
      title: 'Google Play Link',
      name: 'googlePlayLink',
      type: 'url',
      fieldset: 'productCardTop',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https'],
        }),
      hidden: ({ parent }) => {
        const { design = '' } = parent || {};
        return !design || design !== 'app';
      },
    },
    {
      title: 'Product Card Flex Segment Stack',
      name: 'segments',
      type: 'array',
      of: [{ type: 'productCardFlexSegment' }],
      hidden: ({ parent }) => {
        const { design = '' } = parent || {};
        return !design;
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image.asset',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Product Card',
        media,
      };
    },
  },
};
