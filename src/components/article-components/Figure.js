import * as React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Figure = ({ source, type, caption }) => {
  return (
    <figure className={type}>
      <GatsbyImage image={getImage(source)} alt={caption} className="image-container" />
      <figcaption>
        <span itemprop="caption">{caption}</span>
      </figcaption>
    </figure>
  )
}

export default Figure