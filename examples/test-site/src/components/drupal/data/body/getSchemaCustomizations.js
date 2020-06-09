const MarkdownField = `
  interface MarkdownField {
    value: String
  }
`;

const HasMarkdownBody = `
  interface HasMarkdownBody {
    body: MarkdownField
  }
`;

const interfaces = { MarkdownField, HasMarkdownBody };

module.exports.getSchemaCustomizations = () => ({ interfaces });
