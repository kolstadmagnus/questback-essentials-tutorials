import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"

const NotFoundPage = ({ location }) => {
let pageTitle = "Ikke funnet (404)"

  return (
    <Layout location={location}>
      <Seo title={pageTitle} />
      <article className="article">
        <h1 itemprop="headline">{pageTitle}</h1>
        <p className="lead">Beklager det.</p>
      </article>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`