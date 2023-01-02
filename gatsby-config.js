/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV}`,
});
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL|| 'http://127.0.0.1:1337',
  accessToken: process.env.STRAPI_TOKEN || 'e04773a94483e939073ea0686820fe8b5049c810eab00936729a6829d6998d1310099c6760f1396afb74f403c73e49a848e109b2d07435e4657aa5eaa05c3badd6000468619134801828046e64657d3df09074079f6d26fe184d6789d172a0b34323c4ecb8d40edbfd7a516fa0baea7fb039f6e1c79342a61e1fbff767e7dab0',
  collectionTypes: ['article', 'genre', 'author'],
  singleTypes: ['homepage'],
};
module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-strapi`,
    options: strapiConfig,
  },
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/Layout/index.js`),
    },
  },
],
}
