import { FaRegImages } from 'react-icons/fa';

export default {
  name: 'companyLogo',
  title: 'Logo',
  type: 'document',
  icon: FaRegImages,
  fields: [
    {
      name: 'seuID',
      title: 'seuID',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        // add a custom rule for isUnique
      ],
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        // add a custom rule for isUnique
      ],
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'label',
      media: 'logo',
    },
  },
};
