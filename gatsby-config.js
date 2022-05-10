module.exports = {
  siteMetadata: {
    title: `CMS Lab 2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "CFPAT-_LCsN-GOOJgkAmzr-X72Qrvrq46swKtFxtGyBEQYTNU",
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