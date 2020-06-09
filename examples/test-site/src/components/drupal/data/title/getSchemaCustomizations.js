module.exports.getSchemaCustomizations = () => {
  const HasTitle = `
    interface HasTitle {
      title: String
    }
  `;
  return {
    interfaces: {
      HasTitle,
    },
  };
};
