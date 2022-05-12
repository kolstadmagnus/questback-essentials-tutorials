import React from 'react'
import { Link } from 'gatsby'

const RelatedArticle = ({ title, source }) => {
  return (
    <p className="cross-reference">Related article: <Link to={source}>{title}</Link></p>
  )
}

export default RelatedArticle