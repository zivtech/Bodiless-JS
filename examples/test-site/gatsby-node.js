/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const fs = require('fs');

const getInterfaces = modules => (
  modules.reduce((acc, module) => {
    const { interfaces } = require(`${module}/getSchemaCustomizations`).getSchemaCustomizations();
    return { ...acc, ...interfaces };
  }, {})
);

const getTypes = modules => (
  modules.reduce((acc, module) => {
    const { types } = require(`${module}/getSchemaCustomizations`).getSchemaCustomizations();
    return { ...acc, ...types };
  }, {})
);

// @TODO: This list would come from plugin configuration.
const modules = [
  './src/components/drupal/data/title',
  './src/components/drupal/data/image',
  './src/components/drupal/data/fields',
  './src/components/drupal/data/article',
  './src/components/drupal/data/body',
  './src/components/drupal/data/subtitle',
  './src/components/drupal/data/paragraphs',
];

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const interfaces = getInterfaces(modules);
  const types = getTypes(modules);
  Object.values(interfaces).forEach(interface => createTypes(interface));
  Object.values(types).forEach(type => createTypes(type));

  // const typeDefs = `
  //   interface ImageMeta {
  //     alt: String
  //     title: String
  //     width: Int
  //     height: Int
  //   }
  //   interface RelationshipsWithImageField {
  //     field_image: file__file
  //   }

  //   interface HasImageField {
  //     field_image: ImageMeta
  //     relationships: RelationshipsWithImageField
  //   }

  //   type node__articleRelationships implements RelationshipsWithImageField
  //   type node__articleField_image implements ImageMeta
  //   type node__article implements HasImageField & Node
  // `;
  // createTypes(typeDefs);
};

// Fix sourcemap issue
// See: https://github.com/gatsbyjs/gatsby/issues/6278#issuecomment-402540404
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'develop') {
    // When running test-site with local packages (via npm pack) we seem to get
    // multiple react instances, which causes this invalid hook call warning
    // (https://reactjs.org/warnings/invalid-hook-call-warning.html)
    // so we ensure we always resolve to the same instance when present
    // in node_modules.  When running from examples, react is hoisted and
    // won't be present in the test site's node_modules.
    const reactPath = path.resolve('./node_modules', 'react');
    const reactAlias = fs.existsSync(reactPath) ? { react: reactPath } : {};
    actions.setWebpackConfig({
      devtool: 'cheap-module-source-map',
      resolve: {
        plugins: [new TsconfigPathsPlugin()],
        alias: reactAlias,
      },
    });
  }
};
