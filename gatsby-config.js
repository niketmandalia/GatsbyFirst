module.exports = {
  siteMetadata: {
    title: `My Gatsby Test`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `42496ee1512781f9d7177919fe07cd`,
        preview: false,
        disableLiveReload: false,
      }
    },
  ]
};