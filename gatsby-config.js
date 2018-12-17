require('dotenv').config();
const data = require('./src/data');

extraPlugins = [];

process.env.GITHUB && extraPlugins.push({
  resolve: 'gatsby-source-graphql',
  options: {
    typeName: 'GitHub',
    fieldName: 'github',
    // Url to query from
    url: 'https://api.github.com/graphql',
    // HTTP headers
    headers: {
      Authorization: `bearer ${process.env.GITHUB}`,
    },
    // Additional options to pass to node-fetch
    fetchOptions: {},
  },
})

data.analytics.gaId && extraPlugins.push({
  resolve: 'gatsby-plugin-google-analytics',
  options: {
    trackingId: data.analytics.gaId,
    anonymize: true,
    respectDNT: true,
    cookieDomain: data.analytics.domain,
  },
}, );

process.env.IG_ACCESS_TOKEN &&
  data.instagram.username &&
  data.instagram.instagram_id &&
  extraPlugins.push({
    resolve: 'gatsby-source-instagram',
    options: {
      username: config.instagram,
      access_token: process.env.IG_ACCESS_TOKEN,
      instagram_id: config.instagram_id,
    },
  });

data.instagram.username &&
  !process.env.IG_ACCESS_TOKEN &&
  extraPlugins.push({
    resolve: `gatsby-source-instagram`,
    options: {
      username: data.instagram.username,
    },
  });

module.exports = {
  siteMetadata: {
    title: 'John Doe personal website',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
            resolve: 'gatsby-remark-rehype-images',
            options: {
              tag: 'rehype-image',
              quality: 100
            },
          },
          'gatsby-remark-prismjs',
        ],
      },
    },
    ...extraPlugins,
  ],
};
