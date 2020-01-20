module.exports = {
  siteMetadata: {
    title: `Michael Hankin`,
    description: `Software Engineer`,
    author: `@michaelhankin`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Hankin`,
        icon: `static/icon.png`,
        start_url: `/`,
        background_color: `#f0f0f0`,
        theme_color: `#3273dc`,
        display: `browser`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
