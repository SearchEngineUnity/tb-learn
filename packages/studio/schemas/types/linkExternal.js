import { FaExternalLinkAlt } from 'react-icons/fa';

export default {
  title: 'External Link',
  name: 'externalLink',
  type: 'object',
  icon: FaExternalLinkAlt,
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
    {
      title: 'Open in new tab?',
      name: 'newTab',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      title: 'rel=noreferrer?',
      name: 'noreferrer',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      link: 'href',
    },
    prepare({ link }) {
      return {
        title: link,
      };
    },
  },
};
