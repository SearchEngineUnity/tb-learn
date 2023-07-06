export default {
  name: 'typography',
  type: 'document',
  title: 'Typography',
  fieldsets: [
    {
      name: 'general',
      title: 'General',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'variants',
      title: 'Variants',
      description: 'Please include units for font sizes (px, em, or rem).',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'htmlFontSize',
      title: 'HTML Font Size (Root)',
      description: 'Default Font Size Root "16px".',
      type: 'number',
      fieldset: 'general',
      initialValue: 16,
    },
    {
      name: 'fontFamily',
      title: 'Font Family',
      description: 'Default Font Family "Roboto, Helvetica, Arial, sans-serif".',
      type: 'string',
      fieldset: 'general',
      initialValue: 'Roboto, Helvetica, Arial, sans-serif',
    },
    {
      name: 'fontSize',
      title: 'Font Size',
      description: 'Default Font Size Root "14px".',
      type: 'number',
      fieldset: 'general',
      initialValue: 14,
    },
    {
      name: 'fontWeightLight',
      title: 'Font Weight Light',
      description: 'Default Font Weight Light "300".',
      type: 'number',
      fieldset: 'general',
      initialValue: 300,
    },
    {
      name: 'fontWeightRegular',
      title: 'Font Weight Regular',
      description: 'Default Font Weight Regular "500".',
      type: 'number',
      fieldset: 'general',
      initialValue: 500,
    },
    {
      name: 'fontWeightMedium',
      description: 'Default Font Weight Medium "700".',
      type: 'number',
      fieldset: 'general',
      initialValue: 700,
    },
    {
      name: 'fontWeightBold',
      title: 'Font Weight Bold',
      description: 'Default Font Weight Bold "800".',
      type: 'number',
      fieldset: 'general',
      initialValue: 800,
    },
    {
      name: 'h1',
      title: 'H1',
      description:
        'Default Settings: "Roboto, Helvetica, Arial, sans-serif", "700", "2.625rem", "1.5"',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 700,
        fontSize: '2.625rem',
        lineHeight: 1.5,
      },
    },
    {
      name: 'h2',
      title: 'H2',
      description:
        'Default Settings: "Roboto, Helvetica, Arial, sans-serif", "700", "1.75rem", "1.1"',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 700,
        fontSize: '1.75rem',
        lineHeight: 1.1,
      },
    },
    {
      name: 'h3',
      title: 'H3',
      description:
        'Default Settings: "Roboto, Helvetica, Arial, sans-serif", "600", "1.5rem", "1.1"',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.1,
      },
    },
    {
      name: 'h4',
      title: 'H4',
      description:
        'Default Settings: "Roboto, Helvetica, Arial, sans-serif", "400", "1.25rem", "1.1"',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '1.25rem',
        lineHeight: 1.1,
      },
    },
    {
      name: 'h5',
      title: 'H5',
      description: 'Default Settings: "Roboto, Helvetica, Arial, sans-serif", "700", "1rem", "1.1"',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 700,
        fontSize: '1rem',
        lineHeight: 1.1,
      },
    },
    {
      name: 'h6',
      title: 'H6',
      description: 'Default Settings: "Roboto, Helvetica, Arial, sans-serif", "600", "1rem", "1.1"',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 600,
        fontSize: '1em',
        lineHeight: 1.1,
      },
    },
    {
      name: 'subtitle1',
      title: 'Subtitle 1',
      description:
        'Default Settings: "Roboto, Helvetica, Arial, sans-serif", "400", "1rem", "1.75"',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.75,
      },
    },
    {
      name: 'subtitle2',
      title: 'Subtitle 2',
      description:
        'Default Settings: "Roboto, Helvetica, Arial, sans-serif", "500", "0.875rem", "1.57"',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.57,
      },
    },
    {
      name: 'body1',
      title: 'Body 1',
      description:
        'Default Settings: "Roboto, Helvetica, Arial, sans-serif", "500", "1rem", "1.625"',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 1.625,
      },
    },
    {
      name: 'body2',
      title: 'Body 2',
      description:
        'Default Settings: "Roboto, Helvetica, Arial, sans-serif", "400", "0.875rem", "1.43"',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.43,
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      description:
        'Default Settings: "Roboto, Helvetica, Arial, sans-serif", "400", "0.75rem", "1.66"',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.66,
      },
    },
    {
      name: 'overline',
      title: 'Overline',
      description:
        'Default Settings: "Roboto, Helvetica, Arial, sans-serif", "400", "0.75rem", "2.66"',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 2.66,
      },
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Typography`,
      };
    },
  },
};
