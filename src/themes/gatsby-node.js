// exports.createPages = async function({ graphql, actions }) {

//     const {data} = await graphql `
//         query {
//             allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//                 edges {
//                   node {
//                     frontmatter {
//                       slug
//                     }
//                     id
//                   }
//                 }
//               }
//         }
//     `
//     // create paginated pages for posts
//     const postsPerPage = 3

//     const numPages = Math.ceil(data.allMdx.edges.length / postsPerPage);

//     Array.from({ length: numPages }).forEach((_, i) => {
//         actions.createPages({
//             path: i === 0 ? `/` : `/${i + 1}`,
//             compoonent: require.resolve("./src/templates/allPosts.js"),
//             context: {
//                 limit: postsPerPage,
//                 skip: i * postsPerPage,
//                 numPages,
//                 currentPage: i + 1,
//             }
//         })
//     })

//     // create single blog post
//     data.allMdx.edges.forEach(edge => {
//         const slug = edge.node.frontmatter.slug
//         const id = edge.node.id
//         actions.createPages({
//             path: slug,
//             component: require.resolve(`./src/templates/singlePost.js`),
//             context: {id},
//         })
//     })
// }