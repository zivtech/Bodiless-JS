const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

// Gatsby plugins list.
const plugins = [
  {
    resolve: 'gatsby-plugin-compile-es6-packages',
    options: {
      modules: ['gatsby-theme-bodiless'],
    },
  },
  '@bodiless/gatsby-theme-bodiless',
];

const robotsTxtPolicy = [
  {
    userAgent: '*',
    allow: '/',
  },
];
process.env.ROBOTSTXT_POLICY = JSON.stringify(robotsTxtPolicy);

module.exports = {
  siteMetadata: {
    title: 'BodilessJS',
    logo: '/images/bodiless_logo.png',
  },

  plugins,
};
