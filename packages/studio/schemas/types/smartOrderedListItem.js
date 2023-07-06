import { MdPlaylistAdd } from 'react-icons/md';

export default {
  name: 'smartOrderedListItem',
  type: 'object',
  title: 'List Item',
  icon: MdPlaylistAdd,
  fields: [
    {
      name: 'content',
      type: 'maxPT',
    },
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({ content }) {
      switch (content[0]._type) {
        case 'block':
          return {
            title: content[0].children[0].text,
          };

        default:
          return {
            title: `This list item start with '${content[0]._type}''`,
          };
      }
    },
  },
};
