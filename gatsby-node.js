const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve(`./src/templates/article-template.js`)

  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            frontmatter {
              title
              computerDate: date(formatString: "YYYY-MM-DD")
              humanDate: date(formatString: "D. MMMM YYYY", locale: "nb")
            }
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your articles`,
      result.errors
    )
    return
  }

  const articles = result.data.allMdx.nodes

  if (articles.length > 0) {
    articles.forEach((article, index) => {
      [index + 1].id

      createPage({
        path: article.fields.slug,
        component: articleTemplate,
        context: {
          id: article.id
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

 
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
    }

    type Author {
      name: String
      summary: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description:  String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
