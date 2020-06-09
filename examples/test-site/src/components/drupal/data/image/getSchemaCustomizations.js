const ImageMeta = `
  interface ImageMeta {
    alt: String
    title: String
    width: Int
    height: Int
  }
`;
const interfaces = { ImageMeta };

module.exports.getSchemaCustomizations = () => ({ interfaces });
