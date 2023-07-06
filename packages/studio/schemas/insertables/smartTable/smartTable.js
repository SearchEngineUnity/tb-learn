import { BsTable } from 'react-icons/bs';

export default {
  name: 'smartTable',
  title: 'Smart Table',
  type: 'object',
  icon: BsTable,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Table Name',
      description: 'This is for label purpose in studio only.',
    },
    {
      name: 'colHeading',
      type: 'boolean',
      title: 'This table has a column heading',
      options: {
        layout: 'checkbox',
      },
      initialValue: false,
    },
    {
      name: 'rowHeading',
      type: 'boolean',
      title: 'This table has a row heading',
      options: {
        layout: 'checkbox',
      },
      initialValue: false,
    },
    {
      name: 'fixedFirstColumn',
      type: 'boolean',
      title: 'This table has a fixed first column',
      options: {
        layout: 'checkbox',
      },
      initialValue: false,
    },
    {
      name: 'maxWidth',
      type: 'string',
      title: 'Max Table Width',
      description: 'Must end in "px" (ex. 600px)',
    },
    {
      name: 'colgroup',
      type: 'array',
      title: 'Minimum Column Widths',
      description: `The minimum column width regardless of browser width. Must end in "px".`,
      of: [{ type: 'colWidth' }],
    },
    {
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [{ type: 'rowPlus' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
