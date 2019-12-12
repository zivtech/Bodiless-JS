# `@bodiless/gatsby-theme-bodiless`

> TODO: description

## Usage

```
const gatsbyThemeBodiless = require('@bodiless/gatsby-theme-bodiless');

// TODO: DEMONSTRATE API
```
### Plugins

#### Robots.txt

gatsby-plugin-robots-txt is leveraged to automatically generate robots.txt for a site. The plugin is enabled by default and will generate the following robots.txt file.
```
User-agent: *
Allow: /
```
In order to disable robots.txt plugin, set ROBOTSTXT_ENABLED env variable to '0'
```
ROBOTSTXT_ENABLED='0'
```
In order to add sitemap.xml to the generated robots.txt file, set ROBOTSTXT_SITEMAP env variable to your site sitemap.xml
```
ROBOTSTXT_SITEMAP='https://www.example.com/sitemap.xml'
```
In order to add host to the generated robots.txt file, set ROBOTSTXT_HOST env variable to your site host
```
ROBOTSTXT_HOST='https://www.example.com/'
```
In order to define custom rules in the generated robots.txt, set ROBOTSTXT_POLICY env variable to JSON string containing a list of policies. Format required for policies is described in https://github.com/itgalaxy/generate-robotstxt/tree/65abc04050ee0bb7bc1612163eb5af8c416c6994#usage
```
ROBOTSTXT_POLICY='[{"userAgent":"*","allow":"/","disallow":"/search","crawlDelay":10}]'
```
or in your site gatsby-config.js
```
const policies = [
  {
    userAgent: '*',
    allow: '/',
    disallow: '/search',
    crawlDelay: 10,
  },
];
process.env.ROBOTSTXT_POLICY = JSON.stringify(policies);
```