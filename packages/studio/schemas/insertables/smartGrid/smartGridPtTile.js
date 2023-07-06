import { TbNewSection } from 'react-icons/tb';

export default {
  title: 'Smart Grid PT Tile',
  name: 'smartGridPtTile',
  type: 'object',
  icon: TbNewSection,
  fields: [
    {
      name: 'content',
      title: 'Tile Content',
      type: 'maxPT',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Smart Grid PT Tile',
      };
    },
  },
};
