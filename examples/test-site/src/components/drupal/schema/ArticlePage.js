module.exports.getSchemaCustomizations = () => ({
  types: {
    node__article: 'type node__article implements HasTitle & HasMarkdownBody & HasFieldImage & Node',
    node__articleRelationships: 'type node__articleRelationships implements RelationshipsWithFieldImage',
    node__articleBody: 'type node__articleBody implements MarkdownField',
    node__articleField_image: 'type node__articleField_image implements ImageMeta',
  },
});
