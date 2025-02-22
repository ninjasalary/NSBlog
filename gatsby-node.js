const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  // Transform the new node here and create a new node or
  // create a new node field.
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      //same as node: node
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //dynamically create pages here
  //get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  //get slugs
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  //create new pages with unique slug
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const tagTemplates = path.resolve("./src/templates/tags.js")
  //get slugs
  const tagResp = await graphql(`
  query {
    allMarkdownRemark{
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
  `)
  //create new pages with unique slug
  tagResp.data.allMarkdownRemark.edges.forEach(edge => {
    if(edge.node.frontmatter.tags){
      createPage({
        component: tagTemplates,
        path: `/${edge.node.frontmatter.tags}`.toLowerCase(),
        context: {
          tags: edge.node.frontmatter.tags,
        },
      })
    }
  })
}