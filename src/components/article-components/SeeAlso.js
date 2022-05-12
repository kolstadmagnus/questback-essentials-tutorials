import React from 'react'
import { Link } from 'gatsby'

const SeeAlso = ({ title, source }) => {
  return (
    <p className="cross-reference">See also: <Link to={source}>{title}</Link></p>
  )
}

export default SeeAlso