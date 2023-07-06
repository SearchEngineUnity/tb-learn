import { MdBusiness } from 'react-icons/md';

export default {
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  icon: MdBusiness,
  fields: [
    {
      name: 'name',
      title: 'Company name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'phone',
      title: 'Contact Phone Number',
      type: 'string',
    },
    {
      name: 'address1',
      title: 'Address Line 1',
      type: 'string',
    },
    {
      name: 'address2',
      title: 'Address Line 2',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'provinceState',
      title: 'Province / State',
      type: 'string',
    },
    {
      name: 'mailCode',
      title: 'Postal Code / ZIP Code',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'homePage',
      title: 'Company Home Page',
      description: 'This is the link that will be used for all company logos.',
      type: 'url',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Contact Info`,
      };
    },
  },
};
