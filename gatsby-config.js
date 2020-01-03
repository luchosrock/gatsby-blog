module.exports = {
  siteMetadata: {
    title: `Luis Blog`,
    description: `This is my coding blog where I write about my #100DaysOfGatsby coding journey.`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`
      }
    }
  ]
};
