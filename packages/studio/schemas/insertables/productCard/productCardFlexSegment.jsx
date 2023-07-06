import { TbNewSection } from 'react-icons/tb';

export default {
  title: 'Product Card Flex Segment',
  name: 'productCardFlexSegment',
  type: 'object',
  icon: TbNewSection,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Title Heading Level',
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
      initialValue: 'p',
    },
    {
      name: 'content',
      title: 'Segment Content',
      type: 'noHeadingsPT',
    },
    {
      title: 'Hide Segment',
      name: 'hide',
      type: 'hideProductCardFlexSegment',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Product Card Flex Segment',
      };
    },
  },
};
