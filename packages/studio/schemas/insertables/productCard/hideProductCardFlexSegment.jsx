export default {
  name: 'hideProductCardFlexSegment',
  title: 'Hide Product Card Flex Segement',
  type: 'object',
  fieldsets: [
    {
      name: 'set',
      title:
        'Please check all screen range options you wish to hide this product card flex segement on.',
      options: {
        collapsible: false,
        collapsed: false,
        columns: 2,
      },
    },
  ],
  fields: [
    {
      name: 'hideOnMobile',
      title: 'Mobile',
      options: {
        layout: 'checkbox',
      },
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
      fieldset: 'set',
    },
    {
      name: 'hideOnTabletMobile',
      title: 'Tablet Mobile ',
      options: {
        layout: 'checkbox',
      },
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
      fieldset: 'set',
    },
    {
      name: 'hideOnTablet',
      title: 'Tablet',
      options: {
        layout: 'checkbox',
      },
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
      fieldset: 'set',
    },
    {
      name: 'hideOnDesktop',
      title: 'Desktop',
      options: {
        layout: 'checkbox',
      },
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
      fieldset: 'set',
    },
  ],
};
