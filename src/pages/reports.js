import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"

const ReportsPage = ({ data, location }) => {
  let articles = data.allMdx.nodes
  let pageTitle = "Reports"

  return (
    <Layout location={location}>
      <Seo title={pageTitle} />
      <section className="article-list">
        <h1 itemProp="headline">{pageTitle}</h1>
        <ul>
          {articles.map(article => {
            const title = article.frontmatter.title || article.fields.slug
            return (
              <li key={article.fields.slug} itemProp="article">
                <Link to={article.fields.slug} itemProp="url">
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
      filter: { frontmatter: { category: { eq: "reports" }}}  
      sort: { fields: [frontmatter___date], order: DESC },
      ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          category
          title
        }
      }
    }
  }
`