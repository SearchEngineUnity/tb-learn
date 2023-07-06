// this is currently not in use but is kept should we ever work on this feature

import { FaBullseye } from 'react-icons/fa';

export default {
  name: 'generalSettings',
  type: 'document',
  title: 'General Settings',
  icon: FaBullseye,
  fields: [
    // {
    //   name: 'recaptcha',
    //   title: 'reCaptcha Site Key',
    //   type: 'string',
    // },
    {
      name: 'siteDomain',
      title: 'Site Domain',
      description:
        'This is the domain where all pages will be published under. Used for canonical.',
      type: 'url',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'socialImage',
      title: 'Social Sharing Card Image',
      description:
        'This is the default image to be used for social sharing cards. This can be overwritten by at the individual page level.',
      type: 'image',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'disclaimerText',
      title: 'Affiliate Disclaimer Text',
      type: 'minPT',
      description: 'This is the affiliate disclaimer text to be used on guide page types.',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `General Settings`,
      };
    },
  },
};
