export default {
  name: 'muiTypeStyleSetBtn',
  title: 'Mui Typography - Btn',
  type: 'object',
  fieldsets: [
    {
      name: 'set',
      options: {
        collapsible: false,
        collapsed: false,
        columns: 4,
      },
    },
  ],
  fields: [
    {
      name: 'fontFamily',
      title: 'Font Family',
      type: 'string',
      fieldset: 'set',
      initialValue: 'Roboto, Helvetica, Arial, sans-serif',
    },
    {
      name: 'fontWeight',
      title: 'Font Weight',
      type: 'number',
      options: {
        list: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      initialValue: 500,
      fieldset: 'set',
    },
    {
      name: 'fontSize',
      title: 'Font Size',
      type: 'string',
      initialValue: '0.875rem',
      fieldset: 'set',
    },
    {
      name: 'lineHeight',
      title: 'Line Height',
      type: 'number',
      initialValue: 1.75,
      fieldset: 'set',
    },
    {
      name: 'letterSpacing',
      title: 'Letter Spacing',
      type: 'string',
      initialValue: '0.02857em',
      fieldset: 'set',
    },
  ],
};
