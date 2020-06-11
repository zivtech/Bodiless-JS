const Paragraph = `
  interface Paragraph {
    id: ID!
  }
`;

const interfaces = { Paragraph };

// TODO These should move to individual paragraph type modules.
const types = {
  paragraph__text_image: 'type paragraph__text_image implements Paragraph & Node',
  paragraph__image_text: 'type paragraph__image_text implements Paragraph & Node',
  node__paragraphed_content_demo: 'type node__paragraphed_content_demo implements HasTitle & Node',
};

module.exports.getSchemaCustomizations = () => ({ interfaces, types });
