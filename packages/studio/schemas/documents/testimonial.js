import { BsChatQuote } from 'react-icons/bs';

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: BsChatQuote,
  fields: [
    {
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'tileImage',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
  ],
  preview: {
    select: {
      name: 'name',
      media: 'image.asset',
      company: 'company',
      role: 'role',
    },
    prepare({ name, media }) {
      return {
        title: name,
        media,
      };
    },
  },
};
