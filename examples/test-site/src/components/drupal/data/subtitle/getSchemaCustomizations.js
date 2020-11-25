const HasMarkdownSubtitle = `
  interface HasMarkdownSubtitle {
    field_subtitle: MarkdownField
  }
`;

const interfaces = { HasMarkdownSubtitle };

module.exports.getSchemaCustomizations = () => ({ interfaces });
