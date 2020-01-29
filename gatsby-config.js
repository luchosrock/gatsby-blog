module.exports = {
  siteMetadata: {
    title: `Luis Blog`,
    description: `This is my coding blog where I write about my #100DaysOfGatsby coding journey.`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/posts`, name: `posts` }
    }
  ]
};
