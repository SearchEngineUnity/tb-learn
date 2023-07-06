export default {
  name: 'tocLink',
  type: 'object',
  title: 'ToC Menu Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'hashID',
      title: 'Hash ID',
      type: 'string',
      description: 'Please enter the ID you would like to jump to. Do not include the # symbol.',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'hashID',
    },
  },
};
