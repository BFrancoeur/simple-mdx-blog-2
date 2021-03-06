/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
     resolve: `gatsby-source-filesystem`,
     options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
     },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
         name: `posts`,
         path: `${__dirname}/src/posts`
      },
     },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
         name: `images`,
         path: `${__dirname}/src/images`
      },
     },
     `gatsby-plugin-sharp`,
     `gatsby-transformer-sharp`,
     {
       resolve: `gatsby-plugin-mdx`,
       options: {
         extensions: [`.md`, `.mdx`],
         gatsbyRemarkPlugins: [
           {
             resolve: `gatsby-remark-images`,
             options: {
               maxWidth: 1200,
             },
           },
         ],
       },
     },
     {
       resolve: `gatsby-plugin-google-fonts`,
       options: {
         fonts: [
           `titillium web\:300,400,500,700,900`,
           `signika negative\:300,300i,400,400i,500,500i`,
         ],
         display: "swap",
       }
     }
  ],
}
