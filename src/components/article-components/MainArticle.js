import React from 'react'
import { Link } from 'gatsby'

const MainArticle = ({ title, source }) => {
  return (
    <p className="cross-reference">Main article: <Link to={source}>{title}</Link></p>
  )
}

export default MainArticle