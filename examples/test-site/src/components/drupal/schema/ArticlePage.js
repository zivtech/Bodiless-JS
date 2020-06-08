module.exports.getSchemaCustomizations = () => ({
  types: {
    node__article: 'type node__article implements HasTitle & Node',
    node__articleField_image: 'type node__articleField_image implements ImageMeta',
  },
});
