import { FaRegImages } from 'react-icons/fa';

export default {
  name: 'navBrand',
  type: 'object',
  title: 'Navigation Brand Group',
  icon: FaRegImages,
  fields: [
    {
      name: 'brandGroup',
      title: 'Brand Group',
      type: 'array',
      of: [{ type: 'brandItem' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'alt',
      title: 'Alt for Brand Image',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Nav Brand Group',
      };
    },
  },
};
