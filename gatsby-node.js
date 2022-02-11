const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
        query Artworks {
            allAColorfulHistoryJson {
                nodes {
                  slug
                }
              }
            }
        `)

    data.allAColorfulHistoryJson.nodes.forEach(node => {
        actions.createPage({
            path: node.slug,
            component: path.resolve('./src/templates/Artwork.jsx'),
            context: { slug: node.slug }
        })
    })
}