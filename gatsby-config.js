module.exports = {
  siteMetadata: {
    title: 'Mehdi Benzarti ',
    description: '',
    author: '@MehdiLebenz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-styled-components',
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn: 'https://84a28838d6764036a328cfc58f333230@o580068.ingest.sentry.io/6056534',
        sampleRate: 0.7,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },

    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#3099b0',
        theme_color: '#3099b0',
        display: 'minimal-ui',
        icon: 'src/images/head.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-gatsby-cloud',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

  ],
};
