export default {
  name: 'clickableImageImage',
  title: 'Clickable Image Image',
  type: 'image',
  description: 'Clickable image destination should be self evident in the image design.',
  options: {
    storeOriginalFilename: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
      description: 'Clickable image destination should be self-evident in alt text.',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'asset',
    },
    prepare({ title, media }) {
      return {
        title: `Alt text: ${title}`,
        media,
      };
    },
  },
};
