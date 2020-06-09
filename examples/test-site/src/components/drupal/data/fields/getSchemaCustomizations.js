const RelationshipsWithFieldImage = `
  interface RelationshipsWithFieldImage {
    field_image: file__file
  }
`;
const HasFieldImage = `
  interface HasFieldImage {
    field_image: ImageMeta
    relationships: RelationshipsWithFieldImage
  }
`;

module.exports.getSchemaCustomizations = () => ({
  interfaces: { RelationshipsWithFieldImage, HasFieldImage },
});
