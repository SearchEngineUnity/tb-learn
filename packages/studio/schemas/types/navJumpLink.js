// This is not currently in use

export default {
  name: 'navJumpLink',
  type: 'object',
  title: 'Nav Jump Link',
  fields: [
    {
      title: 'Nav title',
      name: 'title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'Please enter the ID of the section you would like to jump to',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'isButton',
      type: 'boolean',
      title: 'Apply Button Style?',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'link',
    },
  },
};
