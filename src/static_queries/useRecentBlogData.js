import { graphql, useStaticQuery } from "gatsby"

export default function useRecentBlogData() {
  const data = useStaticQuery(graphql`
    query useRecentBlogData {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }, limit: 3) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              author
              title
              tags
              hero_image {
                childImageSharp {
                  fluid( maxWidth: 800 ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt(pruneLength: 10)
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}