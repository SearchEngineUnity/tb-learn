import { MdSimCardAlert } from 'react-icons/md';

export default {
  name: 'highlightBox',
  title: 'Highlight Box',
  type: 'object',
  icon: MdSimCardAlert,
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Pro Tip', value: 'proTip' },
          { title: 'Important', value: 'important' },
          { title: 'Warning', value: 'warning' },
          { title: 'Did You Know', value: 'dyk' },
          { title: 'Definition', value: 'definition' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'text',
      title: 'Text',
      type: 'noHeadingsPT',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      type: 'type',
    },
    prepare({ type }) {
      const titleSelector = {
        proTip: 'Pro Tip',
        important: 'Important',
        warning: 'Warning',
        dyk: 'Did You Know',
        definition: 'Definition',
      };

      return {
        title: titleSelector[type],
        subtitle: 'Highlight Box',
      };
    },
  },
};
