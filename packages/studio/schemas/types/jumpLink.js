import { MdLink } from 'react-icons/md';

export default {
  name: 'jumpLink',
  type: 'object',
  title: 'Page Jump Link',
  icon: MdLink,
  fields: [
    {
      name: 'hashId',
      title: 'Hash Id',
      type: 'string',
      description: 'Please enter the ID you would like to jump to. Do not include the # symbol.',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      id: 'hashId',
    },
    prepare({ id }) {
      return {
        title: `#${id}`,
      };
    },
  },
};
