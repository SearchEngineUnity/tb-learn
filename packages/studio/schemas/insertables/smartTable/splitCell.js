export default {
  title: 'Split Cell',
  name: 'splitCell',
  type: 'object',
  fields: [
    {
      name: 'splitColHead',
      title: 'Split Column Heading',
      type: 'string',
    },
    {
      name: 'splitRowHead',
      title: 'Split Row Heading',
      type: 'string',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Split Cell`,
      };
    },
  },
};
