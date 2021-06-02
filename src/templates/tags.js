import React from "react"
import { Link } from "gatsby"
import blogListStyles from "../styles/components/bloglist.module.scss"
import Layout from "../components/Layout"
import Img from 'gatsby-image'

export default function TagsBlogList(props) {
  const blogData = props.data.allMarkdownRemark.edges
  function renderBlogData() {
    return (
      <>
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <div class="col-md-6 mb-50">
                <div class="blog-item rounded bg-white shadow-dark wow fadeIn">
                  <div class="thumb">
                    <Link to={`/${blog.node.fields.slug}`} key={blog.node.id}>
                      <span class="category">{blog.node.frontmatter.tags || 'Blog'}</span>
                    </Link>
                    <Link to={`/${blog.node.fields.slug}`} key={blog.node.id}>
                      <Img
                        fluid={
                          blog.node.frontmatter.hero_image.childImageSharp.fluid
                        }
                        alt={blog.node.frontmatter.title}
                      />
                    </Link>
                  </div>
                  <div class="details">
                    <h4 class="my-0 title">
                      <Link to={`/${blog.node.fields.slug}`} key={blog.node.id}>
                        {blog.node.frontmatter.title}
                      </Link>
                    </h4>
                    <p>{blog.node.excerpt}</p>
                    <ul class="list-inline meta mb-0 mt-2">
                      <li class="list-inline-item">
                        {blog.node.frontmatter.date}
                      </li>
                      <li class="list-inline-item">
                        {blog.node.frontmatter.author}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
      </>
    )
  }
  return (
    <Layout title={`NinjaSalary || ${blogData[0].node.frontmatter.tags}`}>
    <div className={`blog_area section-padding-100-50`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="row justify-content-center">
                {renderBlogData()}
              </div>
            </div>
            </div>
            </div></div>
    </Layout>
  )
}

export const getPostsByTag = graphql`
  query($tags: String!) {
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tags}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author
            tags
            date(formatString: "MMMM Do, YYYY")
            hero_image {
              childImageSharp {
                fluid(maxWidth: 1500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
          html
          excerpt
        }
      }
    }
  }
`