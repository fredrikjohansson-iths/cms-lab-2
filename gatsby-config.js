module.exports = {
  siteMetadata: {
    title: `CMS Lab 2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "XkOfccMA8a3zfOoyk5EcSpli0VvHR0JAHmifKJlhI9c",
      "spaceId": "nztrasscdxen"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};