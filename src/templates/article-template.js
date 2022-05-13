import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import TableOfContents from "../components/TableOfContents.js"

const PostTemplate = ({ data, location }) => {
  let post = data.mdx

  return (
    <Layout location={location}>
      <div className="article-page">
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.lead}
          date={post.frontmatter.computerDate}
        />
        {
          post?.tableOfContents?.items && (
            <TableOfContents items={post.tableOfContents.items}>
              <h3>hey</h3>
            </TableOfContents>
          )
        }
        <article className="article">
          <h1 itemprop="headline">{post.frontmatter.title}</h1>
          <p
            className="lead"
            itemprop="introduction"
          >
            {post.frontmatter.lead}
          </p>
          <MDXRenderer headings={post.headings}>
            {post.body}
          </MDXRenderer>
        </article>
      </div>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: {eq: $id}) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        category
        computerDate: date(formatString: "YYYY-MM-DD")
        humanDate: date(formatString: "DD MMMM YYYY")
        title
        lead
      }
      tableOfContents
    }
  }
`