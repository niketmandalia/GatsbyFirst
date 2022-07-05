module.exports = {
  siteMetadata: {
    title: `My Gatsby Test`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "313275352b69eaf8f46714d9c18f22"
    }
  },
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
        apiToken: `58f9e18414dbb056a9c166348c61ae`,
        preview: false,
        disableLiveReload: false,
      }
    },
  ]
};