import { AiOutlineColumnWidth } from 'react-icons/ai';

export default {
  name: 'colWidth',
  type: 'object',
  title: 'Minimum Column Width',
  icon: AiOutlineColumnWidth,
  fields: [
    {
      name: 'width',
      type: 'string',
      title: 'Width',
      description: 'Must end in "px" (ex. 200px).',
    },
  ],
  preview: {
    select: {
      title: 'width',
    },
  },
};
