import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import { Helmet } from "react-helmet"

const HomePage = ({ data, location }) => {
  let posts = data.allMdx.nodes
  const pageTitle = "Questback Essentials tutorials"

  return (
    <Layout location={location}>
      <Seo /> {/* don't set a `title` for the SEO component to process, since I'm setting the title directly through the Helmet component below, anyway */}
      <Helmet
        title={pageTitle}
        titleTemplate={pageTitle}
      /> {/* override default SEO-titling scheme (remove "• Magnus Kolstad" from title) */}
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

export default HomePage

export const pageQuery = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC },
      ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          computerDate: date(formatString: "YYYY-MM-DD")
          humanDate: date(formatString: "D. MMMM YYYY", locale: "nb")
          title
        }
      }
    }
  }
`