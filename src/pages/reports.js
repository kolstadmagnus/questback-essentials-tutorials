import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"

const ReportsPage = ({ data, location }) => {
  let posts = data.allMdx.nodes
  const pageTitle = "Reports"

  return (
    <Layout location={location}>
      <Seo title={pageTitle} />
      <section className="article-list">
        <h1 itemProp="headline">{pageTitle}</h1>
        <ul>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <li key={post.fields.slug} itemProp="post">
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default ReportsPage

export const pageQuery = graphql`
  query ReportsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {fileAbsolutePath: {regex: "/posts/reports/" }}  
      sort: { fields: [frontmatter___date], order: DESC },
      ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`