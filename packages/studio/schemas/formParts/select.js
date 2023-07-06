export default {
  name: 'select',
  type: 'object',
  title: 'Select',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'Id Tag',
      description: 'Give one string to identify this field',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'helperText',
      title: 'Helper Text',
      type: 'string',
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{ type: 'option' }],
      validation: (Rule) => Rule.min(2).error('Must contain at least two item'),
    },
    {
      name: 'required',
      title: 'Is this information required?',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: '_type',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Select label',
        subtitle,
      };
    },
  },
};

// id for select (add '-label' for use as input label)
// input label - string
// value = the same as name of input field
// array for options with label and value for each option
