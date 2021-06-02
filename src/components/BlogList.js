import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import useTagsData from "../static_queries/useTagsData"
import useRecentBlogData from "../static_queries/useRecentBlogData"
import Img from "gatsby-image"

export default function BlogList() {
  const blogData = useBlogData()
  const tagsList = useTagsData()
  const recentBlogData = useRecentBlogData()
  console.log("tatatatatata", tagsList)
  function renderBlogData() {
    return (
      <>
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <div className="col-md-6 mb-50" key={blog.node.id}>
                <div className="blog-item rounded bg-white shadow-dark wow fadeIn">
                  <div className="thumb">
                    <Link to={`/${blog.node.fields.slug}`}>
                      <span className="category">{blog.node.frontmatter.tags || 'Blog'}</span>
                    </Link>
                    <Link to={`/${blog.node.fields.slug}`}>
                      <Img
                        fluid={
                          blog.node.frontmatter.hero_image.childImageSharp.fluid
                        }
                        alt={blog.node.frontmatter.title}
                      />
                    </Link>
                  </div>
                  <div className="details">
                    <h4 className="my-0 title">
                      <Link to={`/${blog.node.fields.slug}`}>
                        {blog.node.frontmatter.title}
                      </Link>
                    </h4>
                    <p>{blog.node.excerpt}</p>
                    <ul className="list-inline meta mb-0 mt-2">
                      <li className="list-inline-item">
                        {blog.node.frontmatter.date}
                      </li>
                      <li className="list-inline-item">
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
    <section>
      <div className={`blog_area section-padding-100-50`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="row justify-content-center">
                {renderBlogData()}
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="blog-right-sidebar">
              <div className="blog-right-sidebar-top mb-50">
              <h3 className="leave-comment-text">Recent Posts</h3>
              <div className="recent-all">
                {recentBlogData.filter(blog => blog.node.frontmatter.title !== "").map(blog => {
                  return (<div className="recent-img-text mb-15" key={`${blog.node.id}_recent`}>
                    <div className="recent-img">
                      <Link to={blog.node.fields.slug}><Img
                        fluid={
                          blog.node.frontmatter.hero_image.childImageSharp.fluid
                        }
                        alt={blog.node.frontmatter.title}
                      /></Link>
                    </div>
                    <div className="recent-text">
                      <h4><Link to={blog.node.fields.slug}>{blog.node.frontmatter.title}</Link></h4>
                    </div>
                  </div>)
                })}
              </div>
            </div>
                {tagsList.nodes
                  .filter(node => node.tags)
                  .map(node => {
                    return (
                      <div
                        className={`blog-right-sidebar-bottom`}
                        key={0}
                      >
                        <h3 className="leave-comment-text">Tags</h3>
                        <ul>
                          {node.tags.map(tag => {
                            return (
                              <li key={tag}>
                                <Link to={`/${tag}`.toLowerCase()}>
                                  {tag}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
